import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/routes";

function App() {
  return (
    <div className="mx-w-[1440px] mx-auto">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
