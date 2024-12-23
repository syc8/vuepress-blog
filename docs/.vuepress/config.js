const sideBarConf = require('./sidebar')
module.exports = {
	title: "sansu-blog",
	// 以下两项base&dest, 只在部署时开启设置, 开发时需注释掉(为默认值不设定!!!)
	base: "/", // //https://github.com/syc-xiaosu03/ 下的静态资源访问路径
	dest: "./dist", // 设置打包输出目录
	description: "Just playing around",
	description: "技术博客",
	head: [["link", { rel: "icon", href: "/logo.png" }]],
	host: "0.0.0.0",
	port: 8099,
	// theme: "vuepress-theme-xx",
	extraWatchFiles: [
		// 指定额外被监听的文件
		".vuepress/README.MD", // 使用相对路径
		// "/path/to/bar.js", // 使用绝对路径
	],
	themeConfig: {
		displayAllHeaders: true, // 默认值：false
		// 导航配置
		nav: [
			{ text: "首页", link: "/" },
			{
				// text: "面试题", link: "/interview/a"
				text: "面试题",
				ariaLabel: "Language Menu",
				items: [
					{ text: "2023专项复习", link: "/interview/2023专项复习/" },
					{ text: "手写题", link: "/interview/手写题/" },
					{ text: "输出打印题", link: "/interview/输出打印题/" },
					{ text: "2020面试题1", link: "/interview/2020面试题1/" },
					{ text: "2020面试题2", link: "/interview/2020面试题2/" },
					{ text: "覆盘", link: "/interview/覆盘/" },
					{ text: "性能优化", link: "/interview/性能优化/" },
				],
			},
			{ text: "文档", link: "/document/index/" },
			{ 
				text: "react", 
				ariaLabel: "Language Menu",
				items: [
					{ text: "R", link: "/react/R/" },
					{ text: 'React+nextjs访问星', link: "/react/React+nextjs访问星/"}
				]
			},
			{ text: "github", link: "https://github.com/syc-xiaosu03", target: "_self" },
		],
		// 侧边栏配置
		...sideBarConf
	},
};
