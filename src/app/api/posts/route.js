// app/api/posts/route.js
let posts = [
  {
    username: "bakemono",
    profile: "https://imageio.forbes.com/specials-images/imageserve/61dc378bb5580fa0c8f8d8c8/nezuko/960x0.jpg?format=jpg&width=960",
    timeElapsed: "8 h",
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/en/e/ea/Tanjirou_manga.png",
    likes: 50,
    comments: 10,
  },
  {
    username: "bakemono",
    profile: "https://imageio.forbes.com/specials-images/imageserve/61dc378bb5580fa0c8f8d8c8/nezuko/960x0.jpg?format=jpg&width=960",
    timeElapsed: "8 h",
    id: 2,
    image: "https://upload.wikimedia.org/wikipedia/en/e/ea/Tanjirou_manga.png",
    likes: 50,
    comments: 10,
  },
  {
    username: "bakemono",
    profile: "https://imageio.forbes.com/specials-images/imageserve/61dc378bb5580fa0c8f8d8c8/nezuko/960x0.jpg?format=jpg&width=960",
    timeElapsed: "8 h",
    id: 3,
    image: "https://upload.wikimedia.org/wikipedia/en/e/ea/Tanjirou_manga.png",
    likes: 50,
    comments: 10,
  },
  {
    username: "bakemono",
    profile: "https://imageio.forbes.com/specials-images/imageserve/61dc378bb5580fa0c8f8d8c8/nezuko/960x0.jpg?format=jpg&width=960",
    timeElapsed: "8 h",
    id: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/e/ea/Tanjirou_manga.png",
    likes: 50,
    comments: 10,
  },
];

export async function GET(request) {
  return new Response(JSON.stringify(posts), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request) {
  const newPost = await request.json();
  posts.push({ ...newPost, id: posts.length + 1 }); // Ajoute un nouvel identifiant unique
  return new Response(JSON.stringify(newPost), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(request) {
  const updatedPost = await request.json();
  posts = posts.map((post) =>
    post.id === updatedPost.id ? updatedPost : post
  );
  return new Response(JSON.stringify(updatedPost), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(request) {
  const { id } = await request.json();
  posts = posts.filter((post) => post.id !== id);
  return new Response(null, { status: 204 });
}
