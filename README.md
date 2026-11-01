# Gujarat Institute of Mental Health - Public Psychiatry Education Portal

An evidence-based, trilingual public psychiatry and mental health education platform authored and curated by **Gujarat Institute of Mental Health**. Available in **English**, **हिन्दी (Hindi)**, and **ગુજરાતી (Gujarati)**.

Designed to dismantle mental health stigma, explain clinical psychiatric conditions scientifically, provide compassionate psychoeducation, offer evidence-based self-screeners, and connect individuals directly to verified 24x7 crisis helplines across India (Tele-MANAS **14416** and Emergency **112**).

---

## 🌟 Key Features

- **Trilingual Accessibility**: Fully localized in English, Hindi (Devanagari), and Gujarati with seamless instant language switching and URL routing (`/en`, `/hi`, `/gu`).
- **Comprehensive Clinical Library**:
  - General Psychiatric Conditions (Depression, GAD, OCD, Bipolar, Schizophrenia, Panic Disorder, PTSD, etc.)
  - Child & Adolescent Psychiatry (ADHD, Autism Spectrum, Exam Anxiety, Conduct, Separation Anxiety, etc.)
  - Women's Mental Health (PMDD, Perinatal & Postpartum Depression, Menopausal Mood Syndromes, etc.)
  - Substance Use & Addiction Recovery (Alcohol, Nicotine, Cannabis, Opioids, Sedatives, Inhalants, etc.)
- **Evidence-Based Treatments**: Clear psychoeducation on Psychotherapy (CBT, ERP, DBT), Somatic/Neuromodulation interventions (ECT, rTMS), and Lifestyle Medicine.
- **Interactive Validated Screeners**: Interactive clinical screening tools (PHQ-9 for Depression, GAD-7 for Anxiety, AUDIT-C for Alcohol, ADHD ASRS v1.1, CAGE, etc.) with scoring guides and disclaimers.
- **Crisis Intervention**: Immediate emergency banner with one-tap dialing to Tele-MANAS (**14416**), Kiran (**1800-599-0019**), and emergency services (**112**).
- **Progressive Web App (PWA)**: Offline-first architecture with service worker caching, home screen install prompt, and native-like offline browsing.
- **Educational Q&A Assistant**: Powered by Google Gemini with strict ethical bounds, crisis detection short-circuiting, and offline fallback.
- **Community Outreach & QR Tool**: High-resolution print poster and share card generator with QR codes for clinic waiting rooms, colleges, and NGOs.

---

## 🚀 How to Push this Repository to GitHub

Follow these quick steps from your terminal or command prompt:

### Step 1: Initialize Git and Stage Files
```bash
# Initialize git repository (if not already initialized)
git init

# Check the files that will be added
git status

# Stage all files
git add .

# Create your initial commit
git commit -m "feat: initial commit of Gujarat Institute of Mental Health Psychiatry Education Portal"
```

### Step 2: Connect to your GitHub Repository
1. Go to [GitHub](https://github.com) and click **New Repository**.
2. Give your repository a name (for example, `psychiatry-education-portal` or `gujarat-institute-of-mental-health-mental-health`).
3. Leave "Initialize with a README" **unchecked** (since you already have one).
4. Run the following commands in your project terminal:

```bash
# Set default branch to main
git branch -M main

# Add your GitHub repository as remote origin (replace with your repo URL)
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git

# Push your code to GitHub
git push -u origin main
```

---

## 🌐 How to Make the Site Live (Hosting Options)

Choose the deployment method that best fits your workflow:

### Option 1: Vercel (Recommended — Easiest & Fastest)
1. Sign in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **"Add New..."** > **"Project"**.
3. Select your GitHub repository from the list.
4. Framework Preset will automatically detect **Vite**.
5. Under **Environment Variables**, configure the following server-side values for the API features:
   - `GEMINI_API_KEY`: Your Google Gemini API key (for the AI Q&A assistant).
   - `ADMIN_PASSWORD`: Server-only unique secret for the analytics dashboard. Generate at least 32 random characters; never prefix it with `VITE_` or expose it to client code. Without a valid secret, the admin API fails closed.
   - `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`: required server-side credentials for durable aggregate analytics and shared API rate limits. Analytics endpoints return a clear 503 response until these are configured.
   - `RATE_LIMIT_SALT`: optional server-side random salt for hashing transient rate-limit identifiers.
6. Click **Deploy**. Your site will be online with a custom HTTPS URL in under 60 seconds!
   - *Note:* The `api/` directory contains Vercel Functions for health, analytics, and educational Q&A. `vercel.json` excludes `/api/*` from the SPA fallback. Set all server-only variables in Vercel Project Settings; do not use `VITE_` prefixes for secrets.

### Option 2: Netlify
1. Sign in to [Netlify](https://netlify.com) using your GitHub account.
2. Click **"Add new site"** > **"Import an existing project"**.
3. Connect your GitHub repository.
4. Build settings are automatically detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy Site**.

### Option 3: GitHub Pages (100% Free on GitHub)
1. Push your repository to GitHub.
2. Go to your repository on GitHub: **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. A pre-configured workflow file (`.github/workflows/deploy-pages.yml`) is already included in this repository.
5. Trigger the workflow under the **Actions** tab, or uncomment the `push: branches: [main]` trigger in `.github/workflows/deploy-pages.yml`.
   - *Note:* The pre-configured `public/404.html` and SPA script in `index.html` ensure deep URLs like `/en/conditions/depression` route seamlessly without 404 errors.

### Option 4: Full-Stack Container (Cloud Run / Render / Railway / Docker)
If you want to run the full Express backend (`server.ts`) with containerized deployment:
```bash
# Build the Docker image
docker build -t psychedu-portal .

# Run the container locally or on any cloud host
docker run -p 3000:3000 -e GEMINI_API_KEY="your-api-key" psychedu-portal
```
Pre-configured configuration files:
- `Dockerfile`: Multi-stage, lightweight Alpine Node.js 22 container.
- `server.ts`: Express production server with API routing and static file delivery.
- The same Upstash Redis credentials are required for durable analytics and shared rate limits in this deployment too.

---

## 💻 Local Development

### Prerequisites
- Node.js 20+ or 22+
- npm (or yarn / pnpm / bun)

### Installation
```bash
# 1. Clone repository
git clone https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git
cd <YOUR-REPO-NAME>

# 2. Install dependencies
npm install

# 3. Create local environment file (optional)
cp .env.example .env
# Edit .env and supply your GEMINI_API_KEY if desired

# 4. Start local development server (runs on port 3000)
npm run dev
```
Open your browser at `http://localhost:3000`.

### Available Scripts
- `npm run dev`: Starts the Vite development server with API middlewares on `http://localhost:3000`.
- `npm run build`: Validates content integrity, generates `sitemap.xml`, builds the client SPA into `dist/`, and compiles `server.ts` into `dist/server.cjs`.
- `npm run start`: Runs the compiled production server (`node dist/server.cjs`).
- `npm run validate`: Runs the automated trilingual content validator across all conditions, treatments, and substances.
- `npm run sitemap`: Re-generates `public/sitemap.xml` with all static and dynamic multilingual routes.
- `npm run lint`: Runs TypeScript type-checking without emitting files.

---

## 🔒 Environment Variables

| Variable | Description | Required | Default |
| :--- | :--- | :--- | :--- |
| `GEMINI_API_KEY` | Google Gemini API key for the educational Q&A assistant | Optional | None (uses local glossary & FAQ fallback if omitted) |
| `ADMIN_PASSWORD` | Server-only unique secret (32+ characters) for the community analytics panel | Required to enable admin analytics | None (admin API returns 503 until configured) |
| `PORT` | HTTP port for the Node.js production server | Optional | `3000` |

---

### Admin/API security notes

- Configure `ADMIN_PASSWORD` only in the hosting provider's server-side environment/secrets settings. Use a unique randomly generated secret of at least 32 characters. Do not use `VITE_ADMIN_PASSWORD` or commit secrets to Git.
- Admin analytics accepts the secret only as an `Authorization: Bearer ...` header; query-string credentials are rejected to prevent leakage through URLs and logs.
- Public analytics and educational Q&A endpoints have request-size validation and per-process rate limits. For multi-instance/serverless hosting, also enable provider-level rate limiting/WAF because the built-in limiter is not shared between instances.
- Rotate any previously used admin key because the old fallback key was present in repository history. Removing it from current source does not erase it from past commits.

## 🛡️ Medical Disclaimer & Clinical Safety

This platform is strictly an **educational and psychoeducational resource**.
- It **does not** provide individual medical diagnosis, treatment planning, or prescriptions.
- Users are encouraged to consult a registered medical doctor or certified psychiatrist for personal medical concerns.
- Built-in emergency short-circuits display crisis hotline information (**Tele-MANAS 14416** / **112**) whenever self-harm or acute distress keywords are detected.

---

## 📄 License & Attribution

Authored and curated for public mental health awareness by **Gujarat Institute of Mental Health**.
Feel free to adapt, translate, or deploy for non-commercial community mental health literacy initiatives.

