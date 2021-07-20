import React from "react";
import "./Blog.css";

export default function Blog() {
  return (
    <section className="blog">
      <h2 className="h2Blog">BLOG</h2>
      <h3 className="h3Blog">TEMAS RECIENTES</h3>
      <div className="containerBlogs">
        <div className="containerBlog">
          <div className="fotoBlog">FOTO</div>{" "}
          <h4 className="h4Blog">TÍTULO</h4>
        </div>
        <div className="containerBlog">
          <div className="fotoBlog">FOTO</div>{" "}
          <h4 className="h4Blog">TÍTULO</h4>
        </div>
        <div className="containerBlog">
          <div className="fotoBlog">FOTO</div>{" "}
          <h4 className="h4Blog">TÍTULO</h4>
        </div>
      </div>
      <button className="buttonVerMasBlogHome">+Ver más</button>
    </section>
  );
}
