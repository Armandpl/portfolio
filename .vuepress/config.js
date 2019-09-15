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
    },
    /*configureWebpack: (config, isServer) => {
        if (!isServer) {
            return {
                module: {
                    rules: [
                        {
                            test: /\.(jpg|png|gif|svg)$/,
                            loader: 'image-webpack-loader',
                            // Specify enforce: 'pre' to apply the loader
                            // before url-loader/svg-url-loader
                            // and not duplicate it in rules with them
                            enforce: 'pre'
                        }
                    ]
                }
            }
        }
    }*/
};