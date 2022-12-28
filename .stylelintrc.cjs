module.exports = {
	extends: [
		'stylelint-config-standard', // 配置stylelint拓展插件
		'stylelint-config-standard-scss',
		'stylelint-config-prettier', // 配置stylelint和prettier兼容
		'stylelint-config-prettier-scss',
		'stylelint-config-recess-order' // 配置stylelint css属性书写顺序插件,
	],
	plugins: ['stylelint-scss'], // 配置stylelint scss拓展插件
	overrides: [
		// 若项目中存在scss文件，添加以下配置
		{
			files: '**/*.scss',
			customSyntax: 'postcss-scss'
		}
	],
	ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', '**/*.md', '**/*.yaml'],
	rules: {}
};
