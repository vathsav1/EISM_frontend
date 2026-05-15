import { useEffect } from "react";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/sections/DashboardPage";

import useAuthStore from "./store/authStore";

function App() {
  const { isAuthenticated, setUser } = useAuthStore();

  useEffect(() => {

  const storedUser =
    localStorage.getItem("user");

  if (storedUser) {

    setUser(
      JSON.parse(storedUser)
    );
  }

}, []);

  return (
    <>
      {isAuthenticated ? (
        <DashboardPage />
      ) : (
        <AuthPage />
      )}
    </>
  );
}

export default App;