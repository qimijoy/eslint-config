# Description
A package with ESLint configurations. The goal is to unify ESlint configurations for my projects.

## Usage 
### JS
1. Install package via npm:
```
npm i -D @babel/preset-env @babel/eslint-parser @qimijoy/eslint-config
```

2. Add the required configuration in ESlint configuration file in your project:
```
import babelParser from '@babel/eslint-parser';
import primaryConfig from '@qimijoy/eslint-config/configs/primary';
...
{
	files: ['**/*.js'],
	ignores: ['**/dist/**'],
	languageOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		parser: babelParser,
		parserOptions: {
			babelOptions: {
				presets: ['@babel/preset-env'],
			},
		},
	},
	rules: {
		...primaryConfig.rules,
	},
},
```

### Cypress
1. Install package via npm:
```
npm i -D eslint-plugin-vue vue-eslint-parser @babel/eslint-parser @qimijoy/eslint-config
```

2. Add the required configuration in ESlint configuration file in your project:
```
import cypress from 'eslint-plugin-cypress';
import cypressConfig from '@qimijoy/eslint-config/configs/cypressConfig';
...
{
files: ['**/*.spec.js'],
plugins: { cypress },
rules: {
...cypress.configs.recommended.rules,
...cypressConfig.rules,
},
},
```

### Vue
1. Install package via npm:
```
npm i -D eslint-plugin-cypress @qimijoy/eslint-config 
```

2. Add the required configuration in ESlint configuration file in your project:
```
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import babelParser from '@babel/eslint-parser';
import vueConfig from '@qimijoy/eslint-config/configs/vueConfig';
...
// Vue-файлы
{
	files: ['**/*.vue'],
	languageOptions: {
		ecmaVersion: 'latest',
		parser: vueParser, // <template>
		parserOptions: {
			parser: babelParser, // <script>
		},
	},
	plugins: { vue },
	rules: {
		...vueConfig.rules,
	},
},
```

## "Hot fix" rules
If necessary, you can replace the rules:
```
rules: {
	...primaryConfig.rules,
	"no-console": "error"
},
```

## Adding new configurations
Put the configurations in the configs folder
