import Contours, { type Peak } from "../components/Contours";
import {
  capabilities,
  clients,
  contact,
  founders,
  steps,
  ventures,
} from "../content/site";

// הפסגות במפה שבפתיח. x,y ביחידות של המפה (1200 על 900).
const heroPeaks: (Peak & { label: string; href: string })[] = [
  { x: 330, y: 340, h: 1, r: 240, label: "Medici", href: "#medici" },
  { x: 640, y: 640, h: 0.8, r: 190, label: "רצף", href: "#rezef" },
  { x: 330, y: 750, h: 0.5, r: 130, label: "מושקו", href: "#moshko" },
  {
    x: 700,
    y: 170,
    h: 0.45,
    r: 150,
    label: "Marketing OS",
    href: "#marketing-os",
  },
];

const cardPeaks: Peak[][] = [
  [
    { x: 250, y: 200, h: 1, r: 300 },
    { x: 760, y: 420, h: 0.55, r: 220 },
  ],
  [
    { x: 300, y: 260, h: 0.7, r: 240 },
    { x: 620, y: 120, h: 1, r: 260 },
  ],
];

const contactPeaks: Peak[] = [
  { x: 260, y: 520, h: 1, r: 330 },
  { x: 900, y: 240, h: 0.6, r: 240 },
];

function Logo() {
  return (
    <span className="logo" dir="ltr">
      goo
      <i aria-hidden="true" />
    </span>
  );
}

export default function Home() {
  const leads = ventures.filter((v) => v.lead);
  const rest = ventures.filter((v) => !v.lead);
  const hasContact = Boolean(contact.whatsapp || contact.email);

  return (
    <>
      <a className="skip" href="#main">
        דילוג לתוכן
      </a>

      <header className="site-header">
        <div className="wrap header-row">
          <a href="#top" aria-label="GOO, לראש העמוד">
            <Logo />
          </a>
          <nav aria-label="ניווט ראשי">
            <a href="#ventures">המיזמים</a>
            <a href="#partners">ליווי עסקים</a>
            <a href="#how">איך עובדים</a>
            <a href="#team">מי אנחנו</a>
          </nav>
          <a className="btn btn-ink btn-small" href="#contact">
            דברו איתנו
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-map">
            <div className="map-inner">
              <Contours peaks={heroPeaks} />
              <ul className="peaks" aria-label="המיזמים שלנו">
                {heroPeaks.map((p, n) => (
                  <li
                    key={p.label}
                    style={{
                      left: `${(p.x / 1200) * 100}%`,
                      top: `${(p.y / 900) * 100}%`,
                      animationDelay: `${1100 + n * 140}ms`,
                    }}
                  >
                    <a href={p.href}>{p.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="wrap hero-copy">
            <h1>
              לוקחים עסקים
              <br />
              לגובה חדש.
            </h1>
            <p className="lede">
              GOO היא venture studio. אנחנו יזמים: יוזמים, בונים ומפעילים עסקים משלנו, ומביאים את
              אותו ניסיון לעסקים קיימים שאנחנו מלווים אל השלב הבא.
            </p>
            <div className="actions">
              <a className="btn btn-cobalt" href="#contact">
                דברו איתנו
              </a>
              <a className="btn btn-line" href="#ventures">
                המיזמים שלנו
              </a>
            </div>
          </div>
        </section>

        <section className="tracks wrap">
          <h2>שתי דרכים לעלות.</h2>
          <div className="tracks-grid">
            <article>
              <h3>מיזמים מהבית</h3>
              <p>
                אנחנו מזהים בעיה בשוק שאנחנו מכירים מבפנים, בונים לה מוצר
                ומפעילים אותו כעסק לכל דבר. כך נולדו Medici בתיירות ורצף
                בפיננסים.
              </p>
              <a href="#ventures">לכל המיזמים</a>
            </article>
            <article>
              <h3>ליווי עסקים</h3>
              <p>
                אנחנו נכנסים לעסק קיים, לומדים איך הוא עובד באמת, ובונים יחד
                איתו את מה שחסר כדי לגדול: מוצר, אוטומציה, שיווק ומכירות.
              </p>
              <a href="#partners">מה אנחנו מביאים</a>
            </article>
          </div>
        </section>

        <section className="ventures" id="ventures">
          <div className="wrap">
            <div className="section-head">
              <h2>המיזמים שלנו</h2>
              <p>
                עסקים שיזמנו, בנינו ואנחנו מפעילים. כל אחד מהם התחיל מבעיה
                שפגשנו בעצמנו.
              </p>
            </div>

            <div className="leads">
              {leads.map((v, n) => (
                <article className="lead" id={v.id} key={v.id}>
                  <Contours
                    peaks={cardPeaks[n % cardPeaks.length]}
                    levels={10}
                    className="in-card"
                  />
                  <p className="field">{v.field}</p>
                  <h3>{v.name}</h3>
                  <p className="line">{v.line}</p>
                  <p className="text">{v.text}</p>
                  {v.status && <p className="status">{v.status}</p>}
                </article>
              ))}
            </div>

            <ul className="ventures-list">
              {rest.map((v) => (
                <li id={v.id} key={v.id}>
                  <div className="v-name">
                    <h3>{v.name}</h3>
                    <p className="field">{v.field}</p>
                  </div>
                  <p className="line">{v.line}</p>
                  <div className="v-text">
                    <p className="text">{v.text}</p>
                    {v.status && <p className="status">{v.status}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="partners wrap" id="partners">
          <div className="partners-intro">
            <h2>
              ליווי עסקים:
              <br />
              מה אנחנו מביאים.
            </h2>
            <p>
              את מה שלמדנו בבניית המיזמים שלנו אנחנו מביאים לעסקים אחרים. נכנסים
              כשותפים לדרך, עם ידיים על המקלדת ואחריות על התוצאה.
            </p>
          </div>
          <dl className="caps">
            {capabilities.map((c) => (
              <div key={c.title}>
                <dt>{c.title}</dt>
                <dd>{c.text}</dd>
              </div>
            ))}
          </dl>

          {clients.length > 0 && (
            <div className="clients">
              <h3>עסקים שאנחנו מלווים</h3>
              <ul>
                {clients.map((c) => {
                  const inner = c.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={c.logo} alt={c.name} loading="lazy" />
                  ) : (
                    <span>{c.name}</span>
                  );
                  return (
                    <li key={c.name}>
                      {c.url ? <a href={c.url}>{inner}</a> : inner}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </section>

        <section className="how" id="how">
          <div className="wrap">
            <h2>איך עובדים איתנו</h2>
            <ol>
              {steps.map((s, n) => (
                <li key={s.title}>
                  <span className="step-n" aria-hidden="true">
                    {n + 1}
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="team wrap" id="team">
          <h2>היזמים מאחורי GOO</h2>
          <ul>
            {founders.map((f) => (
              <li key={f.name}>
                <h3>{f.name}</h3>
                <p className="role">{f.role}</p>
                {f.text && <p>{f.text}</p>}
              </li>
            ))}
          </ul>
        </section>

        <section className="contact" id="contact">
          <Contours peaks={contactPeaks} levels={12} className="on-cobalt" />
          <div className="wrap contact-inner">
            <h2>
              יש לכם עסק שמוכן
              <br />
              לשלב הבא?
            </h2>
            <p>
              ספרו לנו איפה אתם היום ולאן אתם רוצים להגיע. נחזור אליכם עם צעד
              ראשון.
            </p>
            {hasContact ? (
              <div className="actions">
                {contact.whatsapp && (
                  <a
                    className="btn btn-sun"
                    href={`https://wa.me/${contact.whatsapp}`}
                  >
                    כתבו לנו ב-WhatsApp
                  </a>
                )}
                {contact.email && (
                  <a className="btn btn-white" href={`mailto:${contact.email}`}>
                    שלחו מייל
                  </a>
                )}
              </div>
            ) : (
              <p className="pending">פרטי ההתקשרות יתעדכנו כאן בקרוב.</p>
            )}
          </div>
        </section>
      </main>

      <footer className="wrap site-footer">
        <Logo />
        <p>Venture studio. יוזמים, בונים ומצמיחים עסקים.</p>
        <p className="copy">© 2026 GOO</p>
      </footer>
    </>
  );
}
