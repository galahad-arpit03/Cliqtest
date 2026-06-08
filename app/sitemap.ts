import { MetadataRoute } from 'next'
import { blogsData } from '@/data/blogs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cliQTest.com'
  
  // Static routes
  const routes = [
    '',
    '/integrations',
    '/security-policy',
    '/pricing',
    '/book-a-demo',
    '/blogs',
    '/privacy-policy',
    '/terms-conditions',
    '/cookie-policy',
    '/platform/analytics',
    '/platform/test-management',
    '/platform/devicelabs',
    '/platform/ai-capabilities',
    '/platform/nocode',
    '/platform/overview',
    '/solutions/by-use-case',
    '/solutions/by-team',
    '/solutions/success-stories',
    '/solutions/by-industry',
    '/company/why-cliqtest',
    '/company/about',
    '/company/global-presence',
    '/company/partners-alliances',
    '/company/leadership',
    '/company/csr-community',
    '/company/compliance-security',
    '/company/clients'
  ]

  const staticSitemap: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic routes for blogs
  const blogsSitemap: MetadataRoute.Sitemap = blogsData.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(), // If blog.date can be parsed to Date, use it, else current date
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticSitemap, ...blogsSitemap]
}
