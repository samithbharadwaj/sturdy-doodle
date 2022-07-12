Problem Statement

Generic Commenting Service for a Social Media Platform

Assumptions - Single level comments. Every Comment can have a reply. - Pure text comments - Posts and Users are created seperately in other microservices

    - Comment (_id, postId(index), userId, body, createdAt, updatedAt)
    - Reply (_id, commentId(index), userId, body, createdAt, updatedAt)

    Comments
    - GET Comments http://domain-name.com/comments/:postId
    - POST Comments http://domain-name.com/comments
        {
            postId: "",
            userId: "",
            body: "Nice Post",
        }
    - GET Comments http://domain-name.com/comments/:userId


    Reply
    - GET Reply http://domain-name.com/reply/:commentId
    - POST Reply http://domain-name.com/reply
        {
            commentId: "",
            userId: "",
            body: ""
        }
