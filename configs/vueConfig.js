module.exports = {
	rules: {
		// Common
		"vue/comment-directive": "off",
		"vue/jsx-uses-vars": "off",

		// Essential
		"vue/multi-word-component-names": ["error", {
			ignores: [],
		}],
		"vue/no-arrow-functions-in-watch": "error",
		"vue/no-async-in-computed-properties": "error",
		"vue/no-child-content": "error",
		"vue/no-computed-properties-in-data": "error",
		"vue/no-custom-modifiers-on-v-model": "error",
		"vue/no-deprecated-data-object-declaration": "error",
		"vue/no-deprecated-destroyed-lifecycle": "error",
		"vue/no-deprecated-dollar-listeners-api": "error",
		"vue/no-deprecated-dollar-scopedslots-api": "error",
		"vue/no-deprecated-events-api": "error",
		"vue/no-deprecated-filter": "error",
		"vue/no-deprecated-functional-template": "error",
		"vue/no-deprecated-html-element-is": "error",
		"vue/no-deprecated-inline-template": "error",
		"vue/no-deprecated-props-default-this": "error",
		"vue/no-deprecated-router-link-tag-prop": "error",
		"vue/no-deprecated-scope-attribute": "error",
		"vue/no-deprecated-slot-attribute": "error",
		"vue/no-deprecated-slot-scope-attribute": "error",
		"vue/no-deprecated-v-bind-sync": "error",
		"vue/no-deprecated-v-is": "error",
		"vue/no-deprecated-v-on-native-modifier": "error",
		"vue/no-deprecated-v-on-number-modifiers": "error",
		"vue/no-deprecated-vue-config-keycodes": "error",
		"vue/no-dupe-keys": "error",
		"vue/no-dupe-v-else-if": "error",
		"vue/no-duplicate-attributes": "error",
		"vue/no-export-in-script-setup": "error",
		"vue/no-expose-after-await": "error",
		"vue/no-lifecycle-after-await": "error",
		"vue/no-multiple-template-root": "error",
		"vue/no-mutating-props": "error",
		"vue/no-parsing-error": ["error", {
			"abrupt-closing-of-empty-comment": true,
			"absence-of-digits-in-numeric-character-reference": true,
			"cdata-in-html-content": true,
			"character-reference-outside-unicode-range": true,
			"control-character-in-input-stream": true,
			"control-character-reference": true,
			"eof-before-tag-name": true,
			"eof-in-cdata": true,
			"eof-in-comment": true,
			"eof-in-tag": true,
			"incorrectly-closed-comment": true,
			"incorrectly-opened-comment": true,
			"invalid-first-character-of-tag-name": true,
			"missing-attribute-value": true,
			"missing-end-tag-name": true,
			"missing-semicolon-after-character-reference": true,
			"missing-whitespace-between-attributes": true,
			"nested-comment": true,
			"noncharacter-character-reference": true,
			"noncharacter-in-input-stream": true,
			"null-character-reference": true,
			"surrogate-character-reference": true,
			"surrogate-in-input-stream": true,
			"unexpected-character-in-attribute-name": true,
			"unexpected-character-in-unquoted-attribute-value": true,
			"unexpected-equals-sign-before-attribute-name": true,
			"unexpected-null-character": true,
			"unexpected-question-mark-instead-of-tag-name": true,
			"unexpected-solidus-in-tag": true,
			"unknown-named-character-reference": true,
			"end-tag-with-attributes": true,
			"duplicate-attribute": true,
			"end-tag-with-trailing-solidus": true,
			"non-void-html-element-start-tag-with-trailing-solidus": false,
			"x-invalid-end-tag": true,
			"x-invalid-namespace": true,
		}],
		"vue/no-ref-as-operand": "error",
		"vue/no-reserved-component-names": ["error", {
			disallowVueBuiltInComponents: true,
			disallowVue3BuiltInComponents: true,
		}],
		"vue/no-reserved-keys": "error",
		"vue/no-reserved-props": "error",
		"vue/no-shared-component-data": "error",
		"vue/no-side-effects-in-computed-properties": "error",
		"vue/no-template-key": "error",
		"vue/no-textarea-mustache": "error",
		"vue/no-unused-components": "error",
		"vue/no-unused-vars": "error",
		"vue/no-use-computed-property-like-method": "error",
		"vue/no-use-v-if-with-v-for": "error",
		"vue/no-useless-template-attributes": "error",
		"vue/no-v-for-template-key-on-child": "error",
		"vue/no-v-for-template-key": "off",
		"vue/no-v-model-argument": "warn",
		"vue/no-v-text-v-html-on-component": "error",
		"vue/no-watch-after-await": "error",
		"vue/prefer-import-from-vue": "error",
		"vue/require-component-is": "error",
		"vue/require-prop-type-constructor": "error",
		"vue/require-render-return": "error",
		"vue/require-slots-as-functions": "error",
		"vue/require-toggle-inside-transition": "error",
		"vue/require-v-for-key": "error",
		"vue/require-valid-default-prop": "error",
		"vue/return-in-computed-property": "error",
		"vue/return-in-emits-validator": "error",
		"vue/use-v-on-exact": "error",
		"vue/valid-attribute-name": "error",
		"vue/valid-define-emits": "error",
		"vue/valid-define-props": "error",
		"vue/valid-model-definition": "error",
		"vue/valid-next-tick": "error",
		"vue/valid-template-root": "error",
		"vue/valid-v-bind-sync": "error",
		"vue/valid-v-bind": "error",
		"vue/valid-v-cloak": "error",
		"vue/valid-v-else-if": "error",
		"vue/valid-v-else": "error",
		"vue/valid-v-for": "error",
		"vue/valid-v-html": "error",
		"vue/valid-v-if": "error",
		"vue/valid-v-is": "error",
		"vue/valid-v-memo": "error",
		"vue/valid-v-model": "error",
		"vue/valid-v-on": "error",
		"vue/valid-v-once": "error",
		"vue/valid-v-pre": "error",
		"vue/valid-v-show": "error",
		"vue/valid-v-slot": "error",
		"vue/valid-v-text": "error",

		// Strongly recommended
		"vue/attribute-hyphenation": "off",
		"vue/component-definition-name-casing": ["error", "PascalCase"],
		"vue/first-attribute-linebreak": "off",
		"vue/html-closing-bracket-newline": ["error", {
			singleline: "never",
			multiline: "always",
		}],
		"vue/html-closing-bracket-spacing": ["error", {
			startTag: "never",
			endTag: "never",
			selfClosingTag: "always",
		}],
		"vue/html-end-tags": "error",
		"vue/html-indent": ["error", "tab", {
			attribute: 1,
			baseIndent: 1,
			closeBracket: 0,
			alignAttributesVertically: true,
			ignores: [],
		}],
		"vue/html-quotes": ["error", "double", {
			avoidEscape: true,
		}],
		"vue/html-self-closing": "off",
		"vue/max-attributes-per-line": "off",
		"vue/multiline-html-element-content-newline": ["error", {
			ignoreWhenEmpty: true,
			ignores: ["pre", "textarea"],
			allowEmptyLines: false,
		}],
		"vue/mustache-interpolation-spacing": ["error", "always"],
		"vue/no-multi-spaces": ["error", {
			ignoreProperties: false
		}],
		"vue/no-spaces-around-equal-signs-in-attribute": "error",
		"vue/no-template-shadow": "error",
		"vue/one-component-per-file": "error",
		"vue/prop-name-casing": ["error", "camelCase"],
		"vue/require-default-prop": "error",
		"vue/require-explicit-emits": "error",
		"vue/require-prop-types": "error",
		"vue/singleline-html-element-content-newline": "off",
		"vue/v-bind-style": ["error", "shorthand"],
		"vue/v-on-event-hyphenation": ["error", "never", {
			autofix: false,
			ignore: [],
		}],
		"vue/v-on-style": ["error", "shorthand"],
		"vue/v-slot-style": ["error", {
			atComponent: "v-slot",
			default: "shorthand",
			named: "shorthand",
		}],

		// Recommended
		"vue/attributes-order": ["error", {
			order: [
				"DEFINITION",
				"LIST_RENDERING",
				"CONDITIONALS",
				"RENDER_MODIFIERS",
				"GLOBAL",
				["UNIQUE", "SLOT"],
				"TWO_WAY_BINDING",
				"OTHER_DIRECTIVES",
				"OTHER_ATTR",
				"EVENTS",
				"CONTENT",
			],
			alphabetical: false,
		}],
		"vue/no-lone-template": ["error", {
			ignoreAccessible: true,
		}],
		"vue/no-multiple-slot-args": "error",
		"vue/no-v-html": "warn",
		"vue/order-in-components": ["warn", {
			order: [
				"el",
				"name",
				"key",
				"parent",
				"functional",
				["delimiters", "comments"],
				["components", "directives", "filters"],
				"extends",
				"mixins",
				["provide", "inject"],
				"ROUTER_GUARDS",
				"layout",
				"middleware",
				"validate",
				"scrollToTop",
				"transition",
				"loading",
				"inheritAttrs",
				"model",
				["props", "propsData"],
				"emits",
				"setup",
				"asyncData",
				"data",
				"fetch",
				"head",
				"computed",
				"watch",
				"watchQuery",
				"LIFECYCLE_HOOKS",
				"methods",
				["template", "render"],
				"renderError",
			],
		}],
		"vue/this-in-template": ["error", "never"],

		// Uncategorized
		"vue/block-lang": ["error", {
			template: {
				allowNoLang: true,
			},
			script: {
				allowNoLang: true,
				lang: ["ts"]
			},
			style: {
				allowNoLang: true,
				lang: ["less", "sass"]
			},
		}],
		"vue/block-order": ["error", {
			order: [
				"template",
				"script[setup]",
				"script:not([setup])",
				"style[scoped]",
				"style:not([scoped])"
			],
		}],
		"vue/block-tag-newline": "off",
		"vue/component-api-style": ["error", ["script-setup", "composition", "options"]],
		"vue/component-name-in-template-casing": ["error", "PascalCase", {
			registeredComponentsOnly: true,
			ignores: [],
		}],
		"vue/component-options-name-casing": ["error", "PascalCase"],
		"vue/custom-event-name-casing": ["error",	"camelCase", {
			ignores: []
		}],
		"vue/define-emits-declaration": ["error", "type-based"],
		"vue/define-macros-order": ["error", {
			order: ["defineProps", "defineEmits"]
		}],
		"vue/define-props-declaration": ["error", "type-based"],
		"vue/html-button-has-type": ["error", {
			"button": true,
			"submit": true,
			"reset": true,
		}],
		"vue/html-comment-content-newline": "off",
		"vue/html-comment-content-spacing": ["error",	"always",	{
			exceptions: [],
		}],
		"vue/html-comment-indent": ["error", "tab"],
		"vue/match-component-file-name": ["error", {
			extensions: ["vue"],
			shouldMatchCase: true
		}],
		"vue/match-component-import-name": "error",
		"vue/max-lines-per-block": "off",
		"vue/new-line-between-multi-line-property": "off",
		"vue/next-tick-style": ["error", "promise"],
		"vue/no-bare-strings-in-template": "off",
		"vue/no-boolean-default": "off",
		"vue/no-deprecated-model-definition": ["error", {
			allowVue3Compat: true,
		}],
		"vue/no-duplicate-attr-inheritance": "error",
		"vue/no-empty-component-block": "off",
		"vue/no-multiple-objects-in-class": "error",
		"vue/no-potential-component-option-typo": ["error", {
			presets: ["all"],
			custom: [],
			threshold: 1,
		}],
		"vue/no-ref-object-reactivity-loss": "warn",
		"vue/no-required-prop-with-default": ["error", {
			autofix: false,
		}],
		"vue/no-restricted-block": "off",
		"vue/no-restricted-call-after-await": "off",
		"vue/no-restricted-class": "off",
		"vue/no-restricted-component-names": "off",
		"vue/no-restricted-component-options": "off",
		"vue/no-restricted-custom-event": "off",
		"vue/no-restricted-html-elements": "off",
		"vue/no-restricted-props": "off",
		"vue/no-restricted-static-attribute": "off",
		"vue/no-restricted-v-bind": "off",
		"vue/no-root-v-if": "error",
		"vue/no-setup-props-reactivity-loss": "error",
		"vue/no-static-inline-styles": "warn",
		"vue/no-template-target-blank": ["error", {
			allowReferrer: false,
			enforceDynamicLinks: "always",
		}],
		"vue/no-this-in-before-route-enter": "error",
		"vue/no-undef-components": ["warn", {
			ignorePatterns: ["router-link", "router-view"],
		}],
		"vue/no-undef-properties": ["warn", {
			"ignores": [],
		}],
		"vue/no-unsupported-features": "off",
		"vue/no-unused-properties": ["error", {
			groups: ["props", "data", "computed",	"methods", "setup"],
			deepData: false,
			ignorePublicMembers: false,
			unreferencedOptions: [],
		}],
		"vue/no-unused-refs": "error",
		"vue/no-use-v-else-with-v-for": "error",
		"vue/no-useless-mustaches": ["error", {
			ignoreIncludesComment: false,
			ignoreStringEscape: false,
		}],
		"vue/no-useless-v-bind": ["error", {
			ignoreIncludesComment: false,
			ignoreStringEscape: false,
		}],
		"vue/no-v-text": "error",
		"vue/padding-line-between-blocks": ["error", "always"],
		"vue/padding-line-between-tags": "off",
		"vue/padding-lines-in-component-definition": "off",
		"vue/prefer-define-options": "off",
		"vue/prefer-prop-type-boolean-first": "error",
		"vue/prefer-separate-static-class": "off",
		"vue/prefer-true-attribute-shorthand": "warn",
		"vue/require-direct-export": "off",
		"vue/require-emit-validator": "warn",
		"vue/require-expose": "off",
		"vue/require-macro-variable-name": ["error", {
			defineProps: "props",
			defineEmits: "emit",
			defineSlots: "slots",
			useSlots: "slots",
			useAttrs: "attrs",
		}],
		"vue/require-name-property": "error",
		"vue/require-prop-comment": "off",
		"vue/require-typed-object-prop": "off",
		"vue/require-typed-ref": "error",
		"vue/script-indent": "off",
		"vue/sort-keys": "off",
		"vue/static-class-names-order": "off",
		"vue/v-for-delimiter-style": "off",
		"vue/v-on-handler-style": "off",
		"vue/valid-define-options": "error",

		// Extension Rules
		"vue/array-bracket-newline": "off",
		"vue/array-bracket-spacing": "off",
		"vue/array-element-newline": "off",
		"vue/arrow-spacing": "off",
		"vue/block-spacing": "off",
		"vue/brace-style": "off",
		"vue/camelcase": "off",
		"vue/comma-dangle": "off",
		"vue/comma-spacing": "off",
		"vue/comma-style": "off",
		"vue/dot-location": "off",
		"vue/dot-notation": "off",
		"vue/eqeqeq": "off",
		"vue/func-call-spacing": "off",
		"vue/key-spacing": "off",
		"vue/keyword-spacing": "off",
		"vue/max-len": "off",
		"vue/multiline-ternary": "off",
		"vue/no-console": "off",
		"vue/no-constant-condition": "off",
		"vue/no-empty-pattern": "off",
		"vue/no-extra-parens": "off",
		"vue/no-irregular-whitespace": "off",
		"vue/no-loss-of-precision": "off",
		"vue/no-restricted-syntax": "off",
		"vue/no-sparse-arrays": "off",
		"vue/no-useless-concat": "off",
		"vue/object-curly-newline": "off",
		"vue/object-curly-spacing": "off",
		"vue/object-property-newline": "off",
		"vue/object-shorthand": "off",
		"vue/operator-linebreak": "off",
		"vue/prefer-template": "off",
		"vue/quote-props": "off",
		"vue/space-in-parens": "off",
		"vue/space-infix-ops": "off",
		"vue/space-unary-ops": "off",
		"vue/template-curly-spacing": "off",
	},
};
