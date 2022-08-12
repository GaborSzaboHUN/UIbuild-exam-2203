const headerComponent = function () {
    return `
    <header>
        <h1>${books.logo}</h1>
        <p><span class="material-symbols-outlined">
        menu
        </span></p>
    </header>`
}

const cardComponent = function (number, author, title, description) {
    return `
    <div class="book-card-container">
        <div class="card-inner">
            <div class="book-number">${number}</div>
            <p class="book-author">${author}</p>
            <h2 class="book-title">${title}</h2>
            <p class="book-description">${description}</p>
        </div>
        <button class="more">read more <span class="material-symbols-outlined">
        arrow_forward
        </span> </button>
    </div>`
}


const loadEvent = function () {
    const rootElement = document.getElementById("root")

    const cardsContainer = function () {
        return `
        <div id="cards-container"></div>
        `
    }

    rootElement.insertAdjacentHTML("beforeend", headerComponent())
    rootElement.insertAdjacentHTML("beforeend", cardsContainer())

    const booksComponent = document.getElementById("cards-container")

    for (let i = 0; i < books.cards.length; i++) {
        booksComponent.insertAdjacentHTML("beforeend", cardComponent(1 * [i] + 1, books.cards[i].sub, books.cards[i].title, books.cards[i].text))
    }

}

window.addEventListener("load", loadEvent)