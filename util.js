/**
 * @file Utility file for commonly used functions
 */

/**
 * 
 * @param {string} title 
 * @param {string} redirUrl - when the card is clicked, the user is redirected to this url 
 * @returns Card as a DOM element
 */
export function createThreadCard(title, redirUrl){
    let threadDiv = $("<div>")
    threadDiv.addClass("thread")
    threadDiv.append(`<h2><a href="${redirUrl}">${title}</a></h2>`)
    return threadDiv
}

/**
 * 
 * @param {string} content 
 * @param {string} author 
 * @param {string} createDate 
 * @param {string} editDate 
 * @returns Card as a DOM element
 */
export function createPostCard(content, author, createDate, editDate){
    let card = $("<div>").addClass("card")
    let cardBody = $("<div>").addClass("card-body")
    let cardTitle = $("<h5>").addClass("card-title").text(author)
    let cardText = $("<p>").addClass("card-text").text(content)
    cardBody.append(cardTitle)
    cardBody.append(cardText)
    card.append(cardBody)

    return card
}