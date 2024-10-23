import { defineConfig } from "vitepress"

export default defineConfig({
    base: "/dev-struggles/",
    title: "Dev Struggles",
    description: "A blog sharing my real-life challenges as a developer.",
    locales: {
        root: { label: "English", lang: "en" },
        es: { label: "Español", lang: "es", link: "/es/" }
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" }
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/Zalaya/dev-struggles" },
            { icon: "linkedin", link: "https://www.linkedin.com/in/enol-cortina/" }
        ]
    }
})
