const axios = require('axios')
let id = null

test('GET post by id', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    expect(response.status).toBe(200)
    expect(response.data).toHaveProperty('userId')
    expect(response.data).toHaveProperty('id')
    expect(response.data).toHaveProperty('title')
    expect(response.data).toHaveProperty('body')  
    console.log(response.data)
});

test('Create new post via POST', async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        body: {
            title: "new post 1",
            body: "QA test 1"
        }
    })
    expect(response.status).toBe(201)
    expect(response.data).toHaveProperty('id')
    id = response.data.id
    console.log(response.data)
});

test('Update the post via PUT', async () => {
    const newTitle = "new post 2"
    const newBody = "QA test 2"
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/1`, {
        body: {
            title: newTitle,
            body: newBody
        }
    })
    expect(response.status).toBe(200)
    expect(response.data.body).toHaveProperty("title", newTitle)
    expect(response.data.body).toHaveProperty("body", newBody)
    console.log(response.data)
});

test('Delete post', async () => {
    const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/1")
    expect(response.status).toBe(200)
});