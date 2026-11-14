// מפת גבהים: קווי גובה שמחושבים בזמן הבנייה משדה גובה פשוט (סכום פסגות).
// הפלט הוא SVG סטטי, בלי JavaScript בצד הלקוח.

export type Peak = { x: number; y: number; h: number; r: number };

const W = 1200;
const H = 900;
const COLS = 150;
const ROWS = 112;

function field(peaks: Peak[], x: number, y: number) {
  let v = 0;
  for (const p of peaks) {
    const dx = (x - p.x) / p.r;
    const dy = (y - p.y) / (p.r * 0.86);
    v += p.h * Math.exp(-(dx * dx + dy * dy));
  }
  // גליות עדינה כדי שהקווים לא יהיו אליפסות מושלמות
  v += 0.035 * Math.sin(x / 83 + y / 61) + 0.03 * Math.cos(x / 47 - y / 109);
  return v;
}

function contourPath(grid: number[][], level: number) {
  const sx = W / COLS;
  const sy = H / ROWS;
  const out: string[] = [];
  const lerp = (a: number, b: number) => (level - a) / (b - a);
  for (let j = 0; j < ROWS; j++) {
    for (let i = 0; i < COLS; i++) {
      const a = grid[j][i];
      const b = grid[j][i + 1];
      const c = grid[j + 1][i + 1];
      const d = grid[j + 1][i];
      const pts: [number, number][] = [];
      if (a > level !== b > level) pts.push([(i + lerp(a, b)) * sx, j * sy]);
      if (b > level !== c > level) pts.push([(i + 1) * sx, (j + lerp(b, c)) * sy]);
      if (d > level !== c > level) pts.push([(i + lerp(d, c)) * sx, (j + 1) * sy]);
      if (a > level !== d > level) pts.push([i * sx, (j + lerp(a, d)) * sy]);
      for (let k = 0; k + 1 < pts.length; k += 2) {
        out.push(
          `M${pts[k][0].toFixed(1)} ${pts[k][1].toFixed(1)}L${pts[k + 1][0].toFixed(1)} ${pts[k + 1][1].toFixed(1)}`
        );
      }
    }
  }
  return out.join('');
}

export default function Contours({
  peaks,
  levels = 15,
  className = '',
}: {
  peaks: Peak[];
  levels?: number;
  className?: string;
}) {
  const grid: number[][] = [];
  let max = 0;
  for (let j = 0; j <= ROWS; j++) {
    const row: number[] = [];
    for (let i = 0; i <= COLS; i++) {
      const v = field(peaks, (i * W) / COLS, (j * H) / ROWS);
      if (v > max) max = v;
      row.push(v);
    }
    grid.push(row);
  }
  const paths = Array.from({ length: levels }, (_, n) => {
    const t = (n + 1) / (levels + 1);
    return { n, t, d: contourPath(grid, 0.06 + t * (max - 0.1)) };
  });
  return (
    <svg
      className={`contours ${className}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {paths.map((p) => (
        <path
          key={p.n}
          d={p.d}
          className={p.n % 5 === 4 ? 'contour major' : 'contour'}
          style={{ animationDelay: `${120 + p.n * 70}ms`, strokeOpacity: 0.22 + p.t * 0.6 }}
        />
      ))}
    </svg>
  );
}
