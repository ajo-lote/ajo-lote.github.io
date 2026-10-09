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
      sub: "Scalable design systems, clear interfaces and experiments with AI, made with judgment, not formulas.",
      ctaProduct: "See product work",
      ctaLab: "Visit the Lab",
      selected: "Selected product work",
      all: "All product work",
      labKicker: "Lab",
      labH: "Experiments with AI, with the reasoning shown.",
      labP: "Each one is a question I wanted to answer: what I decided, what the AI did and what I would change.",
      labCta: "Open the Lab",
      brandKicker: "Also",
      brandH: "A decade in brand is why I catch things a single-track designer wouldn't.",
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
      h1: "Experiments with <em>judgment</em>, not formulas.",
      p: "A hub of things I build and test with AI. Each experiment has a short card: the question, my decisions, what the AI did and what I would change.",
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
          href: "/lab/art-library/",
          title: "Art Library",
          year: "2026",
          status: "live",
          color: "#EE5B20",
          summary:
            "Art history organized by context (society, technology, nature), not just by names. 130 artists across 12 periods, with women artists marked.",
          question: "How do you learn art history as a map of contexts instead of a list of names?",
          decided:
            "Periods first, with a short context for each. Women artists are marked. When an image is not the artist's work, the page says so.",
          ai: "Claude wrote the code and helped draft entries. Structure, voice and editorial rules were mine.",
          change: "Verify image rights and replace placeholders with open-access images for every artist.",
          note: "Interface in Spanish.",
        },
        {
          slug: "some-other-place",
          href: "https://www.instagram.com/some.otherplace/",
          external: true,
          title: "Some Other Place",
          year: "",
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
      h1: "Hi, I'm Diana. I'm a product designer working on experiences that aim to be <em>truly useful</em>.",
      p1: "I'm drawn to design that doesn't interrupt: the kind that helps something complex feel clear and usable.",
      p2: "Curiosity is always my compass. A decade across brand, web and product means I catch things a single-track designer wouldn't. Always down to talk design, tech, or the weird overlap between them.",
      p3: "Before product, I spent years in brand and agency work: identities, websites and communication for hospitality and real estate. That is where I learned to care about how something feels the moment you arrive.",
      p4: "I love to travel, and museums are the first place I visit.",
      facts: [
        { l: "Experience", v: "10+ years in design", s: "5 in digital product" },
        { l: "Based in", v: "Guadalajara, MX", s: "Available remotely" },
        { l: "Focus", v: "Design systems", s: "Clear interfaces · AI" },
      ],
      toolkitH: "Toolkit",
      toolkit: [
        ["Figma", "Design"],
        ["Adobe", "Design"],
        ["Midjourney", "GenAI"],
        ["Genway", "AI research"],
        ["Lovable", "App builder"],
      ],
      brandLink: "See my brand work →",
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
        sub: "Client portal for a boutique leasing company",
        tags: "Financial · Product design",
        year: "2026",
        meta: { role: "Product Designer", year: "2026 · 2 months", focus: "Responsive web app, design system", status: "Delivered in high fidelity, not yet launched" },
        summary: "Redesign of a client portal around its most frequent user: the accountant on the client's finance team.",
        intro:
          "Brel is a Mexican boutique leasing company with more than 15 years of operation. Its premium positioning wasn't reflected in its client portal. The goal was to redesign the platform around its main user, rebuild the information architecture around tasks and raise the visual quality.",
        sections: [
          {
            h: "The problem",
            p: [
              "The portal mixed the needs of the CEO, accounting and operations. The most frequent user was the client's finance team, mostly accountants around 50, and the hierarchy didn't follow their workflow. The design also felt generic for a premium brand.",
            ],
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
          },
          {
            h: "What I take from it",
            p: [
              "The project started with one question: who uses the portal every day, and for what. I designed the hierarchy around the accountant, not around the client's org chart.",
            ],
          },
        ],
        hero: ["brel-01-hero.webp"],
        figma: true,
        color: "#FCB9EF",
      },
      innerly: {
        title: "Innerly",
        sub: "A self-knowledge platform built on tests",
        tags: "Personal development · Product design",
        year: "2025",
        meta: { role: "Product Designer", year: "2025 · about 6 months", focus: "Mobile-first, design system", status: "Full design delivered; priorities changed before launch" },
        summary: "A mobile-first redesign that gives test results a clear next step so people have a reason to come back.",
        intro:
          "Innerly users received test results but had no clear next step, which gave the business little reason to bring them back. I redesigned the experience mobile-first and added Courses as the MVP's new piece.",
        sections: [
          {
            h: "Research",
            p: [
              "I reviewed wellness and psychology apps for navigation, progress and tone patterns, and ran AI-assisted interviews. Three patterns kept showing up: dashboards that point to an action, light ongoing progress, and no rigid metrics that create anxiety.",
            ],
            img: ["innerly-02-research.webp"],
          },
          {
            h: "Decisions",
            p: [
              "The MVP would improve the existing experience and add Courses. Most traffic was mobile, so the redesign went mobile-first and was governed by a design system, aiming for fewer screens and clearer direction.",
            ],
            img: ["innerly-03-architecture.webp"],
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
              "A larger concept, including meditation audio personalized with ElevenLabs, was scaled back because of budget and team scope. Affirmations shipped in the design because they were the easiest to build.",
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
              "The product didn't reach production because priorities changed, but a full architecture and UI upgrade was delivered, ready for implementation.",
            ],
            img: ["innerly-10-prototype.webp"],
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
        sub: "Corporate platform and card for finance and transport teams",
        tags: "SaaS · Fintech · Product design",
        year: "2021–2024",
        meta: {
          role: "Product Designer",
          year: "2021–2024",
          focus: "Web platform, design system",
          team: "Cindy Lozada (Lead Designer), Karla López (Design Systems), Rosario Flores (Branding)",
        },
        summary: "A multi-company, role-based platform designed on top of an existing design system and an almost frozen backend.",
        intro:
          "Nea is a corporate platform and card for finance teams, later extended to transport companies with large fleets, daily routes and decentralized operations. My work covered the web platform's design on top of an existing design system.",
        sections: [
          {
            h: "The problem",
            p: [
              "Moving into transport exposed poor usability for non-technical users, flows that didn't fit routes, per diems and field work, visual inconsistencies, fragmented information and no native support for teams or multiple companies. Clients used spreadsheets to compensate.",
            ],
          },
          {
            h: "Constraints",
            list: [
              "No room to change models, endpoints or business rules; new logic had to live in the front end.",
              "A small engineering team, so changes had to be incremental and reusable.",
              "Mobile support, since many users work on the road.",
              "Several roles (admin, accounting, operators, cardholders) needing different views of the same entities.",
              "Multi-company support as a critical need, with no native data model for it.",
            ],
          },
          {
            h: "Design principles",
            list: ["Simplify for non-technical users.", "Differentiate experiences by role.", "Build new logic on the existing infrastructure."],
          },
          {
            h: "Multi-company",
            p: [
              "A persistent company selector switches the context of the whole platform while keeping the current module, filters and views.",
            ],
          },
          {
            h: "Budgets",
            p: [
              "Modeled as a hierarchy: Company → Area → Operator or Team → Card. The creation flow covers basic setup, rules and permissions, members, duration and recurrence, and a final review on mobile and desktop. The detail view shows available versus spent, category breakdowns, members, linked transactions and controlled adjustments.",
            ],
          },
          {
            h: "Transactions",
            p: [
              "Organized into Purchases, Commissions and Deposits. Purchase details have normal, expanded and rejected states, with the rejection cause stated explicitly. Accounting gets custom fields, accounting metadata and XML (SAT) management inside the same flow.",
            ],
          },
          {
            h: "Design system",
            p: [
              "Unified form and state patterns, table and hierarchy variants, subtle role accents and mobile-first components for field use, with fewer one-off styles.",
            ],
          },
          {
            h: "Impact",
            p: [
              "Transport clients could model their operations, and operators and admins better understood spending rules. Transaction and XML review became part of period closing. The design system reduced visual patching, support reported fewer questions and sales had a clearer story for acquisition. I didn't measure ticket reduction or training time rigorously, and I'd call that out as a limitation.",
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
      sub: "Sistemas de diseño escalables, interfaces claras y experimentos con IA, hechos con criterio y no con fórmulas.",
      ctaProduct: "Ver proyectos de producto",
      ctaLab: "Visitar el Lab",
      selected: "Producto, selección",
      all: "Todo el trabajo de producto",
      labKicker: "Lab",
      labH: "Experimentos con IA, con el razonamiento a la vista.",
      labP: "Cada uno es una pregunta que quería responder: qué decidí, qué hizo la IA y qué cambiaría.",
      labCta: "Abrir el Lab",
      brandKicker: "También",
      brandH: "Una década en marca es la razón por la que veo cosas que una diseñadora de una sola vía no ve.",
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
      brandP: "Identidades y sistemas visuales para hospitalidad y bienes raíces, desde antes y junto con producto.",
      brandCta: "Ver trabajo de marca",
      next: "Siguiente caso",
      back: "← Producto",
      meta: { role: "Rol", year: "Año", focus: "Enfoque", team: "Equipo", status: "Estado" },
      figma: "Abrir prototipo en Figma ↗",
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
      h1: "Experimentos con <em>criterio</em>, no con fórmulas.",
      p: "Un hub de cosas que construyo y pruebo con IA. Cada experimento tiene una ficha corta: la pregunta, mis decisiones, qué hizo la IA y qué cambiaría.",
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
          href: "/lab/art-library/",
          title: "Biblioteca de arte",
          year: "2026",
          status: "live",
          color: "#EE5B20",
          summary:
            "Historia del arte organizada por contexto (sociedad, tecnología, naturaleza) y no solo por nombres. 130 artistas en 12 periodos, con las artistas mujeres marcadas.",
          question: "¿Cómo se aprende la historia del arte como un mapa de contextos y no como una lista de nombres?",
          decided:
            "Primero los periodos, cada uno con un contexto breve. Las artistas mujeres están marcadas. Cuando una imagen no es obra del artista, la página lo dice.",
          ai: "Claude escribió el código y ayudó a redactar entradas. La estructura, la voz y las reglas editoriales fueron mías.",
          change: "Verificar los derechos de las imágenes y sustituir los marcadores por imágenes de acceso abierto para cada artista.",
        },
        {
          slug: "some-other-place",
          href: "https://www.instagram.com/some.otherplace/",
          external: true,
          title: "Some Other Place",
          year: "",
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
      h1: "Soy Diana, diseñadora de producto. Trabajo con experiencias que buscan ser <em>realmente útiles</em>.",
      p1: "Me interesa el diseño que no interrumpe: el que ayuda a que lo complejo se sienta claro y usable.",
      p2: "La curiosidad es mi brújula. Una década entre marca, web y producto significa que veo cosas que una diseñadora de una sola vía no vería. Siempre con ganas de hablar de diseño, tecnología o del extraño cruce entre ambos.",
      p3: "Antes de producto pasé años en marca y agencia: identidades, sitios web y comunicación para hospitalidad y bienes raíces. Ahí aprendí a cuidar cómo se siente algo en el momento en que llegas.",
      p4: "Me gusta viajar y los museos son el primer lugar que visito.",
      facts: [
        { l: "Experiencia", v: "+10 años en diseño", s: "5 en producto digital" },
        { l: "Radico en", v: "Guadalajara, MX", s: "Disponible en remoto" },
        { l: "Enfoque", v: "Sistemas de diseño", s: "Interfaces claras · IA" },
      ],
      toolkitH: "Toolkit",
      toolkit: [
        ["Figma", "Diseño"],
        ["Adobe", "Diseño"],
        ["Midjourney", "GenAI"],
        ["Genway", "Investigación con IA"],
        ["Lovable", "App builder"],
      ],
      brandLink: "Ver mi trabajo de marca →",
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
        sub: "Portal de clientes para una arrendadora boutique",
        tags: "Financiero · Diseño de producto",
        year: "2026",
        meta: { role: "Product Designer", year: "2026 · 2 meses", focus: "Aplicación web responsiva, sistema de diseño", status: "Entregado en alta fidelidad, aún sin lanzamiento" },
        summary: "Rediseño de un portal de clientes alrededor de su usuaria más frecuente: la contadora del equipo financiero del cliente.",
        intro:
          "Brel es una arrendadora boutique mexicana con más de 15 años de operación. Su posicionamiento premium no se reflejaba en su portal de clientes. El objetivo fue rediseñar la plataforma alrededor de su usuario principal, reconstruir la arquitectura de información según las tareas y elevar la calidad visual.",
        sections: [
          {
            h: "El problema",
            p: [
              "El portal mezclaba las necesidades del director general, contabilidad y operación. Quien más lo usaba era el equipo financiero del cliente, sobre todo contadoras de alrededor de 50 años, y la jerarquía no seguía su flujo de trabajo. Además, el diseño se sentía genérico para una marca premium.",
            ],
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
          },
          {
            h: "Lo que me llevo",
            p: [
              "El proyecto partió de una pregunta: quién usa el portal a diario y para qué. Diseñé la jerarquía alrededor de la contadora, no del organigrama del cliente.",
            ],
          },
        ],
        hero: ["brel-01-hero.webp"],
        figma: true,
        color: "#FCB9EF",
      },
      innerly: {
        title: "Innerly",
        sub: "Una plataforma de autoconocimiento basada en tests",
        tags: "Desarrollo personal · Diseño de producto",
        year: "2025",
        meta: { role: "Product Designer", year: "2025 · unos 6 meses", focus: "Mobile-first, sistema de diseño", status: "Diseño completo entregado; cambiaron las prioridades antes del lanzamiento" },
        summary: "Un rediseño mobile-first que da a los resultados de los tests un siguiente paso claro para que las personas tengan razones para volver.",
        intro:
          "Quienes usaban Innerly recibían resultados de tests pero no tenían un siguiente paso claro, y el negocio tenía pocas razones para traerlos de vuelta. Rediseñé la experiencia mobile-first y sumé Cursos como la pieza nueva del MVP.",
        sections: [
          {
            h: "Investigación",
            p: [
              "Revisé apps de bienestar y psicología para ver patrones de navegación, progreso y tono, y realicé entrevistas asistidas por IA. Aparecieron tres patrones: dashboards que apuntan a una acción, progreso ligero y continuo, y ninguna métrica rígida que genere ansiedad.",
            ],
            img: ["innerly-02-research.webp"],
          },
          {
            h: "Decisiones",
            p: [
              "El MVP mejoraría la experiencia existente y sumaría Cursos. La mayor parte del tráfico era móvil, así que el rediseño fue mobile-first y regido por un sistema de diseño, con menos pantallas y una dirección más clara.",
            ],
            img: ["innerly-03-architecture.webp"],
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
              "Un concepto más grande, que incluía audio de meditación personalizado con ElevenLabs, se redujo por presupuesto y alcance del equipo. Las afirmaciones quedaron en el diseño porque eran lo más fácil de construir.",
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
              "El producto no llegó a producción porque cambiaron las prioridades, pero se entregó una actualización completa de arquitectura y UI, lista para implementarse.",
            ],
            img: ["innerly-10-prototype.webp"],
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
        sub: "Plataforma corporativa y tarjeta para equipos de finanzas y transporte",
        tags: "SaaS · Fintech · Diseño de producto",
        year: "2021–2024",
        meta: {
          role: "Product Designer",
          year: "2021–2024",
          focus: "Plataforma web, sistema de diseño",
          team: "Cindy Lozada (Lead Designer), Karla López (Design Systems), Rosario Flores (Branding)",
        },
        summary: "Una plataforma multiempresa y por roles, diseñada sobre un sistema de diseño existente y un backend casi congelado.",
        intro:
          "Nea es una plataforma corporativa y tarjeta para equipos de finanzas, que luego se extendió a empresas de transporte con grandes flotas, rutas diarias y operación descentralizada. Mi trabajo cubrió el diseño de la plataforma web sobre un sistema de diseño existente.",
        sections: [
          {
            h: "El problema",
            p: [
              "Entrar a transporte expuso mala usabilidad para usuarios no técnicos, flujos que no se ajustaban a rutas, viáticos y trabajo en campo, inconsistencias visuales, información fragmentada y ningún soporte nativo para equipos o varias empresas. Los clientes compensaban con hojas de cálculo.",
            ],
          },
          {
            h: "Restricciones",
            list: [
              "No había margen para cambiar modelos, endpoints ni reglas de negocio; la lógica nueva tenía que vivir en el front end.",
              "Un equipo de ingeniería pequeño, así que los cambios debían ser incrementales y reutilizables.",
              "Soporte móvil, porque muchos usuarios trabajan en carretera.",
              "Varios roles (admin, contabilidad, operadores, tarjetahabientes) que necesitan vistas distintas de las mismas entidades.",
              "Multiempresa como necesidad crítica, sin modelo de datos nativo para ello.",
            ],
          },
          {
            h: "Principios de diseño",
            list: ["Simplificar para usuarios no técnicos.", "Diferenciar las experiencias por rol.", "Construir la lógica nueva sobre la infraestructura existente."],
          },
          {
            h: "Multiempresa",
            p: [
              "Un selector de empresa persistente cambia el contexto de toda la plataforma y conserva el módulo, los filtros y las vistas actuales.",
            ],
          },
          {
            h: "Presupuestos",
            p: [
              "Modelados como una jerarquía: Empresa → Área → Operador o Equipo → Tarjeta. El flujo de creación cubre configuración básica, reglas y permisos, integrantes, duración y recurrencia, y una revisión final en móvil y escritorio. La vista de detalle muestra disponible contra gastado, desglose por categoría, integrantes, movimientos vinculados y ajustes controlados.",
            ],
          },
          {
            h: "Movimientos",
            p: [
              "Organizados en Compras, Comisiones y Depósitos. El detalle de una compra tiene estados normal, expandido y rechazado, con la causa del rechazo explícita. Contabilidad cuenta con campos personalizados, metadatos contables y gestión de XML (SAT) dentro del mismo flujo.",
            ],
          },
          {
            h: "Sistema de diseño",
            p: [
              "Patrones unificados de formularios y estados, variantes de tablas y jerarquías, acentos sutiles por rol y componentes mobile-first para uso en campo, con menos estilos aislados.",
            ],
          },
          {
            h: "Impacto",
            p: [
              "Los clientes de transporte pudieron modelar su operación, y operadores y administradores entendieron mejor las reglas de gasto. La revisión de movimientos y XML pasó a formar parte del cierre de periodo. El sistema de diseño redujo los parches visuales, soporte reportó menos preguntas y ventas contó con una narrativa más clara. No medí con rigor la reducción de tickets ni el tiempo de capacitación, y lo señalo como una limitación.",
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
