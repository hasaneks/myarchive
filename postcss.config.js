module.exports = {
    plugins: {
        'postcss-nested': {},
        'postcss-custom-media': {
            importFrom: [
                {
                    customMedia: { '--phone': '(max-width: 980px)' }
                },
                {
                    customMedia: { '--d': '(max-width: 1270px)' }
                },
                {
                    customMedia: { '--dark': '(prefers-color-scheme: dark)' }
                }
            ]
        }
    }
}