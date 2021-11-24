/**
 * @file This module is an interface between the frontend and the upcoming backend api
 *
/*
    Simulated database format:
    {
        "sections": {
            "sectionId": {
                "id": "id",
                "title": "title",
                "categories": {
                    "categoryId": {
                        "id": "id",
                        "title": "title",
                        "threads": {
                            "threadId": {
                                "id": "id",
                                "title": "title",
                                "posts": {
                                    "postId": {
                                        "id": "id",
                                        "author": "author",
                                        "content": "content",
                                        "creation_date": "date",
                                        "edit_date": "date"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
*/
export const ERROR_CODES = {
    "UNINITIALIZED": 0,
    "DB_ERROR": 1
}

let db = {}

 // create methods start here

/**
 * 
 * @param {string} title 
 * @returns {Promise<string|number} id of section on resolve, error code on reject
 */
export async function createSection(title){
}

/**
 * 
 * @param {number} sectionId 
 * @param {string} title 
 * @returns {Promise<number|number>} id of category on resolve, error code on reject
 */
export async function createCategory(sectionId, title) {
}

/**
 * 
 * @param {number} sectionId 
 * @param {number} categoryId 
 * @param {string} title 
 * @returns {Promise<number|number>} id of thread on resolve, error code on reject
 */
export async function createThread(sectionId, categoryId, title) {
}

/**
 * 
 * @param {number} sectionId 
 * @param {number} categoryId 
 * @param {number} threadId 
 * @param {string} content 
 * @param {string} author 
 * @returns {Promise<number|number>} id of post on resolve, error code on reject
 */
export async function createPost(sectionId, categoryId, threadId, content, author) {
}

// get methods start here

/**
 * 
 * @param {string} sectionTitle 
 * @returns {Promise<number|number>} section id on resolve, error code on reject
 */
 export async function getSectionIdByTitle(sectionTitle){
}

/**
 * 
 * @param {number} sectionId 
 * @returns {Promise<Object|number>} section object on resolve, error code on reject
 */
export async function getSectionById(sectionId){
}

/**
 * Get specific fields of a section object
 * @param {number} sectionId 
 * @param {string[]} filterArray 
 * @returns {Promise<Object|number} filtered section object on resolve, error code on reject
 */
export async function getSectionByIdFiltered(sectionId, filterArray){
}

/**
 * 
 * @returns {Promise<string[]|number>} section ids on resolve, error code on reject
 */
export async function getSectionsIds(){
}

/**
 * 
 * @param {number} sectionId 
 * @param {number} categoryId 
 * @returns {Promise<Object|number>} category object on resolve, error code on reject
 */
 export async function getCategoryById(sectionId, categoryId) {
}

/**
 * 
 * @param {number} sectionId 
 * @param {number} limit 
 * @returns {Promise<number[]|number>} first N category ids of section on resolve, error code on reject
 */
export async function getCategoriesIds(sectionId, limit) {
}

/**
 * Get specific fields of a category object
 * @param {number} sectionId 
 * @param {number} categoryId 
 * @param {string[]} filterArray 
 * @returns {Promise<Object|number>} filtered category object on resolve, error code on reject
 */
export async function getCategoryByIdFiltered(sectionId, categoryId, filterArray){
}

/**
 * Get specific fields of a thread object
 * @param {number} sectionId 
 * @param {number} categoryId 
 * @param {number} threadId 
 * @param {string[]} filterArray 
 * @returns {Promise<Object|number>} filtered thread object on resolve, error code on reject
 */
export async function getThreadByIdFiltered(sectionId, categoryId, threadId, filterArray) {
}

/**
 * 
 * @param {number} sectionId 
 * @param {number} categoryId 
 * @param {number} threadId 
 * @returns {Promise<Object|number>} thread object on resolve, error code on reject
 */
export async function getThreadById(sectionId, categoryId, threadId) {
}

/**
 * 
 * @param {number} sectionId 
 * @param {number} categoryId 
 * @param {number} limit 
 * @returns {Promise<number[]|number>} first N thread ids of category on resolve, error code on reject
 */
export async function getThreadsIds(sectionId, categoryId, limit) {
}

/**
 * 
 * @param {number} sectionId 
 * @param {number} categoryId 
 * @param {number} threadId 
 * @param {number} postId 
 * @returns {Promise<Object|number>} post object on resolve, error code on reject
 */
 export async function getPostById(sectionId, categoryId, threadId, postId) {
}

/**
 * 
 * @param {number} sectionId 
 * @param {number} categoryId 
 * @param {number} threadId 
 * @param {number} limit 
 * @returns {Promise<number[]|number>} first N post ids of thread on resolve, error code on reject
 */
export async function getPostsIds(sectionId, categoryId, threadId, limit) {
}

/**
 * Get specific fields of a post object
 * @param {number} sectionId 
 * @param {number} categoryId 
 * @param {number} threadId 
 * @param {number} postId 
 * @param {string[]} filterArray 
 * @returns {Promise<Object|number>} filtered post object on resolve, error code on reject
 */
export async function getPostByIdFiltered(sectionId, categoryId, threadId, postId, filterArray){
}

// modify methods start here

/**
 * 
 * @param {number} sectionId 
 * @param {string} newTitle 
 * @returns {Promise<void|number>} void on resolve, error code on reject
 */
export async function modifySectionTitle(sectionId, newTitle) {
}

/**
 * 
 * @param {number} sectionId 
 * @param {number} categoryId 
 * @param {string} newTitle 
 * @returns {Promise<void|number>} void on resolve, error code on reject
 */
export async function modifyCategoryTitle(sectionId, categoryId, newTitle){
}

/**
 * 
 * @param {number} sectionId 
 * @param {number} categoryId 
 * @param {number} threadId 
 * @param {string} newTitle 
 * @returns {Promise<void|number>} void on resolve, error code on reject
 */
export async function modifyThreadTitle(sectionId, categoryId, threadId, newTitle){
}

/**
 * 
 * @param {number} sectionId 
 * @param {number} categoryId 
 * @param {number} threadId 
 * @param {number} postId 
 * @param {string} newContent 
 * @returns {Promise<void|number>} void on resolve, error code on reject
 */
export async function modifyPostContent(sectionId, categoryId, threadId, postId, newContent){
}

/**
 * 
 * @param {number} postId 
 * @param {Date} newDate 
 * @returns {Promise<void|number>} void on resolve, error code on reject
 */
export async function modifyPostEditDate(postId, newDate){
}

/**
 * 
 * @param {number} postId 
 * @param {Date} newDate 
 * @returns {Promise<void|number>} void on resolve, error code on reject
 */
export async function modifyPostCreationDate(postId, newDate){
}

// delete methods start here

/**
 * 
 * @param {number} sectionId 
 * @returns {Promise<void|number>} void on resolve, error code on reject
 */
export async function deleteSectionById(sectionId){
} 
/**
 * 
 * @param {number} sectionId 
 * @param {number} categoryId 
 * @returns {Promise<void|number>} void on resolve, error code on reject
 */
export async function deleteCategoryById(sectionId, categoryId){
}

/**
 * 
 * @param {number} sectionId 
 * @param {number} categoryId 
 * @param {number} threadId 
 * @returns {Promise<void|number>} void on resolve, error code on reject
 */
export async function deleteThreadById(sectionId, categoryId, threadId){
}

/**
 * 
 * @param {number} sectionId 
 * @param {number} categoryId 
 * @param {number} threadId 
 * @param {number} postId 
 * @returns {Promise<void|number>} void on resolve, error code on reject
 */
export async function deletePostById(sectionId, categoryId, threadId, postId){
}

// utility functions for simulating the database

/**
 * Internal function used for simulating the database
 * @returns {Object} basic database object
 */
function initDatabase() {
    let database = {
        "sections": {
        }
    }
    saveDatabase(database)
    return database
}

/**
 * Attempts to load the database from local storage and cache it in memory. If it fails to load, it initializes a new one.
 * @returns {Object|null} the database object or null if it fails to parse the raw JSON data
 */
function getDatabase(){
}

/**
 * Internal function used for simulating the database.
 * Saves the database to local storage
 * @param {object} database 
 * @returns {Promise<void|number>} void on resolve, error code on reject
 */
async function saveDatabase(database){
}

/**
 * Internal function used for simulating the database.
 * @returns {number} random id
 */
function generateRandomId() {
}