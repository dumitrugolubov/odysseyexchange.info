import { type QwikCityConfig } from '@builder.io/qwik-city';

export default {
  sitemap: {
    include: ['*'],
    exclude: [],
    trailingSlash: false,
    sitemapFilename: 'public/sitemap.xml'
  }
} satisfies QwikCityConfig;