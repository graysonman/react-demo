import Post from "./Post";
import { useLoaderData } from "react-router-dom";
import classes from "./PostList.module.css";

function PostList() {
    const posts = useLoaderData();
    return (
        <div>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post key={post.id} id={post.id} author={post.name} body={post.body} />
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: "center", color: "white"}}>
                    <h2>No posts found.</h2>
                    <p>Start creating posts.</p>
                </div>
            )}
        </div>
    );
}
export default PostList;
