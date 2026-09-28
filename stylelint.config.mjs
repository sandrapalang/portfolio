const config = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'order/custom-properties-alphabetical-order': true,
  },
}

export default config
