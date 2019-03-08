
var displayBar = document.querySelector('figure.displayBar');

var thumbBar = document.querySelector('ul.thumbBar');

var nextBtn = document.querySelector('div.btn');

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

var i = 0;
do {
	var newLi = document.createElement('li');
	var newImage = document.createElement('img');
	newImage.setAttribute('src', imgList[i].src);
	newImage.setAttribute('alt', imgList[i].title);
	newImage.className = 'thumbnail';
	newLi.appendChild(newImage);
	thumbBar.appendChild(newLi);
	if(i == 0) {
		newImage.getAttribute('src').replace('small', 'large');
		displayImage(newImage);
		newImage.className += ' active';
	}
	i++;
} while (i < imgList.length);

thumbBar.onclick = function (event) {
	if(event.target && event.target.nodeName === 'IMG') {
		var selectedImg = event.target;
		displayImage(selectedImg);
		outlineClearing();
		event.target.className += ' active';
	}
};

function displayImage(img) {
	displayBar.querySelector('img').setAttribute('src', img.getAttribute('src').replace('small', 'large'));
	displayBar.querySelector('img').setAttribute('alt', img.getAttribute('alt'));
	displayBar.querySelector('figcaption').innerHTML = img.getAttribute('alt');
}

function outlineClearing() {
	var thumbImgs = document.querySelectorAll('img.thumbnail');
	for(var i = 0; i < thumbImgs.length; i++) {
		thumbImgs[i].className = thumbImgs[i].className.replace (' active', '');
	}
}

nextBtn.onclick = function(event) {
	var thumbImgs = document.querySelectorAll('img.thumbnail');
	var curImgIndex;
	var nextImgIndex;
	for(var i = 0; i < thumbImgs.length; i++) {
		if(thumbImgs[i].className.search('active') > -1) {
			curImgIndex = i;
			break;
		}
	}
	if(event.target && event.target.className.search('next') > -1) {
		if(curImgIndex >= thumbImgs.length - 1) {
			nextImgIndex = 0;
		}
		else {
			nextImgIndex = curImgIndex + 1;
		}
	}
	if(event.target && event.target.className.search('previous') > -1) {
		if(curImgIndex <= 0) {
			nextImgIndex = thumbImgs.length - 1;
		}
		else {
			nextImgIndex = curImgIndex - 1;
		}
	}
	thumbImgs[curImgIndex].className = thumbImgs[curImgIndex].className.replace (' active', '');
	thumbImgs[nextImgIndex].className += ' active';
	displayImage(thumbImgs[nextImgIndex]);
};
