// ==UserScript==
// @name         FA->Discord
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.furaffinity.net/view/*
// @grant        none
// @run-at document-end
// ==/UserScript==

(function () {
	"use strict";
	var rv = "";
	console.log("🐒 🐇 rabbit's FA tampermonkey script active! 🐇 🐒");
	var discordButton = document.createElement("button");
	var imageURL =
		"https:" + document.getElementById("submissionImg").getAttribute("src");
	var url = document.head.querySelector('meta[property="og:url"]').content;
	var info = document.getElementsByClassName(
		"classic-submission-title information"
	)[0];
	var title = info.children[0].innerHTML;
	var artist = info.children[1].innerHTML;
	rv = `${imageURL}\n> <${url}>\n> *${title}*\n> by **${artist}**`;
	navigator.clipboard.writeText(rv);
})();
