const baseUrl = "http://localhost:3030/data/bikes";

export const getAll = () => {
  return fetch(baseUrl).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Something went wrong");
  });
};

export const getOne = (bikeId) => {
  return fetch(`${baseUrl}/${bikeId}`).then((res) => res.json());
};

export const create = (bikeData, accessToken) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Authorization": accessToken,
    },
    body: JSON.stringify({ ...bikeData }),
  }).then((res) => res.json());
};

export const edit = (bikeData, bikeId, accessToken) => {
  return fetch(`${baseUrl}/${bikeId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-Authorization": accessToken,
    },
    body: JSON.stringify({ ...bikeData }),
  }).then((res) => res.json());
};

export const del = (bikeId, accessToken) => {
  return fetch(`${baseUrl}/${bikeId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "X-Authorization": accessToken,
    },
  }).then((res) => res.json());
};
