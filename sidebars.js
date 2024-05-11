/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    wikiSidebar: [
        /* Home doc sidebar item */
        'home',
        /* Installation doc sidebar item */
        {
            type: 'doc',
            id: 'installation',
            label: 'Installation',
        },
        /* EssentialsX Modules Dropdown */
        {
            type: 'category',
            label: 'Modules',
            collapsed: false,
            items: [
                'modules/core',
                'modules/chat',
                'modules/spawn',
                'modules/discord',
                'modules/discordlink',
                'modules/antibuild',
                'modules/geoip',
                'modules/protect',
                'modules/xmpp'

            ]
        },
        /* EssentialsX Reference Dropdown */
        {
            type: 'category',
            label: 'External Links',
            collapsed: true,
            items: [
                /* Links */
                {
                    type: 'link',
                    label: 'Command List (Unofficial)',
                    href: 'https://essinfo.xeya.me/commands.html',
                },
                {
                    type: 'link',
                    label: 'Permission List (Unofficial)',
                    href: 'https://essinfo.xeya.me/permissions.html',
                },
                {
                    type: 'link',
                    label: 'Changelogs',
                    href: 'https://github.com/EssentialsX/Essentials/releases',
                },

            ]
        },
    ],
};

export default sidebars;
