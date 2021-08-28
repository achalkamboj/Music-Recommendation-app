import React from "react";
import "./styles.css";
import { useState } from "react";

const musicDB = {
  Hindi: [
    { name: "Mat Kar Maya Ko Ahankar", rating: "5/5" },
    { name: "Kun Faaya Kun", rating: "5/5" },
    { name: "Kya Leke Aya Jagat Me", rating: "5/5" },
    { name: "Mera Bhola Hai Bhandari", rating: "5/5" }
  ],

  Punjabi: [
    { name: "Tees Maar Khan", rating: "5/5" },
    { name: "Brown Munde", rating: "5/5" },
    { name: "295", rating: "5/5" },
    { name: "Life", rating: "5/5" }
  ],

  English: [
    { name: "I Wanna End Me", rating: "5/5" },
    { name: "Girls Like You", rating: "5/5" },
    { name: "Love The Way You Lie", rating: "5/5" }
  ]
};

export default function App() {
  const [selectedLang, setLang] = useState("Hindi");
  function langClickHandler(lang) {
    setLang(lang);
  }
  return (
    <div className="App">
      <h1>My Favourite Music</h1>
      <h3>Click on the genre to check them out!</h3>

      <div>
        {Object.keys(musicDB).map((lang) => (
          <button
            onClick={() => langClickHandler(lang)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {lang}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedLang].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}> {music.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
