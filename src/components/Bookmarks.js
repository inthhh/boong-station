import React, { useEffect, useState } from "react";
import "./styles/Bookmarks.css";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null); // 현재 호버된 요소를 추적

  useEffect(() => {
    if (typeof chrome !== "undefined" && chrome.bookmarks) {
      fetchBookmarks();
    } else {
      console.log("Chrome API is not available. App is running outside of Chrome extension.");
      setBookmarks([]);
    }
  }, []);

  const fetchBookmarks = () => {
    chrome.bookmarks.getTree((bookmarkTreeNodes) => {
      const bookmarkItems = extractBookmarks(bookmarkTreeNodes);
      setBookmarks(bookmarkItems);
    });
  };

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

  const deleteBookmark = (id) => {
    chrome.bookmarks.remove(id, () => {
      fetchBookmarks(); // 업데이트된 북마크 리스트를 가져옵니다.
    });
  };

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (event, index) => {
    event.preventDefault();
    setHoveredIndex(index); // 호버된 인덱스 업데이트
  };

  const handleDragLeave = () => {
    setHoveredIndex(null); // 호버 상태 초기화
  };

  const handleDrop = (event, targetIndex) => {
    event.preventDefault();
    const draggedIndex = event.dataTransfer.getData("text/plain");
    const updatedBookmarks = [...bookmarks];
    const [movedItem] = updatedBookmarks.splice(draggedIndex, 1);
    updatedBookmarks.splice(targetIndex, 0, movedItem);

    setBookmarks(updatedBookmarks);
    setHoveredIndex(null); // 드롭 후 호버 상태 초기화

    chrome.bookmarks.move(movedItem.id, { index: targetIndex }, () => {
      fetchBookmarks(); // 순서를 저장 후 다시 가져옵니다.
    });
  };

  return (
    <div className="bookmarks-widget">
      <h3 className="bookmarks-title">Bookmarks</h3>
      <ul className="bookmarks-list">
        {bookmarks.map((bookmark, index) => (
          <li
            key={bookmark.id}
            className={`bookmark-item ${hoveredIndex === index ? "drag-hover" : ""}`}
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onDragOver={(event) => handleDragOver(event, index)}
            onDragLeave={handleDragLeave}
            onDrop={(event) => handleDrop(event, index)}
          >
            <img
              src={`https://www.google.com/s2/favicons?sz=32&domain_url=${bookmark.url}`}
              alt="favicon"
              className="bookmark-icon"
            />
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
              {bookmark.title || "Untitled"}
            </a>
            <button className="delete-button" onClick={() => deleteBookmark(bookmark.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bookmarks;
