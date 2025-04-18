async function fetchPost() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    if (response.ok) {
        const data = await response.json()
        return data
    } else {
        throw Error('Виникла помилка: ')
    }
}

async function fetchComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    if (response.ok) {
        const data = await response.json()
        return data
    } else {
        throw Error('Виникла помилка: ')
    }
}

async function getPostAndComments() {
    try {
        const post = await fetchPost()
        console.log(post)
        const comments = await fetchComments()
        console.log(comments)

    } catch (error) {
        console.log(error)
    }
}

async function getFastestResponse() {
    Promise.race([fetchPost(), fetchComments()])
        .then(console.log)
}

getPostAndComments()
getFastestResponse()