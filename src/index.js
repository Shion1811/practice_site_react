import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <script>
      <h1>趣味の部屋</h1>
      <div className="header">
        <a href="apple.html">apple</a>
        <a href="parakeet.html">インコ</a>
        <a href="SEKAI NO OWARI.html">SEKAI NO OWARI</a>
      </div>
      <div class="main">
        <p class="april_11_2020">
          <img src="1.JPG" alt="なーちゃんお迎え日" width="500" height="500" />
        </p>
      </div>
    </script>
  </>
);
