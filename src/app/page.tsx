"use client";

import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const items = ["Service A", "Service B", "Service C"];

  return (
    <main>
      <h1>Hello</h1>
      <p>Welcome to our notary CRM application!</p>

      <button onClick={() => setClicked(true)}>Click Me</button>
      {clicked && <span>You clicked the button!</span>}

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
