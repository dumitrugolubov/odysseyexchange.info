import { extendConfig } from '@builder.io/qwik-city/vite';

export default extendConfig({}, {
  sitemap: {
    include: ['*'],
    exclude: [],
    trailingSlash: false,
    sitemapFilename: 'public/sitemap.xml'
  }
});