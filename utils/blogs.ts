const blogs = [
  {
    date: 'Jan 2026',
    slug: 'building-with-ai-every-day',
    name: 'How I Use AI Tools in My Daily Dev Workflow',
    tools: '',
    description: `AI is most useful to me when it shortens the distance between an idea and a well-considered implementation. I do not use it as a button that writes code unattended; I use it as a collaborator that helps me stay unblocked while I keep my attention on product decisions, architecture, and quality.

Most features start with a short plain-language plan: the user problem, the intended behavior, the edge cases, and what the interface should feel like. I use that context to scaffold components, routes, or API handlers, then review and reshape the result until it fits the codebase. The useful part is not accepting a first draft—it is getting to a reviewable starting point faster.

For decisions that need more careful reasoning, such as a data model, a risky refactor, or the boundaries of a new module, I use AI to test my thinking. I ask for alternative approaches, likely failure points, and ways to introduce a change without disturbing existing behavior. That second perspective is especially valuable when I have been looking at the same problem for too long.

I also use AI for the small but important tasks around development: turning an idea into actionable todos, summarizing a large diff, drafting documentation after a feature ships, and writing commit messages that explain the reason for a change.

The feedback loop still ends with me. I adapt the suggestion, run the application and tests, and take responsibility for the final design, security, and performance. Used this way, AI does not replace engineering judgment; it gives me more room to apply it where it matters.`,
    category: 'Writing',
    status: 'Ongoing reflections',
  },
  {
    date: 'Dec 2025 - Present',
    slug: 'plexusmenu-qr-menus',
    name: 'Plexusmenu QR Menus',
    tools: 'TypeScript, Next.js 16, Tailwind CSS, Prisma, Supabase',
    description: `Plexusmenu began with a simple restaurant problem: a printed menu becomes outdated the moment a price, item, or availability changes. Reprinting is slow and expensive, while customers can still be handed information that is no longer accurate. I built Plexusmenu so restaurant owners can manage a digital menu and share it with customers through a QR code.

The owner workflow is intentionally straightforward. After signing up, a restaurant can create menu items with a name, price, description, and currency, then generate a QR code for customers to scan. A change made to the menu is available immediately, which makes seasonal updates, price changes, and temporary availability much easier to handle.

I built the platform with TypeScript, Next.js, Tailwind CSS, Prisma, and Supabase. The stack supports a responsive experience for both the owner managing the menu and the customer viewing it from a phone. I focused on keeping the product practical: the restaurant should be able to update information without needing design or development help.

Plexusmenu includes free and premium subscription options, with the premium tier covering custom QR-code styles, downloadable codes, unlimited menu items, and no watermark. The product is currently available to use for free while I continue refining the experience and learning from the real workflow it supports.`,
    category: 'Personal Project',
    status: 'Live, free to use',
  },
  {
    date: 'June 2025 - December 2025',
    slug: 'easy-travel-ai-platform',
    name: 'Easy Travel AI-Powered Platform',
    tools: 'TypeScript, Next.js 15, Tailwind CSS, Shadcn UI, Prisma, PostgreSQL, OpenAI API, Weather APIs',
    description: `Easy Travel started from a familiar frustration: planning a trip often means juggling destination guides, weather forecasts, budgets, and itinerary ideas across too many tabs. I wanted to explore a simpler workflow—one place to discover destinations, understand the essentials, and turn loose travel preferences into a plan.

The app is designed for both quick getaways and longer trips. A user can explore destinations, check weather information, and ask for AI-assisted recommendations that reflect their budget, interests, and available time. The goal is not to make every decision automatically; it is to give the user a useful starting point that they can adapt to their own trip.

I am building Easy Travel with TypeScript, Next.js, Tailwind CSS, Shadcn UI, Prisma, and PostgreSQL. The application combines stored trip and itinerary data with AI-powered planning and weather information, giving the planning process a more connected feel than a collection of separate tools.

Easy Travel is currently in beta. This version is focused on proving that the core planning workflow is genuinely helpful before I add more automation and collaboration. The next stage is to keep refining the recommendations and make it easier to revisit, edit, and build on a trip plan over time.`,
    category: 'Personal Project',
    status: 'Beta Phase',
  },
]

export default blogs
