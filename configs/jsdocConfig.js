module.exports = {
	rules: {
		"jsdoc/check-access": "warn",
		"jsdoc/check-alignment": "warn",
		"jsdoc/check-examples": ["warn", {
			"captionRequired": false,
			"paddedIndent": 2,
			"reportUnusedDisableDirectives": true,
			"checkParams": true,
			"checkProperties": true,
		}],
		"jsdoc/check-indentation": ["warn", {
			"excludeTags": ["example", "returns"]
		}],
		"jsdoc/check-line-alignment": ["warn", "always", {
			"customSpacings": {
				"postDelimiter": 1,
				"postTag": 1,
				"postType": 1,
			},
		}],
	},
};
