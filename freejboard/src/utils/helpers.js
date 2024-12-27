// Format a date to 'MM/DD/YYYY' format
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

// Format a number to USD currency format
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

// Capitalize the first letter of a string
export const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Check if a string is empty or only contains whitespace
export const isEmptyOrWhitespace = (string) => {
  return !string || !string.trim();
};
