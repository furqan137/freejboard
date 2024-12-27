const BASE_URL = "https://api.example.com"; // Replace with your API URL

// Helper function to handle responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong!");
  }
  return response.json();
};

// GET request
export const fetchData = async (endpoint) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  return handleResponse(response);
};

// POST request
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

// PUT request
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

// DELETE request
export const deleteData = async (endpoint, token) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "DELETE",
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  return handleResponse(response);
};
