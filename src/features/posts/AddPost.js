import { useState } from 'react';
import { postAdded } from './postsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';


const AddPost = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleContentChange = (e) => {
        setContent(e.target.value)
    }
    const handleImageChange = (e) => {
        const [file] = URL.createObjectURL(e.target.files);
        setImage(file);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content) {
            dispatch(postAdded({
                id: nanoid(),
                title,
                content, 
                img: image
            }))
        }
        setTitle('');
        setContent('');

    }

    return (
        <section>
            <h2>Add Post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='postTitle'>Title:</label>
                <input name="title" type="text" value={title} onChange={handleTitleChange} />
                <label htmlFor='postTitle'>Image:</label>
                <input name="title" type="file" value={""} multiple={false}  onChange={handleImageChange} />
                <label htmlFor='postContent'>Content:</label>
                <textarea name="content" type="text" value={content} onChange={handleContentChange} />
                <button type="submit">Add</button>
            </form>
        </section>
    )

}

export default AddPost;
