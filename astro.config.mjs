// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightVideos from "starlight-videos";
import starlightScrollToTop from "starlight-scroll-to-top";

// https://astro.build/config
export default defineConfig({
  site: "https://meshcolombia.co",
  integrations: [
    starlight({
      title: "Meshtastic Colombia",
      logo: {
        src: "./src/assets/logo-meshtastic-colombia-100x100.webp",
      },
      favicon: "/favicon.ico",
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.ico",
            sizes: "32x32",
          },
        },
      ],
      customCss: ["./src/styles/custom.css"],
      locales: {
        root: {
          label: "Español",
          lang: "es",
        },
      },
      social: [
        {
          icon: "telegram",
          label: "WhatsApp",
          href: "https://chat.whatsapp.com/Bkw5MiV8RqVL6GRutNyZNS?mode=ac_c",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/meshcolombia",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/meshcolombia/website/edit/main/",
      },
      lastUpdated: true,
      sidebar: [
        {
          label: "Meshtastic Colombia",
          items: [
            { label: "Introducción", slug: "comunidad/introduccion" },
            { label: "Contribución", slug: "comunidad/contribucion" },
            // { label: 'Preguntas Frecuentes', slug: 'comunidad/preguntas-frecuentes' },
          ],
        },
        {
          label: "Guías",
          autogenerate: { directory: "guias" },
        },
        {
          label: "Recursos",
          items: [
            {
              label: "Documentación de Meshtastic",
              link: "https://meshtastic.org/docs",
              attrs: { target: "_blank", rel: "noopener nofollow" },
            },
            {
              label: "Mapa de Nodos",
              link: "https://meshmap.net",
              attrs: { target: "_blank", rel: "noopener nofollow" },
            },
          ],
        },
      ],
      plugins: [
        starlightVideos(),
        starlightScrollToTop({
          position: "right",
          tooltipText: "Ir a arriba",
          showTooltip: true,
          smoothScroll: true,
          threshold: 0.2,
          svgPath: "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18",
          svgStrokeWidth: 2,
          borderRadius: "50",
        }),
      ],
    }),
  ],
});
