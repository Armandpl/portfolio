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
    configureWebpack: (config, isServer) => {
        if (!isServer) {
            return {
                module: {
                    rules: [
                        /*{
                            test: /\.(jpe?g|png|gif)$/,
                            loader: 'url-loader',
                            options: {
                                // Images larger than 10 KB won’t be inlined
                                limit: 10 * 1024,
                                publicPath: '/assets/img/'
                            }
                        },
                        {
                            test: /\.svg$/,
                            loader: 'svg-url-loader',
                            options: {
                                // Images larger than 10 KB won’t be inlined
                                limit: 10 * 1024,
                                // Remove quotes around the encoded URL –
                                // they’re rarely useful
                                noquotes: true,
                            }
                        },*/
                        /*{
                            test: /\.(jpg|png|gif|svg)$/,
                            loader: 'image-webpack-loader',
                            // Specify enforce: 'pre' to apply the loader
                            // before url-loader/svg-url-loader
                            // and not duplicate it in rules with them
                            enforce: 'pre'
                        },*/
                    ]
                }
            }
        }
    }
};