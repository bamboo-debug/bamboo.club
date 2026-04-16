import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container row-between row-wrap" style={{ gap: 16 }}>
        <span>Bamboo · Club de Innovación Texo</span>
        <div className="row-wrap gap-sm">
          <Link href="/modules" className="muted">Módulos</Link>
          <Link href="/exam" className="muted">Examen final</Link>
          <Link href="/blog" className="muted">Blog</Link>
          <Link href="/leaderboard" className="muted">Ranking</Link>
        </div>
      </div>
    </footer>
  );
}
