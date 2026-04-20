import type { APIRoute } from 'astro';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url><loc>https://englishsupport.jp/</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/index-jp"/><priority>1.0</priority></url>
  <url><loc>https://englishsupport.jp/index-jp</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/index-jp"/><priority>1.0</priority></url>
  <url><loc>https://englishsupport.jp/one-page-welcome</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/one-page-welcome"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/one-page-welcome-jp"/><priority>0.9</priority></url>
  <url><loc>https://englishsupport.jp/one-page-welcome-jp</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/one-page-welcome"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/one-page-welcome-jp"/><priority>0.9</priority></url>
  <url><loc>https://englishsupport.jp/review-engine</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/review-engine"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/review-engine-jp"/><priority>0.9</priority></url>
  <url><loc>https://englishsupport.jp/review-engine-jp</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/review-engine"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/review-engine-jp"/><priority>0.9</priority></url>
  <url><loc>https://englishsupport.jp/english-hanare</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/english-hanare"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/english-hanare-jp"/><priority>0.8</priority></url>
  <url><loc>https://englishsupport.jp/english-hanare-jp</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/english-hanare"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/english-hanare-jp"/><priority>0.8</priority></url>
  <url><loc>https://englishsupport.jp/grand-opening</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/grand-opening"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/grand-opening-jp"/><priority>0.8</priority></url>
  <url><loc>https://englishsupport.jp/grand-opening-jp</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/grand-opening"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/grand-opening-jp"/><priority>0.8</priority></url>
  <url><loc>https://englishsupport.jp/demos</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/demos"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/demos-jp"/><priority>0.7</priority></url>
  <url><loc>https://englishsupport.jp/demos-jp</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/demos"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/demos-jp"/><priority>0.7</priority></url>
  <url><loc>https://englishsupport.jp/order-flow</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/order-flow"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/order-flow-jp"/><priority>0.6</priority></url>
  <url><loc>https://englishsupport.jp/order-flow-jp</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/order-flow"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/order-flow-jp"/><priority>0.6</priority></url>
  <url><loc>https://englishsupport.jp/community-mission</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/community-mission"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/community-mission-jp"/><priority>0.5</priority></url>
  <url><loc>https://englishsupport.jp/community-mission-jp</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/community-mission"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/community-mission-jp"/><priority>0.5</priority></url>
  <url><loc>https://englishsupport.jp/contact</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/contact"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/contact-jp"/><priority>0.8</priority></url>
  <url><loc>https://englishsupport.jp/contact-jp</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/contact"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/contact-jp"/><priority>0.8</priority></url>
  <url><loc>https://englishsupport.jp/faq</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/faq"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/faq-jp"/><priority>0.5</priority></url>
  <url><loc>https://englishsupport.jp/faq-jp</loc><xhtml:link rel="alternate" hreflang="en" href="https://englishsupport.jp/faq"/><xhtml:link rel="alternate" hreflang="ja" href="https://englishsupport.jp/faq-jp"/><priority>0.5</priority></url>
</urlset>`;

export const GET: APIRoute = async () => {
  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
