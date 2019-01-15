var imageIndex = 1;
var urls = [
	'../img/login/1315361136.jpg',
	'../img/login/1712840718.jpg',
	'../img/login/2010354145.jpg'
];

setInterval(imageLoop, 6000);

function imageLoop() {

	$("#img-show").attr("src", urls[imageIndex]);
	if(imageIndex < urls.length - 1) {
		imageIndex++;
	} else {
		imageIndex = 0;
	}

}