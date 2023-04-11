const baseUrl = "http://localhost:3030/users";

export const login = (email, password) => {
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json());
};

export const logout = async (accessToken) => {
  try {
    const response = await fetch(`${baseUrl}/logout`, {
      headers: {
        "X-Authorization": accessToken,
      },
    });
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const register = (username, email, password) => {
  return fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  }).then((res) => res.json());
};
