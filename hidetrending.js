window.onload = function() {
	if (window.location.href.indexOf('youtube.com') !== -1) {
		document.querySelectorAll("a[href^='/feed/trending']")[0].style.display = 'none';
	}
}
