// ==UserScript==
// @name         FA->Discord
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  grabs modern-themed FurAffinity submission information to display on Discord
// @author       https://github.com/spacehare
// @match        https://www.furaffinity.net/view/*
// @grant        none
// @run-at document-end
// ==/UserScript==

(function () {
	"use strict";
	console.log("🐒 🐇 rabbit's FA tampermonkey script active! 🐇 🐒");
	// var discordButton = document.createElement("button");
	var imageURL =
		"https:" + document.getElementById("submissionImg").getAttribute("src");
	var url = document.head.querySelector('meta[property="og:url"]').content;
	var title = document.querySelector('div.submission-title h2 p').textContent;
	var artist = document.querySelector('.c-usernameBlockSimple__displayName').textContent;
	var date =
		Date.parse(document.getElementsByClassName("popup_date")[0].title) / 1000;
	document.onkeydown = (e) => {
        const output = `[img](${imageURL})\n> *[${title}](<${url}>)*\n> by **${artist}**\n> <t:${date}:F>`
		if (e.altKey == true && e.ctrlKey == true && e.key == "f") {
        	console.log("🐇 copied!");
			navigator.clipboard.writeText(
				`${imageURL}\n>>> *[${title}](<${url}>)*\n by **${artist}**\n <t:${date}:F>`
			)}
         else if (e.altKey == true && e.ctrlKey == true && e.key == "h") {
			console.log("🐇 copied!");
			navigator.clipboard.writeText(
				`|| ${imageURL} ||\n>>> <${url}>\n *${title}*\n by **${artist}**\n <t:${date}:F>`
			);
		}
	};
})();
