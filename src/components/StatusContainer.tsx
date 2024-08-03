import React from "react";
import Status from "./Status";

export default function StatusContainer() {
  const status = [
    {
      id: 1,
      image:
        "https://imageio.forbes.com/specials-images/imageserve/61dc378bb5580fa0c8f8d8c8/nezuko/960x0.jpg?format=jpg&width=960",
      username: "bakemono",
    },
    {
        id: 2,
        image:
          "https://qph.cf2.quoracdn.net/main-qimg-84eae5ee5f33361d25d03917caa2645e-pjlq",
        username: "nezuko",
      },{
        id: 3,
        image:
          "https://www.mundodeportivo.com/alfabeta/hero/2024/06/zenitsu-furioso-en-demon-slayer.jpg?width=768&aspect_ratio=16:9&format=nowebp",
        username: "pinky",
      },{
        id: 4,
        image:
          "https://i.pinimg.com/236x/6e/b0/ac/6eb0ac568b71a914ba8cf5aae5e81c09.jpg",
        username: "moustapha",
      },
  ];
  return (
    <div className="w-full flex gap-8">
      {status.map((status) => (
        <Status
        key={status.id}
          id={status.id}
          image={status.image}
          username={status.username}
        />
      ))}
    </div>
  );
}
