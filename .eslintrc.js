module.exports = {
  /* your base configuration of choice */
  parser: "babel-eslint",
  plugins: ["react", "jsx-a11y"],
  extends: "airbnb",
  rules: {
      "no-console": 0,
      "no-alert": 2,
      "prefer-promise-reject-errors": 0,
      indent: ["error", 4, { SwitchCase: 1 }],
      "linebreak-style": 0,
      "max-len": ["error", { "ignoreComments": true, "code": 200  }],
      "react/jsx-one-expression-per-line":0,
      "react/jsx-filename-extension": 0,
      "import/prefer-default-export": 0,
      "react/no-unused-prop-types": 0,
      "react/require-default-props": 0,
      "react/prop-types": 0,
      "no-unused-vars": 0,
      "react/jsx-indent": 0,
      "react/jsx-indent-props": 0,
      "react/forbid-prop-types": 0,
      "react/no-danger": 0,
      "react/no-typos": 0,
      "react/no-access-state-in-setstate":0,
      "react/no-danger-with-children": 0,
      "react/no-multi-comp": 0,
      "import/no-extraneous-dependencies": 0,
      "import/no-unresolved": 0,
      "import/extensions": 0,
      "react/destructuring-assignment":0,
      "jsx-a11y/label-has-associated-control": 0,
      "jsx-a11y/href-no-hash": "off",
      "jsx-a11y/anchor-is-valid": ["warn", { aspects: ["invalidHref"] }],
      "jsx-a11y/img-has-alt": "off",
      "jsx-a11y/label-has-for": "off",
      "jsx-a11y/no-interactive-element-to-noninteractive-role": [
          "error",
          { a: ["button"] },
      ],
      "jsx-a11y/click-events-have-key-events":0,
      "jsx-a11y/interactive-supports-focus":0
  },
  env: {
      browser: true,
      node: true,
      "jest": true
  },
  globals: {
      __static: true
  }
};
