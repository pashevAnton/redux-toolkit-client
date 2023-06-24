import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(100)

    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit, {
        pollingInterval: 1000
    })

    const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation()

    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }


    return (
        <div className="post_list">
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1>Идёт загрузка...</h1>}
            {error && <h1>Произошла ошибка при загрузке постов!</h1>}
            {posts && posts.map(post =>
                <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostContainer;