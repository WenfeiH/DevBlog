import axios from "axios";

const setAuthToken = token => {
  if (token) {
    console.log("setAuthToken & put the token in req.header.Authorization");
    // Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
