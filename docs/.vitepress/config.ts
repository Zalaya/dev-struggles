import { defineConfig } from "vitepress"

export default defineConfig({
    base: "/dev-struggles/",
    title: "Dev Struggles",
    description: "Just Another Programming Blog",
    locales: {
        root: {
            label: "English",
            lang: "en"
        },
        es: {
            label: "Español",
            lang: "es",
            link: "/es/"
        }
    },
    themeConfig: {
        nav: [
            {
                text: "1.0.0",
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
        ],
        socialLinks: [
            {
                icon: "linkedin",
                link: "https://www.linkedin.com/in/enol-cortina/"
            },
            {
                icon: "github",
                link: "https://github.com/Zalaya"
            }
        ],
        footer: {
            message: "Released under the MIT License",
            copyright: "© 2024 - Present • Zalaya"
        }
    }
})
