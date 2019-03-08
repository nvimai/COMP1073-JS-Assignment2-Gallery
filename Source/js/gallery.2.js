
var displayBar = document.querySelector('figure.displayBar');

var thumbBar = document.querySelector('ul.thumbBar');

var nextBtn = document.querySelector('div.btn');

// Thumbnail images list
var imgList = [
	{
		'src' : 'images/flowers-pink-small.jpg',
		'title' : 'Market in Münster, North Rhine-Westphalia, Germany'
	},
	{
		'src' : 'images/flowers-purple-small.jpg',
		'title' : 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany'
	},
	{
		'src' : 'images/flowers-red-small.jpg',
		'title' : 'Poppies in cornfield, Dülmen,  North Rhine-Westphalia, Germany'
	},
	{
		'src' : 'images/flowers-white-small.jpg',
		'title' : 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany'
	},
	{
		'src' : 'images/flowers-yellow-small.jpg',
		'title' : 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany'
	}
];

// Setup the thumbnail bar
for(var i = 0; i < imgList.length; i++) {
	var newLi = document.createElement('li');
	var newImage = document.createElement('img');
	newImage.setAttribute('src', imgList[i].src);
	newImage.setAttribute('alt', imgList[i].title);
	newImage.index = i;
	newImage.className = 'thumbnail';
	newLi.appendChild(newImage);
	thumbBar.appendChild(newLi);
}

// Call and display the first image to display Bar
var slideIndex = 0;
currentSlide(slideIndex);

// Thumbnail clickable to change the image on display bar
thumbBar.onclick = function (event) {
	if(event.target && event.target.nodeName === 'IMG') {
		currentSlide(event.target.index);
	}
};

// Display an image to display bar
function displayImage(img) {
	displayBar.querySelector('img').setAttribute('src', img.getAttribute('src').replace('small', 'large'));
	displayBar.querySelector('img').setAttribute('alt', img.getAttribute('alt'));
	displayBar.querySelector('figcaption').innerHTML = img.getAttribute('alt');
}

// Outline clearing for the thumbnails
function outlineClearing() {
	var thumbImgs = document.querySelectorAll('img.thumbnail');
	for(var i = 0; i < thumbImgs.length; i++) {
		// Remove the "active" in class to avoid the css agreement
		thumbImgs[i].className = thumbImgs[i].className.replace (' active', '');
	}
}

// The next and previous event click buttons
nextBtn.onclick = function(event) {
	if(event.target && event.target.className.search('next') > -1) {
		plusSlides(1);
	}
	if(event.target && event.target.className.search('previous') > -1) {
		plusSlides(-1);
	}
};

// set and show the slide by the slide index
function plusSlides(n) {
	showSlide(slideIndex += n);
}

// set and show the slide by the current slide index
function currentSlide(n) {
	showSlide(slideIndex = n);
}

// Setting the thumbnail selection and display bar
function showSlide(n) {
	var thumbImgs = document.querySelectorAll('img.thumbnail');
	if (n >= thumbImgs.length) {
		slideIndex = 0;
	}
	if (n < 0) {
		slideIndex = thumbImgs.length - 1;
	}

	outlineClearing();

	thumbImgs[slideIndex].className += ' active';
	displayImage(thumbImgs[slideIndex]);
}

// Interval time for the gallery display
setInterval(function() {
	plusSlides(1);
}, 3000);