module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "legacyDecorators": true
    },
    "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-react",
        "eslint-plugin-jsx-a11y"
    ],
    "extends": "airbnb",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
                "windows"
        ],
            "quotes": [
                "error",
                "single"
        ],
        "no-console": 0,
        "no-unused-vars": 1,
    }
};