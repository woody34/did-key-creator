module.exports = {
  extends: ['3box', '3box/jest', '3box/typescript'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/interface-name-prefix': 'off'
  }
}
