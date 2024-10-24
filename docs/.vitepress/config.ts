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
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/Zalaya/dev-struggles"
            },
            {
                icon: "linkedin",
                link: "https://www.linkedin.com/in/enol-cortina/"
            }
        ],
        footer: {
            copyright: "© 2024 Dev Struggles"
        }
    }
})
