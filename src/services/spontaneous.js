let spontaneous = [];
spontaneous = JSON.parse(localStorage.getItem("spontaneous-vue"));

const storageKey = "spontaneous-vue";

function create(spont) {
  if (spontaneous === null) {
    spontaneous = [];
  }
  spontaneous = [spont, ...spontaneous];
  console.log("sponta", spontaneous);
  save();
}
function read() {
  spontaneous = retrieveSpontaneous();
  if (spontaneous === null) {
    spontaneous = [];
  }
  return spontaneous;
}

function updateSpont(spont) {
  const index = spontaneous.findIndex((spon) => spon.id === spont.id);
  if (index === -1) {
    return;
  }
  spontaneous[index] = spont;
  save(spont);
  window.location.reload();
}
function updateSpontMove(spont) {
  const index = spontaneous.findIndex((spon) => spon.id === spont.id);
  if (index === -1) {
    return;
  }
  spontaneous[index] = spont;
  save(spont);
}
function deleteSpont(id) {
  spontaneous = spontaneous.filter((spon) => spon.id !== id);
  save();
  window.location.reload();
}

function save() {
  localStorage.setItem(storageKey, JSON.stringify(spontaneous));
}

function retrieveSpontaneous() {
  const fromLocalStorage = localStorage.getItem(storageKey);
  console.log("local spont", fromLocalStorage);
  return JSON.parse(fromLocalStorage);
}

export default {
  create,
  read,
  deleteSpont,
  updateSpont,
  updateSpontMove,
};
