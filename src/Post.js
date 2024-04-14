import { useContext } from "react";

import { ListContext } from "./PostContext";
import { Link } from "react-router-dom";

export default function Post() {
  const listContext = useContext(ListContext);

  let postList = listContext.map((list) => {
    return (
      <Link key={list.id} to={`/postDitels/${list.id}`}>
        <h1>{list.title}</h1>
      </Link>
    );
  });

  return <>{postList}</>;
}
