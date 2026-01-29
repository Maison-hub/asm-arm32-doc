// @ts-check
import { defineConfig } from 'astro/config';
import { ion } from "starlight-ion-theme";
import starlightThemeNova from 'starlight-theme-nova'


import starlight from '@astrojs/starlight';

import d2 from 'astro-d2';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        plugins: [
            // ion(),
        ],
        title: 'ARM 32 Friendly Docs',
		customCss: [
			'./src/styles/custom.css',
		],
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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