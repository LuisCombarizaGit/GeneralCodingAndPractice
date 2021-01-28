import React from "react"; // ES6 module dependency import -JavaScript-
import ReactDom from "react-dom";

// CSS import
import "./index.css";

// Setup vars
const books = [
  {
    img: "https://m.media-amazon.com/images/I/41lnWPdpvTL._SY346_.jpg",
    title: "I love you to the Moon and Back",
    author: " LLLisa Pasold",
  },
  {
    img: "https://m.media-amazon.com/images/I/41lnWPdpvTL._SY346_.jpg",
    title: "I love you to the Moon and Back",
    author: " PPPisa Pasold",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book Key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // Attribute, eventHandler
  // onClick, onMouseOver

  const clickHandler = () => {
    alert("Hello World");
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author} </h4>
      <button typre="button" Onclick={clickHandler}>
        Reference example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
