import React from "react";
import BlogPosts from "../Component/Blog/BlogPosts";
import SectionTitle from "../Component/CommonUse/SectionTitle";
import BlogData from "../Component/Blog/BlogData";
let mainBlog;
let sideBlog;
mainBlog = BlogData.filter(element => {
  return element.mainBlog === true;
});
sideBlog = BlogData.filter(element => {
  return element.mainBlog === false;
});
const Blog = () => {
  return (
    <section className="container mt-5 mb-5">
      <SectionTitle
        title="FROM OUR BLOG"
        desc="-Keep updated with us-"
      ></SectionTitle>
      <div className="row">
        <div className="col-sm main-blog pr-5">
          <BlogPosts
            blogdata={mainBlog[0]}
            className="row"
            contentClass="mt-3"
            imgClass="img-fluid"
          ></BlogPosts>
        </div>
        <div className="col-sm side-blog pl-5">
          {sideBlog.map((value, index) => {
            return (
              <BlogPosts
                blogdata={value}
                className="row mb-5"
                contentClass="col-sm"
                imgClass="col-sm-6 rounded"
                key={index}
              ></BlogPosts>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Blog;
