module.exports = {
    title: "Armand du Parc Locmaria",
    themeConfig: {
        nav: [{ text: "Projects", link: "/#projects" }, { text: "Resume", link: "/resume.html" }, { text: "About", link: "/about.html" }, { text: "Contact", link: "/contact.html" }],
    },
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.config.js"),
            require("autoprefixer")
        ]
    }
};