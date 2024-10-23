import { defineConfig } from 'vitepress'

export default defineConfig({
    base: "/dev-struggles/",
    title: "Dev Struggles",
    description: "A blog sharing my real-life challenges as a developer.",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Zalaya/dev-struggles' }
        ]
    }
})
