export default function Post() {
    return (
        <div className="box-post">
            <PostMain />
            <PostMain />
            <PostMain />
            <PostMain />
        </div>
    )
}
function PostMain() {
    return (
        <div className="post">
            <h2>This is the Post title</h2>
            <hr></hr>
            <p>This is the Post Body</p>
        </div>
    )
}