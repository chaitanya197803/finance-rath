import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://financerath.com";

  const routes = [
    "",
    "/personal-loan",
    "/business-loan",
    "/home-loan",
    "/loan-against-property",
    "/car-loan",
    "/two-wheeler-loan",
    "/msme-loan",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8
  }));
}
