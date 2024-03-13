import React from "react";
import { PublicRoutes } from "./routes/PublicRoutes";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <PublicRoutes />
    </LanguageProvider>
  );
}

export default App;
