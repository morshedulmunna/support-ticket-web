export const jwtToken = () => {
  // Get the JWT token from the local storage
  const token = localStorage.getItem("accessToken");
  if (token) {
    // Token is found in the local storage
    return token;
  } else {
    // Token is not found in the local storage
    console.error("JWT token not found");
  }
};
