import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ListContext } from "./PostContext";

export default function PostDitels() {
  const { postId } = useParams();
  let posts = useContext(ListContext);

  const post = posts.find((p) => {
    return p.id == postId;
  });

  if (post) {
    return (
      <>
        <h2>This Page In Post Ditels</h2>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </>
    );
  } else {
    return (
      <>
        <h2>The Post id : {postId} is Not Define</h2>
      </>
    );
  }
}
