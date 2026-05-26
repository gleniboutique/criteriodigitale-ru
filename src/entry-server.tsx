import { renderToString } from "react-dom/server";
import { StaticRouter, Routes, Route } from "react-router";
import IndexPage from "./pages/Index";
import PrivacyPage from "./pages/Privacy";
import CookiePage from "./pages/Cookie";

export function render(url: string = "/"): string {
  return renderToString(
    <StaticRouter location={url}>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/cookie" element={<CookiePage />} />
      </Routes>
    </StaticRouter>
  );
}
