import { create } from "zustand";

const useAuthStore = create(
  (set) => ({

    user: null,

    token: null,

    isAuthenticated: false,

    setUser: (userData) => {

      localStorage.setItem(
        "user",
        JSON.stringify(userData)
      );

      set({

        user: userData,

        token: userData.token,

        isAuthenticated: true,
      });
    },

    logout: () => {

      localStorage.removeItem(
        "user"
      );

      set({

        user: null,

        token: null,

        isAuthenticated: false,
      });
    },
  })
);

export default useAuthStore;