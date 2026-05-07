import { useState, useRef, useEffect } from 'react';

const DEFAULT_TRAINING = {
  about: "I'm Md. Safwan, a software engineer specializing in React, Next.js, Node.js, and TypeScript. I build scalable, performant web applications with clean design and practical functionality.",
  skills: "React, Next.js, Node.js, TypeScript, Tailwind CSS, MongoDB, REST APIs, GraphQL, Figma",
  projects: "E-Commerce Platform, Task Management Dashboard, Component Library — all available in my portfolio",
  experience: "3+ years of experience as a frontend engineer. Worked on enterprise-level apps and freelance projects.",
  services: "Web development, UI/UX design, API integration. Open to freelance and contract work.",
  contact: "Available via portfolio contact form. Located in Dhaka, Bangladesh. Works globally.",
  availability: "Available for freelance. Responds within 24 hours.",
  extra: "Free 30-min consultation call available. Passionate about clean code and modern design.",
};

function buildSystemPrompt(data) {
  return `You are an AI assistant on Md. Safwan's portfolio website. Help potential clients learn about Safwan. Be friendly, professional, and concise.

ABOUT: ${data.about}
SKILLS: ${data.skills}
PROJECTS: ${data.projects}
EXPERIENCE: ${data.experience}
SERVICES: ${data.services}
CONTACT: ${data.contact}
AVAILABILITY: ${data.availability}
ADDITIONAL INFO: ${data.extra}

Keep responses to 2-4 sentences unless more detail is requested. If unsure, say "You can reach Safwan directly through the contact form."`;
}

// ─── Training Panel ──────────────────────────────────────────────
function TrainingPanel({ onClose, onSave }) {
  const [form, setForm] = useState(() => {
    try { return { ...DEFAULT_TRAINING, ...JSON.parse(localStorage.getItem('safwan_training') || '{}') }; }
    catch { return { ...DEFAULT_TRAINING }; }
  });
  const [saved, setSaved] = useState(false);

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSave = () => {
    localStorage.setItem('safwan_training', JSON.stringify(form));
    onSave(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const fields = [
    { key: 'about',        label: 'About Me',                  rows: 3, placeholder: 'Describe yourself...' },
    { key: 'skills',       label: 'Skills & Technologies',     rows: 2, placeholder: 'React, Node.js, TypeScript...' },
    { key: 'projects',     label: 'Projects',                  rows: 3, placeholder: 'Project name: brief description...' },
    { key: 'experience',   label: 'Experience',                rows: 2, placeholder: 'Role at Company, X years...' },
    { key: 'services',     label: 'Services & Pricing',        rows: 2, placeholder: 'Services offered, starting from $...' },
    { key: 'contact',      label: 'Contact Info',              rows: 1, placeholder: 'email, LinkedIn, social...' },
    { key: 'availability', label: 'Availability',              rows: 1, placeholder: 'Available for freelance. Responds in...' },
    { key: 'extra',        label: 'Anything else for clients', rows: 2, placeholder: 'Free consultation, timezone, etc.' },
  ];

  return (
    <div style={styles.panel}>
      <div style={{ ...styles.panelHeader, background: 'rgba(245,158,11,0.06)', borderBottom: '1px solid rgba(245,158,11,0.15)' }}>
        <div style={{ ...styles.headerIcon, background: 'rgba(245,158,11,0.12)' }}>🎓</div>
        <div>
          <p style={styles.headerTitle}>Train Your AI</p>
          <p style={{ ...styles.headerSub, color: '#f59e0b' }}>Private — only you can edit this</p>
        </div>
        <button style={styles.iconBtn} onClick={onClose}>✕</button>
      </div>

      <div style={styles.scrollBody}>
        {fields.map(f => (
          <div key={f.key} style={styles.fieldGroup}>
            <label style={styles.fieldLabel}>{f.label}</label>
            <textarea
              rows={f.rows}
              value={form[f.key]}
              onChange={set(f.key)}
              placeholder={f.placeholder}
              style={styles.textarea}
            />
          </div>
        ))}

        <button style={styles.saveBtn} onClick={handleSave}>💾 Save Training Data</button>
        {saved && <p style={styles.savedMsg}>✓ Saved! AI will use this next conversation.</p>}
      </div>
    </div>
  );
}

// ─── Chat Panel ───────────────────────────────────────────────────
function ChatPanel({ onClose, trainingData }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const historyRef = useRef([]);

  useEffect(() => {
    if (messages.length === 0) {
      const welcome = { role: 'assistant', content: "Hey there! 👋 I'm Safwan's AI assistant. Ask me about his skills, projects, experience, or how to work with him!" };
      setMessages([welcome]);
      historyRef.current = [welcome];
    }
  }, []);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const send = async (text) => {
    if (!text.trim() || loading) return;
    setInput('');
    const userMsg = { role: 'user', content: text };
    historyRef.current = [...historyRef.current, userMsg];
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY?.trim();

      if (!apiKey || apiKey === 'This is Safwan') {
        throw new Error('Missing Anthropic API key. Set VITE_ANTHROPIC_API_KEY in .env.local and restart the dev server.');
      }

      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: buildSystemPrompt(trainingData),
          messages: historyRef.current.slice(-12),
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Anthropic API request failed (${res.status}): ${errorText}`);
        console.log('KEY:', import.meta.env.VITE_ANTHROPIC_API_KEY);

      }

      const data = await res.json();
      const reply = data.content?.[0]?.text || "Sorry, I couldn't respond. Please try again.";
      const botMsg = { role: 'assistant', content: reply };
      historyRef.current = [...historyRef.current, botMsg];
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
        },
      ]);
    }
    setLoading(false);
  };

  const quickPills = ['Skills', 'Projects', 'Services', 'Contact'];
  const pillPrompts = {
    Skills: "What are Safwan's main skills?",
    Projects: "Tell me about Safwan's projects",
    Services: "What services does Safwan offer?",
    Contact: "How can I contact Safwan?",
  };

  return (
    <div style={styles.panel}>
      {/* Header */}
      <div style={styles.panelHeader}>
        <div style={styles.avatarWrap}>
          <div style={styles.avatar}>MS</div>
          <div style={styles.onlineDot} />
        </div>
        <div>
          <p style={styles.headerTitle}>Safwan's AI Assistant</p>
          <p style={styles.headerSub}>● Online — Ask me anything</p>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
          <button style={styles.iconBtn} onClick={() => { setMessages([]); historyRef.current = []; }} title="Clear">↺</button>
          <button style={styles.iconBtn} onClick={onClose}>✕</button>
        </div>
      </div>

      {/* Messages */}
      <div style={styles.scrollBody}>
        {messages.map((m, i) => (
          <div key={i} style={{ ...styles.msgRow, flexDirection: m.role === 'user' ? 'row-reverse' : 'row' }}>
            <div style={{ ...styles.msgAvatar, ...(m.role === 'user' ? styles.userAvatar : {}) }}>
              {m.role === 'user' ? 'You' : 'AI'}
            </div>
            <div>
              <div style={{ ...styles.bubble, ...(m.role === 'user' ? styles.userBubble : {}) }}>
                {m.content}
              </div>
              {i === 0 && (
                <div style={styles.pillRow}>
                  {quickPills.map(p => (
                    <button key={p} style={styles.pill} onClick={() => send(pillPrompts[p])}>{p}</button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div style={styles.msgRow}>
            <div style={styles.msgAvatar}>AI</div>
            <div style={styles.typingBubble}>
              <span style={{ ...styles.typingDot, animationDelay: '0s' }} />
              <span style={{ ...styles.typingDot, animationDelay: '0.2s' }} />
              <span style={{ ...styles.typingDot, animationDelay: '0.4s' }} />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={styles.inputArea}>
        <textarea
          style={styles.input}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input); } }}
          placeholder="Ask about Safwan..."
          rows={1}
        />
        <button style={{ ...styles.sendBtn, opacity: loading ? 0.4 : 1 }} onClick={() => send(input)} disabled={loading}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────
export default function AIChatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [trainOpen, setTrainOpen] = useState(false);
  const [trainingData, setTrainingData] = useState(() => {
    try { return { ...DEFAULT_TRAINING, ...JSON.parse(localStorage.getItem('safwan_training') || '{}') }; }
    catch { return { ...DEFAULT_TRAINING }; }
  });

  const openChat  = () => { setChatOpen(true);  setTrainOpen(false); };
  const openTrain = () => { setTrainOpen(true);  setChatOpen(false); };

  return (
    <>
      <style>{`
        @keyframes pulseRing {
          0%   { box-shadow: 0 0 0 0   rgba(0,212,170,0.45); }
          70%  { box-shadow: 0 0 0 18px rgba(0,212,170,0);   }
          100% { box-shadow: 0 0 0 0   rgba(0,212,170,0);    }
        }
        @keyframes typingBounce {
          0%,60%,100% { transform: translateY(0);   opacity: 0.35; }
          30%         { transform: translateY(-6px); opacity: 1;    }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: scale(0.92) translateY(20px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>

      {/* Training Panel */}
      {trainOpen && (
        <div style={styles.panelWrap}>
          <TrainingPanel
            onClose={() => setTrainOpen(false)}
            onSave={(data) => { setTrainingData(data); setChatOpen(false); }}
          />
        </div>
      )}

      {/* Chat Panel */}
      {chatOpen && (
        <div style={styles.panelWrap}>
          <ChatPanel onClose={() => setChatOpen(false)} trainingData={trainingData} />
        </div>
      )}

      {/* FAB Buttons */}
      <div style={styles.fabCluster}>
        {/* Train button */}
        <button style={styles.fabTrain} onClick={openTrain} title="Train AI">🎓</button>
        {/* Chat button */}
        <button style={styles.fabChat} onClick={openChat} title="Open Chat">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </>
  );
}

// ─── Styles ───────────────────────────────────────────────────────
const styles = {
  panelWrap: {
    position: 'fixed', bottom: 100, right: 28, zIndex: 9000,
    animation: 'slideUp 0.3s cubic-bezier(.34,1.56,.64,1)',
  },
  panel: {
    width: 360,
    maxHeight: 540,
    background: '#0d1117',
    border: '1px solid rgba(0,212,170,0.18)',
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    boxShadow: '0 32px 64px rgba(0,0,0,0.55)',
  },
  panelHeader: {
    padding: '14px 18px',
    background: 'rgba(0,212,170,0.05)',
    borderBottom: '1px solid rgba(0,212,170,0.12)',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
  },
  headerIcon: {
    width: 34, height: 34, borderRadius: 8,
    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
  },
  headerTitle: { fontSize: 14, fontWeight: 600, color: '#f1f5f9', margin: 0 },
  headerSub:   { fontSize: 11, color: '#00d4aa', margin: 0 },
  iconBtn: {
    marginLeft: 'auto', width: 28, height: 28,
    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 7, color: '#64748b', cursor: 'pointer', fontSize: 13,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  avatarWrap: { position: 'relative', width: 36, height: 36, flexShrink: 0 },
  avatar: {
    width: 36, height: 36, borderRadius: '50%',
    background: 'linear-gradient(135deg,rgba(0,212,170,0.2),rgba(0,153,255,0.15))',
    border: '2px solid rgba(0,212,170,0.4)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontWeight: 700, fontSize: 12, color: '#00d4aa',
  },
  onlineDot: {
    position: 'absolute', bottom: 1, right: 1,
    width: 9, height: 9, background: '#00d4aa',
    borderRadius: '50%', border: '2px solid #0d1117',
  },
  scrollBody: {
    flex: 1, overflowY: 'auto', padding: '14px 16px',
    display: 'flex', flexDirection: 'column', gap: 10,
    scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,212,170,0.2) transparent',
  },
  msgRow:   { display: 'flex', gap: 8, alignItems: 'flex-end' },
  msgAvatar: {
    width: 26, height: 26, borderRadius: '50%',
    background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 10, fontWeight: 700, color: '#00d4aa', flexShrink: 0,
  },
  userAvatar: {
    background: 'rgba(0,153,255,0.1)', border: '1px solid rgba(0,153,255,0.2)', color: '#0099ff',
  },
  bubble: {
    maxWidth: 240, padding: '9px 13px', borderRadius: '13px 13px 13px 3px',
    fontSize: 13, lineHeight: 1.6, color: '#e2e8f0',
    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)',
  },
  userBubble: {
    background: 'linear-gradient(135deg,rgba(0,212,170,0.14),rgba(0,153,255,0.1))',
    border: '1px solid rgba(0,212,170,0.18)',
    borderRadius: '13px 13px 3px 13px',
  },
  pillRow: { display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 6 },
  pill: {
    padding: '3px 10px', background: 'rgba(0,212,170,0.08)',
    border: '1px solid rgba(0,212,170,0.2)', borderRadius: 20,
    fontSize: 11, color: '#00d4aa', cursor: 'pointer',
  },
  typingBubble: {
    display: 'flex', gap: 4, alignItems: 'center', padding: '10px 14px',
    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '13px 13px 13px 3px',
  },
  typingDot: {
    display: 'inline-block', width: 6, height: 6, background: '#00d4aa',
    borderRadius: '50%', animation: 'typingBounce 1.2s infinite',
  },
  inputArea: {
    padding: '10px 14px', borderTop: '1px solid rgba(255,255,255,0.06)',
    display: 'flex', gap: 8, alignItems: 'flex-end', flexShrink: 0,
  },
  input: {
    flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 11, padding: '9px 13px', color: '#e2e8f0', fontSize: 13,
    resize: 'none', outline: 'none', fontFamily: 'inherit', lineHeight: 1.5,
    maxHeight: 80,
  },
  sendBtn: {
    width: 36, height: 36, background: 'linear-gradient(135deg,#00d4aa,#0099ff)',
    border: 'none', borderRadius: 9, cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  fabCluster: {
    position: 'fixed', bottom: 28, right: 28,
    display: 'flex', gap: 10, alignItems: 'center', zIndex: 9001,
  },
  fabTrain: {
    width: 44, height: 44, background: 'rgba(245,158,11,0.12)',
    border: '1px solid rgba(245,158,11,0.3)', borderRadius: '50%',
    cursor: 'pointer', fontSize: 18, display: 'flex',
    alignItems: 'center', justifyContent: 'center',
  },
  fabChat: {
    width: 54, height: 54,
    background: 'linear-gradient(135deg,#00d4aa,#0099ff)',
    border: 'none', borderRadius: '50%', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    animation: 'pulseRing 2.5s infinite',
  },
  // Training fields
  fieldGroup: { display: 'flex', flexDirection: 'column', gap: 5 },
  fieldLabel: { fontSize: 11, color: '#94a3b8', letterSpacing: 1, textTransform: 'uppercase' },
  textarea: {
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 9, padding: '9px 11px', color: '#e2e8f0', fontSize: 12.5,
    fontFamily: 'inherit', lineHeight: 1.6, resize: 'vertical', outline: 'none',
  },
  saveBtn: {
    width: '100%', padding: 11, marginTop: 4,
    background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)',
    borderRadius: 9, color: '#f59e0b', fontSize: 13, fontWeight: 600, cursor: 'pointer',
    fontFamily: 'inherit',
  },
  savedMsg: { textAlign: 'center', fontSize: 12, color: '#00d4aa', margin: 0 },
};
