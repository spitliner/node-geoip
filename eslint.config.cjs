const globals = require("globals");
const js = require("@eslint/js");
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

module.exports = [...compat.extends("eslint:recommended"), {
	languageOptions: {
		globals: {
			...globals.node,
		},

		ecmaVersion: 2018,
		sourceType: "commonjs",
	},

	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		"no-console": "off",
		"no-constant-condition": "off",
		"no-control-regex": "off",
		quotes: "off",
		semi: ["error", "always"],
	},
}];
