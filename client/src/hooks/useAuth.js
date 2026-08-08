// Example useAuth.js

export const useAuth = () => {
  const login = (email, password) => {
    // Your login logic here, for example:
    console.log("Logging in with:", email, password);
    // This could be an API call, etc.
  };

  return { login };
};
