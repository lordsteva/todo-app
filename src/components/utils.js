const loadData = () => {
  const items = localStorage.getItem("items");
  if (items) {
    const id = localStorage.getItem("id");
    return { id: id * 1, items: JSON.parse(items) };
  }
  return { id: 1, items: [] };
};

const saveData = (items, id) => {
  localStorage.setItem("items", JSON.stringify(items));
  if (id) localStorage.setItem("id", id);
};

export default { loadData, saveData };
