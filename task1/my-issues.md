I installed with ESlint and it expose so much errors and warnings in all codebase

i created `.prettierrc.json` with key `trailingComma` and value `es5` to allow insert comma at the end of each property of object

and remove it from anywhere else e.g (callback of filter method) was adding comma at the end of it.

and create new command put it in `package.json` is `eslint --fix` to reformat code based on prettier/eslint configurations.
