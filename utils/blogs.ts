const blogs = [
  {
    date: 'June 2025 - December 2025',
    slug: 'easy-travel-ai-platform',
    name: 'Easy Travel AI-Powered Platform',
    tools: 'TypeScript, Next.js 15, Tailwind CSS, Shadcn UI, Prisma, PostgreSQL, OpenAI API, Weather APIs',
    description: `I started building Easy Travel because I want to explore more of the world, but planning trips by myself was chaotic—endless tabs, outdated blogs, and disconnected tools for budgeting, weather, and itineraries. This app brings everything into one place.

I’m using TypeScript with strict mode and custom types to keep the data model tight, and Next.js 15 with server components and streaming so pages load quickly even while AI suggestions render. Tailwind CSS and Shadcn UI handle the responsive layout so the planner feels at home on desktop or on my phone.

Prisma and PostgreSQL manage the itinerary data with proper relationships and caching so I can store and revisit past trips. I use Grok AI to plan both weekend getaways and longer trips by asking for itineraries that match my budget, vibe, and time constraints.

Grok helps shortlist destinations, flag visa or safety notes, and returns realistic daily routes that I can edit. The app blends those recommendations with live weather forecasts, cost breakdowns. It’s still very much a work in progress—this is the initial version I’m using to prove out the workflow before layering in more automation and collaboration. Solving that messy planning workflow lets me go from dream board to booked ticket without the spreadsheet fatigue.`,
    category: 'Personal Project',
    status: 'Beta Phase',
  },

  {
    date: 'Dec 2025 - Present',
    slug: 'plexusmenu-qr-menus',
    name: 'Plexusmenu QR Menus',
    tools: 'TypeScript, Next.js 16, Tailwind CSS, Prisma, Supabase',
    description: `I built Plexusmenu QR Menus to solve a real problem I saw in the restaurant industry—the constant need to reprint physical menus whenever prices or items change. Restaurants were spending time and money on menu updates, and customers were often looking at outdated information. This SaaS platform lets restaurant owners create digital menus accessible via QR codes, enabling instant updates without any printing costs.

I'm using TypeScript with strict mode and custom types to ensure type safety across the application, and Next.js 16 with server components for fast page loads and optimal performance. Tailwind CSS handles the responsive design so menus look great on any device customers use to scan and view.

Prisma and Supabase manage the menu data with proper relationships and real-time capabilities. Restaurant owners can sign up, add menu items with details like name, price, description, and currency, then generate QR codes for their customers to scan. The platform offers both free and premium subscriptions (currently running free), with premium features including custom QR code styles, downloadable codes, unlimited menu items, and no watermark. The ability to update menus instantly means restaurants can respond quickly to seasonal changes, pricing adjustments, or ingredient availability without the hassle and expense of reprinting.`,
    category: 'Personal Project',
    status: 'Live, free to use',
  },

  {
    date: 'Jan 2026',
    slug: 'building-with-ai-every-day',
    name: 'How I Use AI Tools in My Daily Dev Workflow',
    tools: '',
    description: `I don’t treat AI tools as a magic button that writes my code for me. Instead, I think of them as teammates that sit next to me in the editor, helping me move faster, stay unblocked, and keep a higher level of focus on architecture and product decisions.

My main hub is Cursor. I use it as my editor, but the real power comes from having AI deeply integrated with the codebase. I’ll start a feature by writing a plain‑language plan in a comment or in a scratch file—what I want to build, edge cases to cover, and how it should feel in the UI. Then I ask Cursor to scaffold components, routes, or API handlers based on that plan. I don’t accept everything blindly; I review, refactor, and shape the code so it matches my style and standards.

For more complex reasoning—like designing data models, breaking down big refactors, or exploring alternative architectures—I lean on tools like Claude Code and GPT-based assistants. I’ll paste in relevant parts of the codebase and ask questions like “what’s the safest way to introduce this without breaking existing behavior?” or “how would you structure this module so it’s easier to test?”. The goal isn’t just to get an answer, but to pressure-test my own ideas and see tradeoffs I might miss when I’m too deep in the code.

Cursor CLI is something I started using to escape living entirely inside the Cursor IDE. It lets me keep the AI context and assistance I like from Cursor, while doing the actual editing in VS Code or whatever IDE I feel like using that day. I stay in the terminal, run my usual workflows, and still have access to AI help without being locked into a single editor.

Day to day, AI also helps with the “glue work” that usually slows developers down: writing commit messages that actually explain the why, drafting documentation or README updates right after a feature ships, summarizing big diffs, and turning vague ideas into concrete todos. I try to keep a tight feedback loop: describe what I’m doing, get a suggestion, adapt it, run the tests, and repeat.

The most important rule I have is that I stay in control of the codebase. AI can propose implementations, but I’m responsible for the final design, security, and performance. Used this way, tools like Cursor, Claude Code, and assistants like this one don’t replace the craft of software engineering—they free up more mental space so I can focus on building better products and shipping faster.`,
    category: 'Writing',
    status: 'Ongoing reflections',
  },
]

export default blogs
