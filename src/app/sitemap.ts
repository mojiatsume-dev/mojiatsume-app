import { MetadataRoute } from "next";

// This function generates the sitemap.xml file at build time.
// It helps search engines understand the structure of the site.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mojiatsume.com"; // Replace with your actual domain later

  return [
    {
      url: `${baseUrl}/en`, // We will add other locales here later
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // Add other public pages like /about or /pricing here in the future
  ];
}
