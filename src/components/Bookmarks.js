import React, { useEffect, useState } from "react";
import "./Bookmarks.css";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    if (typeof chrome !== "undefined" && chrome.bookmarks) {
      chrome.bookmarks.getTree((bookmarkTreeNodes) => {
        const bookmarkItems = extractBookmarks(bookmarkTreeNodes);
        setBookmarks(bookmarkItems);
      });
    } else {
      console.log("Chrome API is not available. App is running outside of Chrome extension.");
      setBookmarks([]);
    }
  }, []);

  const extractBookmarks = (nodes) => {
    let bookmarks = [];
    for (let node of nodes) {
      if (node.url) {
        bookmarks.push(node);
      } else if (node.children) {
        bookmarks = bookmarks.concat(extractBookmarks(node.children));
      }
    }
    return bookmarks;
  };

  return (
    <div className="bookmarks-widget">
      <h3 className="bookmarks-title">Bookmarks</h3>
      <ul className="bookmarks-list">
        {bookmarks.map((bookmark) => (
          <li key={bookmark.id} className="bookmark-item">
            <img
              src={`https://www.google.com/s2/favicons?sz=32&domain_url=${bookmark.url}`}
              alt="favicon"
              className="bookmark-icon"
            />
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
              {bookmark.title || "Untitled"}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bookmarks;
