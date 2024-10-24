import { defineConfig } from "vitepress"

const nav = [
    {
        text: "Version 1.0.0",
        items: [
            {
                text: "Source Code",
                link: "https://github.com/Zalaya/dev-struggles"
            },
            {
                text: "License",
                link: "https://github.com/Zalaya/dev-struggles/blob/main/LICENSE"
            }
        ]
    }
];

const socialLinks = [
    {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/enol-cortina/"
    },
    {
        icon: "github",
        link: "https://github.com/Zalaya"
    }
];

const footer = {
    message: "Released under the MIT License",
    copyright: "© 2024 - Present • Zalaya"
};

export default defineConfig({
    base: "/dev-struggles/",
    title: "Dev Struggles",
    description: "Software Developer's Everyday Problems",
    themeConfig: {
        nav: nav,
        socialLinks: socialLinks,
        footer: footer
    }
});
