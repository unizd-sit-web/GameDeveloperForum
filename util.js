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