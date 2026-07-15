import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import siteMetadata from '@/metadata.json'

export const Route = createFileRoute('/')({
  head: () => {
    const meta = siteMetadata['/']
    return {
      meta: [
        { title: meta.title },
        { name: 'description', content: meta.description },
        { property: 'og:title', content: meta.title },
        { property: 'og:description', content: meta.description },
        { property: 'og:type', content: 'website' },
      ],
    }
  },
  component: HomePage,
})

// ─── SVG Icons (Streamline Neon, violet #8B5CF6 + cyan #22D3EE) ──────────────

function IconConstellation({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" className={className}>
      <path stroke="#22D3EE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M12.723 15.29c-.889 1.487-1.892 3.426-2.723 5.711-.926 2.546-1.638 5.093-2.135 7.093"/>
      <path stroke="#22D3EE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M10.208 34.39c1.413.957 3.224 2.077 5.292 3.11 2.293 1.147 4.691 1.978 6.616 2.542"/>
      <path stroke="#22D3EE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M28.817 38.16c1.535-1.679 3.553-4.084 5.683-7.16 2.216-3.2 3.826-6.16 4.889-8.338"/>
      <path stroke="#22D3EE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M37.434 17.185C34.747 15.926 30.874 14.33 27 13.5c-3.173-.68-5.936-1.052-8.007-1.255"/>
      <path stroke="#22D3EE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M41 15c0-7-1-12-1-12"/>
      <path stroke="#8B5CF6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M3 32a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/>
      <path stroke="#8B5CF6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M11 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/>
      <path stroke="#8B5CF6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M37 19a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/>
      <path stroke="#8B5CF6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M22 41a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/>
    </svg>
  )
}

function IconHistory({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={className}>
      <path stroke="#22D3EE" strokeWidth="1.5"
        d="M1 12c0 2.917 1.16 5.715 3.222 7.778 1.826 1.826 4.228 2.944 6.778 3.176M1 8c2.5-2.75 5-7 11-7 2.917 0 5.715 1.16 7.778 3.222C21.604 6.048 22.722 8.449 22.955 11"/>
      <path stroke="#22D3EE" strokeWidth="1.5" d="M1 4v4h4"/>
      <path stroke="#22D3EE" strokeWidth="1.5" d="M12 5v7h1"/>
      <path stroke="#8B5CF6" strokeWidth="1.5"
        d="m19.622 14.294-.594-1.27h-2.22l-.594 1.271-.662.383-1.398-.12-1.11 1.922.804 1.151v.764l-.804 1.151 1.11 1.923 1.399-.121.662.382.594 1.271h2.22l.595-1.27.663-.384 1.397.121 1.11-1.923-.803-1.149v-.768l.803-1.149-1.11-1.922-1.397.12z"/>
      <path stroke="#8B5CF6" strokeWidth="1.5" d="M17.919 17.012v2"/>
    </svg>
  )
}

function IconDatabase({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" className={className}>
      <path stroke="#22D3EE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M43 24.205C43 28.51 34.493 32 24 32S5 28.51 5 24.205"/>
      <path stroke="#22D3EE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M5.5 11S5 16 5 24s.5 13 .5 13c0 4.418 8.283 8 18.5 8s18.5-3.582 18.5-8c0 0 .5-5 .5-13s-.5-13-.5-13"/>
      <path stroke="#8B5CF6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M5.5 11C5.5 6.582 13.783 3 24 3s18.5 3.582 18.5 8"/>
      <path stroke="#8B5CF6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M42.5 11c0 4.418-8.283 8-18.5 8S5.5 15.418 5.5 11"/>
    </svg>
  )
}

function IconSearch({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" className={className}>
      <path stroke="#8B5CF6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M10 21.5a11.5 11.5 0 1 0 23 0 11.5 11.5 0 1 0-23 0"/>
      <path stroke="#8B5CF6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M27.394 31.378c.342.407.678.813 1.012 1.216 1 1.206 1.984 2.393 3.078 3.565 1.081 1.158 2.718 1.301 3.863.206.16-.153.332-.32.514-.503.182-.183.35-.354.503-.514 1.095-1.145.951-2.781-.206-3.863-1.172-1.094-2.359-2.078-3.565-3.078-.403-.334-.808-.67-1.216-1.012-.977 1.635-2.348 3.006-3.983 3.983Z"/>
      <path stroke="#22D3EE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M15 3s-4.115 0-8.266.272C4.867 3.394 3.394 4.867 3.272 6.733 3 10.885 3 15 3 15"/>
      <path stroke="#22D3EE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M33 3s4.115 0 8.266.272c1.867.122 3.339 1.595 3.462 3.461C45 10.885 45 15 45 15"/>
      <path stroke="#22D3EE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M33 45s4.115 0 8.266-.272c1.867-.122 3.339-1.594 3.462-3.461C45 37.115 45 33 45 33"/>
      <path stroke="#22D3EE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M15 45s-4.115 0-8.266-.272c-1.867-.122-3.339-1.594-3.462-3.461C3 37.115 3 33 3 33"/>
    </svg>
  )
}

function IconFlash({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" className={className}>
      <path stroke="#8B5CF6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
        d="M4.009.5 1.541 5.81a.5.5 0 0 0-.038.24.5.5 0 0 0 .09.228.5.5 0 0 0 .196.163.5.5 0 0 0 .257.06h2.81l-2.193 7 9.67-8.14a.5.5 0 0 0 .155-.254.5.5 0 0 0-.026-.29.5.5 0 0 0-.198-.228A.5.5 0 0 0 12.06 5H9.097L11.29.5H4.009Z"/>
    </svg>
  )
}

function IconShield({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" className={className}>
      <path stroke="#22D3EE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
        d="M12 1H2a1 1 0 0 0-1 1v2.675C1 8.452 3.417 11.806 7 13c3.583-1.194 6-4.548 6-8.325V2a1 1 0 0 0-1-1Z"/>
      <path stroke="#8B5CF6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
        d="M7 6.54a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
      <path stroke="#8B5CF6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
        d="M7 9.04v-2.5"/>
    </svg>
  )
}

// ─── Table cell indicators ────────────────────────────────────────────────────

function CheckMark({ color = '#22D3EE' }: { color?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 mx-auto" aria-label="Yes">
      <path stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 10l4 4 8-8"/>
    </svg>
  )
}
function CrossMark() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 mx-auto opacity-30" aria-label="No">
      <path stroke="#E6E6E6" strokeWidth="2" strokeLinecap="round" d="M6 6l8 8M14 6l-8 8"/>
    </svg>
  )
}
function PartialMark() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 mx-auto" aria-label="Partial">
      <path stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" d="M5 10h10" opacity="0.6"/>
    </svg>
  )
}

// ─── Hero canvas (animated graph) ─────────────────────────────────────────────

function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number

    interface GNode {
      x: number; y: number; vx: number; vy: number
      r: number; color: string; pulse: number; pulseDir: number
    }
    let nodes: GNode[] = []

    function init() {
      const W = canvas!.offsetWidth || 1200
      const H = canvas!.offsetHeight || 700
      canvas!.width = W
      canvas!.height = H
      nodes = Array.from({ length: 32 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 2.5 + 1.5,
        color:
          Math.random() < 0.12 ? '#8B5CF6'
          : Math.random() < 0.18 ? '#22D3EE'
          : '#1c2030',
        pulse: Math.random(),
        pulseDir: Math.random() > 0.5 ? 1 : -1,
      }))
    }

    function draw() {
      const W = canvas!.width, H = canvas!.height
      ctx!.clearRect(0, 0, W, H)

      // Edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 200) {
            const opacity = (1 - dist / 200) * 0.2
            ctx!.beginPath()
            ctx!.moveTo(nodes[i].x, nodes[i].y)
            ctx!.lineTo(nodes[j].x, nodes[j].y)
            ctx!.strokeStyle = `rgba(139,92,246,${opacity})`
            ctx!.lineWidth = 0.6
            ctx!.stroke()
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) { n.vx *= -1; n.x = Math.max(0, Math.min(W, n.x)) }
        if (n.y < 0 || n.y > H) { n.vy *= -1; n.y = Math.max(0, Math.min(H, n.y)) }
        n.pulse += 0.007 * n.pulseDir
        if (n.pulse > 1 || n.pulse < 0) n.pulseDir *= -1

        const isAccent = n.color === '#8B5CF6' || n.color === '#22D3EE'
        if (isAccent) {
          const gr = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * (5 + n.pulse * 3))
          gr.addColorStop(0, n.color + '55')
          gr.addColorStop(1, 'transparent')
          ctx!.beginPath()
          ctx!.arc(n.x, n.y, n.r * (5 + n.pulse * 3), 0, Math.PI * 2)
          ctx!.fillStyle = gr
          ctx!.fill()
        }

        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx!.fillStyle = isAccent ? n.color : `rgba(36,42,58,${0.5 + n.pulse * 0.4})`
        ctx!.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    init()
    draw()
    const onResize = () => init()
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.65 }}
      aria-hidden="true"
    />
  )
}

// ─── FAQ accordion item ───────────────────────────────────────────────────────

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b" style={{ borderColor: 'hsl(220 16% 20%)' }}>
      <button
        className="w-full flex justify-between items-center py-5 text-left gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm md:text-base font-medium text-om-text group-hover:text-om-violet transition-colors">
          {question}
        </span>
        <span
          className="text-om-text-muted text-xl flex-shrink-0 transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'none' }}
          aria-hidden="true"
        >+</span>
      </button>
      {open && (
        <p className="pb-5 text-sm text-om-text-muted leading-relaxed pr-10">{answer}</p>
      )}
    </div>
  )
}

// ─── Copy button ──────────────────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  function handle() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => console.log('clipboard write failed'))
  }
  return (
    <button
      onClick={handle}
      className="text-xs font-mono px-2.5 py-1 rounded border transition-all"
      style={{
        borderColor: copied ? '#22D3EE' : 'hsl(220 16% 20%)',
        color: copied ? '#22D3EE' : 'hsl(215 12% 50%)',
      }}
      title="Copy to clipboard"
    >
      {copied ? 'copied!' : 'copy'}
    </button>
  )
}

// ─── GitHub icon ──────────────────────────────────────────────────────────────

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
    </svg>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

function HomePage() {
  const installCmdA = 'claude plugin marketplace add josefkrajkar/cc-orchestra'
  const installCmdB = 'claude plugin install orchestra-memory@orchestra'

  const features = [
    {
      icon: <IconConstellation className="w-10 h-10" />,
      title: 'Cross-project graph',
      body: 'Facts save as observations on canonical nodes, connected by typed edges. The graph persists across every Claude Code session and project in one local SQLite store.',
    },
    {
      icon: <IconHistory className="w-10 h-10" />,
      title: 'Temporal validity',
      body: 'Every fact records when it became valid. Stale facts are explicitly invalidated or superseded by a newer one—no silent auto-expiry, and history stays inspectable.',
    },
    {
      icon: <IconSearch className="w-10 h-10" />,
      title: 'Full-text search',
      body: 'SQLite FTS5 with BM25 ranking retrieves exactly the facts Claude needs, with optional one-hop graph expansion to surface linked context.',
    },
    {
      icon: <IconFlash className="w-10 h-10" />,
      title: 'Auto-injection',
      body: 'SessionStart and PostCompact hooks inject the most relevant facts automatically—no manual command, zero configuration.',
    },
    {
      icon: <IconShield className="w-10 h-10" />,
      title: 'Private scoping',
      body: 'Facts scope to global, project, or private. The project ID is derived automatically from your working directory—nothing to register or configure.',
    },
    {
      icon: <IconDatabase className="w-10 h-10" />,
      title: 'Local-only storage',
      body: 'One SQLite file at ~/.claude/orchestra-memory/graph.db, with daily rotating backups (last 7 days kept). No embeddings, no API calls, no telemetry.',
    },
  ]

  const steps = [
    {
      n: '01',
      title: 'Install',
      body: 'Install the plugin from the Claude Code marketplace. Hooks and the bundled MCP server activate automatically—no init step, no configuration.',
    },
    {
      n: '02',
      title: 'Write',
      body: 'Just tell Claude what to remember. It calls memory_save (or the wisdom_add wrapper) itself to distill the fact and store it as an observation.',
    },
    {
      n: '03',
      title: 'Connect',
      body: 'Claude uses memory_link to connect facts with typed, free-form relations. Saving a correction can supersede the outdated fact instead of duplicating it.',
    },
    {
      n: '04',
      title: 'Query',
      body: 'A SessionStart hook injects the most relevant facts when a session begins. Claude can also call memory_search (FTS5/BM25) or memory_traverse on demand.',
    },
  ]

  const comparisons: { feature: string; om: boolean; plain: boolean | 'partial'; cloud: boolean | 'partial' }[] = [
    { feature: 'Cross-project memory',   om: true, plain: false,      cloud: true       },
    { feature: 'Temporal validity',       om: true, plain: false,      cloud: false      },
    { feature: 'Full-text search',        om: true, plain: false,      cloud: 'partial'  },
    { feature: 'Local / offline',         om: true, plain: true,       cloud: false      },
    { feature: 'Zero API keys',           om: true, plain: true,       cloud: false      },
    { feature: 'Graph relationships',     om: true, plain: false,      cloud: false      },
    { feature: 'MIT license',             om: true, plain: true,       cloud: false      },
  ]

  const faqs = [
    {
      question: 'What does orchestra-memory store?',
      answer:
        'Anything you tell Claude to remember: architectural decisions, recurring bugs, coding conventions, API quirks. Each fact is saved as an observation on a canonical node in a local SQLite graph, with a confidence tier and a timestamp.',
    },
    {
      question: 'Where is my data stored?',
      answer:
        'In a single SQLite file at ~/.claude/orchestra-memory/graph.db, shared across every project on your machine. It never leaves your machine—no sync service, no cloud, no telemetry of any kind.',
    },
    {
      question: 'Does it require an API key or cloud account?',
      answer:
        'No. orchestra-memory is pure local tooling: a Claude Code plugin bundling an MCP server (9 tools) backed by SQLite. There are no external services, no network calls, and no accounts to set up.',
    },
    {
      question: 'How does temporal validity work?',
      answer:
        'Each fact records a valid_from timestamp. Stale facts aren\'t auto-expired—Claude explicitly invalidates them or supersedes them with a newer fact, and invalidated facts drop out of search and context injection automatically.',
    },
    {
      question: 'What is the Orchestra suite?',
      answer:
        'Orchestra is an open-source pair of Claude Code plugins living in one monorepo: orchestra-memory (this plugin, cross-project graph memory) and orchestra (multi-agent orchestration with 8 agents—conductor, architect, executor, craftsman, sentinel, scout, scholar, and verifier—plus 10 slash commands and 7 auto-activating skills). Each runs standalone, and orchestra automatically uses orchestra-memory for cross-session wisdom when both are installed.',
    },
  ]

  const suite = [
    { name: 'orchestra-memory', desc: 'Cross-project graph memory', active: true },
    { name: 'orchestra',        desc: 'Multi-agent orchestration · 8 agents', active: true },
  ]

  return (
    <div className="bg-om-bg text-om-text font-sans min-h-screen overflow-x-hidden">

      {/* ── Nav ───────────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 border-b border-om-border"
        style={{ backgroundColor: 'hsl(221 20% 7% / 0.88)', backdropFilter: 'blur(14px)' }}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span
              className="w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0"
              style={{ borderColor: '#8B5CF6' }}
            >
              <span className="w-2.5 h-2.5 rounded-full block" style={{ backgroundColor: '#8B5CF6' }} />
            </span>
            <span className="font-mono text-sm font-medium text-om-text">orchestra-memory</span>
          </div>
          {/* Links */}
          <div className="hidden md:flex items-center gap-6 text-xs text-om-text-muted">
            {['Features', 'How it works', 'Comparison', 'Install', 'FAQ'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-om-text transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          {/* GitHub */}
          <a
            href="https://github.com/josefkrajkar/cc-orchestra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded border transition-all"
            style={{ borderColor: 'hsl(220 16% 20%)', color: 'hsl(215 12% 55%)' }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = '#8B5CF6'
              ;(e.currentTarget as HTMLElement).style.color = '#8B5CF6'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = 'hsl(220 16% 20%)'
              ;(e.currentTarget as HTMLElement).style.color = 'hsl(215 12% 55%)'
            }}
          >
            <GithubIcon className="w-3.5 h-3.5" />
            GitHub
          </a>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight: '92vh' }}
      >
        <HeroCanvas />
        {/* bottom gradient fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(221 20% 7%))' }}
        />
        {/* top gradient fade */}
        <div
          className="absolute inset-x-0 top-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to top, transparent, hsl(221 20% 7% / 0.6))' }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono text-om-text-muted mb-10"
            style={{ borderColor: 'hsl(220 16% 22%)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#22D3EE' }} />
            MIT · local-only · Claude Code plugin · Node ≥ 22.16
          </div>
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[1.05] text-om-text mb-6">
            Claude Code<br />
            that <span style={{ color: '#8B5CF6' }}>remembers.</span>
          </h1>
          <p className="text-base md:text-xl text-om-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Cross-project graph memory for Claude Code. Full-text search, temporal validity,
            private scoping. No embeddings, no API calls, no cloud.
          </p>
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#install"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-mono text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#8B5CF6' }}
            >
              <span style={{ color: '#c4b5fd' }}>$</span>{' claude plugin install orchestra-memory@orchestra'}
            </a>
            <a
              href="https://github.com/josefkrajkar/cc-orchestra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-mono text-sm font-medium border transition-all"
              style={{ borderColor: 'hsl(220 16% 22%)', color: 'hsl(215 12% 60%)' }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = '#8B5CF6'
                ;(e.currentTarget as HTMLElement).style.color = '#8B5CF6'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'hsl(220 16% 22%)'
                ;(e.currentTarget as HTMLElement).style.color = 'hsl(215 12% 60%)'
              }}
            >
              <GithubIcon className="w-4 h-4" />
              View source
            </a>
          </div>
        </div>
      </section>

      {/* ── Problem ───────────────────────────────────────────────────────────── */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: 'hsl(215 12% 50%)' }}>
            The problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-om-text mb-4">Context evaporates.</h2>
          <p className="text-om-text-muted max-w-lg mx-auto text-sm md:text-base">
            Claude Code is stateless across sessions. Every new conversation starts from zero—even if
            you've explained the same architectural constraints a dozen times.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              label: 'Repeated context',
              body: 'Pasting the same system prompt across sessions is error-prone, wastes tokens, and still misses project-specific nuance.',
            },
            {
              label: 'Lost decisions',
              body: 'Architectural choices made last month aren\'t visible to Claude in a new session. The rationale disappears with the chat.',
            },
            {
              label: 'No cross-project knowledge',
              body: 'Lessons learned in one codebase—API quirks, team conventions, known gotchas—never transfer to sibling projects.',
            },
          ].map((p) => (
            <div
              key={p.label}
              className="p-6 rounded-xl border"
              style={{ borderColor: 'hsl(220 16% 20%)', backgroundColor: 'hsl(220 16% 11%)' }}
            >
              <div className="w-0.5 h-7 rounded-full mb-5" style={{ backgroundColor: '#8B5CF6' }} />
              <p className="text-sm font-semibold text-om-text mb-2">{p.label}</p>
              <p className="text-sm text-om-text-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────────────────── */}
      <section
        id="features"
        className="py-24 border-t"
        style={{ borderColor: 'hsl(220 16% 13%)' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: 'hsl(215 12% 50%)' }}>
              Features
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-om-text">
              Designed for persistent context.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-xl border transition-all duration-300 group"
                style={{ borderColor: 'hsl(220 16% 20%)', backgroundColor: 'hsl(220 16% 11%)' }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'hsl(258 89% 66% / 0.5)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'hsl(220 16% 20%)'
                }}
              >
                <div className="w-12 h-12 mb-5">{f.icon}</div>
                <h3 className="font-semibold text-om-text mb-2 text-sm">{f.title}</h3>
                <p className="text-xs text-om-text-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="py-24 border-t"
        style={{ borderColor: 'hsl(220 16% 13%)' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: 'hsl(215 12% 50%)' }}>
              How it works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-om-text">
              Four steps to persistent memory.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                {/* Connector */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 left-full z-10 pointer-events-none"
                    style={{
                      width: 'calc(100% - 2.5rem)',
                      height: '1px',
                      background: 'linear-gradient(to right, #8B5CF6, transparent)',
                      marginLeft: '1.25rem',
                    }}
                  />
                )}
                <div
                  className="p-6 rounded-xl border h-full"
                  style={{ borderColor: 'hsl(220 16% 20%)', backgroundColor: 'hsl(220 16% 11%)' }}
                >
                  <span className="font-mono text-xs font-medium block mb-3" style={{ color: '#8B5CF6' }}>
                    {s.n}
                  </span>
                  <h3 className="font-semibold text-om-text mb-2 text-sm">{s.title}</h3>
                  <p className="text-xs text-om-text-muted leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison ────────────────────────────────────────────────────────── */}
      <section
        id="comparison"
        className="py-24 border-t"
        style={{ borderColor: 'hsl(220 16% 13%)' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: 'hsl(215 12% 50%)' }}>
              Comparison
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-om-text">How it stacks up.</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'hsl(220 16% 20%)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: 'hsl(220 16% 18%)' }}>
                  <th className="text-left py-4 px-6 text-om-text-muted font-normal text-xs">Feature</th>
                  <th className="py-4 px-6 font-semibold text-xs" style={{ color: '#8B5CF6' }}>
                    orchestra-memory
                  </th>
                  <th className="py-4 px-6 text-om-text-muted font-normal text-xs">Raw CLAUDE.md</th>
                  <th className="py-4 px-6 text-om-text-muted font-normal text-xs">Cloud vector DB</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{ backgroundColor: i % 2 === 0 ? 'hsl(220 16% 11% / 0.5)' : 'transparent' }}
                  >
                    <td className="py-3.5 px-6 text-xs text-om-text">{row.feature}</td>
                    <td className="py-3.5 px-6 text-center">
                      <CheckMark color="#22D3EE" />
                    </td>
                    <td className="py-3.5 px-6 text-center">
                      {row.plain === true ? (
                        <CheckMark color="#8B5CF6" />
                      ) : row.plain === 'partial' ? (
                        <PartialMark />
                      ) : (
                        <CrossMark />
                      )}
                    </td>
                    <td className="py-3.5 px-6 text-center">
                      {row.cloud === true ? (
                        <CheckMark color="#8B5CF6" />
                      ) : row.cloud === 'partial' ? (
                        <PartialMark />
                      ) : (
                        <CrossMark />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-om-text-muted mt-4 text-center">
            ✓ = full support &nbsp;·&nbsp; – = partial &nbsp;·&nbsp; ✗ = not available
          </p>
        </div>
      </section>

      {/* ── Orchestra suite ───────────────────────────────────────────────────── */}
      <section
        className="py-24 border-t"
        style={{ borderColor: 'hsl(220 16% 13%)' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: 'hsl(215 12% 50%)' }}>
              Ecosystem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-om-text mb-4">
              Part of the Orchestra suite.
            </h2>
            <p className="text-om-text-muted text-sm max-w-md mx-auto">
              Two open-source Claude Code plugins designed to work together. Run either one standalone,
              or install both for automatic cross-session wisdom.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {suite.map((p) => (
              <div
                key={p.name}
                className="p-5 rounded-xl border relative transition-all"
                style={{
                  borderColor: p.active ? '#8B5CF6' : 'hsl(220 16% 20%)',
                  backgroundColor: p.active ? 'hsl(258 89% 66% / 0.07)' : 'hsl(220 16% 11%)',
                }}
              >
                {p.name === 'orchestra-memory' && (
                  <span
                    className="absolute top-3 right-3 text-[10px] font-mono px-1.5 py-0.5 rounded"
                    style={{ backgroundColor: '#8B5CF6', color: '#fff' }}
                  >
                    this plugin
                  </span>
                )}
                <p className="font-mono text-xs font-medium text-om-text mb-1">{p.name}</p>
                <p className="text-xs text-om-text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Install ───────────────────────────────────────────────────────────── */}
      <section
        id="install"
        className="py-24 border-t"
        style={{ borderColor: 'hsl(220 16% 13%)' }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: 'hsl(215 12% 50%)' }}>
              Install
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-om-text mb-4">
              A few commands to get started.
            </h2>
            <p className="text-om-text-muted text-sm">
              No accounts, no configuration files, no API keys.
            </p>
          </div>

          {/* Code block A */}
          <div
            className="rounded-xl border mb-4 overflow-hidden"
            style={{ borderColor: 'hsl(220 16% 20%)' }}
          >
            <div
              className="flex items-center justify-between px-4 py-2.5 border-b"
              style={{ borderColor: 'hsl(220 16% 18%)', backgroundColor: 'hsl(220 16% 9%)' }}
            >
              <span className="text-xs font-mono text-om-text-muted">1. Register the marketplace</span>
              <CopyButton text={installCmdA} />
            </div>
            <pre
              className="p-5 overflow-x-auto text-sm font-mono leading-relaxed"
              style={{ backgroundColor: 'hsl(220 16% 8%)' }}
            >
              <span style={{ color: 'hsl(215 12% 50%)' }}>$ </span>
              <span className="text-om-text">{installCmdA}</span>
            </pre>
          </div>

          {/* Code block B */}
          <div
            className="rounded-xl border mb-6 overflow-hidden"
            style={{ borderColor: 'hsl(220 16% 20%)' }}
          >
            <div
              className="flex items-center justify-between px-4 py-2.5 border-b"
              style={{ borderColor: 'hsl(220 16% 18%)', backgroundColor: 'hsl(220 16% 9%)' }}
            >
              <span className="text-xs font-mono text-om-text-muted">2. Install &amp; verify</span>
              <CopyButton text={installCmdB} />
            </div>
            <pre
              className="p-5 overflow-x-auto text-sm font-mono leading-relaxed"
              style={{ backgroundColor: 'hsl(220 16% 8%)' }}
            >
              <span style={{ color: 'hsl(215 12% 50%)' }}>$ </span>
              <span className="text-om-text">{installCmdB}</span>
              {'\n'}
              <span style={{ color: 'hsl(215 12% 50%)' }}>$ </span>
              <span className="text-om-text">claude plugin list</span>
            </pre>
          </div>

          {/* Node requirement note */}
          <div
            className="flex items-start gap-3 px-4 py-3.5 rounded-lg border"
            style={{ borderColor: 'hsl(189 95% 53% / 0.25)', backgroundColor: 'hsl(189 95% 53% / 0.05)' }}
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#22D3EE' }}>
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
              <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M10 9v5M10 7v.5"/>
            </svg>
            <p className="text-xs text-om-text-muted leading-relaxed">
              <span className="font-mono text-om-text">Node.js ≥ 22.16</span> is required. orchestra-memory uses the
              built-in{' '}
              <span className="font-mono" style={{ color: '#22D3EE' }}>node:sqlite</span> module,
              which requires Node 22.16 or later — no extra database driver needed. After install, nothing else is
              required: hooks and the bundled MCP server activate automatically.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      <section
        id="faq"
        className="py-24 border-t"
        style={{ borderColor: 'hsl(220 16% 13%)' }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: 'hsl(215 12% 50%)' }}>
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-om-text">Common questions.</h2>
          </div>
          <div>
            {faqs.map((f) => (
              <FAQItem key={f.question} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────────── */}
      <footer
        className="border-t py-12"
        style={{ borderColor: 'hsl(220 16% 13%)' }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <span
              className="w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0"
              style={{ borderColor: '#8B5CF6' }}
            >
              <span className="w-2 h-2 rounded-full block" style={{ backgroundColor: '#8B5CF6' }} />
            </span>
            <span className="font-mono text-sm text-om-text">orchestra-memory</span>
            <span
              className="text-[10px] font-mono px-1.5 py-0.5 rounded border"
              style={{ borderColor: 'hsl(189 95% 53% / 0.3)', color: '#22D3EE', backgroundColor: 'hsl(189 95% 53% / 0.07)' }}
            >
              local-only
            </span>
          </div>
          {/* Links */}
          <div className="flex items-center gap-5 text-xs text-om-text-muted">
            <a
              href="https://github.com/josefkrajkar/cc-orchestra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-om-text transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
            </a>
            <a
              href="https://github.com/josefkrajkar/cc-orchestra#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-om-text transition-colors"
            >
              Docs
            </a>
            <a
              href="https://github.com/josefkrajkar/cc-orchestra/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-om-text transition-colors"
            >
              Issues
            </a>
          </div>
          {/* License */}
          <p className="text-xs text-om-text-muted font-mono">MIT License · No telemetry</p>
        </div>
      </footer>

    </div>
  )
}
