window.onload = function() { 
	var video = document.getElementById('video');
	var source = document.createElement('source');
//	source.setAttribute('src', 'http://www.w3schools.com/html/mov_bbb.ogg');
	source.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Big_Buck_Bunny_Trailer_1080p.ogg');
	video.appendChild(source);
	video.play();

	setTimeout(function() {  
	    video.pause();
	    source.setAttribute('src', 'http://www.w3schools.com/html/mov_bbb.ogg'); 
	    video.load();
	    video.play();
	}, 330000);
	};
