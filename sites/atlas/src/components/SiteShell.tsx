import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router';
import { AtlasLink } from '@/components/AtlasLink';
import { Arrow, Moon } from '@/components/Icons';
import { pageMetadata, repository, skills, skillPath } from '@/data';

function Contents() {
  const location = useLocation();
  const showsOverview = location.pathname === '/';
  const showsReference = location.pathname.startsWith('/skills/');
  const [readingSection, setReadingSection] = useState('overview');
  const currentKind = showsOverview ? 'location' : 'page';
  let active = 'stack';
  if (showsOverview) active = readingSection;
  else if (showsReference) active = 'skills';

  useEffect(() => {
    if (!showsOverview) return;
    function update() {
      const collection = document.getElementById('skills');
      setReadingSection(collection && collection.getBoundingClientRect().top <= 160 ? 'skills' : 'overview');
    }
    update();
    document.addEventListener('scroll', update, { passive: true });
    return () => document.removeEventListener('scroll', update);
  }, [showsOverview, location.key]);

  const links = [
    { id: 'overview', label: 'Overview', to: '/#overview' },
    { id: 'skills', label: 'Skills', to: '/#skills' },
    { id: 'stack', label: 'The stack', to: '/stack/' },
  ];

  return <aside className="contents">
    <nav className="contents-nav" aria-label="Contents" data-active={active}>
      <span className="reading-mark" aria-hidden="true" />
      {links.map((link) => <AtlasLink key={link.id} to={link.to} aria-current={link.id === active ? currentKind : undefined}>{link.label}</AtlasLink>)}
    </nav>
    {showsReference && <nav className="reference-nav" aria-label="Skill reference">
      {skills.map((skill) => <AtlasLink key={skill.id} to={skillPath(skill.id)} aria-current={location.pathname.replace(/\/$/, '') === skillPath(skill.id).replace(/\/$/, '') ? 'page' : undefined}>{skill.name}</AtlasLink>)}
    </nav>}
  </aside>;
}

export function SiteShell() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  const [status, setStatus] = useState('');
  const location = useLocation();
  const previousPath = useRef(location.pathname);
  const main = useRef<HTMLElement>(null);
  const isDark = theme === 'dark';

  useLayoutEffect(() => {
    const page = pageMetadata(location.pathname);
    document.title = `${page.title} · Atlas`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
    if (previousPath.current !== location.pathname) {
      main.current?.focus({ preventScroll: true });
      previousPath.current = location.pathname;
    }
  }, [location.pathname]);

  function toggleTheme() {
    const appearance = isDark ? 'light' : 'dark';
    document.documentElement.dataset.theme = appearance;
    setTheme(appearance);
    try {
      localStorage.setItem('atlas-appearance', appearance);
    } catch {
      setStatus('Appearance changed. This browser cannot save your preference.');
    }
  }

  return <>
    <a className="skip" href="#main">Skip to content</a>
    <div className="site-shell">
      <header className="header">
        <AtlasLink className="wordmark" to="/" aria-label="Atlas overview">Atlas<span className="wordmark-family"> / Logbook for Devs</span></AtlasLink>
        <div className="header-actions">
          <a className="source-link" href={repository}>GitHub <Arrow /></a>
          <button className="theme-toggle" type="button" aria-label={isDark ? 'Switch to light appearance' : 'Switch to dark appearance'} aria-pressed={isDark} onClick={toggleTheme}><Moon /></button>
        </div>
      </header>
      <div className="reading-layout">
        <Contents />
        <main id="main" tabIndex={-1} ref={main}><Outlet /></main>
      </div>
      <footer className="footer">
        <div className="footer-brand">
          <img src="/assets/thelu.webp" width="44" height="44" alt="" loading="lazy" />
          <div><p>A tool from the <a href="https://logbookfordevs.com/">Logbook for Devs</a></p><p className="tagline">Charting the technical seas, one commit at a time.</p></div>
        </div>
        <a href={repository}>Source <Arrow /></a>
      </footer>
    </div>
    <p className="sr-only" role="status">{status}</p>
    <ScrollRestoration />
  </>;
}
