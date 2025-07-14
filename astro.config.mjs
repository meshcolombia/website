// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://meshcolombia.co",
	integrations: [
		starlight({
			title: 'Meshtastic Colombia',
			logo: {
				src: './src/assets/logo-meshtastic-colombia-100x100.webp',
			},
			favicon: '/favicon.ico',
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/favicon.ico',
						sizes: '32x32',
					},
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				},
			},
			social: [
				{ icon: 'external', label: 'Sitio web', href: 'https://meshcolombia.co' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/meshcolombia/docs' }
			],
			editLink: {
				baseUrl: 'https://github.com/meshcolombia/docs/edit/main/',
			},
			lastUpdated: true,
			sidebar: [
				{
					label: 'Meshtastic Colombia',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introducción', slug: 'comunidad/introduccion' },
						// { label: 'Contribución', slug: 'comunidad/contribucion' },
						// { label: 'Preguntas Frecuentes', slug: 'comunidad/preguntas-frecuentes' },
					],
				},
				{
					label: 'Guías',
					items: [
						// { label: 'Inicio Rápido', slug: 'guias/inicio-rapido' },
						// { label: 'Dispositivos', slug: 'guias/dispositivos' },
						// { label: 'Configuración de la Aplicación', slug: 'guias/configuracion-aplicacion' },
					],
				},
				{
					label: 'Recursos',
					items: [
						// { label: 'Mapa de Nodos', slug: 'guias/mapa-nodos' },
					],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});