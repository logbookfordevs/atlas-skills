export function Arrow({ down = false }: { down?: boolean }) {
  const path = down ? 'M10 3v13m-5-5 5 5 5-5' : 'M5 15 15 5M5 5h10v10';
  return <svg className="arrow" viewBox="0 0 20 20" aria-hidden="true"><path d={path} /></svg>;
}

export function Moon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.3A8.5 8.5 0 0 1 9.7 4a8.5 8.5 0 1 0 10.3 10.3Z" /></svg>;
}
