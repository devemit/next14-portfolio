const blogs = [
  {
    date: 'June 2025 - Present',
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
]

export default blogs
