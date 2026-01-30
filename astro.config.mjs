// @ts-check
import { defineConfig } from 'astro/config';
import { ion } from "starlight-ion-theme";
import starlightThemeNova from 'starlight-theme-nova'


import starlight from '@astrojs/starlight';

import d2 from 'astro-d2';

// https://astro.build/config
export default defineConfig({
    site: 'https://maison-hub.github.io',
    base: '/asm-arm32-doc/',
    integrations: [starlight({
        plugins: [
            // ion(),
        ],
        title: 'ARM 32 Friendly Docs',
		customCss: [
			'./src/styles/custom.css',
		],
        defaultLocale: 'fr',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Maison-hub/asm-arm32-doc' }],
        editLink: {
            baseUrl: 'https://github.com/Maison-hub/asm-arm32-doc/edit/main/'
        },
        sidebar: [
            {
                label: 'Guides',
                autogenerate: { directory: 'guides' },

            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
            {
                label: 'Commandes',
                autogenerate: { directory: 'commandes' },
            },
        ],
		}), 
		d2()
	],
});