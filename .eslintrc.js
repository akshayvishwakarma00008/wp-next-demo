module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaFeatures: {
            jsx: 'false'
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', 'prettier'],
    rules: {
        indent: ['error', 4],
        'jsx-quotes': ['warn', 'prefer-single'],
        'max-len': [
            'warn',
            {
                code: 80
            }
        ],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'arrow-body-style': 'off',
        'no-console': 0,

        allowExpression: 'off',
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        ]
    }
};
