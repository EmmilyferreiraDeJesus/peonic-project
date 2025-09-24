import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import ServicesPage from "../components/ServicesPage";
import Footer from "../components/Footer";

function App() {
  return (
    <Router>
      <div className="h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos" element={<ServicesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
