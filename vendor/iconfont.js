function drawIcon(d) {
	console.log(d);
	console.log('=====')
	var e, l = `<svg>
		<symbol id="icon-ArtboardCopyx" viewBox="0 0 1024 1024">
			<path d="M551.903 202.24l304.142 574.49c22.05 41.651 1.725 75.421-45.403 75.421H213.306c-47.132 0-67.455-33.767-45.403-75.422l304.142-574.49c22.05-41.651 57.806-41.654 79.858 0z m-39.93 428.21c23.553 0 42.668-19.114 42.668-42.666V374.451c0-23.552-19.115-42.667-42.667-42.667-23.552 0-42.667 19.115-42.667 42.667v213.333c0 23.552 19.115 42.667 42.667 42.667z m0 128c23.553 0 42.668-19.114 42.668-42.666 0-23.552-19.115-42.666-42.667-42.666-23.552 0-42.667 19.114-42.667 42.666 0 23.552 19.115 42.667 42.667 42.667z" fill="#59B53E" ></path></symbol><symbol id="icon-addcopyx" viewBox="0 0 1024 1024"><path d="M554.667 469.333h170.666C748.897 469.333 768 488.436 768 512s-19.103 42.667-42.667 42.667H554.667v170.666C554.667 748.897 535.564 768 512 768s-42.667-19.103-42.667-42.667V554.667H298.667C275.103 554.667 256 535.564 256 512s19.103-42.667 42.667-42.667h170.666V298.667C469.333 275.103 488.436 256 512 256s42.667 19.103 42.667 42.667v170.666z" fill="#FFFFFF" ></path></symbol><symbol id="icon-chevron-upcopyx" viewBox="0 0 1024 1024"><path d="M481.83 371.503c16.662-16.662 43.678-16.662 60.34 0l195.963 195.964c16.495 16.495 16.495 43.238 0 59.733-16.495 16.495-43.238 16.495-59.733 0L512 460.8 345.6 627.2c-16.495 16.495-43.238 16.495-59.733 0-16.495-16.495-16.495-43.238 0-59.733L481.83 371.503z" fill="#505F79" ></path></symbol><symbol id="icon-chevron-leftcopyx" viewBox="0 0 1024 1024"><path d="M384.214 469.119l195.964-195.964c16.495-16.494 43.238-16.494 59.733 0 16.495 16.495 16.495 43.239 0 59.734l-166.4 166.4 166.4 166.4c16.495 16.495 16.495 43.238 0 59.733-16.495 16.495-43.238 16.495-59.733 0L384.214 529.46c-16.662-16.663-16.662-43.678 0-60.34z" fill="#505F79" ></path></symbol><symbol id="icon-raised-handcopyx" viewBox="0 0 1024 1024"><path d="M597.333 512c70.693 0 128 57.308 128 128v153.6A384 384 0 0 1 465.067 896a386.987 386.987 0 0 1-251.734-98.133V640c0-70.692 57.308-128 128-128h256z m-128-384C563.59 128 640 204.41 640 298.667c0 94.256-76.41 170.666-170.667 170.666-94.256 0-170.666-76.41-170.666-170.666 0-94.257 76.41-170.667 170.666-170.667z m238.935 324.265l93.865-125.154V213.338c0-23.566 19.103-42.671 42.667-42.671 23.57 0 42.667 19.101 42.667 42.664v99.56c0 23.553-11.462 57.947-25.601 76.799l-85.332 113.776c-14.136 18.848-40.883 22.672-59.734 8.534-18.855-14.142-22.671-40.883-8.532-59.735z" fill="#3172E0" ></path></symbol><symbol id="icon-chevron-downcopyx" viewBox="0 0 1024 1024"><path d="M481.83 627.074L285.867 431.111c-16.495-16.495-16.495-43.238 0-59.733 16.495-16.495 43.238-16.495 59.733 0l166.4 166.4 166.4-166.4c16.495-16.495 43.238-16.495 59.733 0 16.495 16.495 16.495 43.238 0 59.733L542.17 627.074c-16.662 16.663-43.678 16.663-60.34 0z" fill="#505F79" >
			</path>
		</symbol>
		<symbol id="icon-chevron-rightcopyx" viewBox="0 0 1024 1024">
			<path d="M639.786 469.119c16.662 16.662 16.662 43.677 0 60.34L443.822 725.422c-16.495 16.495-43.238 16.495-59.733 0-16.495-16.495-16.495-43.238 0-59.733l166.4-166.4-166.4-166.4c-16.495-16.495-16.495-43.239 0-59.734 16.495-16.494 43.238-16.494 59.733 0L639.786 469.12z" fill="#505F79" >
			</path>
		</symbol>
		</svg>`,
		t = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");
	if (t && !d.__iconfont__svg__cssinject__) {
		d.__iconfont__svg__cssinject__ = !0; try {
			document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
		} catch (e) { console && console.log(e) }
	}
	!function (e) {
		if (document.addEventListener) if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(e, 0);
		else {
			var t = function () { document.removeEventListener("DOMContentLoaded", t, !1), e() };
			document.addEventListener("DOMContentLoaded", t, !1)
		} else document.attachEvent && (o = e, n = d.document, c = !1, i = function () { c || (c = !0, o()) }, (l = function () { try { n.documentElement.doScroll("left") } catch (e) { return void setTimeout(l, 50) } i() })(), n.onreadystatechange = function () { "complete" == n.readyState && (n.onreadystatechange = null, i()) }); var o, n, c, i, l
	}(function () { var e, t, o, n, c, i; (e = document.createElement("div")).innerHTML = l, l = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", o = t, (n = document.body).firstChild ? (c = o, (i = n.firstChild).parentNode.insertBefore(c, i)) : n.appendChild(o)) })
};