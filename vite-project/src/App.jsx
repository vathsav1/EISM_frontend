import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";

import useAuthStore from "./store/authStore";

function App() {
  const { isAuthenticated } = useAuthStore();

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