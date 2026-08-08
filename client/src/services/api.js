const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5050/api";

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Something went wrong!");
  }
  return response.json();
};

export const fetchData = async (endpoint) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  return handleResponse(response);
};

export const postData = async (endpoint, data, token) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

export const updateData = async (endpoint, data, token) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

export const deleteData = async (endpoint, token) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "DELETE",
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  return handleResponse(response);
};
