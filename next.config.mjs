/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bizgrow-digital.co.uk',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.bizgrow-digital.co.uk',
        pathname: '/**',
      },
    ],
  },
  // --- Yahan se redirects add kiye hain ---
  async redirects() {
    return [
      {
        source: '/web-design-services/',
        destination: '/web-development/',
        permanent: true,
      },
      {
        source: '/on-page-seo-audit-services-improve-uk-googleankings/',
        destination: '/on-page-seo-audit-services-improve-uk-google-rankings/',
        permanent: true,
      },
      {
        source: '/why-on-page-seo-matters-for-small-businesses-and-how-to-do-it-right/',
        destination: '/why-on-page-seo-matters-for-small-businesses/',
        permanent: true,
      },
      {
        source: '/why-on-page-seo-matters-for-small-businesses-how-to-do-it-right/',
        destination: '/why-on-page-seo-matters-for-small-businesses/',
        permanent: true,
      },
      {
        source: '/how-does-on-page-seo-differ-from-off-page-seo/',
        destination: '/on-page-seo-differ-from-off-page-seo/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;