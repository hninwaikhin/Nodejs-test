var src = require('.././');

require('domready')(function () {
	console.log('dom ready, starting testing.');

	var body = document.getElementsByTagName("body")[0];

	var container = document.createElement('div');
	container.setAttribute("id", "container");
	body.appendChild(container);

    src.init(function() {
    	console.log('Library loaded');

		var player = src.createPlayer("container", {
	        width: '800',
	        height: '500',
	        videoId: 'aqz-KE-bpKQ',
	        playerVars: { 'autoplay': 0, 'controls': 1 },
	        events: {
	            'onReady': playerReady,
	            'onStateChange': onPlayerStateChange
	        }
	    });
    });

    function playerReady() {
    	src.play();
    }

    function onPlayerStateChange(event) {
    	console.log('Player State Changed: ', event);
    }

});
