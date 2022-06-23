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
  return spontaneous;
}

function updateSpont(spont) {
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
}

function save() {
  localStorage.setItem(storageKey, JSON.stringify(spontaneous));
}

function retrieveSpontaneous() {
  const fromLocalStorage = localStorage.getItem(storageKey);
  console.log("local spont", fromLocalStorage);
  return JSON.parse(fromLocalStorage);
}
function convertCase(theadConvert) {
  let result;
  switch (theadConvert) {
    case "firmName":
      result = "Nom de l'entreprise";
      break;
    case "firmOrigin":
      result = "Pays de création de l'entreprise";
      break;
    case "firmType":
      result = "Type d'entreprise";
      break;
    case "firmLocation":
      result = "Lieu de travail";
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
      result = "Date d'envoi candidature spontanée";
      break;
    case "answerDate":
      result = "Date de la réponse de l'entreprise";
      break;
    case "txtAnswer":
      result = "Réponse de l'entreprise";
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
  deleteSpont,
  updateSpont,
  convertCase,
};
