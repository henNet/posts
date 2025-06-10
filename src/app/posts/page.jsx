export default async function Posts() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();

  const posts = data.posts;

  return (
    <div>
      {posts.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
