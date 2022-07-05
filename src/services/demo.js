let demo = [];
demo = JSON.parse(localStorage.getItem("demo-vue"));

const storageKey = "demo-vue";

function create(ans) {
  if (demo === null) {
    demo = [];
  }
  demo = [ans, ...demo];
  console.log("answ", demo);
  save();
}
function read() {
  demo = retrieveDemo();
  if (demo === null) {
    demo = [];
  }
  return demo;
}

function updateDem(dem) {
  const index = demo.findIndex((de) => de.id === dem.id);
  if (index === -1) {
    return;
  }
  demo[index] = dem;

  save(dem);
  window.location.reload();
}

function updateDemMove(dem) {
  const index = demo.findIndex((de) => de.id === dem.id);
  if (index === -1) {
    return;
  }
  demo[index] = dem;

  save(dem);
}

function deleteDem(id) {
  demo = demo.filter((de) => de.id !== id);
  save();
  window.location.reload();
}

function save() {
  localStorage.setItem(storageKey, JSON.stringify(demo));
}

function retrieveDemo() {
  const fromLocalStorage = localStorage.getItem(storageKey);
  console.log("local dem", fromLocalStorage);
  return JSON.parse(fromLocalStorage);
}

export default {
  create,
  read,
  deleteDem,
  updateDem,
  updateDemMove,
};
