export const baseUrl = "http://localhost:5000/api";

const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${user !== null ? user.token : ""}`,
    Accept: "application/json",
  },
};
