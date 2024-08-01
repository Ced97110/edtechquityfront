import { MetadataRoute } from "next";
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/search?q=", "/admin/"]
    },
    sitemap: ["https://edtechquity.net/sitemap.xml"]
  };
}