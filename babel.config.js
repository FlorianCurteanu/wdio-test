// allows uses of ES6 syntax (like import)
module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "14"
                }
            }
        ]
    ]
}