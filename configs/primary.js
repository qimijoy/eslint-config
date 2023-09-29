module.exports = {
	rules: {
		"array-callback-return": "warn",
		"constructor-super": "error",
		"for-direction": "error",
		"getter-return": "warn",
		"no-async-promise-executor": "warn",
		"no-await-in-loop": "warn",
		"no-class-assign": "error",
		"no-compare-neg-zero": "warn",
		"no-cond-assign": ["error", "always"],
		"no-const-assign": "error",
		"no-constant-binary-expression": "warn",
		"no-constant-condition": "warn",
		"no-constructor-return": "warn",
		"no-control-regex": "warn",
		"no-debugger": "error",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-else-if": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "error",
		"no-empty-character-class": "error",
		"no-empty-pattern": "error",
		"no-ex-assign": "error",
		"no-fallthrough": "error",
		"no-func-assign": "error",
		"no-import-assign": "error",
		"no-inner-declarations": "warn",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		"no-loss-of-precision": "error",
		"no-misleading-character-class": "error",
		"no-new-native-nonconstructor": "error",
		"no-new-symbol": "error",
		"no-obj-calls": "error",
		"no-promise-executor-return": "error",
		"no-prototype-builtins": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-setter-return": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "warn",
		"no-this-before-super": "error",
		"no-undef": "error",
		"no-unexpected-multiline": "error",
		"no-unmodified-loop-condition": "error",
		"no-unreachable": "error",
		"no-unreachable-loop": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-unsafe-optional-chaining": "error",
		"no-unused-private-class-members": "error",
		"no-unused-vars": "error",
		"no-use-before-define": ["warn", {
			functions: false,
			classes: false,
			variables: true,
			allowNamedExports: false
		}],
		"no-useless-backreference": "error",
		"require-atomic-updates": "error",
		"use-isnan": "error",
		"valid-typeof": "error",
		"accessor-pairs": "error",
		"arrow-body-style": ["error", "as-needed"],
		"block-scoped-var": "error",
		"camelcase": ["warn", {
			properties: "never",
			ignoreDestructuring: true,
			ignoreImports: true,
			ignoreGlobals: true
		}],
		"capitalized-comments": "off",
		"class-methods-use-this": "warn",
		"complexity": ["warn", 4],
		"consistent-return": "error",
		"curly": "error",
		"default-case": "error",
		"default-case-last": "error",
		"default-param-last": "warn",
		"dot-notation": "warn",
		"eqeqeq": ["error", "always"],
		"func-name-matching": "off",
		"func-names": ["warn", "always"],
		"func-style": "off",
		"grouped-accessor-pairs": ["warn", "getBeforeSet"],
		"guard-for-in": "error",
		"id-denylist": ["error", "err", "e", "cb", "callback"],
		"id-length": ["error", {
			min: 1,
			max: 20,
			properties: "never",
			exceptions: ["id", "to"],
		}],
		"id-match": "off",
		"init-declarations": "off",
		"logical-assignment-operators": "off",
		"max-classes-per-file": "off",
		"max-depth": ["error", 4],
		"max-lines": ["error", {
			max: 1000,
			skipBlankLines: false,
			skipComments: false
		}],
		"max-lines-per-function": ["error", {
			max: 500,
			skipBlankLines: false,
			skipComments: false
		}],
		"max-nested-callbacks": ["error", 4],
		"max-params": ["error", 4],
		"max-statements": "off",
		"multiline-comment-style": "off",
		"new-cap": "error",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-bitwise": "warn",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-confusing-arrow": "error",
		"no-console": "warn",
		"no-continue": "warn",
		"no-delete-var": "error",
		"no-div-regex": "error",
	},
};
