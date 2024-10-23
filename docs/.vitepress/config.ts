import { defineConfig } from "vitepress"

export default defineConfig({
    base: "/dev-struggles/",
    title: "Dev Struggles",
    description: "A blog that goes beyond the code",
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
                text: "Home",
                link: "/"
            }
        ],
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
            copyright: "© 2024 Dev Struggles - All rights reserved"
        }
    }
})
