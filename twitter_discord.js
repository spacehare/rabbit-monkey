// ==UserScript==
// @name         Twitter/X->Discord
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  replace image embeds with vxtwitter domain for discord
// @author       github.com/spacehare
// @match        https://twitter.com/home
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

;(function () {
	'use strict'
	document.onkeydown = (e) => {
		if (e.altKey == true && e.ctrlKey == true && e.key == 'f') {
			let read = navigator.clipboard.readText()
			read.then((r) => {
				navigator.clipboard.writeText(
					r.replace(/(?<=\/\/)(x)(?=.com)/, 'vxtwitter')
				)
			})
		}
	}
})()
