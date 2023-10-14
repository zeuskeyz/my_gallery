const next = document.querySelector('#next') //gets hold of the next button
const prev = document.querySelector('#prev') //gets hold of the prev button
const pic = document.querySelector('#pic') //gets hold of the image pane
const caption = document.querySelector('#caption')
let counter = 0 //variable that keeps count of the iterations done so far

//contains a js object with all the images to be displayed
const myPics = {
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

//toggles the display between the next and previous images
const picToggler = (event) => {

    if(event.target.id === 'next'){
        counter++; 
        counter < Object.keys(myPics).length ? pic.setAttribute('src', `/code-images/${Object.keys(myPics)[counter]}`) : counter = 0; pic.setAttribute('src', `/code-images/${Object.keys(myPics)[counter]}`);
        caption.textContent = myPics[Object.keys(myPics)[counter]]
    }

    else if(event.target.id === 'prev'){
        counter--;
        counter >= 0 ? pic.setAttribute('src', `/code-images/${Object.keys(myPics)[counter]}`) : counter = Object.keys(myPics).length - 1; pic.setAttribute('src', `/code-images/${Object.keys(myPics)[counter]}`);
        caption.textContent = myPics[Object.keys(myPics)[counter]]
    }

}

//adds an event listener to the navigation buttons
next.addEventListener('click', picToggler)
prev.addEventListener('click', picToggler)