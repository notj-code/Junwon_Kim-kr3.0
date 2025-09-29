
const fs = require('fs');
const path = require('path');

const PRETTY_URL = 'https://junwonkim-int.netlify.app/';

function generateSitemap() {
  const pagesDir = path.resolve(__dirname, '../pages');
  const postsDir = path.resolve(__dirname, '../_posts');

  const pages = fs
    .readdirSync(pagesDir)
    .filter((file) => {
      const stat = fs.statSync(path.join(pagesDir, file));
      return !stat.isDirectory() && file.endsWith('.js') && !file.startsWith('_');
    })
    .map((file) => {
      const route = file === 'index.js' ? '' : `/${file.replace('.js', '')}`;
      return `
    <url>
      <loc>${PRETTY_URL}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`;
    });

  const posts = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace('.md', '');
      return `
    <url>
      <loc>${PRETTY_URL}/blog/${slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`;
    });

  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.join('')}
  ${posts.join('')}
</urlset>
`;

  fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemap);
}

generateSitemap();
