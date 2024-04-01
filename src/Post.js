export default function Post() {

    const posts = [
        {
            id: 1,
            title: "this is post 1",
            body: "this is body 1",
            ch: <h2>20</h2>
            
        },
        {
            id: 2,
            title: "this is post 2",
            body: "this is body 2",   
        },
        {
            id: 3,
            title: "this is post 3",
            body: "this is body 3",   
        }

    ]

    const postsLists = posts.map((post) => {
        return <PostMain key={post.id} title={post.title} body={post.body}>
            {post.ch}
        </PostMain>
    })
    return (
        <div className="box-post">
            
            {postsLists}
        </div>
    )
}

function PostMain({title , body , children }) {

        return (
            <div className="post">
                {children}
                <h2>{title}</h2>
                <hr></hr>
                <p>{body}</p>
            </div>
            )

}