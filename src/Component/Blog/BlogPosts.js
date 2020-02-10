import React from "react";

const BlogPosts = props => {
  return (
    <div className="row">
      <div className="col-sm main-blog">
        <img
          className="img-fluid"
          src={require(`../../media/blogs/${props.blogdata.imgURL}`)}
          alt="entry display"
        />
        <p>{props.blogdata.publishedDate}</p>
        <h4>{props.blogdata.title}</h4>
        <p className="blog-content">{props.blogdata.content}</p>
        <a href="#">/ READ MORE</a>
      </div>
      <div className="col-sm side-blog"></div>
    </div>
  );
};

export default BlogPosts;
