{
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "settings": {
      "react": {
        "version": "detect"
      },
      "import/resolver": {
        "node": {
          "paths": ["src"],
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
    "extends": [
        "next/core-web-vitals", 
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "standard",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "jsx-a11y",
      "@typescript-eslint",
      "react-hooks",
      "import-helpers",
      "eslint-plugin-import-helpers",
      "sonarjs"
    ],
    "rules": {

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "import/no-unresolved": "off",
  
      "import/no-extraneous-dependencies": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "import/no-cycle": "off",
      "camelcase": "off",
      "jsx-a11y/heading-has-content": "off",
      "jsx-a11y/anchor-has-content": "off",
      "jsx-a11y/iframe-has-title": "off",
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
  
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "prettier/prettier": [
        "error",
        {
          "trailingComma": "all",
          "printWidth": "80",
          "tabWidth": "2",
          "arrowParens": "always",
          "semi": false,
          "endOfLine": "auto",
          "singleQuote": true,
          "tailwindConfig": "./tailwind.config.js",
          "plugins": ["prettier-plugin-tailwindcss"],
          "pluginSearchDirs": false
        }
      ],
    "jsx-a11y/alt-text": [
      "warn",
      {
        "elements": ["img"],
        "img": ["Image"]
      }
    ],
      "import-helpers/order-imports": [
        "warn",
        {
          "newlinesBetween": "always", // Cria uma nova linha para separar as importacoes
          "groups": [
            ["/^react/", "/^next/"],
            "/^@testing-library/react/",
            "/^contentlayer/",
            "/^fs/",
            "/^disqus-react/",
            "module",
            "/^@shared/",
            "absolute",
            "/^@/components/",
            "/^@/pages/",
            "/utils/",
            "/^@/models/",
            "/^@/store/",
            "/^@/lib/",
            "/^@/styles/",
            "/^@/templates/",
            ["parent", "sibling", "index"]
          ],
          "alphabetize": { "order": "asc", "ignoreCase": true }
        }
      ]
    }
}