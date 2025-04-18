function fetchPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

fetchPost()

function fetchComments() {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then(response => response.json())
        .then(data => console.log(data))
}

fetchComments()