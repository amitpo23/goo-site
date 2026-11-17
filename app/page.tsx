import Contours, { type Peak } from '../components/Contours';
import { audience, bring, clients, contact, method, pillars, projects, steps, ventures } from '../content/site';

// הפסגות במפה שבפתיח. x,y ביחידות של המפה (1200 על 900).
const heroPeaks: (Peak & { label: string; href: string })[] = [
  { x: 330, y: 340, h: 1, r: 240, label: 'פיתוח עסקי', href: '#bizdev' },
  { x: 640, y: 640, h: 0.8, r: 190, label: 'כספים', href: '#finance' },
  { x: 430, y: 770, h: 0.5, r: 130, label: 'תפעול וצמיחה', href: '#ops' },
  { x: 700, y: 170, h: 0.45, r: 150, label: 'טכנולוגיה ו-AI', href: '#tech' },
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

const methodPeaks: Peak[] = [
  { x: 980, y: 220, h: 1, r: 320 },
  { x: 180, y: 760, h: 0.6, r: 240 },
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
            <a href="#approach">מי אנחנו</a>
            <a href="#pillars">מה אנחנו עושים</a>
            <a href="#ventures">מיזמים</a>
            <a href="#projects">לקוחות</a>
            <a href="#how">איך זה עובד</a>
            <a href="#method">שיטת GO</a>
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
              <ul className="peaks" aria-label="התחומים שלנו">
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
              GOO היא חברת השבחה לעסקים קטנים ובינוניים. אנחנו נכנסים לעסק, מנתחים אותו לעומק, בונים
              תוכנית ומובילים את הביצוע, עם פיתוח עסקי, כספים, טכנולוגיה ו-AI, עד שהעסק מגיע ליעדים
              שלו.
            </p>
            <div className="actions">
              <a className="btn btn-cobalt" href="#contact">
                בואו נדבר על העסק שלכם
              </a>
              <a className="btn btn-line" href="#method">
                שיטת GO
              </a>
            </div>
          </div>
        </section>

        <section className="approach wrap" id="approach">
          <p className="eyebrow">מי אנחנו</p>
          <h2>
            חברת השבחה.
            <br />
            בגודל של העסק שלכם.
          </h2>
          <p className="approach-lede">
            בעולם ההשקעות יש חברות שכל תפקידן הוא לקחת חברה טובה, לחזק בה את הניהול, הכספים
            והטכנולוגיה, ולהוביל אותה למקום אחר לגמרי. עד היום המודל הזה היה שמור לחברות גדולות.
            GOO מביאה אותו לעסקים קטנים ובינוניים: אותה חשיבה, אותה משמעת ביצוע, בהתאמה מלאה לעסק
            שלכם.
          </p>
          <p className="approach-lede">
            אנחנו קבוצה של מומחים ואנשי מקצוע שיודעים לקחת רעיון או עסק, ולהביא אותו לגבהים חדשים.
            אנחנו מפעילים עסקים ושותפים בהם בתחומי המזון והמסעדנות, המשלוחים והלוגיסטיקה, הפיננסים,
            התיירות והטכנולוגיה.
          </p>
          <ul className="depts-grid">
            {bring.map((d) => (
              <li key={d.name}>
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="partners wrap" id="pillars">
          <div className="partners-intro">
            <h2>
              מה אנחנו
              <br />
              מביאים לעסק.
            </h2>
            <p>
              ארבעה תחומים, צוות אחד ותוכנית אחת. התחומים מחוברים זה לזה, כי עסק לא משתנה בחלקים.
              הוא משתנה כשהאסטרטגיה, המספרים, הכלים והביצוע מושכים לאותו כיוון.
            </p>
          </div>
          <dl className="caps">
            {pillars.map((c) => (
              <div key={c.id} id={c.id}>
                <dt>{c.title}</dt>
                <dd>{c.text}</dd>
              </div>
            ))}
          </dl>

          {clients.length > 0 && (
            <div className="clients">
              <h3>עסקים שאנחנו מובילים</h3>
              <ul>
                {clients.map((c) => {
                  const inner = c.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={c.logo} alt={c.name} loading="lazy" />
                  ) : (
                    <span>{c.name}</span>
                  );
                  return <li key={c.name}>{c.url ? <a href={c.url}>{inner}</a> : inner}</li>;
                })}
              </ul>
            </div>
          )}
        </section>

        <section className="ventures" id="ventures">
          <div className="wrap">
            <div className="section-head">
              <h2>מיזמים ושותפויות</h2>
              <p>
                עסקים שאנחנו מנהלים, שותפים בהם או בונים בעצמנו. בכל אחד מהם אנחנו בפנים: בתפעול,
                בכספים, בטכנולוגיה ובשיווק.
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

        <section className="projects wrap" id="projects">
          <div className="section-head">
            <div>
              <h2>לקוחות ופרויקטים</h2>
              <p className="note">חלק מרשימת הלקוחות והפרויקטים</p>
            </div>
            <p>
              עסקים ופרויקטים שאנחנו עובדים בהם ואיתם, מתחומים שונים. המשותף לכולם: יעד ברור ועבודה
              יומיומית כדי להגיע אליו.
            </p>
          </div>
          <ul className="projects-grid">
            {projects.map((p) => (
              <li key={p.title}>
                <p className="sector">{p.sector}</p>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="how" id="how">
          <div className="wrap">
            <div className="section-head">
              <h2>איך זה עובד.</h2>
              <p>
                לא ייעוץ מהצד, אלא עבודה מבפנים. ארבעה שלבים, מהיום הראשון ועד שהיעד מושג.
              </p>
            </div>
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

        <section className="method" id="method">
          <Contours peaks={methodPeaks} levels={12} className="on-night" />
          <div className="wrap method-inner">
            <p className="eyebrow">השיטה מאחורי השם</p>
            <h2>
              <span dir="ltr">GO.</span>
              <br />
              כל יום, מעשה.
            </h2>
            <p className="method-lede">
              אנחנו מאמינים בחוק המעשים: עסק לא משתנה בזכות רעיון טוב, אלא בזכות מה שעושים איתו כל
              יום. מציבים יעד, עושים פעולה, ומחר עוד אחת. כל יום צעד קטן לעבר המטרה.
            </p>
            <ol className="method-grid">
              {method.map((m, n) => (
                <li key={m.title}>
                  <span className="method-n" aria-hidden="true">
                    0{n + 1}
                  </span>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="team wrap" id="who">
          <div>
            <h2>למי זה מתאים</h2>
            <p className="team-lede">
              לבעלים של עסקים קטנים ובינוניים שרוצים יותר מעצה: שותף שנכנס לעבודה ומוביל איתם את
              הצמיחה.
            </p>
          </div>
          <ul>
            {audience.map((a) => (
              <li key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="contact" id="contact">
          <Contours peaks={contactPeaks} levels={12} className="on-cobalt" />
          <div className="wrap contact-inner">
            <h2>
              יש לכם עסק שיכול
              <br />
              להגיע גבוה יותר?
            </h2>
            <p>ספרו לנו איפה העסק היום ולאן אתם רוצים להגיע. הצעד הראשון הוא שיחה.</p>
            {hasContact ? (
              <div className="actions">
                {contact.whatsapp && (
                  <a className="btn btn-sun" href={`https://wa.me/${contact.whatsapp}`}>
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
        <p>משביחים עסקים, צעד אחרי צעד.</p>
        <p className="copy">© 2026 GOO</p>
      </footer>
    </>
  );
}
