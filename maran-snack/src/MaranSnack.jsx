// import { useState } from "react";

const WHATSAPP_NUMBER = "526673938879"; 
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola! Me interesa cotizar un paquete de Maran Snack 🍿",
);
const PATH = "src/assets/img/";

const MENU_ITEMS = [
  {
    id: 1,
    name: "Costielotes",
    description:
      "Rodajas de elote preparado con crema, mayonesa, chipottle, queso amarillo y de topping Chips fuego",
    emoji: "🌽",
    image: PATH + "costielote.jpg",
  },
  {
    id: 2,
    name: "Cacahuatada",
    description: "Cacahuates preparados con salsas, chamoy y clamato",
    emoji: "🥜",
    image: PATH + "cacahuatadas.jpg",
  },
  {
    id: 3,
    name: "Papas Salseadas",
    description: "Papas blancas preparadas con salsas negras y tajín",
    emoji: "🍟",
    image: PATH + "papas_salseadas.jpg",
  },
  {
    id: 4,
    name: "Esquite",
    description:
      "Esquite con crema, queso, mayonesa y queso amarillo y de topping chips fuego",
    emoji: "🫙",
    image: PATH + "esquite.jpg",
  },
  {
    id: 5,
    name: "Cevichurros",
    description:
      "Churritos con salchicha, pepino, cueritos, cacahuate y rielito, preparado con salsas negras, chamoy y clamato",
    emoji: "🌶️",
    image: PATH + "cevichurro.jpg",
  },
  {
    id: 6,
    name: "Tostiesquites",
    description: "Tostitos con esquite, queso, crema y mayonesa",
    emoji: "🧀",
    image: PATH + "tostiesquite.jpg",
  },
];

// ============================================================
// PAQUETES / PRECIOS — Edita aquí fácilmente
// ============================================================
const PACKAGES = [
  {
    id: 1,
    name: "Básico",
    price: "$350",
    subtitle: "Ideal para reuniones pequeñas",
    features: [
      "2 productos a elegir",
      "Hasta 15 personas",
      "Presentación estándar",
      "Servicio 1 hora",
    ],
    highlight: false,
    badge: null,
  },
  {
    id: 2,
    name: "Popular",
    price: "$650",
    subtitle: "El más elegido por nuestros clientes",
    features: [
      "4 productos a elegir",
      "Hasta 30 personas",
      "Presentación premium",
      "Servicio 2 horas",
      "Decoración básica incluida",
    ],
    highlight: true,
    badge: "⭐ Más popular",
  },
  {
    id: 3,
    name: "Premium",
    price: "$1,100",
    subtitle: "La experiencia completa Maran",
    features: [
      "Todos los productos",
      "Hasta 60 personas",
      "Presentación de lujo",
      "Servicio 3 horas",
      "Decoración temática incluida",
      "Atención personalizada",
    ],
    highlight: false,
    badge: null,
  },
];

// ============================================================
// HELPERS
// ============================================================
const whatsappUrl = (msg = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

// ============================================================
// STYLES (injected once)
// ============================================================
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #fdf0f0;
    --blush: #f8d7da;
    --rose: #e8b4bc;
    --crimson: #9b1c1c;
    --crimson-dark: #7a1515;
    --crimson-light: #c62828;
    --text-dark: #3a1a1a;
    --text-mid: #6b3535;
    --white: #ffffff;
    --shadow: 0 4px 24px rgba(155,28,28,0.10);
    --shadow-lg: 0 8px 40px rgba(155,28,28,0.16);
    --radius: 18px;
    --radius-sm: 10px;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Lato', sans-serif;
    background: var(--cream);
    color: var(--text-dark);
    overflow-x: hidden;
  }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(253,240,240,0.88);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--blush);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 2rem; height: 64px;
  }
  .nav-brand { font-family: 'Playfair Display', serif; font-size: 1.3rem; color: var(--crimson); font-weight: 700; letter-spacing: .02em; }
  .nav-links { display: flex; gap: 2rem; }
  .nav-links a { text-decoration: none; color: var(--text-mid); font-size: .92rem; font-weight: 600; letter-spacing: .04em; text-transform: uppercase; transition: color .2s; }
  .nav-links a:hover { color: var(--crimson); }
  @media (max-width: 600px) { .nav-links { display: none; } }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    padding: 80px 1.5rem 3rem;
    position: relative; overflow: hidden;
    background: radial-gradient(ellipse 80% 60% at 50% 30%, #f5c6cb 0%, var(--cream) 70%);
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image: radial-gradient(circle at 20% 80%, rgba(155,28,28,.06) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(232,180,188,.2) 0%, transparent 50%);
    pointer-events: none;
  }
  .hero-deco { position: absolute; width: 340px; height: 340px; border-radius: 50%; border: 1.5px solid rgba(155,28,28,.10); }
  .hero-deco-1 { top: 10%; left: -5%; animation: spin 30s linear infinite; }
  .hero-deco-2 { bottom: 5%; right: -8%; animation: spin 22s linear infinite reverse; }

  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes fadeUp { from { opacity:0; transform: translateY(30px); } to { opacity:1; transform: translateY(0); } }
  @keyframes scaleIn { from { opacity:0; transform: scale(.85); } to { opacity:1; transform: scale(1); } }

  .logo-circle-wrap {
    width: 200px; height: 200px; border-radius: 50%;
    border: 4px solid var(--rose);
    box-shadow: 0 0 0 10px rgba(232,180,188,.25), var(--shadow-lg);
    overflow: hidden; background: var(--white);
    animation: scaleIn .7s ease both;
    margin-bottom: 2rem;
    flex-shrink: 0;
  }
  .logo-circle-wrap img { width: 100%; height: 100%; object-fit: cover; }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.2rem, 6vw, 4rem);
    color: var(--crimson);
    text-align: center;
    line-height: 1.15;
    animation: fadeUp .7s .2s ease both;
    margin-bottom: .75rem;
  }
  .hero-sub {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    color: var(--text-mid);
    text-align: center;
    font-weight: 300;
    letter-spacing: .04em;
    max-width: 480px;
    animation: fadeUp .7s .35s ease both;
    margin-bottom: 2.5rem;
  }
  .hero-cta {
    display: inline-flex; align-items: center; gap: .6rem;
    background: var(--crimson); color: var(--white);
    padding: .9rem 2.2rem; border-radius: 100px;
    font-weight: 700; font-size: 1rem; letter-spacing: .04em;
    text-decoration: none; border: none; cursor: pointer;
    box-shadow: 0 6px 24px rgba(155,28,28,.3);
    transition: transform .2s, box-shadow .2s, background .2s;
    animation: fadeUp .7s .5s ease both;
  }
  .hero-cta:hover { background: var(--crimson-dark); transform: translateY(-2px); box-shadow: 0 10px 30px rgba(155,28,28,.38); }

  .scroll-hint {
    position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: .4rem;
    color: var(--text-mid); font-size: .8rem; letter-spacing: .08em; text-transform: uppercase;
    animation: fadeUp .7s .8s ease both;
  }
  .scroll-arrow { width: 1px; height: 40px; background: linear-gradient(to bottom, var(--rose), transparent); }

  /* SECTIONS */
  .section { padding: 6rem 1.5rem; }
  .section-inner { max-width: 1140px; margin: 0 auto; }
  .section-label {
    text-align: center;
    font-size: .75rem; font-weight: 700; letter-spacing: .16em; text-transform: uppercase;
    color: var(--rose); margin-bottom: .5rem;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    color: var(--crimson); text-align: center;
    margin-bottom: .75rem;
  }
  .section-divider {
    width: 60px; height: 3px; background: var(--rose); border-radius: 2px;
    margin: 0 auto 3rem;
  }

  /* MENU GRID */
  .menu-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  @media (max-width: 900px) { .menu-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 540px) { .menu-grid { grid-template-columns: 1fr; } }

  .menu-card {
    background: var(--white);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: transform .25s, box-shadow .25s;
    display: flex; flex-direction: column;
    border: 1px solid var(--blush);
  }
  .menu-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }

  .menu-card-img {
    width: 100%; aspect-ratio: 4/3; object-fit: cover;
    background: var(--blush);
  }
  .menu-card-body { padding: 1.25rem 1.25rem 1.5rem; }
  .menu-card-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem; color: var(--crimson); margin-bottom: .4rem; font-weight: 700;
  }
  .menu-card-desc { font-size: .875rem; color: var(--text-mid); line-height: 1.55; font-weight: 300; }

  /* BG ALT */
  .bg-blush { background: var(--blush); }

  /* PACKAGES */
  .pkg-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem; align-items: stretch;
  }
  @media (max-width: 900px) { .pkg-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; } }

  .pkg-card {
    background: var(--white); border-radius: var(--radius);
    padding: 2rem 1.5rem; display: flex; flex-direction: column;
    border: 2px solid var(--blush); box-shadow: var(--shadow);
    position: relative; transition: transform .25s, box-shadow .25s;
  }
  .pkg-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
  .pkg-card.highlighted {
    background: var(--crimson); border-color: var(--crimson);
    color: var(--white);
  }
  .pkg-card.highlighted .pkg-price,
  .pkg-card.highlighted .pkg-name,
  .pkg-card.highlighted .pkg-sub { color: var(--white); }
  .pkg-card.highlighted .pkg-feature { color: rgba(255,255,255,.85); }
  .pkg-card.highlighted .pkg-feature::before { color: #f8b4b4; }

  .pkg-badge {
    position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
    background: var(--crimson-light); color: var(--white);
    font-size: .75rem; font-weight: 700; letter-spacing: .08em;
    padding: .3rem .9rem; border-radius: 100px; white-space: nowrap;
  }
  .pkg-card.highlighted .pkg-badge { background: var(--white); color: var(--crimson); }

  .pkg-name { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: var(--crimson); margin-bottom: .25rem; font-weight: 700; }
  .pkg-sub { font-size: .85rem; color: var(--text-mid); margin-bottom: 1.25rem; font-weight: 300; }
  .pkg-price { font-size: 2.6rem; font-weight: 700; color: var(--crimson); line-height: 1; margin-bottom: 1.5rem; }
  .pkg-price span { font-size: 1rem; font-weight: 400; color: var(--text-mid); }

  .pkg-features { list-style: none; flex: 1; margin-bottom: 2rem; display: flex; flex-direction: column; gap: .6rem; }
  .pkg-feature { font-size: .9rem; color: var(--text-mid); display: flex; align-items: flex-start; gap: .5rem; }
  .pkg-feature::before { content: '✓'; color: var(--crimson); font-weight: 700; flex-shrink: 0; }

  .pkg-btn {
    display: block; width: 100%; text-align: center;
    padding: .85rem; border-radius: 100px;
    font-weight: 700; font-size: .95rem; letter-spacing: .04em;
    text-decoration: none; border: 2px solid var(--crimson);
    color: var(--crimson); background: transparent;
    transition: background .2s, color .2s, transform .15s;
    cursor: pointer;
  }
  .pkg-btn:hover { background: var(--crimson); color: var(--white); transform: scale(1.02); }
  .pkg-card.highlighted .pkg-btn { background: var(--white); color: var(--crimson); border-color: var(--white); }
  .pkg-card.highlighted .pkg-btn:hover { background: var(--blush); }

  /* CONTACT */
  .contact-section {
    padding: 6rem 1.5rem;
    background: linear-gradient(135deg, var(--crimson) 0%, var(--crimson-dark) 100%);
    text-align: center; color: var(--white);
    position: relative; overflow: hidden;
  }
  .contact-section::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 30% 50%, rgba(255,255,255,.06) 0%, transparent 60%);
    pointer-events: none;
  }
  .contact-title { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 4vw, 2.8rem); margin-bottom: .75rem; }
  .contact-sub { font-size: 1.1rem; opacity: .85; margin-bottom: 2.5rem; font-weight: 300; max-width: 480px; margin-left: auto; margin-right: auto; }
  .contact-wa-btn {
    display: inline-flex; align-items: center; gap: .7rem;
    background: #25D366; color: var(--white);
    padding: 1rem 2.4rem; border-radius: 100px;
    font-weight: 700; font-size: 1.05rem; letter-spacing: .04em;
    text-decoration: none; border: none; cursor: pointer;
    box-shadow: 0 6px 30px rgba(0,0,0,.25);
    transition: transform .2s, box-shadow .2s;
  }
  .contact-wa-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,.35); }
  .wa-icon { width: 26px; height: 26px; }

  /* FOOTER */
  .footer {
    background: var(--text-dark); color: rgba(255,255,255,.6);
    text-align: center; padding: 1.5rem;
    font-size: .82rem; letter-spacing: .04em;
  }
  .footer strong { color: var(--rose); }

  /* FLOATING WA BUTTON */
  .float-wa {
    position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 999;
    background: #25D366; color: var(--white);
    width: 58px; height: 58px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 20px rgba(0,0,0,.25);
    text-decoration: none; transition: transform .2s;
  }
  .float-wa:hover { transform: scale(1.1); }
`;

// ============================================================
// WHATSAPP SVG ICON
// ============================================================
const WaIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#25D366" />
    <path
      d="M22.9 19.1c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.38-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.34z"
      fill="white"
    />
    <path
      d="M16 6C10.48 6 6 10.48 6 16c0 1.77.46 3.44 1.27 4.89L6 26l5.26-1.26A9.94 9.94 0 0016 26c5.52 0 10-4.48 10-10S21.52 6 16 6zm0 18.14a8.12 8.12 0 01-4.14-1.13l-.3-.18-3.12.75.78-3.05-.2-.32A8.14 8.14 0 1116 24.14z"
      fill="white"
    />
  </svg>
);

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function MaranSnack() {
  //const [imgErrors, setImgErrors] = useState({});

  return (
    <>
      <style>{globalStyles}</style>

      {/* NAV */}
      <nav className="nav">
        <span className="nav-brand">Maran Snack</span>
        <div className="nav-links">
          <a href="#menu">Menú</a>
          <a href="#precios">Precios</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="hero-deco hero-deco-1" />
        <div className="hero-deco hero-deco-2" />

        <div className="logo-circle-wrap">
          <img
            src="src/assets/img/maran_snack_logo.jpg"
            alt="Maran Snack Logo"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/200x200/f8d7da/9b1c1c?text=MaranSnack";
            }}
          />
        </div>

        <h1 className="hero-title">
          Snacks con sabor,
          <br />
          momentos únicos
        </h1>
        <p className="hero-sub">
          Snacks auténticos preparados con los mejores ingredientes para tus
          eventos y reuniones especiales.
        </p>
        <a className="hero-cta" href="#menu">
          🍿 Ver nuestro menú
        </a>

        <div className="scroll-hint">
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* MENU */}
      <section className="section" id="menu">
        <div className="section-inner">
          <p className="section-label">Lo que preparamos</p>
          <h2 className="section-title">Nuestro Menú</h2>
          <div className="section-divider" />

          <div className="menu-grid">
            {MENU_ITEMS.map((item) => (
              <div className="menu-card" key={item.id}>
                <img
                  className="menu-card-img"
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/400x300/f8d7da/9b1c1c?text=${encodeURIComponent(item.name)}`;
                  }}
                />
                <div className="menu-card-body">
                  <h3 className="menu-card-name">
                    {item.emoji} {item.name}
                  </h3>
                  <p className="menu-card-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section bg-blush" id="precios">
        <div className="section-inner">
          <p className="section-label">Elige el tuyo</p>
          <h2 className="section-title">Paquetes & Precios</h2>
          <div className="section-divider" />

          <div className="pkg-grid">
            {PACKAGES.map((pkg) => (
              <div
                className={`pkg-card${pkg.highlight ? " highlighted" : ""}`}
                key={pkg.id}
              >
                {pkg.badge && <span className="pkg-badge">{pkg.badge}</span>}
                <h3 className="pkg-name">{pkg.name}</h3>
                <p className="pkg-sub">{pkg.subtitle}</p>
                <div className="pkg-price">
                  {pkg.price} <span>MXN</span>
                </div>
                <ul className="pkg-features">
                  {pkg.features.map((f, i) => (
                    <li className="pkg-feature" key={i}>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl(
                    encodeURIComponent(
                      `Hola! Me interesa el paquete ${pkg.name} de Maran Snack 😋🌽.`,
                    ),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pkg-btn"
                >
                  Cotizar ahora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contacto">
        <div className="section-inner">
          <h2 className="contact-title">¿Listo para ordenar?</h2>
          <p className="contact-sub">
            Escríbenos por WhatsApp y con gusto te atendemos. ¡Hacemos tu evento
            delicioso!
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-wa-btn"
          >
            <WaIcon size={26} />
            Escribir por WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 <strong>Maran Snack</strong> · Est. 2022 · Hecho con ❤️ y mucho
        chamoy 😋
      </footer>

      {/* FLOATING WA */}
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="float-wa"
        title="Contactar por WhatsApp"
      >
        <WaIcon size={30} />
      </a>
    </>
  );
}
