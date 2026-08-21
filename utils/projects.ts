export const projects = [
  {
    title: 'Aduvi – White-label CRM Platform',
    status: '',
    imgUrl: 'https://i.postimg.cc/jjcfD3gv/screencapture-aduvi-2025-11-01-18-09-31-2.png',
    tech: ['Typescript', 'ReactJS', 'SASS', 'Redux', 'Ant Design'],
    liveSite: 'https://aduvi.com/',
    description:
      'I joined the frontend development team at Technoperia in September 2024 to work on Aduvi, a comprehensive enterprise white-label CRM platform serving 2000+ clients across multiple industries. Working collaboratively with a talented team of developers, I helped build this all-in-one solution for managing leads, bookings, events, custom forms, and client communication through a dedicated portal. My focus was on developing responsive, user-friendly interfaces and ensuring a smooth user experience across the platform, while implementing advanced features like real-time data synchronization, multi-view management systems, and comprehensive business automation tools.',
  },
  {
    title: 'View ECG',
    status: '',
    imgUrl:
      'https://i.postimg.cc/xTNL6R8f/screencapture-viewecg-Doctor-Monitoring-b374668e-ee0f-4395-a019-ed0e94e577fb-2025-11-01-18-10-32.png',
    tech: ['.NET C# Blazor Javascript'],
    liveSite: 'https://viewecg.com/',
    description:
      "Current Work: I joined the development team in August 2025 to work on this innovative AI-powered healthcare platform that connects doctors and patients. Working alongside a multidisciplinary team of healthcare professionals and developers, I contribute to building and enhancing the cloud-based ECG monitoring system. Our cloud system seamlessly integrates with measurements from mobile devices and enables comprehensive data analysis. The platform features special beat detection and classification algorithms designed by a team of doctors and computer scientists. Among the capabilities we've developed are:\nBeat classification (Normal, PVC, VEB, PAC, SVEB)\nRun-to-run identification (ventricular and supraventricular couplets, short and long runs)\nEpisode identification (atrial fibrillation, ventricular tachycardia, bigeminy, trigeminy)",
  },
  {
    title: 'AI Support Copilot',
    status: '',
    imgUrl: 'https://i.postimg.cc/4d061Mn7/Screenshot.png',
    tech: ['Python FastAPI', 'PostgreSQL pgvector', 'SQLAlchemy', 'Groq API', 'Docker', 'Railway', 'HTML CSS JavaScript'],
    seeCode: 'https://github.com/devemit/support-agent-copilot',
    description: `AI Support Copilot is an internal support-agent dashboard designed to help customer support teams understand tickets faster, retrieve relevant company knowledge, and draft grounded responses for human review. The system allows support agents to seed or upload knowledge-base documents such as refund policies, billing rules, subscription guides, and account access instructions. These documents are split into chunks, embedded, and stored in PostgreSQL with pgvector for similarity search.

When a support ticket is created, the app classifies the issue by category, priority, sentiment, and summary using Groq's LLM API. The ticket is then used to retrieve relevant knowledge-base chunks, which are passed to the model to generate a support reply draft with citations and suggested next actions. The agent can review, edit, accept, or reject the draft, creating a human-in-the-loop workflow.

The project covers core AI engineering concepts including RAG, vector search, document ingestion, embeddings, LLM prompting, structured JSON outputs, cited generation, feedback collection, Dockerized development, PostgreSQL/pgvector storage, and Railway deployment. It demonstrates how AI can assist support agents without directly replacing human review.`,
  },

  {
    title: 'Plexusmenu QR Menus',
    status: 'Live',
    imgUrl: 'https://i.postimg.cc/Kz0nQpXW/screencapture-menusinternational-vercel-app-2025-12-16-13-12-39.png',
    tech: ['Typescript', 'Nextjs', 'Prisma', 'Supabase', 'Tailwind CSS'],
    liveSite: 'https://plexusmenus.com/',
    description:
      'plexusmenu is a SaaS platform that lets restaurants create digital menus accessible via QR codes: owners sign up, add menu items (name, price, description, currency), and generate QR codes for customers to scan; the app offers free and premium subscriptions (via PayPal - currently running free) with premium features including custom QR code styles, downloadable codes, unlimited items, and no watermark, enabling instant menu updates without reprinting physical menus..',
  },
  {
    title: 'Easy Travel',
    status: 'beta',
    imgUrl: 'https://github.com/user-attachments/assets/eec04cfa-c5b0-4457-8247-4b6ae2c61729',
    tech: ['Typescript', 'NextJS', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    liveSite: 'https://travelsmart-devemits-projects.vercel.app/',
    seeCode: 'https://github.com/devemit/smart-travel',
    description:
      'Easy Travel is an innovative travel web application currently in beta phase, allowing users to explore destinations, check the weather, and plan their trips with the help of AI. Users can browse featured locations, access essential travel information, and receive personalized recommendations to enhance their travel experience. With a user-friendly interface, Easy Travel makes trip planning simple and enjoyable.',
  },
  {
    title: 'Reform Beach&Bar',
    status: 'Live',
    imgUrl: 'https://user-images.githubusercontent.com/107273888/229608163-2a1aeed4-a133-4549-98cd-35f5abe72a35.png',
    tech: ['Typescript', 'ReactJS', 'CSS'],
    liveSite: 'https://reformbeachbar.vercel.app/',
    seeCode: 'https://github.com/devemit/reform-menu',
    description:
      'Beach Bar Reform is a React web application designed to enhance the dining experience in restaurants by providing a seamless QR-scanning menu for customers. The application aims to reduce physical contact between customers and menus, making it more hygienic and convenient, especially in a post-pandemic world.',
  },
  {
    title: 'Dependency Checker',
    imgUrl: 'https://i.postimg.cc/d1KZwQVs/test.png',
    tech: ['NodeJS', 'CLI', 'NPM'],
    liveSite: 'https://www.npmjs.com/package/cli-depsnap',
    seeCode: 'https://github.com/devemit/npm-dependency-checker',
    description:
      'A high-performance CLI tool for checking npm dependencies, security vulnerabilities, and update recommendations. What it does: Dependency Analysis: Check which packages are outdated and need updates Security Auditing: Scan for known vulnerabilities in your dependencies Smart Recommendations: Get safe update suggestions with breaking change warnings High Performance: Parallel processing, caching, and connection pooling for speed Key Features: Multiple Output Formats: Table, JSON, CSV for different use cases Safety-First Updates: Shows safe patch/minor updates by default, major updates with warnings Ready-to-Use Commands: Provides exact npm commands you can copy-paste Performance Optimized: Handles large projects efficiently with configurable concurrency',
  },
  {
    title: 'Union Protect',
    status: 'Live',
    imgUrl: 'https://i.postimg.cc/vTqTbpZD/goc.png',
    tech: ['TypeScript', 'Next.js', 'Three.js', 'Tailwind CSS'],
    liveSite: 'https://unionprotekt.com/',
    description:
      'Union Protect is a professional multilingual website for an industrial safety and branding company. It showcases protective equipment and custom production services through interactive  3D product visuals, structured service pages, product categories, and contact inquiry flows. The site was built to present the brand in a more premium way while helping customers	explore services and request information quickly.',
  },
  {
    title: 'Plexusmenu QR Menus - Promote App',
    imgUrl: 'https://i.postimg.cc/JzYMK0P4/screencapture-plexusmenu-vercel-app-2025-11-28-00-04-04.png',
    tech: ['Typescript', 'ReactJS', 'Tailwind CSS'],
    liveSite: 'https://plexusmenu.vercel.app/',
    seeCode: 'https://github.com/devemit/plexusmenu',
    description:
      'A business promotion platform I developed and own, specializing in creating custom QR menu solutions for restaurants, bars, and hotels. The platform offers a selection of professional templates that clients can choose from, with full customization capabilities including branding, color schemes, and layout preferences. I work directly with clients through a collaborative process, implementing updates and refinements based on their specific needs and feedback to ensure each digital menu reflects their unique brand identity.',
  },
]

export const experiences = [
  {
    workplace: 'Innovation Dooel',
    position: 'Software Developer',
    time: '24 - present',
    description:
      'Working on an innovative AI-powered healthcare platform that connects doctors and patients through a cloud-based ECG monitoring system. Contributing to building and enhancing the platform that seamlessly integrates with measurements from mobile devices and enables comprehensive data analysis. The system features advanced beat detection and classification algorithms, real-time device data synchronization, and intuitive clinician dashboards designed to deliver clearer diagnostics and improve patient care outcomes.',
    href: 'https://innovation.mk/',
  },
  {
    workplace: 'Technoperia',
    position: 'Frontend Developer',
    time: "24 - '25",
    description:
      'Contributed to Aduvi, an enterprise platform used by 2000+ clients, with a focus on responsive UI, multi-view management, and real-time data synchronization across the frontend.',
    href: 'https://technoperia.com/',
  },
]
