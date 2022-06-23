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
  return answer;
}

function updateAns(ans) {
  const index = answer.findIndex((an) => an.id === ans.id);
  if (index === -1) {
    return;
  }
  answer[index] = ans;
  save(ans);
}

function deleteAns(id) {
  answer = answer.filter((an) => an.id !== id);
  save();
}

function save() {
  localStorage.setItem(storageKey, JSON.stringify(answer));
}

function retrieveAnswer() {
  const fromLocalStorage = localStorage.getItem(storageKey);
  console.log("local ans", fromLocalStorage);
  return JSON.parse(fromLocalStorage);
}
function convertCase(theadConvert) {
  let result;
  switch (theadConvert) {
    case "jobName":
      result = "Intitulé du poste";
      break;
    case "jobLink":
      result = "Lien vers l'annonce";
      break;
    case "jobType":
      result = "Type de contrat";
      break;
    case "jobLocation":
      result = "Lieu de travail";
      break;
    case "jobPay":
      result = "Salaire proposé";
      break;
    case "firmName":
      result = "Nom de l'entreprise";
      break;
    case "firmType":
      result = "Type d'entreprise";
      break;
    case "firmOrigin":
      result = "Pays de création de l'entreprise";
      break;
    case "firmSite":
      result = "Site web de l'entreprise";
      break;
    case "firmLinkedin":
      result = "Linkedin de l'entreprise";
      break;
    case "firmJungle":
      result = "Welcome to the Jungle de l'entreprise";
      break;
    case "firmPhone":
      result = "Téléphone standard";
      break;
    case "firmEffectif":
      result = "Effectif de l'entreprise";
      break;
    case "firthDate":
      result = "Date de réponse à l'offre";
      break;
    case "answerDate":
      result = "Date de la réponse de l'entreprise";
      break;
    case "txtAnswer":
      result = "Réponse de l'entreprise";
      break;
    case "relanceDate":
      result = "Date de relance";
      break;
    case "answerRelanceDate":
      result = "Date de réponse à la relance";
      break;
    case "txtAnswetxtRelanceAnswerr":
      result = "Réponse de l'entreprise à la relance";
      break;
    case "comment":
      result = "Commentaires supplémentaires";
      break;
    case "staff1Name":
      result = "Nom contact 1";
      break;
    case " staff1Job":
      result = "Poste contact 1";
      break;
    case "staff1Linkedin":
      result = "LinkedIn contact 1";
      break;
    case " staff1Mail":
      result = "Mail contact 1";
      break;
    case "staff1Phone":
      result = "Téléphone contact 1";
      break;
    case "staff2Name":
      result = "Nom contact 2";
      break;
    case " staff2Job":
      result = "Poste contact 2";
      break;
    case "staff2Linkedin":
      result = "LinkedIn contact 2";
      break;
    case " staff2Mail":
      result = "Mail contact 2";
      break;
    case "staff2Phone":
      result = "Téléphone contact 2";
      break;
    default:
      result = theadConvert;
      break;
  }
  return result;
}

export default {
  create,
  read,
  deleteAns,
  updateAns,
  convertCase,
};
