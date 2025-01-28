import React, { useState, useEffect } from "react";
import jsonData from "../data.json";

export default function Work() {
  const [portData, setPortData] = useState(JSON.stringify(jsonData));
  useEffect(() => {}, []);
  return (
    <div>
      <pre>{portData}</pre>
    </div>
  );
}
