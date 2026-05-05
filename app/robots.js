export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/wp-content/uploads/wpo/wpo-plugins-tables-list.json',
      ],
    },
    // YAHAN NAYA DOMAIN ADD KAREIN
    sitemap: 'https://bizgrowmedia.co.uk/sitemap.xml',
  }
}