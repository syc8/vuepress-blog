module.exports = {
	title: "sansu-blog",
	dest: './dist',   // 设置打包输出目录
	description: "Just playing around",
	base: "/blog/", //https://github.com/syc-xiaosu03
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
			{ text: "面试题", link: "/interview/a" },
			{ text: "文档", link: "/document/index" },
			{ text: "github", link: "https://github.com/syc-xiaosu03", target: "_self" },
		],
		// 侧边栏配置
		sidebar: {
			// '/': '',
			"/interview/": [
				{
					title: "vue",
					children: ["/interview/a", "/interview/b"],
				},
			],
            '/': [
                '',        /* / */
                // 'contact', /* /contact.html */
                // 'about'    /* /about.html */
            ]
		},
		sidebarDepth: 2,
	},
};
