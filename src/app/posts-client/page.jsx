"use client";

import { useEffect, useState } from "react";
import "../posts/page-posts.css";

export default function PostsClient() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();

      setMemes(data.data.memes);
    }

    getMemes();
  }, []);

  return (
    <div className="memes">
      {memes.map((item) => (
        <div key={item.id} className="meme-card">
          <h2>{item.name}</h2>
          <p>
            <img width="200" src={item.url} />
          </p>
        </div>
      ))}
    </div>
  );
}
