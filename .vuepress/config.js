module.exports = {
    title: "Armand du Parc Locmaria",
    themeConfig: {
        nav: [{ text: "Projects", link: "/blog/" }, { text: "Resume", link: "/" }, { text: "About", link: "/" }, { text: "Contact", link: "/" }],
    },
    postcss: {  
        plugins: [
            require("tailwindcss")("./tailwind.config.js"),
            require("autoprefixer")
        ]
    }
};