// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const placeArticles = document.querySelector('.cards-container')


axios.get(` https://lambda-times-backend.herokuapp.com/articles`)
.then(response =>{
    console.log (response.data.articles)
    
    response.data.articles.bootstrap.forEach(element => {
        const cardsBootstrap = cardMaker(element)
        placeArticles.appendChild(cardsBootstrap)
    })
    response.data.articles.javascript.forEach(element => {
        const cardsjavascript = cardMaker(element)
        placeArticles.appendChild(cardsjavascript)
    })
    response.data.articles.jquery.forEach(element => {
        const cardsjquery = cardMaker(element)
        placeArticles.appendChild(cardsjquery)
    })
    response.data.articles.node.forEach(element => {
        const cardsnode = cardMaker(element)
        placeArticles.appendChild(cardsnode)
    })
    response.data.articles.technology.forEach(element => {
        const cardstechnology = cardMaker(element)
        placeArticles.appendChild(cardstechnology)
    })
})
.catch(error =>{
    console.log(error)
}
)


function cardMaker(person) {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')
    
            const cardHeadline = document.createElement('div')
            cardHeadline.classList.add('headline')
            cardDiv.appendChild(cardHeadline)
            cardHeadline.textContent = person.headline

            const theAuthor = document.createElement('div')
            theAuthor.classList.add('author')
            cardDiv.appendChild(theAuthor)
            
                const imgContainer = document.createElement('div')
                imgContainer.classList.add('img-container')
                theAuthor.appendChild(imgContainer)
                   
                     const authorImg= document.createElement('img')
                    imgContainer.appendChild(authorImg)
                    authorImg.src = person.authorPhoto

                const authorsName = document.createElement('span')
                authorsName.textContent= person.authorName
                theAuthor.appendChild(authorsName)
                

    return cardDiv
}
