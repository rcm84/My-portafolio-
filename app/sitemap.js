export default function sitemap() {
  const baseUrl = "https://raymercastaneda.dev";
  return [
    { url: `${baseUrl}/es`, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/en`, lastModified: new Date(), priority: 1 },
  ];
}
