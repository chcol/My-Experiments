document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-output", {
	strings: [
	  "你好，欢迎来到打字机的世界！",
	  "这是一个动态文字效果演示。",
	  "使用 Typed.js，简单又酷炫。",
	  "你也可以加入你自己的文字哦！"
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
