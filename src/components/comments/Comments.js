import { useState } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <Link to={`quotes/${params.quoteId}/comments/comment-section`}>
        Comments...
      </Link>
    </section>
  );
};

export default Comments;
