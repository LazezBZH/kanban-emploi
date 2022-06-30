let answer = [];
answer = JSON.parse(localStorage.getItem("answer-vue"));

const storageKey = "answer-vue";

function create(ans) {
  if (answer === null) {
    answer = [];
  }
  answer = [ans, ...answer];
  console.log("answ", answer);
  save();
}
function read() {
  answer = retrieveAnswer();
  if (answer === null) {
    answer = [];
  }
  return answer;
}

function updateAns(ans) {
  const index = answer.findIndex((an) => an.id === ans.id);
  if (index === -1) {
    return;
  }
  answer[index] = ans;

  save(ans);
  window.location.reload();
}

function deleteAns(id) {
  answer = answer.filter((an) => an.id !== id);
  save();
  window.location.reload();
}

function save() {
  localStorage.setItem(storageKey, JSON.stringify(answer));
}

function retrieveAnswer() {
  const fromLocalStorage = localStorage.getItem(storageKey);
  console.log("local ans", fromLocalStorage);
  return JSON.parse(fromLocalStorage);
}

export default {
  create,
  read,
  deleteAns,
  updateAns,
};
