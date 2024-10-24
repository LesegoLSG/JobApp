import { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
// Main app page
function App() {
  return (
    <div className="w-full overflow-hidden bg-bgColor">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
