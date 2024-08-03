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
          "https://imageio.forbes.com/specials-images/imageserve/61dc378bb5580fa0c8f8d8c8/nezuko/960x0.jpg?format=jpg&width=960",
        username: "nezuko",
      },{
        id: 3,
        image:
          "https://imageio.forbes.com/specials-images/imageserve/61dc378bb5580fa0c8f8d8c8/nezuko/960x0.jpg?format=jpg&width=960",
        username: "pinky",
      },{
        id: 4,
        image:
          "https://imageio.forbes.com/specials-images/imageserve/61dc378bb5580fa0c8f8d8c8/nezuko/960x0.jpg?format=jpg&width=960",
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
