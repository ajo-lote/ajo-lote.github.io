// Contenido bilingüe del sitio. Edita aquí los textos; después corre `node src/build.mjs`.
// Los textos de los casos de estudio son borradores basados en tu portafolio de Framer: revísalos.

export const SITE = {
  name: "Diana Becerra",
  domain: "https://dianabecerra.design",
  email: "dianabecerra.cv@gmail.com",
  linkedin: "https://www.linkedin.com/in/dianabecerra/",
  dribbble: "https://dribbble.com/Diana-Becerra",
  instagram: "https://www.instagram.com/some.otherplace/",
  figmaBrel:
    "https://www.figma.com/proto/VQj5lutyWYeAkawWfaBwGV/Portal-Brel-_-Proceso?node-id=4894-10931&viewport=1857%2C1184%2C0.09&t=TQyvCFXM9Zu76Dhd-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4894%3A10931&show-proto-sidebar=1&page-id=4894%3A8857",
};

export const T = {
  en: {
    htmlLang: "en",
    nav: { product: "Product", lab: "Lab", about: "About", contact: "Contact" },
    switchTo: "ES",
    skip: "Skip to content",
    role: "Product designer · Guadalajara, MX",
    footer: { loc: "Guadalajara, MX · Available remotely", rights: "© 2026 Diana Becerra" },
    home: {
      title: "Diana Becerra — Product designer",
      desc: "Product designer in Guadalajara working on design systems, clear interfaces and experiments with AI.",
      h1: "I design digital products with <em>structure</em> and purpose.",
      sub: "Scalable design systems, clear interfaces and experiments with AI.",
      ctaProduct: "See projects",
      ctaLab: "Explore the Lab",
      selected: "Projects",
      all: "See all",
      labKicker: "Lab",
      labH: "Experiments with AI.",
      labP: "Things I build and test to understand how to design with AI.",
      labCta: "Open the Lab",
      brandKicker: "Brand",
      brandH: "I also do brand work.",
      brandHP: "Identities for hotels, restaurants and residential developments.",
      brandCta: "See brand work",
    },
    product: {
      title: "Product — Diana Becerra",
      desc: "Product design case studies: Brel Financial, Innerly and Nea.",
      kicker: "Product",
      h1: "Product work, with the <em>reasoning</em> included.",
      p: "Three case studies in fintech and personal development. Each one covers the problem, the constraints, the decisions I made and what I would do differently.",
      brandKicker: "Also",
      brandH: "I also do brand.",
      brandP: "Identities and visual systems for hospitality and real estate, from before and alongside product.",
      brandCta: "See brand work",
      next: "Next case",
      back: "← Product",
      meta: { role: "Role", year: "Year", focus: "Focus", team: "Team", status: "Status" },
      figma: "Open Figma prototype ↗",
      protoH: "Interactive prototype",
      protoNote: "Click through the prototype. Best on desktop.",
    },
    brand: {
      title: "Brand work — Diana Becerra",
      desc: "Brand and visual identity projects for hospitality and real estate.",
      kicker: "Brand",
      h1: "Brand work, <em>before</em> and alongside product.",
      p: "Identities, collateral and visual systems for places: hotels, restaurants, residential developments. Made with Casa 231.",
      done: "What was done",
      context: "Context",
      back: "← Product",
    },
    lab: {
      title: "Lab — Diana Becerra",
      desc: "Experiments with AI: what I wanted to find out, what I decided and what the AI did.",
      kicker: "Lab",
      h1: "Experiments with <em>judgment</em>.",
      p: "A hub of things I build with AI.",
      question: "The question",
      decided: "What I decided",
      ai: "What the AI did",
      change: "What I'd change",
      open: "Open experiment →",
      openExt: "See on Instagram ↗",
      live: "Live",
      ongoing: "Ongoing",
      soon: "More experiments on the way.",
      items: [
        {
          slug: "art-library",
          href: "/en/lab/art-library/",
          title: "Art Library",
          year: "2026",
          status: "live",
          color: "#EE5B20",
          summary:
            "A guide for museum lovers: 12 periods, my favorite pieces and the museum where I saw them.",
          question: "How do you stop feeling lost among periods and movements when you walk into a museum?",
          decided:
            "Periods first, each with the context of its time. Women artists are marked. My own favorite pieces, with the museum, are layered on top. When an image is not the artist's work, the page says so.",
          ai: "Claude wrote the code and helped draft entries. Structure, voice and editorial rules were mine.",
          change: "Verify image rights and replace placeholders with open-access images for every artist.",
        },
        {
          slug: "some-other-place",
          href: "https://www.instagram.com/some.otherplace/",
          external: true,
          title: "Some Other Place",
          year: "2023",
          status: "ongoing",
          color: "#FCB9EF",
          summary: "A personal project exploring generative AI imagery. It lives on Instagram.",
        },
      ],
    },
    about: {
      title: "About — Diana Becerra",
      desc: "Product designer in Guadalajara with ten years across brand, visual and product.",
      kicker: "About",
      h1: "Hi, I'm Diana, a product designer.<span class=\"h1-sub\">I work on experiences that aim to be truly useful.</span>",
      p1: "I'm drawn to design that doesn't interrupt: the kind that helps something complex feel clear and usable.",
      p2: "Curiosity is always my compass. Always down to talk design, tech, or the weird overlap between them.",
      museumsLine: "I love to travel, and museums are the first place I visit.",
      museumsLink: "I turned that into a guide to art history →",
      natureLine: "Everyday landscapes and nature inspire me.",
      expH: "10+ years in design, 5 in digital product.<span class=\"h1-sub\">My focus: constant attention to how a tool accompanies the person using it.</span>",
      p3: "Before product, I spent years at marketing agencies, creating identities, websites and communication for hospitality and real estate. That stage left me with a solid foundation in design (hierarchy, harmony, composition) and a care for first impressions.",
      brandLink: "See my brand work →",
      toolkitH: "Toolkit",
      toolkit: [
        ["Claude", "AI assistant", "#D97757"],
        ["Figma", "Design", "#111111"],
        ["Flora", "GenAI", "#111111"],
        ["Adobe", "Design", "#E1251B"],
        ["Lovable", "App builder", "#111111"],
        ["Genway", "AI research", "#6C5CE7"],
      ],
    },
    contact: {
      title: "Contact — Diana Becerra",
      desc: "Get in touch with Diana Becerra, product designer.",
      kicker: "Contact",
      h1: "Let's talk about your next <em>product</em>.",
      p: "Say hi about product design, design systems or AI experiments. I work remotely from Guadalajara.",
      email: "Email",
      elsewhere: "Elsewhere",
    },
    notFound: { title: "Page not found", h1: "This page <em>moved</em>.", p: "Try the home page.", cta: "Go home" },
    cases: {
      "brel-client-portal": {
        title: "Brel Financial",
        sub: "Client portal for a leasing company",
        tags: "Financial · Product design",
        year: "2026",
        meta: { role: "Product Designer", year: "2026 · 2 months", focus: "Responsive web app, design system", status: "Delivered in high fidelity, not yet launched" },
        summary: "Redesign of a client portal around its most frequent user: the accountant on the client's finance team.",
        short: "Designed around the person who uses it every day: the client's accountant.",
        intro:
          "Brel is a Mexican boutique leasing company with more than 15 years of operation. Its premium positioning wasn't reflected in its client portal. The goal was to redesign the platform around its main user, rebuild the information architecture around tasks and raise the visual quality.",
        introImg: "brel-intro.webp",
        sections: [
          {
            h: "The problem",
            p: [
              "The portal mixed the needs of the CEO, accounting and operations. The most frequent user was the client's finance team, mostly accountants around 50, and the hierarchy didn't follow their workflow. The design also felt generic for a premium brand.",
            ],
            carousel: true,
            img: ["brel-problem-1.webp", "brel-problem-2.webp", "brel-problem-3.webp"],
          },
          {
            h: "Information architecture",
            p: [
              "I evaluated two structures: by legal entity, aimed at executives, and by task, aimed at high-frequency finance users. I validated three proto-personas with the client, who confirmed the accountant as the primary user.",
              "That decision set the scope and led to task-based navigation: Summary, Assets, Account statements, Payments, Documents, Claims and insurance, and a help call to action.",
            ],
            img: ["brel-02-ia.webp"],
          },
          {
            h: "Constraints",
            list: [
              "One legal entity per session.",
              "Users 50+: 16px minimum text; 14px only for badges; 12px only for legal or footer text.",
              "An informational portal, not a transactional one.",
              "Multi-contract structure: one client can have several contracts.",
              "Figma as the design tool.",
            ],
            img: ["brel-03-constraints.webp"],
          },
          {
            h: "Design strategy",
            p: [
              "I used the Assets section as a pilot, moving from wireframe to high fidelity and iterating with the client before building a complete system. The remaining screens reused those decisions, with tokens and components built to make engineering handoff easier.",
            ],
            img: ["brel-04-strategy.webp"],
          },
          {
            h: "Design system",
            p: [
              "It starts from three brand colors (gray, blue and black) and is organized in three layers: foundations, components and patterns.",
            ],
            img: ["brel-05-system.webp"],
          },
          {
            h: "Where it stands",
            p: [
              "Delivered in high fidelity for mobile and desktop, with a documented design system. It hasn't launched, so there are no results yet. The metrics defined to validate it: portal adoption, how often accountants use it, fewer support tickets and time to complete tasks.",
            ],
            img: ["brel-06-status.webp"],
          },
          {
            h: "What I take from it",
            p: [
              "The project started with one question: who uses the portal every day, and for what. I designed the hierarchy around the accountant, not around the client's org chart.",
              "If I did it again, I'd validate the architecture with real accountants before building the full system, and define from the start how to measure adoption and task completion.",
            ],
          },
        ],
        hero: ["brel-01-hero.webp"],
        figma: true,
        color: "#FCB9EF",
      },
      innerly: {
        title: "Innerly",
        sub: "A self-knowledge platform",
        tags: "Personal development · Product design",
        year: "2025",
        meta: { role: "Product Designer", year: "2025 · 6 months", focus: "Mobile-first, design system", status: "Full design delivered; priorities changed before launch" },
        summary: "A mobile-first redesign that takes people from a test result to personal growth tools, so they have a reason to come back.",
        short: "From a test result to a personal growth path.",
        intro:
          "Innerly is a self-knowledge platform: people arrive after taking an online test and read their results. But a result gets read once and that's it. To give the platform more value without relying only on adding more tests, I researched how to nurture it, and the bet was to add tools for personal growth. I redesigned the experience mobile-first around that path.",
        introImg: "innerly-02-research.webp",
        sections: [
          {
            h: "Research",
            p: [
              "To nurture the platform beyond adding more tests, I reviewed wellness and psychology apps for navigation, progress and tone patterns, and ran AI-assisted interviews. Three patterns kept showing up: dashboards that point to an action, light ongoing progress, and no rigid metrics that create anxiety.",
            ],
            img: ["innerly-03-architecture.webp"],
          },
          {
            h: "Decisions",
            p: [
              "The MVP would improve the existing experience and add tools that turn the reflection from a test into ongoing growth: courses and affirmations. Most traffic was mobile, so the redesign went mobile-first and was governed by a design system, aiming for fewer screens and clearer direction.",
            ],
            img: ["innerly-overview.webp"],
          },
          {
            h: "Home",
            p: [
              "It shows where the person left off and what they can do today, using quick actions and small streak-style signals of progress instead of a dense dashboard.",
            ],
            img: ["innerly-05-home.webp"],
          },
          {
            h: "Tests",
            p: [
              "Reorganized into understandable categories with headers and labels. Each result has a preview with a short explanation and a direct call to action.",
            ],
            img: ["innerly-06-tests.webp"],
          },
          {
            h: "Courses",
            p: [
              "Based on e-learning patterns, with the content kept apart from the main navigation. Each module ends with a micro-action or affirmation to encourage return visits.",
            ],
            img: ["innerly-07-courses.webp"],
          },
          {
            h: "What got cut",
            p: [
              "A broader set of tools, including meditation audio personalized with ElevenLabs, was scaled back because of budget and team scope. Affirmations shipped in the design because they were the easiest to build.",
            ],
            img: ["innerly-08-affirmations.webp"],
          },
          {
            h: "Design system",
            p: [
              "AA-contrast color tokens, closed type (16/20/24/32) and spacing (4/8/12/16/24/32) scales, three elevation levels and reusable components: buttons, cards, headers and menus.",
            ],
            img: ["innerly-09-system.webp"],
          },
          {
            h: "Where it stands",
            p: [
              "The product didn't reach production because priorities changed, but a full architecture and UI upgrade was delivered, ready for implementation. The platform went from accumulating results to offering a path people can pick up again every day.",
            ],
            img: ["innerly-mockup.webp"],
          },
          {
            h: "What I'd do differently",
            p: [
              "Validate the flow first with a rapid prototype and real users, and in parallel push for verifiable content criteria reviewed by qualified professionals.",
            ],
          },
        ],
        hero: ["innerly-01-hero.webp"],
        color: "#EE5B20",
      },
      nea: {
        title: "Nea",
        sub: "Corporate platform and card",
        tags: "SaaS · Fintech · Product design",
        year: "2021–2024",
        meta: {
          role: "Product Designer",
          year: "2021–2024",
          focus: "Web platform",
          team: "Cindy Lozada (Lead Designer), Karla López (Design Systems), Rosario Flores (Branding)",
        },
        summary: "A multi-company, role-based platform designed on top of an existing design system and an almost frozen backend.",
        short: "Multi-company and role-based, built on an almost frozen backend.",
        intro:
          "Nea is a corporate platform and card for finance teams, later extended to transport companies with large fleets, daily routes and decentralized operations. My work covered the web platform's design on top of an existing design system.",
        introImg: "nea-intro.webp",
        sections: [
          {
            h: "The problem",
            p: [
              "Moving into transport exposed poor usability for non-technical users, flows that didn't fit routes, per diems and field work, visual inconsistencies, fragmented information and no native support for teams or multiple companies. Clients used spreadsheets to compensate.",
            ],
            img: ["nea-field.webp"],
          },
          {
            h: "Constraints and design principles",
            list: [
              "Multi-company support as a critical need.",
              "Three roles (admin, cardholder and observer) needing different views of the same entities.",
              "A small engineering team, so changes had to be incremental and reusable.",
              "Mobile support, since many users work on the road.",
              "No room to change models, endpoints or business rules; new logic had to live in the front end.",
            ],
            p2: [
              "Within that room, three principles guided the design: simplify for non-technical users, differentiate experiences by role and build new logic on the existing infrastructure.",
            ],
            carousel: true,
            img: ["nea-roles-1.webp", "nea-roles-2.webp", "nea-roles-3.webp"],
          },
          {
            h: "Multi-company",
            p: [
              "A persistent company selector switches the context of the whole platform while keeping the current module, filters and views.",
            ],
            carousel: true,
            img: ["nea-company-1.webp", "nea-company-2.webp"],
          },
          {
            h: "Budgets",
            p: [
              "Modeled as a hierarchy: Company → Area → Operator or Team → Card. The creation flow covers basic setup, rules and permissions, members, duration and recurrence, and a final review on mobile and desktop. The detail view shows available versus spent, category breakdowns, members, linked transactions and controlled adjustments.",
            ],
            carousel: true,
            img: ["nea-budgets-1.webp", "nea-budgets-2.webp", "nea-budgets-3.webp"],
          },
          {
            h: "Transactions",
            p: [
              "Organized into Purchases, Commissions and Deposits. Purchase details have normal, expanded and rejected states, with the rejection cause stated explicitly. Accounting gets custom fields, accounting metadata and XML (SAT) management inside the same flow.",
            ],
            carousel: true,
            img: ["nea-transactions-1.webp", "nea-transactions-2.webp", "nea-transactions-3.webp"],
          },
          {
            h: "Users",
            p: [
              "Adding a user happens in a side drawer over the list. On desktop it keeps the context in view; on mobile the same pattern adapts to the screen width, which helps the responsive side without designing a separate flow.",
            ],
            img: ["nea-system.webp"],
          },
          {
            h: "Impact",
            p: [
              "Transport clients could model their operations, and operators and admins better understood spending rules. Transaction and XML review became part of period closing. The design system reduced visual patching, support reported fewer questions and sales had a clearer story for acquisition. I didn't measure ticket reduction or training time rigorously, and I'd call that out as a limitation.",
            ],
            img: ["nea-impact.webp"],
          },
          {
            h: "What I take from it",
            p: [
              "Nea changed a lot in three years: it went from a platform for finance teams to one that also runs the operations of transport companies. That leap was teamwork; I worked alongside the lead designer, the design systems team and the branding team, and every decision built on what the others had already made.",
              "What I take from it is that constraints, even hard ones, don't stop a product from evolving when you design with them: without touching the backend, multi-company support and budgets were solved from the front end, with small, reusable changes.",
            ],
          },
        ],
        hero: ["nea-01-hero.webp"],
        color: "#111111",
        light: true,
      },
    },
  },

  es: {
    htmlLang: "es",
    nav: { product: "Producto", lab: "Lab", about: "Sobre mí", contact: "Contacto" },
    switchTo: "EN",
    skip: "Saltar al contenido",
    role: "Diseñadora de producto · Guadalajara, MX",
    footer: { loc: "Guadalajara, MX · Disponible en remoto", rights: "© 2026 Diana Becerra" },
    home: {
      title: "Diana Becerra — Diseñadora de producto",
      desc: "Diseñadora de producto en Guadalajara: sistemas de diseño, interfaces claras y experimentos con IA.",
      h1: "Diseño productos digitales con <em>estructura</em> y propósito.",
      sub: "Sistemas de diseño escalables, interfaces claras y experimentos con IA.",
      ctaProduct: "Ver proyectos",
      ctaLab: "Explorar el Lab",
      selected: "Proyectos",
      all: "Ver todo",
      labKicker: "Lab",
      labH: "Experimentos con IA.",
      labP: "Cosas que construyo y pruebo para entender cómo diseñar con IA.",
      labCta: "Abrir el Lab",
      brandKicker: "Marca",
      brandH: "También hago marca.",
      brandHP: "Identidades para hoteles, restaurantes y desarrollos residenciales.",
      brandCta: "Ver trabajo de marca",
    },
    product: {
      title: "Producto — Diana Becerra",
      desc: "Casos de estudio de diseño de producto: Brel Financial, Innerly y Nea.",
      kicker: "Producto",
      h1: "Trabajo de producto, con el <em>razonamiento</em> incluido.",
      p: "Tres casos en fintech y desarrollo personal. Cada uno cuenta el problema, las restricciones, las decisiones que tomé y lo que haría distinto.",
      brandKicker: "También",
      brandH: "También hago marca.",
      brandHP: "Identidades para hoteles, restaurantes y desarrollos residenciales.",
      brandP: "Identidades y sistemas visuales para hospitalidad y bienes raíces, desde antes y junto con producto.",
      brandCta: "Ver trabajo de marca",
      next: "Siguiente caso",
      back: "← Producto",
      meta: { role: "Rol", year: "Año", focus: "Enfoque", team: "Equipo", status: "Estado" },
      figma: "Abrir prototipo en Figma ↗",
      protoH: "Prototipo interactivo",
      protoNote: "Navega el prototipo. Se ve mejor en escritorio.",
    },
    brand: {
      title: "Marca — Diana Becerra",
      desc: "Proyectos de marca e identidad visual para hospitalidad y bienes raíces.",
      kicker: "Marca",
      h1: "Trabajo de marca, <em>antes</em> y junto con producto.",
      p: "Identidades, piezas y sistemas visuales para lugares: hoteles, restaurantes, desarrollos residenciales. Realizados con Casa 231.",
      done: "Qué se hizo",
      context: "Contexto",
      back: "← Producto",
    },
    lab: {
      title: "Lab — Diana Becerra",
      desc: "Experimentos con IA: qué quería averiguar, qué decidí y qué hizo la IA.",
      kicker: "Lab",
      h1: "Experimentos con <em>criterio</em>.",
      p: "Un hub de cosas que construyo con IA.",
      question: "La pregunta",
      decided: "Qué decidí",
      ai: "Qué hizo la IA",
      change: "Qué cambiaría",
      open: "Abrir experimento →",
      openExt: "Ver en Instagram ↗",
      live: "Disponible",
      ongoing: "En curso",
      soon: "Vienen más experimentos.",
      items: [
        {
          slug: "art-library",
          href: "/es/lab/art-library/",
          title: "Biblioteca de arte",
          year: "2026",
          status: "live",
          color: "#EE5B20",
          summary:
            "Una guía para quienes aman los museos: 12 periodos, mis piezas favoritas y el museo donde las vi.",
          question: "¿Cómo dejar de sentirte perdida entre periodos y corrientes cuando entras a un museo?",
          decided:
            "Primero los periodos, cada uno con el contexto de su época. Las artistas mujeres están marcadas. Encima van mis piezas favoritas, con su museo. Cuando una imagen no es obra del artista, la página lo dice.",
          ai: "Claude escribió el código y ayudó a redactar entradas. La estructura, la voz y las reglas editoriales fueron mías.",
          change: "Verificar los derechos de las imágenes y sustituir los marcadores por imágenes de acceso abierto para cada artista.",
        },
        {
          slug: "some-other-place",
          href: "https://www.instagram.com/some.otherplace/",
          external: true,
          title: "Some Other Place",
          year: "2023",
          status: "ongoing",
          color: "#FCB9EF",
          summary: "Un proyecto personal que explora imágenes generadas con IA. Vive en Instagram.",
        },
      ],
    },
    about: {
      title: "Sobre mí — Diana Becerra",
      desc: "Diseñadora de producto en Guadalajara con diez años entre marca, diseño visual y producto.",
      kicker: "Sobre mí",
      h1: "Soy Diana, diseñadora de producto.<span class=\"h1-sub\">Trabajo con experiencias que buscan ser realmente útiles.</span>",
      p1: "Me interesa el diseño que no interrumpe: el que ayuda a que lo complejo se sienta claro y usable.",
      p2: "La curiosidad es mi brújula. Siempre con ganas de hablar de diseño, tecnología o del extraño cruce entre ambos.",
      museumsLine: "También me gusta viajar, los museos son el primer lugar que visito.",
      museumsLink: "Lo convertí en una guía de historia del arte →",
      natureLine: "Me inspiran los paisajes cotidianos y la naturaleza.",
      expH: "+10 años en diseño, 5 en producto digital.<span class=\"h1-sub\">Mi enfoque: una atención constante a cómo una herramienta acompaña a quien la usa.</span>",
      p3: "Antes de producto trabajé años en agencias de marketing, creando identidades, sitios web y comunicación para hospitalidad y bienes raíces. De esa etapa me quedó una base sólida de diseño (jerarquía, armonía, composición) y el cuidado por la primera impresión.",
      brandLink: "Ver mi trabajo de marca →",
      toolkitH: "Toolkit",
      toolkit: [
        ["Claude", "Asistente de IA", "#D97757"],
        ["Figma", "Diseño", "#111111"],
        ["Flora", "GenAI", "#111111"],
        ["Adobe", "Diseño", "#E1251B"],
        ["Lovable", "App builder", "#111111"],
        ["Genway", "Investigación con IA", "#6C5CE7"],
      ],
    },
    contact: {
      title: "Contacto — Diana Becerra",
      desc: "Contacta a Diana Becerra, diseñadora de producto.",
      kicker: "Contacto",
      h1: "Hablemos de tu próximo <em>producto</em>.",
      p: "Escríbeme sobre diseño de producto, sistemas de diseño o experimentos con IA. Trabajo en remoto desde Guadalajara.",
      email: "Correo",
      elsewhere: "En otros lugares",
    },
    notFound: { title: "Página no encontrada", h1: "Esta página <em>se movió</em>.", p: "Prueba con el inicio.", cta: "Ir al inicio" },
    cases: {
      "brel-client-portal": {
        title: "Brel Financial",
        sub: "Portal de clientes para una arrendadora",
        tags: "Financiero · Diseño de producto",
        year: "2026",
        meta: { role: "Product Designer", year: "2026 · 2 meses", focus: "Aplicación web responsiva, sistema de diseño", status: "Entregado en alta fidelidad, aún sin lanzamiento" },
        summary: "Rediseño de un portal de clientes alrededor de su usuaria más frecuente: la contadora del equipo financiero del cliente.",
        short: "Diseñado para quien lo usa a diario: la contadora del cliente.",
        intro:
          "Brel es una arrendadora boutique mexicana con más de 15 años de operación. Su posicionamiento premium no se reflejaba en su portal de clientes. El objetivo fue rediseñar la plataforma alrededor de su usuario principal, reconstruir la arquitectura de información según las tareas y elevar la calidad visual.",
        introImg: "brel-intro.webp",
        sections: [
          {
            h: "El problema",
            p: [
              "El portal mezclaba las necesidades del director general, contabilidad y operación. Quien más lo usaba era el equipo financiero del cliente, sobre todo contadoras de alrededor de 50 años, y la jerarquía no seguía su flujo de trabajo. Además, el diseño se sentía genérico para una marca premium.",
            ],
            carousel: true,
            img: ["brel-problem-1.webp", "brel-problem-2.webp", "brel-problem-3.webp"],
          },
          {
            h: "Arquitectura de información",
            p: [
              "Evalué dos estructuras: por razón social, pensada para directivos, y por tarea, pensada para usuarias financieras de alta frecuencia. Validé tres proto-personas con el cliente, que confirmó a la contadora como usuaria principal.",
              "Esa decisión definió el alcance y llevó a una navegación por tareas: Resumen, Activos, Estados de cuenta, Pagos, Documentos, Siniestros y seguros, y un llamado a la acción de ayuda.",
            ],
            img: ["brel-02-ia.webp"],
          },
          {
            h: "Restricciones",
            list: [
              "Una sola razón social por sesión.",
              "Usuarios 50+: texto mínimo de 16px; 14px solo para badges; 12px solo para texto legal o de pie de página.",
              "Un portal informativo, no transaccional.",
              "Estructura multi-folio: un cliente puede tener varios contratos.",
              "Figma como herramienta de diseño.",
            ],
            img: ["brel-03-constraints.webp"],
          },
          {
            h: "Estrategia de diseño",
            p: [
              "Usé la sección Activos como piloto, pasando de wireframe a alta fidelidad e iterando con el cliente antes de construir un sistema completo. El resto de las pantallas reutilizó esas decisiones, con tokens y componentes pensados para facilitar el trabajo de ingeniería.",
            ],
            img: ["brel-04-strategy.webp"],
          },
          {
            h: "Sistema de diseño",
            p: [
              "Parte de tres colores de marca (gris, azul y negro) y se organiza en tres capas: foundations, components y patterns.",
            ],
            img: ["brel-05-system.webp"],
          },
          {
            h: "Estado actual",
            p: [
              "Entregado en alta fidelidad para móvil y escritorio, con sistema de diseño documentado. Aún no se lanza, así que todavía no hay resultados. Las métricas definidas para validarlo: adopción del portal, frecuencia de uso de las contadoras, reducción de tickets de soporte y tiempo para completar tareas.",
            ],
            img: ["brel-06-status.webp"],
          },
          {
            h: "Lo que me llevo",
            p: [
              "El proyecto partió de una pregunta: quién usa el portal a diario y para qué. Diseñé la jerarquía alrededor de la contadora, no del organigrama del cliente.",
              "Si lo repitiera, validaría la arquitectura con contadoras reales antes de construir el sistema completo, y definiría desde el inicio cómo medir adopción y tareas terminadas.",
            ],
          },
        ],
        hero: ["brel-01-hero.webp"],
        figma: true,
        color: "#FCB9EF",
      },
      innerly: {
        title: "Innerly",
        sub: "Una plataforma de autoconocimiento",
        tags: "Desarrollo personal · Diseño de producto",
        year: "2025",
        meta: { role: "Product Designer", year: "2025 · 6 meses", focus: "Mobile-first, sistema de diseño", status: "Diseño completo entregado; cambiaron las prioridades antes del lanzamiento" },
        summary: "Un rediseño mobile-first que lleva a las personas del resultado de un test a herramientas de desarrollo personal, para que tengan razones para volver.",
        short: "Del resultado de un test a un camino de desarrollo personal.",
        intro:
          "Innerly es una plataforma de autoconocimiento: las personas llegan al hacer un test en línea y leen sus resultados. Pero un resultado se lee una vez y ahí termina. Para darle más valor a la plataforma sin depender solo de agregar tests, investigué cómo nutrirla, y la apuesta fue sumar herramientas de desarrollo personal. Rediseñé la experiencia mobile-first alrededor de ese camino.",
        introImg: "innerly-02-research.webp",
        sections: [
          {
            h: "Investigación",
            p: [
              "Para nutrir la plataforma más allá de agregar tests, revisé apps de bienestar y psicología para ver patrones de navegación, progreso y tono, y realicé entrevistas asistidas por IA. Aparecieron tres patrones: dashboards que apuntan a una acción, progreso ligero y continuo, y ninguna métrica rígida que genere ansiedad.",
            ],
            img: ["innerly-03-architecture.webp"],
          },
          {
            h: "Decisiones",
            p: [
              "El MVP mejoraría la experiencia existente y sumaría herramientas que convierten la reflexión de un test en crecimiento continuo: cursos y afirmaciones. La mayor parte del tráfico era móvil, así que el rediseño fue mobile-first y regido por un sistema de diseño, con menos pantallas y una dirección más clara.",
            ],
            img: ["innerly-overview.webp"],
          },
          {
            h: "Home",
            p: [
              "Muestra dónde se quedó la persona y qué puede hacer hoy, con acciones rápidas y pequeñas señales de progreso tipo racha en lugar de un dashboard denso.",
            ],
            img: ["innerly-05-home.webp"],
          },
          {
            h: "Tests",
            p: [
              "Reorganizados en categorías comprensibles con encabezados y etiquetas. Cada resultado tiene una vista previa con una explicación corta y un llamado a la acción directo.",
            ],
            img: ["innerly-06-tests.webp"],
          },
          {
            h: "Cursos",
            p: [
              "Basados en patrones de e-learning, con el contenido separado de la navegación principal. Cada módulo termina con una microacción o afirmación para fomentar el regreso.",
            ],
            img: ["innerly-07-courses.webp"],
          },
          {
            h: "Lo que se recortó",
            p: [
              "Un conjunto más amplio de herramientas, que incluía audio de meditación personalizado con ElevenLabs, se redujo por presupuesto y alcance del equipo. Las afirmaciones quedaron en el diseño porque eran lo más fácil de construir.",
            ],
            img: ["innerly-08-affirmations.webp"],
          },
          {
            h: "Sistema de diseño",
            p: [
              "Tokens de color con contraste AA, escalas cerradas de tipografía (16/20/24/32) y espaciado (4/8/12/16/24/32), tres niveles de elevación y componentes reutilizables: botones, tarjetas, encabezados y menús.",
            ],
            img: ["innerly-09-system.webp"],
          },
          {
            h: "Estado actual",
            p: [
              "El producto no llegó a producción porque cambiaron las prioridades, pero se entregó una actualización completa de arquitectura y UI, lista para implementarse. La plataforma pasó de acumular resultados a ofrecer un camino que se puede retomar cada día.",
            ],
            img: ["innerly-mockup.webp"],
          },
          {
            h: "Qué haría distinto",
            p: [
              "Validar primero el flujo con un prototipo rápido y personas reales, y en paralelo impulsar criterios verificables para el contenido, revisados por profesionales calificados.",
            ],
          },
        ],
        hero: ["innerly-01-hero.webp"],
        color: "#EE5B20",
      },
      nea: {
        title: "Nea",
        sub: "Plataforma corporativa y tarjeta",
        tags: "SaaS · Fintech · Diseño de producto",
        year: "2021–2024",
        meta: {
          role: "Product Designer",
          year: "2021–2024",
          focus: "Plataforma web",
          team: "Cindy Lozada (Lead Designer), Karla López (Design Systems), Rosario Flores (Branding)",
        },
        summary: "Una plataforma multiempresa y por roles, diseñada sobre un sistema de diseño existente y un backend casi congelado.",
        short: "Multiempresa y por roles, sobre un backend casi congelado.",
        intro:
          "Nea es una plataforma corporativa y tarjeta para equipos de finanzas, que luego se extendió a empresas de transporte con grandes flotas, rutas diarias y operación descentralizada. Mi trabajo cubrió el diseño de la plataforma web sobre un sistema de diseño existente.",
        introImg: "nea-intro.webp",
        sections: [
          {
            h: "El problema",
            p: [
              "Entrar a transporte expuso mala usabilidad para usuarios no técnicos, flujos que no se ajustaban a rutas, viáticos y trabajo en campo, inconsistencias visuales, información fragmentada y ningún soporte nativo para equipos o varias empresas. Los clientes compensaban con hojas de cálculo.",
            ],
            img: ["nea-field.webp"],
          },
          {
            h: "Restricciones y principios de diseño",
            list: [
              "Multiempresa como necesidad crítica.",
              "3 roles (administrador, tarjetahabiente y observador) que necesitan vistas distintas de las mismas entidades.",
              "Un equipo de ingeniería pequeño, así que los cambios debían ser incrementales y reutilizables.",
              "Soporte móvil, porque muchos usuarios trabajan en carretera.",
              "No había margen para cambiar modelos, endpoints ni reglas de negocio; la lógica nueva tenía que vivir en el front end.",
            ],
            p2: [
              "Con ese margen, tres principios guiaron el diseño: simplificar para usuarios no técnicos, diferenciar las experiencias por rol y construir la lógica nueva sobre la infraestructura existente.",
            ],
            carousel: true,
            img: ["nea-roles-1.webp", "nea-roles-2.webp", "nea-roles-3.webp"],
          },
          {
            h: "Multiempresa",
            p: [
              "Un selector de empresa persistente cambia el contexto de toda la plataforma y conserva el módulo, los filtros y las vistas actuales.",
            ],
            carousel: true,
            img: ["nea-company-1.webp", "nea-company-2.webp"],
          },
          {
            h: "Presupuestos",
            p: [
              "Modelados como una jerarquía: Empresa → Área → Operador o Equipo → Tarjeta. El flujo de creación cubre configuración básica, reglas y permisos, integrantes, duración y recurrencia, y una revisión final en móvil y escritorio. La vista de detalle muestra disponible contra gastado, desglose por categoría, integrantes, movimientos vinculados y ajustes controlados.",
            ],
            carousel: true,
            img: ["nea-budgets-1.webp", "nea-budgets-2.webp", "nea-budgets-3.webp"],
          },
          {
            h: "Movimientos",
            p: [
              "Organizados en Compras, Comisiones y Depósitos. El detalle de una compra tiene estados normal, expandido y rechazado, con la causa del rechazo explícita. Contabilidad cuenta con campos personalizados, metadatos contables y gestión de XML (SAT) dentro del mismo flujo.",
            ],
            carousel: true,
            img: ["nea-transactions-1.webp", "nea-transactions-2.webp", "nea-transactions-3.webp"],
          },
          {
            h: "Usuarios",
            p: [
              "Añadir un usuario ocurre en un drawer lateral sobre la lista. En escritorio mantiene el contexto a la vista; en móvil el mismo patrón se adapta al ancho de la pantalla, lo que ayuda a resolver lo responsivo sin diseñar un flujo aparte.",
            ],
            img: ["nea-system.webp"],
          },
          {
            h: "Impacto",
            p: [
              "Los clientes de transporte pudieron modelar su operación, y operadores y administradores entendieron mejor las reglas de gasto. La revisión de movimientos y XML pasó a formar parte del cierre de periodo. El sistema de diseño redujo los parches visuales, soporte reportó menos preguntas y ventas contó con una narrativa más clara. No medí con rigor la reducción de tickets ni el tiempo de capacitación, y lo señalo como una limitación.",
            ],
            img: ["nea-impact.webp"],
          },
          {
            h: "Lo que me llevo",
            p: [
              "Nea cambió mucho en tres años: pasó de ser una plataforma para equipos de finanzas a sostener también la operación de empresas de transporte. Ese salto fue trabajo de equipo; trabajé junto a la lead designer, el equipo de sistemas de diseño y el de marca, y cada decisión se apoyaba en lo que los demás ya habían construido.",
              "Me quedo con que las restricciones, incluso las duras, no frenan la evolución de un producto cuando se diseña con ellas: sin tocar el backend, la multiempresa y los presupuestos se resolvieron desde el front end, con cambios pequeños y reutilizables.",
            ],
          },
        ],
        hero: ["nea-01-hero.webp"],
        color: "#111111",
        light: true,
      },
    },
  },
};

export const CASE_ORDER = ["brel-client-portal", "innerly", "nea"];
