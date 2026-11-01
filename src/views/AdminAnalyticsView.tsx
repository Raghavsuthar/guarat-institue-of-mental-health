import React, { useState, useEffect } from 'react';
import {
  Lock,
  Unlock,
  Eye,
  Globe,
  Share2,
  FileCheck,
  Download,
  ShieldCheck,
  RefreshCw,
  TrendingUp,
  Smartphone,
  QrCode,
  Volume2,
  HelpCircle,
  CheckCircle2,
  KeyRound,
  AlertCircle
} from 'lucide-react';
import { Language, AggregateAnalyticsSummary } from '../types';
import { fetchAggregateAnalytics, clearLocalAnalytics } from '../utils/analytics';
import { updatePageSEO } from '../utils/seo';

interface AdminAnalyticsViewProps {
  currentLang: Language;
}

export const AdminAnalyticsView: React.FC<AdminAnalyticsViewProps> = ({ currentLang }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<AggregateAnalyticsSummary | null>(null);
  const [trendDays, setTrendDays] = useState<30 | 90>(30);
  const [copiedEnv, setCopiedEnv] = useState(false);

  // Set noindex, nofollow for admin page
  useEffect(() => {
    updatePageSEO({
      title: 'Owner Portal & Analytics',
      description: 'Private, privacy-first aggregate analytics dashboard for Gujarat Institute of Mental Health.',
      path: 'admin',
      lang: currentLang,
      noIndex: true,
    });

  }, [currentLang]);

  const loadDashboard = async (pwd: string) => {
    setLoading(true);
    setErrorMsg('');
    try {
      const data = await fetchAggregateAnalytics(pwd);
      setSummary(data);
      setIsAuthenticated(true);
    } catch (err: any) {
      setIsAuthenticated(false);
      setErrorMsg(err.message || 'Authentication failed. Please check the admin password.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;
    loadDashboard(password.trim());
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  const handleExportJSON = () => {
    if (!summary) return;
    const blob = new Blob([JSON.stringify(summary, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `-analytics-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyEnvGuide = () => {
    navigator.clipboard.writeText('ADMIN_PASSWORD=<generate-a-unique-secret-of-at-least-32-characters>');
    setCopiedEnv(true);
    setTimeout(() => setCopiedEnv(false), 2500);
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-12 p-6 sm:p-8 bg-white rounded-2xl border border-stone-200 shadow-xl">
        <div className="flex items-center justify-center w-14 h-14 bg-teal-50 text-teal-700 rounded-2xl mx-auto mb-4 border border-teal-100">
          <KeyRound className="w-7 h-7" />
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-center text-stone-900 tracking-tight">
          Owner Analytics Portal
        </h1>
        <p className="text-xs sm:text-sm text-center text-stone-500 mt-1.5 mb-6">
          Restricted to Gujarat Institute of Mental Health. Displays aggregate anonymous community reach metrics.
        </p>

        {errorMsg && (
          <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-xs text-red-700">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="admin-password-input" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Admin Access Key
            </label>
            <input
              id="admin-password-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password..."
              className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none text-sm transition"
              required
            />
            <p className="text-[11px] text-stone-400 mt-1.5">
              Requires a server-side ADMIN_PASSWORD secret of at least 32 characters.</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-teal-700 hover:bg-teal-800 disabled:opacity-50 text-white rounded-xl font-semibold text-sm transition cursor-pointer flex items-center justify-center gap-2 shadow-xs min-h-[44px]"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
            <span>Access Analytics Dashboard</span>
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-stone-100 flex items-center gap-2 text-stone-400 text-xs justify-center">
          <ShieldCheck className="w-4 h-4 text-teal-600" />
          <span>Zero visitor cookies · No IP tracking · 100% Private</span>
        </div>
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <RefreshCw className="w-8 h-8 animate-spin text-teal-600 mb-3" />
        <p className="text-stone-500 text-sm">Loading verified metrics...</p>
      </div>
    );
  }

  const langTotal = summary.byLang.en + summary.byLang.hi + summary.byLang.gu || 1;
  const enPct = Math.round((summary.byLang.en / langTotal) * 100);
  const hiPct = Math.round((summary.byLang.hi / langTotal) * 100);
  const guPct = Math.round((summary.byLang.gu / langTotal) * 100);

  // Daily Trend values for SVG chart
  const trendData = summary.dailyTrend || [];
  const maxViews = Math.max(...trendData.map((d) => d.views), 10);

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      {/* Top Header Bar */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-teal-50 text-teal-700 border border-teal-200">
              <TrendingUp className="w-5 h-5" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Gujarat Institute of Mental Health — Outreach Analytics
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Privacy-first community reach statistics across English, हिन्दी & ગુજરાતી. Last updated:{' '}
            <span className="font-mono text-stone-600">{new Date(summary.lastUpdated).toLocaleDateString()}</span>
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => loadDashboard(password)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold border border-stone-200 transition cursor-pointer min-h-[40px]"
            title="Refresh statistics"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>

          <button
            onClick={handleExportJSON}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-semibold border border-teal-200 transition cursor-pointer min-h-[40px]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Report</span>
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs font-medium border border-stone-200 transition cursor-pointer min-h-[40px]"
          >
            <Unlock className="w-3.5 h-3.5" />
            <span>Lock</span>
          </button>
        </div>
      </div>

      {/* KPI Overview Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Total Views */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between text-stone-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Portal Views</span>
            <Eye className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-mono">
            {summary.totalViews.toLocaleString()}
          </div>
          <p className="text-[11px] text-stone-400 mt-1">Anonymous aggregate visits</p>
        </div>

        {/* Screener Self-Checks */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between text-stone-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Screeners Completed</span>
            <FileCheck className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-mono">
            {(summary.events.screenerCompleted || 0).toLocaleString()}
          </div>
          <p className="text-[11px] text-stone-400 mt-1">Self-awareness assessments</p>
        </div>

        {/* Shareable Cards Generated / Shared */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between text-stone-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Cards Shared</span>
            <Share2 className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-mono">
            {((summary.events.mythCardShared || 0) + (summary.events.cardShared || 0)).toLocaleString()}
          </div>
          <p className="text-[11px] text-stone-400 mt-1">WhatsApp & Instagram outreach</p>
        </div>

        {/* QR & PWA Installs */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between text-stone-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">QR Landings / PWA</span>
            <QrCode className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-mono">
            {(summary.events.qrLanded || 0).toLocaleString()}{' '}
            <span className="text-xs font-normal text-stone-400">/ {summary.events.pwaInstalled || 0} installs</span>
          </div>
          <p className="text-[11px] text-stone-400 mt-1">Clinic posters & offline app</p>
        </div>
      </div>

      {/* Language Breakdown & Device Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Language Breakdown */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-4 h-4 text-teal-700" />
            <h2 className="text-base font-bold text-stone-900">Language Engagement</h2>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-medium text-stone-700 mb-1">
                <span>English</span>
                <span className="font-mono">{summary.byLang.en} views ({enPct}%)</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
                <div className="bg-teal-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${enPct}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium text-stone-700 mb-1">
                <span>हिन्दी (Hindi)</span>
                <span className="font-mono">{summary.byLang.hi} views ({hiPct}%)</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
                <div className="bg-amber-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${hiPct}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium text-stone-700 mb-1">
                <span>ગુજરાતી (Gujarati)</span>
                <span className="font-mono">{summary.byLang.gu} views ({guPct}%)</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
                <div className="bg-emerald-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${guPct}%` }} />
              </div>
            </div>
          </div>

          <p className="text-[11px] text-stone-400 mt-5 pt-3 border-t border-stone-100">
            Trilingual accessibility ensures education reaches vernacular populations in Gujarat and Northern India.
          </p>
        </div>

        {/* Top Referrer Channels */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <Share2 className="w-4 h-4 text-teal-700" />
            <h2 className="text-base font-bold text-stone-900">Traffic Referrers</h2>
          </div>

          <div className="space-y-3">
            {summary.topReferrers.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs p-2 rounded-lg bg-stone-50 border border-stone-100">
                <span className="font-medium text-stone-800 truncate max-w-[200px] sm:max-w-xs">{item.domain}</span>
                <span className="font-mono font-bold text-teal-800 bg-white px-2 py-0.5 rounded border border-stone-200">
                  {item.count} views
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
            <span>Devices:</span>
            <span className="font-mono">
              📱 {summary.deviceBreakdown.mobile || 0} Mobile · 💻 {summary.deviceBreakdown.desktop || 0} Desktop · 📟 {summary.deviceBreakdown.tablet || 0} Tablet
            </span>
          </div>
        </div>
      </div>

      {/* 30-Day Trend Chart */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-teal-700" />
              <h2 className="text-base font-bold text-stone-900">Visit & Engagement Trend (Last 30 Days)</h2>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">Continuous tracking of daily unique views and key actions.</p>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-teal-600 inline-block" />
              <span className="text-stone-600">Page Views</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="text-stone-600">Action Events</span>
            </div>
          </div>
        </div>

        {/* SVG Chart */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[600px] h-48 flex items-end gap-2 pt-6 pb-2 border-b border-stone-200">
            {trendData.map((day, idx) => {
              const viewHeight = Math.max(8, Math.round((day.views / maxViews) * 140));
              const eventHeight = Math.max(4, Math.round((day.events / maxViews) * 140));
              const shortDate = day.date.slice(5);

              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative h-full justify-end">
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center z-10 pointer-events-none">
                    <div className="bg-stone-900 text-white text-[10px] py-1 px-2 rounded shadow-md whitespace-nowrap">
                      <div className="font-bold">{day.date}</div>
                      <div>Views: {day.views}</div>
                      <div>Events: {day.events}</div>
                    </div>
                  </div>

                  <div className="w-full flex items-end justify-center gap-0.5 h-full">
                    <div
                      className="w-1/2 bg-teal-600/90 group-hover:bg-teal-600 rounded-t-xs transition-all"
                      style={{ height: `${viewHeight}px` }}
                    />
                    <div
                      className="w-1/2 bg-amber-500/90 group-hover:bg-amber-500 rounded-t-xs transition-all"
                      style={{ height: `${eventHeight}px` }}
                    />
                  </div>
                  {idx % 5 === 0 && (
                    <span className="text-[10px] text-stone-400 font-mono mt-1">
                      {shortDate}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top 10 Most Visited Pages */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
        <h2 className="text-base font-bold text-stone-900 mb-4">Top 10 Viewed Educational Resources</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-stone-200 text-stone-500 uppercase tracking-wider">
                <th className="py-2.5 px-3 font-semibold">Rank</th>
                <th className="py-2.5 px-3 font-semibold">Page / Topic</th>
                <th className="py-2.5 px-3 font-semibold text-right">Views</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {summary.topPages.map((item, idx) => (
                <tr key={idx} className="hover:bg-stone-50 transition">
                  <td className="py-2.5 px-3 text-stone-400 font-mono">#{idx + 1}</td>
                  <td className="py-2.5 px-3 font-medium text-stone-800">/{item.path}</td>
                  <td className="py-2.5 px-3 text-right font-mono font-bold text-teal-800">
                    {item.count.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Administrator Configuration & Privacy Assurance */}
      <div className="bg-stone-900 text-stone-200 p-6 sm:p-8 rounded-2xl border border-stone-800 shadow-lg space-y-4">
        <div className="flex items-center gap-2 text-teal-400">
          <ShieldCheck className="w-5 h-5" />
          <h2 className="font-bold text-white text-base">Security & Privacy Architecture</h2>
        </div>

        <p className="text-xs text-stone-300 leading-relaxed">
          This portal enforces strict medical ethics for public health. No cookies are stored on visitors' devices, no IP addresses are retained, and no personal data is collected or shared with third parties. All metrics represent anonymous aggregate counters.
        </p>

        <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-stone-400">Configuring Admin Password in Environment:</span>
            <button
              onClick={copyEnvGuide}
              className="text-xs text-teal-400 hover:text-teal-300 flex items-center gap-1 cursor-pointer"
            >
              {copiedEnv ? <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> : null}
              <span>{copiedEnv ? 'Copied!' : 'Copy Variable'}</span>
            </button>
          </div>
          <code className="text-xs font-mono text-teal-300 block bg-stone-900 p-2.5 rounded border border-stone-800 overflow-x-auto">
            {'ADMIN_PASSWORD=&lt;generate-a-unique-secret-of-at-least-32-characters&gt;'}
          </code>
          <p className="text-[11px] text-stone-400 mt-2">
            Add <code className="text-stone-300 font-mono">ADMIN_PASSWORD</code> to your host settings (Cloud Run, Vercel, Netlify, or <code className="text-stone-300 font-mono">.env</code>) to set a custom secret password.
          </p>
        </div>
      </div>
    </div>
  );
};


