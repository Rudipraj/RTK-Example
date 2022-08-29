import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)
    
    const renderPosts = posts.map(post => (
        <article key={post.id}>
                <h3>{post.title}</h3>
                <img src={post.img} alt='p' style={{width:"auto", height:"auto"}}/>
                <p>{post.content.substring(0,100)}</p>
        </article>
    ))
    console.log("...",posts)
    return(
        <section>
            <h2>Posts</h2>
            {renderPosts}
        </section>
    )
}

export default PostsList