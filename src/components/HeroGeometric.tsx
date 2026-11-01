import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const vertexShader = `
attribute vec2 aPosition;
varying vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

// Same look as the pasted version: diagonal gradient + simplex noise +
// Bayer dither, corner fade to white, subtle vignette.
const fragmentShader = `
precision mediump float;
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
varying vec2 vUv;

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float bayerDither4x4(vec2 uv) {
    int x = int(mod(uv.x, 4.0));
    int y = int(mod(uv.y, 4.0));
    int m = x + y * 4;
    if (m == 0) return 0.0/16.0;
    if (m == 1) return 8.0/16.0;
    if (m == 2) return 2.0/16.0;
    if (m == 3) return 10.0/16.0;
    if (m == 4) return 12.0/16.0;
    if (m == 5) return 4.0/16.0;
    if (m == 6) return 14.0/16.0;
    if (m == 7) return 6.0/16.0;
    if (m == 8) return 3.0/16.0;
    if (m == 9) return 11.0/16.0;
    if (m == 10) return 1.0/16.0;
    if (m == 11) return 9.0/16.0;
    if (m == 12) return 15.0/16.0;
    if (m == 13) return 7.0/16.0;
    if (m == 14) return 13.0/16.0;
    return 5.0/16.0;
}

void main() {
    vec2 uv = vUv;
    vec2 coord = gl_FragCoord.xy;
    float noise = snoise(uv * 1.5 + vec2(uTime * 0.05, uTime * 0.03)) * 0.25;
    float diagonal = (uv.x + uv.y) * 0.5;
    float gradient = diagonal * 1.2 + noise;

    vec3 deepBlue = uColor1;
    vec3 paleBlue = uColor2;
    vec3 softBlue = mix(deepBlue, paleBlue, 0.33);
    vec3 lightBlue = mix(deepBlue, paleBlue, 0.66);

    vec3 color;
    if (gradient < 0.3) {
        color = deepBlue;
    } else if (gradient < 0.55) {
        color = softBlue;
    } else if (gradient < 0.8) {
        color = lightBlue;
    } else {
        color = paleBlue;
    }

    float dither = bayerDither4x4(coord);
    float threshold = fract(gradient * 4.0);

    if (gradient < 0.3 && threshold > dither * 0.5) {
        color = softBlue;
    } else if (gradient >= 0.3 && gradient < 0.55 && threshold > dither * 0.5) {
        color = lightBlue;
    } else if (gradient >= 0.55 && gradient < 0.8 && threshold > dither * 0.5) {
        color = paleBlue;
    }

    vec2 cornerDist = vec2(uv.x, uv.y);
    float fadeMask = smoothstep(0.0, 0.25, length(cornerDist));
    color = mix(vec3(1.0), color, fadeMask);

    float vignette = smoothstep(1.2, 0.3, length(uv - 0.5));
    color = mix(color, color * 0.95, (1.0 - vignette) * 0.3);

    gl_FragColor = vec4(color, 1.0);
}
`;

const FALLBACK_COLOR_1 = "#3B82F6";
const FALLBACK_COLOR_2 = "#F0F9FF";
const HEX_COLOR_REGEX = /^#?[0-9a-fA-F]{6}$/;

function sanitizeHexColor(value: string | undefined, fallback: string): string {
  if (!value) return fallback;
  const trimmed = value.trim();
  if (!HEX_COLOR_REGEX.test(trimmed)) return fallback;
  return trimmed.startsWith("#") ? trimmed : `#${trimmed}`;
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255,
  ];
}

function compileShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

interface HeroGeometricProps extends React.ComponentPropsWithoutRef<"div"> {
  title1?: string;
  title2?: string;
  description?: string;
  color1?: string;
  color2?: string;
  speed?: number;
}

export default function HeroGeometric({
  title1,
  title2,
  description,
  color1 = "#3B82F6",
  color2 = "#F0F9FF",
  speed = 1,
  className = "",
  style,
  children,
  ...props
}: HeroGeometricProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: true });
    if (!gl) return;

    const vs = compileShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vs || !fs) return;
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const loc = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "uTime");
    const uColor1 = gl.getUniformLocation(program, "uColor1");
    const uColor2 = gl.getUniformLocation(program, "uColor2");
    const [r1, g1, b1] = hexToRgb(sanitizeHexColor(color1, FALLBACK_COLOR_1));
    const [r2, g2, b2] = hexToRgb(sanitizeHexColor(color2, FALLBACK_COLOR_2));
    gl.uniform3f(uColor1, r1, g1, b1);
    gl.uniform3f(uColor2, r2, g2, b2);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const start = performance.now();

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    const render = (now: number) => {
      gl.uniform1f(uTime, ((now - start) / 1000) * speed);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (!reduceMotion) raf = requestAnimationFrame(render);
    };
    // Single static frame for reduced-motion, animated otherwise.
    render(start);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color1, color2, speed]);

  return (
    <div
      className={`relative w-full overflow-hidden bg-white text-black ${className}`}
      style={style}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      {children ? (
        <div className="relative z-10">{children}</div>
      ) : (
        (title1 || title2 || description) && (
          <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-6 py-12 md:py-20">
            <div className="flex w-full max-w-[1200px] flex-col items-center">
              <div className="mb-8 flex flex-col items-center gap-2 text-center md:mb-12 md:gap-4">
                {title1 && (
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                      className="pb-[0.08em] text-4xl leading-[0.96] font-bold tracking-tighter text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                      {title1}
                    </motion.h1>
                  </div>
                )}
                {title2 && (
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                      className="pb-[0.08em] text-4xl leading-[0.96] font-bold tracking-tighter text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                      {title2}
                    </motion.h1>
                  </div>
                )}
              </div>

              {description && (
                <div className="mb-8 max-w-[480px] text-center">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="text-lg leading-relaxed font-normal text-neutral-600 md:text-[1.35rem]"
                  >
                    {description}
                  </motion.p>
                </div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}
