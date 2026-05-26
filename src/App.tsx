import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index";
import PrivacyPage from "./pages/Privacy";
import CookiePage from "./pages/Cookie";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/cookie" element={<CookiePage />} />
      </Routes>
    </BrowserRouter>
  );
}
