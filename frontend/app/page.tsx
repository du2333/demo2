"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <main>
      <h1>This is the frontend page</h1>
      <p>Backend Response: {message}</p>
    </main>
  );
}
