module.exports = {
    "extends": "airbnb",
    "rules": {
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        "indent": ["error", 2],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "quotes": [2, "double", { "avoidEscape": true }],
        "arrow-body-style": ["error", "always"]
    } 
};
