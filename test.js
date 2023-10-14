const next = document.querySelector('#next') //gets hold of the next button
const prev = document.querySelector('#prev') //gets hold of the prev button
const pic = document.querySelector('#pic') //gets hold of the image pane
const caption = document.querySelector('#caption')

//variable that keeps count of the iterations done so far
let counter = 0
//contains an array of all the images to be displayed
const capDict = {
    'image_1.jpg' : 'The beach front view',
    'image_2.jpg' : 'The river end pyramid house',
    'image_3.jpg' : 'The laughing black proffessor',
    'image_4.jpg' : 'The laughing black student',
    'image_5.jpg' : 'The laughing white proffessor',
    'image_6.jpg' : 'The yellow female photographer',
    'image_7.jpg' : 'The young female Artist',
    'image_8.jpg' : 'The black male photographer',
    'image_9.jpg' : 'Footeps on the beach',
    'image_10.jpg' : 'Artificial Intelligence and Machine Learning',
    'image_11.jpg' : 'River tree reflection',
    'image_12.jpg' : 'Winter timberland reflection',
    'image_13.jpg' : 'AI face',
    'image_14.png' : 'Dream diaries logo',
    'image_15.jpg' : 'Mind blowing nature',
    'image_16.jpg' : 'Salhans face'
}

//handles the display of the next image
const nextFunc = () => {
    counter++; 
    counter < Object.keys(capDict).length ? pic.setAttribute('src', `/code-images/${Object.keys(capDict)[counter]}`) : counter = 0; pic.setAttribute('src', `/code-images/${Object.keys(capDict)[counter]}`);
    caption.textContent = capDict[Object.keys(capDict)[counter]]
}

//handles the display of the previous images
const prevFunc = () => {
    counter--;
    counter >= 0 ? pic.setAttribute('src', `/code-images/${Object.keys(capDict)[counter]}`) : counter = Object.keys(capDict).length - 1; pic.setAttribute('src', `/code-images/${Object.keys(capDict)[counter]}`);
    caption.textContent = capDict[Object.keys(capDict)[counter]]
}

//adds an event listener to the navigation buttons
next.addEventListener('click', nextFunc)
prev.addEventListener('click', prevFunc)