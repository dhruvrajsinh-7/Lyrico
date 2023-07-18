import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Album from "./Components/Pages/albums";
import Layout from "./Components/Layout"; // Import the Layout component

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Use the Layout component to wrap the Home page */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          {/* Use the Layout component to wrap the Album page */}
          <Route
            path="/albums"
            element={
              <Layout>
                <Album />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
