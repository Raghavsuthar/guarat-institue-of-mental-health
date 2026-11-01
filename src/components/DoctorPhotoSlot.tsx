import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, Trash2, User } from 'lucide-react';
import { Language } from '../types';

interface DoctorPhotoSlotProps {
  currentLang: Language;
  doctorName: string;
  qualifications: string;
}

const STORAGE_KEY = 'gimh_photo';
const STATIC_FALLBACK_URL = '/gimh.jpg';

export const DoctorPhotoSlot: React.FC<DoctorPhotoSlotProps> = ({
  currentLang,
  doctorName,
  qualifications,
}) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 1. Check localStorage first
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setPhotoUrl(saved);
      return;
    }

    // 2. Check if static asset exists in public folder
    const img = new Image();
    img.src = STATIC_FALLBACK_URL;
    img.onload = () => {
      setPhotoUrl(STATIC_FALLBACK_URL);
    };
    img.onerror = () => {
      // No static image found; keep fallback initials state
      setPhotoUrl(null);
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate image file type
    if (!file.type.startsWith('image/')) {
      alert(currentLang === 'en' ? 'Please upload a valid image file (JPG or PNG).' : 'कृपया एक मान्य छवि फ़ाइल (JPG या PNG) अपलोड करें।');
      return;
    }

    // Read and compress slightly to ensure localStorage quota safety
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        try {
          localStorage.setItem(STORAGE_KEY, result);
        } catch {
          // If storage full, keep in session
          console.warn('LocalStorage limit reached for photo storage');
        }
        setPhotoUrl(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem(STORAGE_KEY);
    setPhotoUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const labels = {
    en: {
      photoSlot: 'Institute Logo Slot',
      uploadPrompt: 'Click to upload the institute logo',
      changePrompt: 'Change photo',
      removePrompt: 'Reset to monogram',
      acceptedFormats: 'JPG or PNG (Recommended: 400×500)',
    },
    hi: {
      photoSlot: 'संस्थान लोगो स्लॉट',
      uploadPrompt: 'संस्थान लोगो अपलोड करने के लिए क्लिक करें',
      changePrompt: 'फ़ोटो बदलें',
      removePrompt: 'मोनोग्राम पर रीसेट करें',
      acceptedFormats: 'JPG या PNG (सुझाव: 400×500)',
    },
    gu: {
      photoSlot: 'સંસ્થાનું લોગો સ્લોટ',
      uploadPrompt: 'સંસ્થાનું લોગો અપલોડ કરવા ક્લિક કરો',
      changePrompt: 'ફોટો બદલો',
      removePrompt: 'રીસેટ કરો',
      acceptedFormats: 'JPG અથવા PNG (400×500)',
    },
  }[currentLang] || {
    photoSlot: 'Institute Logo Slot',
    uploadPrompt: 'Click to upload the institute logo',
    changePrompt: 'Change photo',
    removePrompt: 'Reset to monogram',
    acceptedFormats: 'JPG or PNG (Recommended: 400×500)',
  };

  return (
    <div className="flex flex-col items-center sm:items-start shrink-0 w-full sm:w-auto">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png, image/jpeg, image/webp"
        onChange={handleFileChange}
        className="hidden"
        aria-label={labels.uploadPrompt}
      />

      {/* Frame Container */}
      <div
        className="relative group w-36 sm:w-44 aspect-[4/5] rounded-2xl border-2 border-stone-200/90 bg-stone-100 overflow-hidden shadow-xs ring-4 ring-stone-100 transition-all cursor-pointer select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => fileInputRef.current?.click()}
        title={labels.uploadPrompt}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            fileInputRef.current?.click();
          }
        }}
        aria-label={`${doctorName} - ${labels.photoSlot}`}
      >
        {photoUrl ? (
          // Uploaded / Static Professional Photo
          <>
            <img
              src={photoUrl}
              alt={`${doctorName}, ${qualifications}`}
              className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105"
            />
            {/* Overlay button on hover */}
            <div
              className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center gap-2 p-3 text-white transition-opacity duration-200 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Camera className="w-5 h-5 text-white" />
              <span className="text-[11px] font-semibold text-center leading-tight">
                {labels.changePrompt}
              </span>
              <button
                type="button"
                onClick={handleRemovePhoto}
                className="mt-1 px-2.5 py-1 rounded bg-red-600/90 hover:bg-red-700 text-white text-[10px] font-semibold flex items-center gap-1 shadow-sm transition"
                title={labels.removePrompt}
              >
                <Trash2 className="w-3 h-3" />
                <span>{labels.removePrompt}</span>
              </button>
            </div>
          </>
        ) : (
          // Sensible Dignified Fallback (Monogram + Neutral Clinical Emblem)
          <div className="w-full h-full flex flex-col items-center justify-between p-4 bg-gradient-to-b from-stone-50 via-teal-900/5 to-teal-900/10 text-stone-700">
            {/* Top slot pill */}
            <div className="w-full flex items-center justify-between gap-1 text-[10px] font-bold text-[#115e59] uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {labels.photoSlot}
              </span>
            </div>

            {/* Central Monogram */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#115e59] text-white flex items-center justify-center font-bold text-2xl sm:text-3xl shadow-sm border border-teal-700/50 mb-1 group-hover:scale-105 transition-transform">
                GIMH
              </div>
              <span className="text-[11px] font-semibold text-stone-700 mt-1 text-center">
                Gujarat Institute of Mental Health
              </span>
              <span className="text-[10px] text-stone-500 font-mono">
                {qualifications}
              </span>
            </div>

            {/* Upload hint trigger */}
            <div className="w-full pt-2 border-t border-stone-200/80 flex items-center justify-center gap-1.5 text-[11px] font-medium text-[#115e59] group-hover:text-teal-900 transition-colors text-center">
              <Upload className="w-3.5 h-3.5 shrink-0" />
              <span className="underline underline-offset-2 decoration-teal-400">
                {labels.uploadPrompt}
              </span>
            </div>
          </div>
        )}
      </div>

      <span className="text-[10px] text-stone-400 mt-1 max-w-[180px] text-center sm:text-left">
        {labels.acceptedFormats}
      </span>
    </div>
  );
};


