export function login(details) {
  localStorage.setItem("state", JSON.stringify(details));
  localStorage.setItem("loggedIn", true);
  return {
    type: "LOGIN",
    payload: {
      details: details
    }
  };
}

export function userList() {
  const user = localStorage.getItem("state");

  return {
    type: "USER_LIST",
    payload: {
      userList: user
    }
  };
}

export function loggedInStatus() {
  const loggedIn = localStorage.getItem("loggedIn");

  return {
    type: "STATUS",
    payload: {
      loggedIn: loggedIn
    }
  };
}
