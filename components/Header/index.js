// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const headerEntry = document.querySelector('.header-container')
const headerContent = Header()

headerEntry.appendChild(headerContent)

function Header() {
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('header')

    const theDate = document.createElement('span')
    theDate.classList.add('date')
    headerDiv.appendChild(theDate)
    theDate.textContent='SMARCH 28, 2019'

    const pageTitle= document.createElement('h1')
    headerDiv.appendChild(pageTitle)
    pageTitle.textContent = 'Lambda Times'

    const temp = document.createElement('span')
    temp.classList.add('temp')
    headerDiv.appendChild(temp)
    temp.textContent=`98\u00B0`

    return headerDiv
}
