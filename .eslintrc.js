module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true,
    commonjs: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // 使用prettier
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2018,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      tsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    quotes: [2, 'single'],
    semi: 0,
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-var-requires': ['off']
  },
  settings: {
    'import/ignore': ['node_modules'],
    react: {
      version: 'detect'
    }
  }
}
