const config = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'order/custom-properties-alphabetical-order': true,
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: ['font-family', 'font'],
        ignoreKeywords: ['BlinkMacSystemFont'],
      },
    ],
    'scss/at-function-pattern': '^_?[a-z]([a-z0-9-]*[a-z0-9])?$',
    'scss/at-mixin-pattern': '^_?[a-z]([a-z0-9-]*[a-z0-9])?$',
  },
}

export default config
