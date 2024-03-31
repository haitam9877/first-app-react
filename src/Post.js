export default function Post() {
    return (
        <div className="box-post">
            <PostMain title="El heithem" body="This is the Post Body

">
                <h2>20</h2>
            </PostMain>
            <PostMain title="Hello World" body="This is the Post Body

" />
            <PostMain title="Post 3" body="This is the Post Body

" />
       
        </div>
    )
}
function PostMain({children,title,body}) {

    //console.log(props)
    return (
        <div className="post">
            {children}
            <h2>{title}</h2>
            <hr></hr>
            <p>{body}</p>
        </div>
    )
}