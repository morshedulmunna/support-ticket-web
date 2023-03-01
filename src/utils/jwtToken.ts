export const jwtToken = () => {
  if (typeof window !== "undefined") {
    console.log("You are on the browser");

    return localStorage.getItem("accessToken");
  } else {
    console.log("You are on the server");
  }
};
