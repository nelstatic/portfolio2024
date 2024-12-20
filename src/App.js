import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
// pages
import Home from "./pages/home/Home.jsx";
import PageError from "./pages/errorPage/errorPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
