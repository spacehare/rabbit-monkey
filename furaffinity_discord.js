// ==UserScript==
// @name         FA->Discord
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  grabs FurAffinity submission information to display on Discord
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
	var info = document.getElementsByClassName(
		"classic-submission-title information"
	)[0];
	var title = info.children[0].innerText;
	var artist = info.children[1].innerText;
	var date =
		Date.parse(document.getElementsByClassName("popup_date")[0].title) / 1000;
	document.onkeydown = (e) => {
		if (e.altKey == true && e.ctrlKey == true && e.key == "f") {
			navigator.clipboard.writeText(
				`${imageURL}\n> <${url}>\n> *${title}*\n> by **${artist}**\n> <t:${date}:F>`
			)}
         else if (e.altKey == true && e.ctrlKey == true && e.key == "h") {
			navigator.clipboard.writeText(
				`|| ${imageURL} ||\n>>> <${url}>\n *${title}*\n by **${artist}**\n <t:${date}:F>`
			);
			console.log("🐇 copied!");
		}
	};
})();
