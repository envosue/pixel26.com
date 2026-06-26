export default function sitemap() {
  const base = 'https://pixel26.com';
  const routes = ['', '/services', '/about', '/contact'];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.7,
  }));
}
