export interface BlogPost {
  slug: string
  name: string
  description: string
  date: string
  publishedAt: string
  tools: string
  category: string
  status: string
}

const blogs: BlogPost[] = [
  {
    date: 'Sep 2026',
    publishedAt: '2026-09-01',
    slug: 'evaluating-rag-beyond-a-good-demo',
    name: 'Evaluating RAG Beyond a Good Demo',
    tools: 'Python, FastAPI, PostgreSQL, pgvector, LLM APIs',
    description: `A retrieval-augmented generation feature can look impressive in a demo and still fail when real users depend on it. A fluent answer is not enough. The system needs to find the right source material, use it faithfully, and make uncertainty visible when the available context is weak.

I think about evaluation as a pipeline rather than one final score. Retrieval should be checked first: did the relevant document appear, how highly was it ranked, and did the query contain enough information to find it? Generation comes next: does the answer follow the retrieved context, include useful citations, and avoid inventing details that are not supported?

A small, carefully chosen test set is more useful than judging random outputs. It should include ordinary questions, ambiguous requests, missing information, conflicting documents, and cases where the correct response is to ask for clarification. Running the same set after changes to chunking, embeddings, prompts, or models makes regressions easier to see.

Human review remains important because usefulness is contextual. A technically grounded answer may still be unclear, too long, or poorly suited to the workflow. Combining repeatable checks with reviewer feedback produces a better picture than either approach alone.

The goal is not to prove that an AI feature is perfect. It is to know where it is reliable, where it needs help, and whether each change makes the system meaningfully better.`,
    category: 'AI Engineering',
    status: 'Published',
  },
  {
    date: 'Jun 2026',
    publishedAt: '2026-06-01',
    slug: 'human-review-is-an-ai-feature',
    name: 'Human Review Is an AI Product Feature',
    tools: 'LLM APIs, Structured Outputs, Feedback Workflows',
    description: `Human review is sometimes described as a temporary limitation of AI systems. I see it differently: in many products, review is part of the feature. It creates a clear boundary between machine assistance and decisions that still need context, responsibility, or judgment.

In a support workflow, an AI-generated draft can save time without sending anything directly to a customer. The agent can inspect the cited sources, edit the tone, correct missing context, and then approve or reject the suggestion. That interaction is safer than full automation and also gives the product a valuable feedback signal.

The interface matters as much as the model. Reviewers need to understand what the system produced, why it produced it, and what action is expected from them. Citations, confidence cues, editable drafts, and explicit approval controls make the AI easier to supervise. A mysterious answer with a single accept button does not.

Feedback should be captured with enough structure to improve the system. An edit can reveal a tone problem, while a rejection reason might identify poor retrieval, an incorrect classification, or a policy gap. These are different failures and should not be reduced to one thumbs-down metric.

Good human-in-the-loop design does not merely add a checkpoint. It gives people meaningful control while turning everyday use into evidence for better prompts, retrieval, evaluation, and product decisions.`,
    category: 'AI Engineering',
    status: 'Published',
  },
  {
    date: 'Mar 2026',
    publishedAt: '2026-03-01',
    slug: 'building-grounded-ai-support-copilot',
    name: 'Building a Grounded AI Support Copilot',
    tools: 'Python, FastAPI, PostgreSQL, pgvector, Groq API, Docker',
    description: `I built the AI Support Copilot around a practical constraint: a support reply should be based on company knowledge, not only on what a language model happens to know. The product therefore starts with retrieval and treats generation as one step inside a larger workflow.

Knowledge-base documents are split into smaller chunks, converted into embeddings, and stored in PostgreSQL with pgvector. When a ticket arrives, the application classifies its category, priority, sentiment, and summary, then uses the ticket to retrieve relevant policy or help content. Those sources become the context for a proposed reply.

The generated draft includes citations and suggested next actions so the support agent can check its basis before using it. The agent can edit, accept, or reject the response. This keeps the model in an assistive role and makes the final decision visible and accountable.

One of the most useful lessons was that model choice is only part of the system. Document quality, chunk boundaries, retrieval queries, structured outputs, and the review interface all affect whether the result is useful. Improving any one of those pieces can matter more than switching to a larger model.

The project gave me a working foundation for RAG, vector search, ingestion, prompting, and feedback collection. More importantly, it reinforced a product principle: AI becomes valuable when it fits a real workflow and makes its supporting evidence easy to inspect.`,
    category: 'AI Engineering',
    status: 'Published',
  },
  {
    date: 'Jan 2026',
    publishedAt: '2026-01-01',
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
    date: 'Dec 2025',
    publishedAt: '2025-12-01',
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
    date: 'Jun 2025',
    publishedAt: '2025-06-01',
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
