// defines a variable which selectrs all .draggable classes ~ blue p's
const draggables = document.querySelectorAll('.draggable')
// defines a variable which selectrs all .box classes ~ orange divs
const boxes = document.querySelectorAll('.box')

//for each draggable, adds and event listener 
draggables.forEach(draggable => {
  //this event listener adds 'dragging' class to the selected paragraph and starts the event.
  draggable.addEventListener('dragstart', () => {
    console.log('drag started')
    draggable.classList.add('dragging')
  })
  //this event listener removes 'dragging' class from the selected paragraph and ends the event.
  draggable.addEventListener('dragend', () => {
    console.log('drag ended')
    draggable.classList.remove('dragging')
  })
})

//for each box, adds a dragover event and appends the selected paragraph to the end of the dropped box.
boxes.forEach(box => {
  box.addEventListener('dragover', e => {
    //prevents default ~ changes the cursor icon from line-through circle to standart mouse effect which displays 'applicable event'
    //drag a blue box outside container to check mouse effect.
    e.preventDefault()
    console.log('dragging')
    //defines a new variable for the selected paragraph. selected paragraph has taken 'dragging' class above.
    //appends the selected parapgraph to the end of the dropped box.
    const draggable = document.querySelector('.dragging')
    box.appendChild(draggable)
    })
})
