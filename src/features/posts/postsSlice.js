import {createSlice} from '@reduxjs/toolkit'


const initialState = [
    {
        id:'1',
        title:'Post 1',
        content:'This is new Post',
        img: 'https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2022/opinion/shutterstock1358850531-1642092669.jpg&w=900&height=601'
    },
    {
        id:'2',
        title:'Post 2',
        content:'This is another Post',
        img: 'https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2022/opinion/shutterstock1358850531-1642092669.jpg&w=900&height=601'
        
    }
]

const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded (state,action) {
            state.push(action.payload)
        }
    }
})

export const { postAdded } = postsSlice.actions
export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer
