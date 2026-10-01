import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/business';
export default function sitemap(): MetadataRoute.Sitemap { return ['/', '/services', '/about', '/service-areas', '/contact'].map((path) => ({ url: `${siteConfig.baseUrl}${path}`, lastModified: new Date() })); }
