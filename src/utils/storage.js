export const save = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const load = (key) => {
  return JSON.parse(localStorage.getItem(key) || `null`);
};

export const remove = (key) => {
  return localStorage.removeItem(key);
};
