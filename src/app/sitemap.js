export default function sitemap() {
    const date = new Date();
  return [
    {
        url: 'https://anangs-polio.vercel.app',
        lastModified: date,
    },
    {
        url: 'https://anangs-polio.vercel.app/about',
        lastModified: date,
    },
    {
        url: 'https://anangs-polio.vercel.app/portfolio',
        lastModified: date,
    },
  ]
}
