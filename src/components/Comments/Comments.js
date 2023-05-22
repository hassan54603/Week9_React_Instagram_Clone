import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  // Hubi in component-ga ka sareysa midaan ay props sax ah soo direyso.
  const { comment } = props;
  console.log("comment check")
  console.log(comment)

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {/* Dulmar prop-ka 'comments', kadib soo celi 'Comment' component, adigoo waxa ay 'Comment' u baahantahay u diraayo. */}
      {comment.map((comment) =>(
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
