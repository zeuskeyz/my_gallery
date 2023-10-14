const next = document.querySelector('#next') //gets hold of the next button
const prev = document.querySelector('#prev') //gets hold of the prev button
const pic = document.querySelector('#pic') //gets hold of the image pane

//variable that keeps count of the iterations done so far
let counter = 0
//contains an array of all the images to be displayed
const myPics = ['image_1.jpg','image_2.jpg', 'image_3.jpg', 'image_4.jpg', 'image_5.jpg', 'image_6.jpg', 'image_7.jpg', 'image_8.jpg', 'image_9.jpg', 'image_10.jpg', 'image_11.jpg', 'image_12.jpg', 'image_13.jpg', 'image_14.png']

//handles the display of the next image
const nextFunc = () => {
    counter++
    counter < myPics.length ? pic.setAttribute('src', `/code-images/${myPics[counter]}.jpg`) : counter = 0; pic.setAttribute('src', `/code-images/${myPics[counter]}`);
}

//handles the display of the previous images
const prevFunc = () => {
    counter--;
    counter >= 0 ? pic.setAttribute('src', `/code-images/${myPics[counter]}.jpg`) : counter = myPics.length-1; pic.setAttribute('src', `/code-images/${myPics[counter]}`);
}

//adds an event listener to the navigation buttons
next.addEventListener('click', nextFunc)
prev.addEventListener('click', prevFunc)