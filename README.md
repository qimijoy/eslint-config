# Description
A package with ESLint configurations. The goal is to unify ESlint configurations for my projects.

## Usage
1. Install package via npm:

```
npm i --save-dev @qimijoy/eslint-config
```

2. Add the required configuration in ESlint configuration file in your project:

```
import primaryConfig from '@qimijoy/eslint-config/configs/primary';

...
{
	files: [*.js],
	ignores: [...],
	languageOptions: { ... },
	rules: {
		...primaryConfig.rules,
	},
},
```

If necessary, you can replace the rules:
```
rules: {
	...primaryConfig.rules,
	"no-console": "error"
},
```

## Adding new configurations
Put the configurations in the configs folder

