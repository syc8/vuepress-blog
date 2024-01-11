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
		nav: [
			{ text: "首页", link: "/" },
			{
				// text: "面试题", link: "/interview/a"
				text: "面试题",
				ariaLabel: "Language Menu",
				items: [
					{ text: "2020面试题1", link: "/interview/2020面试题1/" },
					{ text: "2020面试题2", link: "/interview/2020面试题2/" },
					{ text: "覆盘", link: "/interview/覆盘/" },
					{ text: "性能优化", link: "/interview/性能优化/" },
					{ text: "2023弱点复习", link: "/interview/2023弱点复习/" },
				],
			},
			{ text: "文档", link: "/document/index" },
			{ text: "github", link: "https://github.com/syc-xiaosu03", target: "_self" },
		],
		// 侧边栏配置
		sidebar: {
			// '/': '',
			"/interview/": [
				{
					title: "面试题之",
					children: [
						// "/interview/test",
						"/interview/2020面试题1",
						"/interview/2020面试题2",
						"/interview/覆盘",
						"/interview/性能优化",
						"/interview/2023弱点复习",
					],
				},
			],
			"/": [
				"" /* / */,
				// 'contact', /* /contact.html */
				// 'about'    /* /about.html */
			],
		},
		sidebar: auto,
		// sidebarDepth: 2,
	},
};
