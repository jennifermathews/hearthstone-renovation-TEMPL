import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "@/components/ui/provider"
import App from "./App"

// GitHub Pages SPA redirect: if the 404.html redirect added a ?/path
// query param, restore it as the actual URL path before React loads.
(function restorePath() {
  const search = window.location.search
  if (search.startsWith("?/")) {
    const query = search.slice(2)
    const [path, queryStr] = query.split("&").map((s) => s.replace(/~and~/g, "&"))
    const cleanPath = "/" + (path || "")
    const cleanSearch = queryStr ? "?" + queryStr : ""
    window.history.replaceState(
      null,
      "",
      cleanPath + cleanSearch + window.location.hash
    )
  }
})()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
