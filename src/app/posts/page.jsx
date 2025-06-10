import Button from "@/components/button/Button";
import "./page-posts.css";

export default async function Posts() {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const data = await response.json();

  const memes = data.data.memes;

  return (
    <div className="memes">
      {memes.map((item) => (
        <div key={item.id} className="meme-card">
          <h2>{item.name}</h2>
          <p>
            <img width="200" src={item.url} />
          </p>
          <Button />
        </div>
      ))}
    </div>
  );
}
