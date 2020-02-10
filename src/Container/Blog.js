import React from "react";
import BlogPosts from "../Component/Blog/BlogPosts"
import SectionTitle from "../Component/CommonUse/SectionTitle"
import BlogData from "../Component/Blog/BlogData"

const Blog = () => {
return (
  <section className="container">
    <SectionTitle
      title="FROM OUR BLOG"
      desc="-Keep updated with us-"
    ></SectionTitle>
    {
      BlogData.map((value,index)=>{
        return <BlogPosts blogdata={value} key={index}></BlogPosts>;
      })
    }
    
  </section>
);
}
export default Blog;