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
    image: "https://i.pinimg.com/236x/6e/b0/ac/6eb0ac568b71a914ba8cf5aae5e81c09.jpg",
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4e357414-9ab8-408b-8fc8-c055114d4e47/ddkut7b-7f1a3a6c-86a8-4aa4-aa55-152c44b887b0.jpg/v1/fit/w_375,h_531,q_70,strp/fire_by_einlee_ddkut7b-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQ5IiwicGF0aCI6IlwvZlwvNGUzNTc0MTQtOWFiOC00MDhiLThmYzgtYzA1NTExNGQ0ZTQ3XC9kZGt1dDdiLTdmMWEzYTZjLTg2YTgtNGFhNC1hYTU1LTE1MmM0NGI4ODdiMC5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.iH1_pM8sIDNX2mJ7dFD4FdtBMr1XSwNiJhXzWmQl_Co",
    likes: 50,
    comments: 10,
  },
];

export async function GET(request) {
  return new Response(JSON.stringify(posts), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Adjust as needed
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(request) {
  const newPost = await request.json();
  posts.push({ ...newPost, id: posts.length + 1 }); // Ajoute un nouvel identifiant unique
  return new Response(JSON.stringify(newPost), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Adjust as needed
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function PUT(request) {
  const updatedPost = await request.json();
  posts = posts.map((post) =>
    post.id === updatedPost.id ? updatedPost : post
  );
  return new Response(JSON.stringify(updatedPost), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Adjust as needed
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function DELETE(request) {
  const { id } = await request.json();
  posts = posts.filter((post) => post.id !== id);
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*", // Adjust as needed
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function OPTIONS(request) {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*", // Adjust as needed
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
