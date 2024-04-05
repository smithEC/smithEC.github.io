const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Declaring the alternative text for each image file */
const altText = ['Closeup of a human eye', 'Alt2', 'Alt3', 'Alt4', 'Alt5']

/* Looping through images */
for (filename in filenames) {
    const newFile = document.createElement('img')
    newFile.setAttribute('src', 'images/' + filenames[filename])
    newFile.setAttribute('alt', altText[filename])
    thumbBar.appendChild(newFile)
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
