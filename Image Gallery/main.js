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

    newFile.addEventListener('click', e => {
        displayedImage.src = e.target.src
        displayedImage.alt = e.target.alt
    })
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const buttonClass = btn.getAttribute('class')

    if (buttonClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})