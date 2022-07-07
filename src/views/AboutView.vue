<template>
  <div class="about">
    <div class="about-banner">
      <BannerCompo msg="Kanban en Vue.js" msg2="mise en œuvre, utilisation" />
    </div>
  </div>
  <div class="about-txt">
    <div class="techs">
      <h2>Technos</h2>
      <ul>
        <li>Vue.js 3</li>
        <li>API HTML Drag and Drop</li>
        <li>Localstorage</li>
        <li>Blob de File API pour la sauvegarde du localstorage sur pc</li>
        <li>Uniquement adapté au format desktop</li>
      </ul>
    </div>
    <div class="links">
      <h2>Liens</h2>
      <ul>
        <li>
          <a href="https://github.com/LazezBZH/kanban-emploi" target="_blank"
            >Github</a
          >
        </li>
        <li>
          <a href="https://vuejs.org/guide/introduction.html" target="_blank"
            >https://vuejs.org/guide/introduction.html</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API"
            target="_blank"
            >https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/File_API"
            target="_blank"
            >https://developer.mozilla.org/en-US/docs/Web/API/File_API</a
          >
        </li>
      </ul>
    </div>
    <div class="uses">
      <h2>Utilisation</h2>
      <h3>Page Home</h3>
      <ul>
        <li>
          Deux boutons pour <span class="over">créer des fiches</span> soit de
          réponse à une annonce, soit de candidature spontanée.
        </li>
        <li>
          <span class="over">Formulaire "réponse à une annonce"</span> deux
          champs obligatoires "Intitulé du poste" et "Lien vers l'offre".
        </li>
        <li>
          <span class="over">Formulaire "Candidature spontanée"</span> un champ
          obligatoire "Nom de l'entreprise".
        </li>
        <li>
          Bouton "Enregistrer" des formulaires désactivé si le(les) champ(s)
          obligatoire(s) ne sont pas renseignés.
        </li>
        <li>
          À l'enregistrement d'un formulaire les données sont stockées dans le
          <span class="over">localstorage</span>; attention donc si vous
          <br />changez d'ordinateur ou supprimez le localstorage elles seront
          perdues, vous avez cependant la possibilité <br />de
          <span class="over">télécharger les données</span> au format json.
        </li>
      </ul>
      <h3>Page Kanban</h3>
      <ul>
        <li>
          <span class="over">Consulter</span> les fiches créées précédemment.
        </li>
        <li>
          <span class="over">Glisser </span> et
          <span class="over">déplacer</span> les fiches.
        </li>
        <li>
          <span class="over">Modifier</span> ou
          <span class="over">supprimer</span> une fiche.
        </li>
        <li>
          Des avertissements figurent lorsque les fiches ne sont pas
          intégralement complétées.
        </li>
      </ul>
      <h3>Page Démo</h3>
      <ul>
        <li>
          Quelques fiches sont pré-remplies pour vous permettre de voir les
          fonctionnalités sans devoir, si vous ne le<br />
          souhaitez pas, multiplier les entrées de fiches.
        </li>
        <li>
          Cette version démo possède <span class="over"></span>toutes les
          fonctionnalités de drag and drop, modification, suppression, ajout,
          sauvegarde.
        </li>
      </ul>
    </div>
    <img alt="logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import BannerCompo from "@/components/BannerCompo.vue";

export default {
  name: "DemoView",

  components: {
    BannerCompo,
  },
};
</script>
<style scoped>
.about {
  background-color: rgb(227, 227, 227);
  padding: 2rem 0.5rem;
}
.about-banner {
  background-color: grey;
  padding: 2rem 0.2rem;
}
h2 {
  color: rgb(91, 91, 91);
}
h3 {
  text-align: left;
  color: rgb(152, 152, 152);
}
ul li {
  text-align: left;
}
li a {
  color: rgb(42, 201, 87);
}

.about-txt {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

img {
  width: 12rem;
  height: 12rem;
  margin-top: 7rem;
}
li {
  padding: 0.2rem;
}
.over {
  background-color: rgba(42, 201, 87, 0.3);
}
</style>
