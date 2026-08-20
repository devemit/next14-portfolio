import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import blogs from '@/utils/blogs'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/work', '/techstack', '/blog']

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...blogs.map((blog) => ({
      url: `${site.url}/blog/${blog.slug}`,
      lastModified: new Date(blog.publishedAt),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ]
}
