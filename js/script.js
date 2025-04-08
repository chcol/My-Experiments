document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-output", {
	strings: [
	  "你好，欢迎来到chcol的世界！",
	  "这里会丢入很多有意思的东西。",
	  "虽然不频繁丢入。",
	  "但把时间拉长，会有的，一切都会有的"
	],
	typeSpeed: 60,
	backSpeed: 30,
	backDelay: 1500,
	startDelay: 500,
	loop: true,
	showCursor: true,
	cursorChar: '|'
  });
});

// 初始化 VanillaTilt
VanillaTilt.init(document.querySelectorAll(".tilt-container"), {
	max: 25, // 最大倾斜角度
	speed: 400, // 动画速度
	scale: 1.1, // 鼠标悬停时放大的比例
	glare: true, // 启用光晕效果s
	"max-glare": 0.5 // 光晕最大亮度
});
