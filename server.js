const express = require('express')
const app = express()

const data = {
    posts: [
        { "id": 1, "title": "json-server", "author": "typicode" },
        { "id": 2, "title": "json-server1", "author": "typicode" },
        { "id": 3, "title": "json-server2", "author": "typicode" },
        { "id": 4, "title": "json-server2", "author": "typicode" },
    ],
    comments: [
        { "id": 1, "body": "some comment", "postId": 1 },
        { "id": 2, "body": "some comment2", "postId": 2 },
        { "id": 3, "body": "some comment3", "postId": 3 },
        { "id": 4, "body": "some comment4", "postId": 4 },
    ],
    profile: { "name": "typicode" }
}

app.get('/posts', (req, res) => {
    res.set({'Access-Control-Allow-Origin': '*'})
    res.send(data.posts)
})


app.listen(8089, () => {
    console.log(`Server started!`)
})