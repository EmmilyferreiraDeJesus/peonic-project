import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../components/Header";
import HomePage from "../components/home/HomePage";
import ServicosPage from "../components/servicos/ServicosPage";

function App() {
  return (
      <Router>
      <div>
        <Header />
        <main className="h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos" element={<ServicosPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
