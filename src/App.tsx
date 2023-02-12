import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import { HeadBar } from "./components/Navbar/HeadBar";
import Store from "./pages/Store/Store";

import "./App.scss";
import { ECartProvider } from "./context/ECartContext";

const App = () => {
  return (
    <>
      <div className="App">
        <ECartProvider>
          <HeadBar />
          <Container className="my-4">
            <Routes>
              <Route path="/" element={<Store />} />
            </Routes>
          </Container>
        </ECartProvider>
      </div>
      <footer className="footer mt-4 bg-dark text-light">
        <p className="text-uppercase display-4 text-center">
          🛒 Made By Harshit garg 🛒
        </p>
      </footer>
    </>
  );
};

export default App;
