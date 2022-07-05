<template>
  <DemoModal
    v-if="isInEditMode"
    :demo="demoToEdit"
    @updatedemo="updateDemo($event)"
    @cancel="cancelEdit"
  />

  <DemoForm
    v-bind:revelebis3="revelebis3"
    v-bind:toggleDemoForm="toggleDemoForm"
    @createdemo="addDemo"
  />
  <div class="demo-btn">
    <div class="refresh">
      <button @click="refresh">
        <h2>
          <span class="clic">Cliquez ici</span> ci les fiches pré-enregistrées
          ne s'affichent pas à l'ouverture de la page. Vous pourrez ensuite
          ajouter, éditer, supprimer, glisser/déposer les fiches, tout est
          stocké dans le localstorage
        </h2>
      </button>
    </div>
    <div class="formOpenBtn">
      <button class="demo-button" v-on:click="toggleDemoForm">
        Créer une fiche réponse à une offre
      </button>
    </div>
  </div>

  <div>
    <h2 class="annonces">ANNONCES</h2>
    <div class="drops">
      <div
        class="drop-zone"
        @drop="onDrop($event, 8)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="entete"><h2>Préparer réponse</h2></div>
        <div v-if="listEight.length > 0">
          <div
            v-for="demo in listEight"
            :key="demo.id"
            :id="demo.id"
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, demo)"
          >
            <div class="card-demo">
              <div class="card-title-demo">
                <img src="@/assets/answer.jpg" alt="" />
                <h3>Réponse à une annonce</h3>
                <div
                  v-if="
                    demo.jobType == '' ||
                    demo.jobLocation == '' ||
                    demo.jobPay == '' ||
                    demo.jobPay == '' ||
                    demo.firmName == '' ||
                    demo.firmType == '' ||
                    demo.firmOrigin == '' ||
                    demo.firmSite == '' ||
                    demo.firmLinkedin == '' ||
                    demo.firmJungle == '' ||
                    demo.firmPhone == '' ||
                    demo.firmEffectif == '' ||
                    demo.firthDate == '' ||
                    demo.answerDate == '' ||
                    demo.txtAnswer == '' ||
                    demo.relanceDate == '' ||
                    demo.txtRelanceAnswer == '' ||
                    demo.answerRelanceDate == '' ||
                    demo.comment == '' ||
                    demo.staff1Name !== '' ||
                    demo.staff1Job !== '' ||
                    demo.staff1Linkedin !== '' ||
                    demo.staff1Mail !== '' ||
                    demo.staff1Phone !== ''
                  "
                >
                  <p class="complete-all">* à compléter</p>
                </div>
              </div>

              <div class="demo-all">
                <div class="job">
                  <h4>OFFRE</h4>
                  <div
                    v-if="
                      demo.jobType == '' ||
                      demo.jobLocation == '' ||
                      demo.jobPay == ''
                    "
                  >
                    <p class="complete">* à compléter</p>
                  </div>
                  <h5>Intitulé du poste</h5>
                  <p>{{ demo.jobName }}</p>
                  <h5>Lien</h5>
                  <a :href="demo.jobLink" target="_blank"
                    >Lien vers l'annonce</a
                  >

                  <div v-if="demo.jobType !== ''">
                    <h5>Type de poste</h5>
                    <p>{{ demo.jobType }}</p>
                  </div>
                  <div v-if="demo.jobLocation !== ''">
                    <h5>Lieu d'emploi</h5>
                    <p>{{ demo.jobLocation }}</p>
                  </div>

                  <div v-if="demo.jobPay !== ''">
                    <h5>Salaire annuel</h5>
                    <p>{{ demo.jobPay }}</p>
                  </div>
                </div>
                <div class="firm">
                  <h4>ENTREPRISE</h4>
                  <div
                    v-if="
                      demo.firmName == '' ||
                      demo.firmType == '' ||
                      demo.firmOrigin == '' ||
                      demo.firmSite == '' ||
                      demo.firmLinkedin == '' ||
                      demo.firmJungle == '' ||
                      demo.firmEffectif == '' ||
                      demo.firmPhone == ''
                    "
                  >
                    <p class="complete">* à compléter</p>
                  </div>
                  <div v-if="demo.firmName !== ''">
                    <h5>Nom de l'entreprise</h5>
                    <p>{{ demo.firmName }}</p>
                  </div>
                  <div v-if="demo.firmType !== ''">
                    <h5>Type d'entreprise</h5>
                    <p>{{ demo.firmType }}</p>
                  </div>
                  <div v-if="demo.firmOrigin !== ''">
                    <h5>Pays d'origine</h5>
                    <p>{{ demo.firmOrigin }}</p>
                  </div>

                  <div v-if="demo.firmSite !== ''">
                    <h5>Site de l'entreprise</h5>
                    <a :href="demo.firmSite" target="_blank"
                      >Lien site de l'entreprise</a
                    >
                  </div>
                  <div v-if="demo.firmLinkedin !== ''">
                    <h5>LinkedIn</h5>
                    <a :href="demo.firmLinkedin" target="_blank"
                      >Linkedin de l'entreprise</a
                    >
                  </div>
                  <div v-if="demo.firmJungle !== ''">
                    <h5>Welcome To The Jungle</h5>
                    <a :href="demo.firmJungle" target="_blank"
                      >WTJ de l'entreprise</a
                    >
                  </div>
                  <div v-if="demo.firmPhone !== ''">
                    <h5>Téléphone</h5>
                    <a :href="'tel:' + demo.firmPhone">{{ demo.firmPhone }}</a>
                    <p></p>
                  </div>
                  <div v-if="demo.firmEffectif !== ''">
                    <h5>Effectif</h5>
                    <p>{{ demo.firmEffectif }}</p>
                  </div>
                </div>
                <div class="contact">
                  <h4>CANDIDATURE</h4>
                  <div
                    v-if="
                      demo.firthDate == '' ||
                      demo.answerDate == '' ||
                      demo.txtAnswer == '' ||
                      demo.relanceDate == '' ||
                      demo.txtRelanceAnswer == '' ||
                      demo.answerRelanceDate == '' ||
                      demo.comment == ''
                    "
                  >
                    <p class="complete">* à compléter</p>
                  </div>
                  <div class="answer">
                    <div class="firstAnswer">
                      <div v-if="demo.firthDate !== ''">
                        <h5>Date de réponse à l'offre</h5>
                        <p>{{ demo.firthDate }}</p>
                      </div>
                      <div v-if="demo.answerDate !== ''">
                        <h5>Date de réponse du recruteur</h5>
                        <p>{{ demo.answerDate }}</p>
                      </div>
                      <div v-if="demo.txtAnswer !== ''">
                        <h5>Réponse du recruteur</h5>
                        <p>{{ demo.txtAnswer }}</p>
                      </div>
                    </div>
                    <div class="relance">
                      <div v-if="demo.relanceDate !== ''">
                        <h5>Date de relance</h5>
                        <p>{{ demo.relanceDate }}</p>
                      </div>
                      <div v-if="demo.answerRelanceDate !== ''">
                        <h5>Date de réponse à la relance</h5>
                        <p>{{ demo.answerRelanceDate }}</p>
                      </div>
                      <div v-if="demo.txtRelanceAnswer !== ''">
                        <h5>Réponse suite à relance</h5>
                        <p>{{ demo.txtRelanceAnswer }}</p>
                      </div>
                      <div v-if="demo.comment !== ''">
                        <h5>Commentaires</h5>
                        <p>{{ demo.comment }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="staffs">
                  <h4>CONTACTS</h4>
                  <div
                    v-if="
                      demo.staff1Name == '' ||
                      demo.staff1Job == '' ||
                      demo.staff1Mail == '' ||
                      demo.staff1Job == '' ||
                      demo.staff1Phone == '' ||
                      demo.staff2Name == '' ||
                      demo.staff2Job == '' ||
                      demo.staff2Mail == '' ||
                      demo.staff2Job == '' ||
                      demo.staff2Phone == ''
                    "
                  >
                    <p class="complete">* à compléter</p>
                  </div>
                  <div class="staff">
                    <div
                      class="firth-staff"
                      v-if="
                        demo.staff1Name !== '' ||
                        demo.staff1Job !== '' ||
                        demo.staff1Linkedin !== '' ||
                        demo.staff1Mail !== '' ||
                        demo.staff1Phone !== ''
                      "
                    >
                      <h5>Contact n°1</h5>
                      <div v-if="demo.staff1Name !== ''">
                        <h6>Nom</h6>
                        <p>{{ demo.staff1Name }}</p>
                      </div>
                      <div v-if="demo.staff1Job !== ''">
                        <h6>Fonction</h6>
                        <p>{{ demo.staff1Job }}</p>
                      </div>
                      <div v-if="demo.staff1Linkedin !== ''">
                        <h6>LinkedIn</h6>
                        <a :href="demo.staff1Linkedin">LinkedIn</a>
                      </div>
                      <div v-if="demo.staff1Mail !== ''">
                        <h6>Mail</h6>
                        <a :href="'mailto:' + demo.staff1Mail"> Mail </a>
                      </div>
                      <div v-if="demo.staff1Phone !== ''">
                        <h6>Téléphone</h6>
                        <a :href="'tel:' + demo.staff1Phone">Tél</a>
                      </div>
                    </div>
                    <div class="line"></div>
                    <div
                      class="second-staff"
                      v-if="
                        demo.staff2Name !== '' ||
                        demo.staff2Job !== '' ||
                        demo.staff2Linkedin !== '' ||
                        demo.staff2Mail !== '' ||
                        demo.staff2Phone !== ''
                      "
                    >
                      <h5>Contact n°2</h5>
                      <div v-if="demo.staff2Name !== ''">
                        <h6>Nom</h6>
                        <p>{{ demo.staff2Name }}</p>
                      </div>
                      <div v-if="demo.staff2Job !== ''">
                        <h6>Fonction</h6>
                        <p>{{ demo.staff2Job }}</p>
                      </div>
                      <div v-if="demo.staff2Linkedin !== ''">
                        <h6>LinkedIn</h6>
                        <a :href="demo.staff2Linkedin">LinkedIn</a>
                      </div>
                      <div v-if="demo.staff2Mail !== ''">
                        <h6>Mail</h6>
                        <a :href="'mailto:' + demo.staff2Mail"> Mail </a>
                      </div>
                      <div v-if="demo.staff2Phone !== ''">
                        <h6>Téléphone</h6>
                        <a :href="'tel:' + demo.staff2Phone">Tél</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn">
              <button @click="() => deleteDemo(demo.id)">Supprimer</button>
              <button @click="() => toggle(demo)">Modifier</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="drop-zone"
        @drop="onDrop($event, 9)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="entete"><h2>Réponse envoyée, prévoir relance</h2></div>
        <div v-if="listNine.length > 0">
          <div
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, demo)"
            v-for="demo in listNine"
            :key="demo.id"
            :id="demo.id"
          >
            <div class="card-demo">
              <div class="card-title-demo">
                <img src="@/assets/answer.jpg" alt="" />
                <h3>Réponse à une annonce</h3>
                <div
                  v-if="
                    demo.jobType == '' ||
                    demo.jobLocation == '' ||
                    demo.jobPay == '' ||
                    demo.jobPay == '' ||
                    demo.firmName == '' ||
                    demo.firmType == '' ||
                    demo.firmOrigin == '' ||
                    demo.firmSite == '' ||
                    demo.firmLinkedin == '' ||
                    demo.firmJungle == '' ||
                    demo.firmPhone == '' ||
                    demo.firmEffectif == '' ||
                    demo.firthDate == '' ||
                    demo.answerDate == '' ||
                    demo.txtAnswer == '' ||
                    demo.relanceDate == '' ||
                    demo.txtRelanceAnswer == '' ||
                    demo.answerRelanceDate == '' ||
                    demo.comment == '' ||
                    demo.staff1Name !== '' ||
                    demo.staff1Job !== '' ||
                    demo.staff1Linkedin !== '' ||
                    demo.staff1Mail !== '' ||
                    demo.staff1Phone !== ''
                  "
                >
                  <p class="complete-all">* à compléter</p>
                </div>
              </div>

              <div class="demo-all">
                <div class="job">
                  <h4>OFFRE</h4>
                  <div
                    v-if="
                      demo.jobType == '' ||
                      demo.jobLocation == '' ||
                      demo.jobPay == ''
                    "
                  >
                    <p class="complete">* à compléter</p>
                  </div>
                  <h5>Intitulé du poste</h5>
                  <p>{{ demo.jobName }}</p>
                  <h5>Lien</h5>
                  <a :href="demo.jobLink" target="_blank"
                    >Lien vers l'annonce</a
                  >

                  <div v-if="demo.jobType !== ''">
                    <h5>Type de poste</h5>
                    <p>{{ demo.jobType }}</p>
                  </div>
                  <div v-if="demo.jobLocation !== ''">
                    <h5>Lieu d'emploi</h5>
                    <p>{{ demo.jobLocation }}</p>
                  </div>

                  <div v-if="demo.jobPay !== ''">
                    <h5>Salaire annuel</h5>
                    <p>{{ demo.jobPay }}</p>
                  </div>
                </div>
                <div class="firm">
                  <h4>ENTREPRISE</h4>
                  <div
                    v-if="
                      demo.firmName == '' ||
                      demo.firmType == '' ||
                      demo.firmOrigin == '' ||
                      demo.firmSite == '' ||
                      demo.firmLinkedin == '' ||
                      demo.firmJungle == '' ||
                      demo.firmEffectif == '' ||
                      demo.firmPhone == ''
                    "
                  >
                    <p class="complete">* à compléter</p>
                  </div>
                  <div v-if="demo.firmName !== ''">
                    <h5>Nom de l'entreprise</h5>
                    <p>{{ demo.firmName }}</p>
                  </div>
                  <div v-if="demo.firmType !== ''">
                    <h5>Type d'entreprise</h5>
                    <p>{{ demo.firmType }}</p>
                  </div>
                  <div v-if="demo.firmOrigin !== ''">
                    <h5>Pays d'origine</h5>
                    <p>{{ demo.firmOrigin }}</p>
                  </div>

                  <div v-if="demo.firmSite !== ''">
                    <h5>Site de l'entreprise</h5>
                    <a :href="demo.firmSite" target="_blank"
                      >Lien site de l'entreprise</a
                    >
                  </div>
                  <div v-if="demo.firmLinkedin !== ''">
                    <h5>LinkedIn</h5>
                    <a :href="demo.firmLinkedin" target="_blank"
                      >Linkedin de l'entreprise</a
                    >
                  </div>
                  <div v-if="demo.firmJungle !== ''">
                    <h5>Welcome To The Jungle</h5>
                    <a :href="demo.firmJungle" target="_blank"
                      >WTJ de l'entreprise</a
                    >
                  </div>
                  <div v-if="demo.firmPhone !== ''">
                    <h5>Téléphone</h5>
                    <a :href="'tel:' + demo.firmPhone">{{ demo.firmPhone }}</a>
                    <p></p>
                  </div>
                  <div v-if="demo.firmEffectif !== ''">
                    <h5>Effectif</h5>
                    <p>{{ demo.firmEffectif }}</p>
                  </div>
                </div>
                <div class="contact">
                  <h4>CANDIDATURE</h4>
                  <div
                    v-if="
                      demo.firthDate == '' ||
                      demo.answerDate == '' ||
                      demo.txtAnswer == '' ||
                      demo.relanceDate == '' ||
                      demo.txtRelanceAnswer == '' ||
                      demo.answerRelanceDate == '' ||
                      demo.comment == ''
                    "
                  >
                    <p class="complete">* à compléter</p>
                  </div>
                  <div class="answer">
                    <div class="firstAnswer">
                      <div v-if="demo.firthDate !== ''">
                        <h5>Date de réponse à l'offre</h5>
                        <p>{{ demo.firthDate }}</p>
                      </div>
                      <div v-if="demo.answerDate !== ''">
                        <h5>Date de réponse du recruteur</h5>
                        <p>{{ demo.answerDate }}</p>
                      </div>
                      <div v-if="demo.txtAnswer !== ''">
                        <h5>Réponse du recruteur</h5>
                        <p>{{ demo.txtAnswer }}</p>
                      </div>
                    </div>
                    <div class="relance">
                      <div v-if="demo.relanceDate !== ''">
                        <h5>Date de relance</h5>
                        <p>{{ demo.relanceDate }}</p>
                      </div>
                      <div v-if="demo.answerRelanceDate !== ''">
                        <h5>Date de réponse à la relance</h5>
                        <p>{{ demo.answerRelanceDate }}</p>
                      </div>
                      <div v-if="demo.txtRelanceAnswer !== ''">
                        <h5>Réponse suite à relance</h5>
                        <p>{{ demo.txtRelanceAnswer }}</p>
                      </div>
                      <div v-if="demo.comment !== ''">
                        <h5>Commentaires</h5>
                        <p>{{ demo.comment }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="staffs">
                  <h4>CONTACTS</h4>
                  <div
                    v-if="
                      demo.staff1Name == '' ||
                      demo.staff1Job == '' ||
                      demo.staff1Mail == '' ||
                      demo.staff1Job == '' ||
                      demo.staff1Phone == '' ||
                      demo.staff2Name == '' ||
                      demo.staff2Job == '' ||
                      demo.staff2Mail == '' ||
                      demo.staff2Job == '' ||
                      demo.staff2Phone == ''
                    "
                  >
                    <p class="complete">* à compléter</p>
                  </div>
                  <div class="staff">
                    <div
                      class="firth-staff"
                      v-if="
                        demo.staff1Name !== '' ||
                        demo.staff1Job !== '' ||
                        demo.staff1Linkedin !== '' ||
                        demo.staff1Mail !== '' ||
                        demo.staff1Phone !== ''
                      "
                    >
                      <h5>Contact n°1</h5>
                      <div v-if="demo.staff1Name !== ''">
                        <h6>Nom</h6>
                        <p>{{ demo.staff1Name }}</p>
                      </div>
                      <div v-if="demo.staff1Job !== ''">
                        <h6>Fonction</h6>
                        <p>{{ demo.staff1Job }}</p>
                      </div>
                      <div v-if="demo.staff1Linkedin !== ''">
                        <h6>LinkedIn</h6>
                        <a :href="demo.staff1Linkedin">LinkedIn</a>
                      </div>
                      <div v-if="demo.staff1Mail !== ''">
                        <h6>Mail</h6>
                        <a :href="'mailto:' + demo.staff1Mail"> Mail </a>
                      </div>
                      <div v-if="demo.staff1Phone !== ''">
                        <h6>Téléphone</h6>
                        <a :href="'tel:' + demo.staff1Phone">Tél</a>
                      </div>
                    </div>
                    <div class="line"></div>
                    <div
                      class="second-staff"
                      v-if="
                        demo.staff2Name !== '' ||
                        demo.staff2Job !== '' ||
                        demo.staff2Linkedin !== '' ||
                        demo.staff2Mail !== '' ||
                        demo.staff2Phone !== ''
                      "
                    >
                      <h5>Contact n°2</h5>
                      <div v-if="demo.staff2Name !== ''">
                        <h6>Nom</h6>
                        <p>{{ demo.staff2Name }}</p>
                      </div>
                      <div v-if="demo.staff2Job !== ''">
                        <h6>Fonction</h6>
                        <p>{{ demo.staff2Job }}</p>
                      </div>
                      <div v-if="demo.staff2Linkedin !== ''">
                        <h6>LinkedIn</h6>
                        <a :href="demo.staff2Linkedin">LinkedIn</a>
                      </div>
                      <div v-if="demo.staff2Mail !== ''">
                        <h6>Mail</h6>
                        <a :href="'mailto:' + demo.staff2Mail"> Mail </a>
                      </div>
                      <div v-if="demo.staff2Phone !== ''">
                        <h6>Téléphone</h6>
                        <a :href="'tel:' + demo.staff2Phone">Tél</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn">
              <button @click="() => deleteDemo(demo.id)">Supprimer</button>
              <button @click="() => toggle(demo)">Modifier</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="drop-zone"
        @drop="onDrop($event, 10)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="entete"><h2>Relance effectuée</h2></div>
        <div v-if="listTen.length > 0">
          <div
            v-for="demo in listTen"
            :key="demo.id"
            :id="demo.id"
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, demo)"
          >
            <div class="card-demo">
              <div class="card-title-demo">
                <img src="@/assets/answer.jpg" alt="" />
                <h3>Réponse à une annonce</h3>
                <div
                  v-if="
                    demo.jobType == '' ||
                    demo.jobLocation == '' ||
                    demo.jobPay == '' ||
                    demo.jobPay == '' ||
                    demo.firmName == '' ||
                    demo.firmType == '' ||
                    demo.firmOrigin == '' ||
                    demo.firmSite == '' ||
                    demo.firmLinkedin == '' ||
                    demo.firmJungle == '' ||
                    demo.firmPhone == '' ||
                    demo.firmEffectif == '' ||
                    demo.firthDate == '' ||
                    demo.answerDate == '' ||
                    demo.txtAnswer == '' ||
                    demo.relanceDate == '' ||
                    demo.txtRelanceAnswer == '' ||
                    demo.answerRelanceDate == '' ||
                    demo.comment == '' ||
                    demo.staff1Name !== '' ||
                    demo.staff1Job !== '' ||
                    demo.staff1Linkedin !== '' ||
                    demo.staff1Mail !== '' ||
                    demo.staff1Phone !== ''
                  "
                >
                  <p class="complete-all">* à compléter</p>
                </div>
              </div>

              <div class="demo-all">
                <div class="job">
                  <h4>OFFRE</h4>
                  <div
                    v-if="
                      demo.jobType == '' ||
                      demo.jobLocation == '' ||
                      demo.jobPay == ''
                    "
                  >
                    <p class="complete">* à compléter</p>
                  </div>
                  <h5>Intitulé du poste</h5>
                  <p>{{ demo.jobName }}</p>
                  <h5>Lien</h5>
                  <a :href="demo.jobLink" target="_blank"
                    >Lien vers l'annonce</a
                  >

                  <div v-if="demo.jobType !== ''">
                    <h5>Type de poste</h5>
                    <p>{{ demo.jobType }}</p>
                  </div>
                  <div v-if="demo.jobLocation !== ''">
                    <h5>Lieu d'emploi</h5>
                    <p>{{ demo.jobLocation }}</p>
                  </div>

                  <div v-if="demo.jobPay !== ''">
                    <h5>Salaire annuel</h5>
                    <p>{{ demo.jobPay }}</p>
                  </div>
                </div>
                <div class="firm">
                  <h4>ENTREPRISE</h4>
                  <div
                    v-if="
                      demo.firmName == '' ||
                      demo.firmType == '' ||
                      demo.firmOrigin == '' ||
                      demo.firmSite == '' ||
                      demo.firmLinkedin == '' ||
                      demo.firmJungle == '' ||
                      demo.firmEffectif == '' ||
                      demo.firmPhone == ''
                    "
                  >
                    <p class="complete">* à compléter</p>
                  </div>
                  <div v-if="demo.firmName !== ''">
                    <h5>Nom de l'entreprise</h5>
                    <p>{{ demo.firmName }}</p>
                  </div>
                  <div v-if="demo.firmType !== ''">
                    <h5>Type d'entreprise</h5>
                    <p>{{ demo.firmType }}</p>
                  </div>
                  <div v-if="demo.firmOrigin !== ''">
                    <h5>Pays d'origine</h5>
                    <p>{{ demo.firmOrigin }}</p>
                  </div>

                  <div v-if="demo.firmSite !== ''">
                    <h5>Site de l'entreprise</h5>
                    <a :href="demo.firmSite" target="_blank"
                      >Lien site de l'entreprise</a
                    >
                  </div>
                  <div v-if="demo.firmLinkedin !== ''">
                    <h5>LinkedIn</h5>
                    <a :href="demo.firmLinkedin" target="_blank"
                      >Linkedin de l'entreprise</a
                    >
                  </div>
                  <div v-if="demo.firmJungle !== ''">
                    <h5>Welcome To The Jungle</h5>
                    <a :href="demo.firmJungle" target="_blank"
                      >WTJ de l'entreprise</a
                    >
                  </div>
                  <div v-if="demo.firmPhone !== ''">
                    <h5>Téléphone</h5>
                    <a :href="'tel:' + demo.firmPhone">{{ demo.firmPhone }}</a>
                    <p></p>
                  </div>
                  <div v-if="demo.firmEffectif !== ''">
                    <h5>Effectif</h5>
                    <p>{{ demo.firmEffectif }}</p>
                  </div>
                </div>
                <div class="contact">
                  <h4>CANDIDATURE</h4>
                  <div
                    v-if="
                      demo.firthDate == '' ||
                      demo.answerDate == '' ||
                      demo.txtAnswer == '' ||
                      demo.relanceDate == '' ||
                      demo.txtRelanceAnswer == '' ||
                      demo.answerRelanceDate == '' ||
                      demo.comment == ''
                    "
                  >
                    <p class="complete">* à compléter</p>
                  </div>
                  <div class="answer">
                    <div class="firstAnswer">
                      <div v-if="demo.firthDate !== ''">
                        <h5>Date de réponse à l'offre</h5>
                        <p>{{ demo.firthDate }}</p>
                      </div>
                      <div v-if="demo.answerDate !== ''">
                        <h5>Date de réponse du recruteur</h5>
                        <p>{{ demo.answerDate }}</p>
                      </div>
                      <div v-if="demo.txtAnswer !== ''">
                        <h5>Réponse du recruteur</h5>
                        <p>{{ demo.txtAnswer }}</p>
                      </div>
                    </div>
                    <div class="relance">
                      <div v-if="demo.relanceDate !== ''">
                        <h5>Date de relance</h5>
                        <p>{{ demo.relanceDate }}</p>
                      </div>
                      <div v-if="demo.answerRelanceDate !== ''">
                        <h5>Date de réponse à la relance</h5>
                        <p>{{ demo.answerRelanceDate }}</p>
                      </div>
                      <div v-if="demo.txtRelanceAnswer !== ''">
                        <h5>Réponse suite à relance</h5>
                        <p>{{ demo.txtRelanceAnswer }}</p>
                      </div>
                      <div v-if="demo.comment !== ''">
                        <h5>Commentaires</h5>
                        <p>{{ demo.comment }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="staffs">
                  <h4>CONTACTS</h4>
                  <div
                    v-if="
                      demo.staff1Name == '' ||
                      demo.staff1Job == '' ||
                      demo.staff1Mail == '' ||
                      demo.staff1Job == '' ||
                      demo.staff1Phone == '' ||
                      demo.staff2Name == '' ||
                      demo.staff2Job == '' ||
                      demo.staff2Mail == '' ||
                      demo.staff2Job == '' ||
                      demo.staff2Phone == ''
                    "
                  >
                    <p class="complete">* à compléter</p>
                  </div>
                  <div class="staff">
                    <div
                      class="firth-staff"
                      v-if="
                        demo.staff1Name !== '' ||
                        demo.staff1Job !== '' ||
                        demo.staff1Linkedin !== '' ||
                        demo.staff1Mail !== '' ||
                        demo.staff1Phone !== ''
                      "
                    >
                      <h5>Contact n°1</h5>
                      <div v-if="demo.staff1Name !== ''">
                        <h6>Nom</h6>
                        <p>{{ demo.staff1Name }}</p>
                      </div>
                      <div v-if="demo.staff1Job !== ''">
                        <h6>Fonction</h6>
                        <p>{{ demo.staff1Job }}</p>
                      </div>
                      <div v-if="demo.staff1Linkedin !== ''">
                        <h6>LinkedIn</h6>
                        <a :href="demo.staff1Linkedin">LinkedIn</a>
                      </div>
                      <div v-if="demo.staff1Mail !== ''">
                        <h6>Mail</h6>
                        <a :href="'mailto:' + demo.staff1Mail"> Mail </a>
                      </div>
                      <div v-if="demo.staff1Phone !== ''">
                        <h6>Téléphone</h6>
                        <a :href="'tel:' + demo.staff1Phone">Tél</a>
                      </div>
                    </div>
                    <div class="line"></div>
                    <div
                      class="second-staff"
                      v-if="
                        demo.staff2Name !== '' ||
                        demo.staff2Job !== '' ||
                        demo.staff2Linkedin !== '' ||
                        demo.staff2Mail !== '' ||
                        demo.staff2Phone !== ''
                      "
                    >
                      <h5>Contact n°2</h5>
                      <div v-if="demo.staff2Name !== ''">
                        <h6>Nom</h6>
                        <p>{{ demo.staff2Name }}</p>
                      </div>
                      <div v-if="demo.staff2Job !== ''">
                        <h6>Fonction</h6>
                        <p>{{ demo.staff2Job }}</p>
                      </div>
                      <div v-if="demo.staff2Linkedin !== ''">
                        <h6>LinkedIn</h6>
                        <a :href="demo.staff2Linkedin">LinkedIn</a>
                      </div>
                      <div v-if="demo.staff2Mail !== ''">
                        <h6>Mail</h6>
                        <a :href="'mailto:' + demo.staff2Mail"> Mail </a>
                      </div>
                      <div v-if="demo.staff2Phone !== ''">
                        <h6>Téléphone</h6>
                        <a :href="'tel:' + demo.staff2Phone">Tél</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn">
              <button @click="() => deleteDemo(demo.id)">Supprimer</button>
              <button @click="() => toggle(demo)">Modifier</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="drop-zone"
        @drop="onDrop($event, 11)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="entete"><h2>Réponse reçue</h2></div>
        <div v-if="listEleven.length > 0">
          <div
            v-for="demo in listEleven"
            :key="demo.id"
            :id="demo.id"
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, demo)"
          >
            <div class="card-demo">
              <div class="card-title-demo">
                <img src="@/assets/answer.jpg" alt="" />
                <h3>Réponse à une annonce</h3>
                <div
                  v-if="
                    demo.jobType == '' ||
                    demo.jobLocation == '' ||
                    demo.jobPay == '' ||
                    demo.jobPay == '' ||
                    demo.firmName == '' ||
                    demo.firmType == '' ||
                    demo.firmOrigin == '' ||
                    demo.firmSite == '' ||
                    demo.firmLinkedin == '' ||
                    demo.firmJungle == '' ||
                    demo.firmPhone == '' ||
                    demo.firmEffectif == '' ||
                    demo.firthDate == '' ||
                    demo.answerDate == '' ||
                    demo.txtAnswer == '' ||
                    demo.relanceDate == '' ||
                    demo.txtRelanceAnswer == '' ||
                    demo.answerRelanceDate == '' ||
                    demo.comment == '' ||
                    demo.staff1Name !== '' ||
                    demo.staff1Job !== '' ||
                    demo.staff1Linkedin !== '' ||
                    demo.staff1Mail !== '' ||
                    demo.staff1Phone !== ''
                  "
                >
                  <p class="complete-all">* à compléter</p>
                </div>
              </div>

              <div class="demo-all">
                <div class="job">
                  <h4>OFFRE</h4>
                  <div
                    v-if="
                      demo.jobType == '' ||
                      demo.jobLocation == '' ||
                      demo.jobPay == ''
                    "
                  >
                    <p class="complete">* à compléter</p>
                  </div>
                  <h5>Intitulé du poste</h5>
                  <p>{{ demo.jobName }}</p>
                  <h5>Lien</h5>
                  <a :href="demo.jobLink" target="_blank"
                    >Lien vers l'annonce</a
                  >

                  <div v-if="demo.jobType !== ''">
                    <h5>Type de poste</h5>
                    <p>{{ demo.jobType }}</p>
                  </div>
                  <div v-if="demo.jobLocation !== ''">
                    <h5>Lieu d'emploi</h5>
                    <p>{{ demo.jobLocation }}</p>
                  </div>

                  <div v-if="demo.jobPay !== ''">
                    <h5>Salaire annuel</h5>
                    <p>{{ demo.jobPay }}</p>
                  </div>
                </div>
                <div class="firm">
                  <h4>ENTREPRISE</h4>
                  <div
                    v-if="
                      demo.firmName == '' ||
                      demo.firmType == '' ||
                      demo.firmOrigin == '' ||
                      demo.firmSite == '' ||
                      demo.firmLinkedin == '' ||
                      demo.firmJungle == '' ||
                      demo.firmEffectif == '' ||
                      demo.firmPhone == ''
                    "
                  >
                    <p class="complete">* à compléter</p>
                  </div>
                  <div v-if="demo.firmName !== ''">
                    <h5>Nom de l'entreprise</h5>
                    <p>{{ demo.firmName }}</p>
                  </div>
                  <div v-if="demo.firmType !== ''">
                    <h5>Type d'entreprise</h5>
                    <p>{{ demo.firmType }}</p>
                  </div>
                  <div v-if="demo.firmOrigin !== ''">
                    <h5>Pays d'origine</h5>
                    <p>{{ demo.firmOrigin }}</p>
                  </div>

                  <div v-if="demo.firmSite !== ''">
                    <h5>Site de l'entreprise</h5>
                    <a :href="demo.firmSite" target="_blank"
                      >Lien site de l'entreprise</a
                    >
                  </div>
                  <div v-if="demo.firmLinkedin !== ''">
                    <h5>LinkedIn</h5>
                    <a :href="demo.firmLinkedin" target="_blank"
                      >Linkedin de l'entreprise</a
                    >
                  </div>
                  <div v-if="demo.firmJungle !== ''">
                    <h5>Welcome To The Jungle</h5>
                    <a :href="demo.firmJungle" target="_blank"
                      >WTJ de l'entreprise</a
                    >
                  </div>
                  <div v-if="demo.firmPhone !== ''">
                    <h5>Téléphone</h5>
                    <a :href="'tel:' + demo.firmPhone">{{ demo.firmPhone }}</a>
                    <p></p>
                  </div>
                  <div v-if="demo.firmEffectif !== ''">
                    <h5>Effectif</h5>
                    <p>{{ demo.firmEffectif }}</p>
                  </div>
                </div>
                <div class="contact">
                  <h4>CANDIDATURE</h4>
                  <div
                    v-if="
                      demo.firthDate == '' ||
                      demo.answerDate == '' ||
                      demo.txtAnswer == '' ||
                      demo.relanceDate == '' ||
                      demo.txtRelanceAnswer == '' ||
                      demo.answerRelanceDate == '' ||
                      demo.comment == ''
                    "
                  >
                    <p class="complete">* à compléter</p>
                  </div>
                  <div class="answer">
                    <div class="firstAnswer">
                      <div v-if="demo.firthDate !== ''">
                        <h5>Date de réponse à l'offre</h5>
                        <p>{{ demo.firthDate }}</p>
                      </div>
                      <div v-if="demo.answerDate !== ''">
                        <h5>Date de réponse du recruteur</h5>
                        <p>{{ demo.answerDate }}</p>
                      </div>
                      <div v-if="demo.txtAnswer !== ''">
                        <h5>Réponse du recruteur</h5>
                        <p>{{ demo.txtAnswer }}</p>
                      </div>
                    </div>
                    <div class="relance">
                      <div v-if="demo.relanceDate !== ''">
                        <h5>Date de relance</h5>
                        <p>{{ demo.relanceDate }}</p>
                      </div>
                      <div v-if="demo.answerRelanceDate !== ''">
                        <h5>Date de réponse à la relance</h5>
                        <p>{{ demo.answerRelanceDate }}</p>
                      </div>
                      <div v-if="demo.txtRelanceAnswer !== ''">
                        <h5>Réponse suite à relance</h5>
                        <p>{{ demo.txtRelanceAnswer }}</p>
                      </div>
                      <div v-if="demo.comment !== ''">
                        <h5>Commentaires</h5>
                        <p>{{ demo.comment }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="staffs">
                  <h4>CONTACTS</h4>
                  <div
                    v-if="
                      demo.staff1Name == '' ||
                      demo.staff1Job == '' ||
                      demo.staff1Mail == '' ||
                      demo.staff1Job == '' ||
                      demo.staff1Phone == '' ||
                      demo.staff2Name == '' ||
                      demo.staff2Job == '' ||
                      demo.staff2Mail == '' ||
                      demo.staff2Job == '' ||
                      demo.staff2Phone == ''
                    "
                  >
                    <p class="complete">* à compléter</p>
                  </div>
                  <div class="staff">
                    <div
                      class="firth-staff"
                      v-if="
                        demo.staff1Name !== '' ||
                        demo.staff1Job !== '' ||
                        demo.staff1Linkedin !== '' ||
                        demo.staff1Mail !== '' ||
                        demo.staff1Phone !== ''
                      "
                    >
                      <h5>Contact n°1</h5>
                      <div v-if="demo.staff1Name !== ''">
                        <h6>Nom</h6>
                        <p>{{ demo.staff1Name }}</p>
                      </div>
                      <div v-if="demo.staff1Job !== ''">
                        <h6>Fonction</h6>
                        <p>{{ demo.staff1Job }}</p>
                      </div>
                      <div v-if="demo.staff1Linkedin !== ''">
                        <h6>LinkedIn</h6>
                        <a :href="demo.staff1Linkedin">LinkedIn</a>
                      </div>
                      <div v-if="demo.staff1Mail !== ''">
                        <h6>Mail</h6>
                        <a :href="'mailto:' + demo.staff1Mail"> Mail </a>
                      </div>
                      <div v-if="demo.staff1Phone !== ''">
                        <h6>Téléphone</h6>
                        <a :href="'tel:' + demo.staff1Phone">Tél</a>
                      </div>
                    </div>
                    <div class="line"></div>
                    <div
                      class="second-staff"
                      v-if="
                        demo.staff2Name !== '' ||
                        demo.staff2Job !== '' ||
                        demo.staff2Linkedin !== '' ||
                        demo.staff2Mail !== '' ||
                        demo.staff2Phone !== ''
                      "
                    >
                      <h5>Contact n°2</h5>
                      <div v-if="demo.staff2Name !== ''">
                        <h6>Nom</h6>
                        <p>{{ demo.staff2Name }}</p>
                      </div>
                      <div v-if="demo.staff2Job !== ''">
                        <h6>Fonction</h6>
                        <p>{{ demo.staff2Job }}</p>
                      </div>
                      <div v-if="demo.staff2Linkedin !== ''">
                        <h6>LinkedIn</h6>
                        <a :href="demo.staff2Linkedin">LinkedIn</a>
                      </div>
                      <div v-if="demo.staff2Mail !== ''">
                        <h6>Mail</h6>
                        <a :href="'mailto:' + demo.staff2Mail"> Mail </a>
                      </div>
                      <div v-if="demo.staff2Phone !== ''">
                        <h6>Téléphone</h6>
                        <a :href="'tel:' + demo.staff2Phone">Tél</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn">
              <button @click="() => deleteDemo(demo.id)">Supprimer</button>
              <button @click="() => toggle(demo)">Modifier</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import demosService from "@/services/demo.js";
import DemoModal from "./DemoModal.vue";
import DemoForm from "./DemoForm.vue";

export default {
  name: "AnswerDemo",
  components: {
    DemoModal,
    DemoForm,
  },
  data() {
    const demos = ref([]);
    demos.value = demosService.read();
    console.log("test answ", demos);

    return {
      revelebis3: false,
      items: demos,
    };
  },
  computed: {
    listEight() {
      return this.items.filter((item) => item.list === 8);
    },

    listNine() {
      return this.items.filter((item) => item.list === 9);
    },
    listTen() {
      return this.items.filter((item) => item.list === 10);
    },
    listEleven() {
      return this.items.filter((item) => item.list === 11);
    },
  },

  methods: {
    refresh(event) {
      console.log(event);
      window.location.reload();
    },
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = this.items.find((item) => item.id == itemID);
      item.list = list;
      demosService.updateDemMove(item);
    },
    toggleDemoForm: function () {
      this.revelebis3 = !this.revelebis3;
    },
  },

  setup() {
    const demos = ref([]);

    onMounted(() => {
      let demos = JSON.parse(localStorage.getItem("demo-vue")) || [
        {
          id: 1657017791284,
          jobName: "Développeur Front-end React",
          jobLink:
            "https://www.welcometothejungle.com/fr/companies/liksi/jobs/developpeur-front-end-react_rennes?q=50def03e336b28ce7ce7534e4e8bd141&o=1148911",
          jobType: "CDI",
          jobLocation: "Rennes",
          jobPay: "",
          firmName: "Liksi",
          firmType: "PME",
          firmOrigin: "France",
          firmSite: "https://www.liksi.fr/pages/home/",
          firmLinkedin: "",
          firmJungle: "https://www.welcometothejungle.com/fr/companies/liksi",
          firmPhone: "",
          firmEffectif: 38,
          firthDate: "",
          answerDate: "",
          txtAnswer: "",
          relanceDate: "",
          answerRelanceDate: "",
          txtRelanceAnswer: "",
          comment: "",
          staff1Name: "",
          staff1Job: "",
          staff1Linkedin: "",
          staff1Mail: "",
          staff1Phone: "",
          staff2Name: "",
          staff2Job: "",
          staff2Linkedin: "",
          staff2Mail: "",
          staff2Phone: "",
          list: 11,
        },
        {
          id: 1657017448139,
          jobName: "Développeur Front-end Vue.js",
          jobLink:
            "https://www.welcometothejungle.com/fr/companies/liksi/jobs/developpeur-front-end-vue-js_rennes?q=50def03e336b28ce7ce7534e4e8bd141&o=1148918",
          jobType: "CDI",
          jobLocation: "Rennes",
          jobPay: "",
          firmName: "Liksi",
          firmType: "PME",
          firmOrigin: "France",
          firmSite: "https://www.liksi.fr/pages/home/",
          firmLinkedin: "",
          firmJungle: "https://www.welcometothejungle.com/fr/companies/liksi",
          firmPhone: "",
          firmEffectif: 38,
          firthDate: "2022-06-27",
          answerDate: "",
          txtAnswer: "test à passé reçu par mail le 4 juil",
          relanceDate: "",
          answerRelanceDate: "",
          txtRelanceAnswer: "",
          comment: "",
          staff1Name: "",
          staff1Job: "",
          staff1Linkedin: "",
          staff1Mail: "",
          staff1Phone: "",
          staff2Name: "",
          staff2Job: "",
          staff2Linkedin: "",
          staff2Mail: "",
          staff2Phone: "",
          list: 8,
        },
        {
          id: 1657017066162,
          jobName: "Développeur Confirmé Angular / ReactJS",
          jobLink:
            "https://www.welcometothejungle.com/fr/companies/niji/jobs/developpeur-confirme-angular-reactjs-h-f_rennes_NIJI_WPRyQJ0?q=50def03e336b28ce7ce7534e4e8bd141&o=937524",
          jobType: "CDI",
          jobLocation: "Rennes",
          jobPay: "",
          firmName: "Niji",
          firmType: "",
          firmOrigin: "",
          firmSite: "https://www.niji.fr/",
          firmLinkedin: "",
          firmJungle: "https://www.welcometothejungle.com/fr/companies/niji",
          firmPhone: "",
          firmEffectif: 1000,
          firthDate: "",
          answerDate: "",
          txtAnswer: "",
          relanceDate: "",
          answerRelanceDate: "",
          txtRelanceAnswer: "",
          comment: "",
          staff1Name: "",
          staff1Job: "",
          staff1Linkedin: "",
          staff1Mail: "",
          staff1Phone: "",
          staff2Name: "",
          staff2Job: "",
          staff2Linkedin: "",
          staff2Mail: "",
          staff2Phone: "",
          list: 8,
        },
        {
          id: 1657016496998,
          jobName: "Application Developper",
          jobLink:
            "https://www.welcometothejungle.com/fr/companies/atos/jobs/application-developer_rennes_ATOS_WQLDNkN?q=50def03e336b28ce7ce7534e4e8bd141&o=1218113",
          jobType: "CDI",
          jobLocation: "Rennes",
          jobPay: "35000",
          firmName: "Atos",
          firmType: "ESN",
          firmOrigin: "",
          firmSite: "https://atos.net/fr/",
          firmLinkedin: "",
          firmJungle: "https://www.welcometothejungle.com/fr/companies/atos",
          firmPhone: "",
          firmEffectif: 111000,
          firthDate: "",
          answerDate: "",
          txtAnswer: "",
          relanceDate: "",
          answerRelanceDate: "",
          txtRelanceAnswer: "",
          comment: "",
          staff1Name: "",
          staff1Job: "",
          staff1Linkedin: "",
          staff1Mail: "",
          staff1Phone: "",
          staff2Name: "",
          staff2Job: "",
          staff2Linkedin: "",
          staff2Mail: "",
          staff2Phone: "",
          list: 9,
        },
        {
          id: 1657016140891,
          jobName: "Front Development Engineer",
          jobLink:
            "https://www.welcometothejungle.com/fr/companies/actility/jobs/r-d-front-development-engineer_lannion?q=50def03e336b28ce7ce7534e4e8bd141&o=1222831",
          jobType: "CDI",
          jobLocation: "Lannion",
          jobPay: "",
          firmName: "Actility",
          firmType: "ESN",
          firmOrigin: "",
          firmSite: "https://www.actility.com/",
          firmLinkedin: "",
          firmJungle:
            "https://www.welcometothejungle.com/fr/companies/actility",
          firmPhone: "",
          firmEffectif: 111000,
          firthDate: "2022-06-07",
          answerDate: "",
          txtAnswer: "",
          relanceDate: "2022-06-30",
          answerRelanceDate: "",
          txtRelanceAnswer: "",
          comment: "",
          staff1Name: "",
          staff1Job: "",
          staff1Linkedin: "",
          staff1Mail: "",
          staff1Phone: "",
          staff2Name: "",
          staff2Job: "",
          staff2Linkedin: "",
          staff2Mail: "",
          staff2Phone: "",
          list: 10,
        },
      ];
      localStorage.setItem("demo-vue", JSON.stringify(demos));
    });
    let isInEditMode = ref(false);
    let demoToEdit = ref(null);
    demos.value = demosService.read();

    function toggle(demo) {
      demoToEdit.value = demo;
      isInEditMode.value = true;
      window.scrollTo({ top: 0 });
    }
    function updateDemo(demo) {
      console.log("updateDemo", demo);
      demosService.updateDem(demo);
      demos.value = demosService.read();

      cancelEdit();
    }
    function cancelEdit() {
      isInEditMode.value = false;
      demoToEdit.value = null;
    }
    function deleteDemo(id) {
      demosService.deleteDem(id);
      demos.value = demosService.read();
    }
    function addDemo(data) {
      console.log("coucou");
      console.log("Demo.vue | addDemo()", data);
      demosService.create(data);
    }

    return {
      demos,
      deleteDemo,
      isInEditMode,
      demoToEdit,
      toggle,
      updateDemo,
      cancelEdit,
      addDemo,
    };
  },
};
</script>
<style scoped>
.drops {
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: auto;
}
.drop-zone {
  width: 22%;
  background-color: rgb(242, 163, 134);
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 0.3rem ridge rgb(242, 163, 134);
}

.drag-el {
  width: 90%;
  margin: 0.5rem auto;
  border: 0.3rem solid rgb(143, 45, 45);
  border-radius: 1rem;
  background-color: rgb(231, 230, 230);
  cursor: grab;
}
.drag-el:hover {
  border: 0.5rem solid rgb(143, 45, 45);
  background-color: rgb(229, 166, 166);
}
/*card*/

.demo-all {
  height: 15rem;
  overflow-y: scroll;
  overflow-x: auto;
  word-wrap: break-word;
  background-color: white;
}
.demo-all::-webkit-scrollbar {
  width: 0.5rem;
  background-color: rgb(231, 230, 230);
}
.demo-all::-webkit-scrollbar-thumb {
  background: rgba(143, 45, 45, 0.7);
  border-radius: 2rem;
}
.demo-all::-webkit-scrollbar-button {
  border-style: none;
  height: 2rem;
}
.demo-all::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(72, 93, 33, 0.3);
  box-shadow: inset 0 0 6px rgba(72, 93, 33, 0.3);
  border-radius: 2rem;
}
img {
  height: 5rem;
}
h3 {
  color: rgb(143, 45, 45);
  font-size: 1.6rem;
  margin-top: 0;
  margin-bottom: 0;
}
h4 {
  color: purple;
  font-size: 1.3rem;
  margin-bottom: 0;
}
h5 {
  color: rgb(241, 61, 61);
  font-size: 1.1rem;
  margin: 1rem auto 0 0.3rem;
  text-align: left;
}
h6 {
  color: rgb(181, 119, 4);
  font-size: 0.9rem;
}
p {
  font-size: 0.8rem;
  margin: 0.5rem 0.1rem;
  text-align: left;
}
button {
  margin: 0.5rem;
  border: none;
  border-radius: 0.3rem;
  background: rgb(143, 45, 45);
  color: white;
  padding: 0.4rem;
  cursor: pointer;
}
.complete {
  color: red;
  font-size: 0.5rem;
  text-align: right;
  margin-right: 0.5rem;
  margin-top: 0;
  margin-bottom: 0;
}
.complete:hover {
  font-size: 1rem;
  margin-bottom: -0.55rem;
}
.complete-all {
  color: red;
  font-size: 0.7rem;
  text-align: right;
  margin-right: 0.5rem;
  margin-top: 0;
  margin-bottom: 0;
}
.entete {
  height: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(143, 45, 45);
  border: 0.3rem ridge rgb(143, 45, 45);
  border-radius: 2rem 0;
}
.entete h2 {
  color: rgb(246, 230, 230);
  font-size: 1.2rem;
}
.annonces {
  color: rgb(246, 230, 230);
  width: 94.2%;
  margin: 2rem auto auto auto;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  background-color: rgb(143, 45, 45);
  border: 0.3rem ridge rgb(143, 45, 45);
  border-bottom: none;
  border-radius: 2rem 2rem 0 0;
}
.formOpenBtn button {
  padding: 1.2rem;
  margin: 0.5rem;
  border: solid rgb(242, 163, 134) 0.5rem;
  border-radius: 0.3rem;
  background: rgb(143, 45, 45);
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
}
.demo-btn {
  display: flex;
}
.refresh button {
  width: 90%;
  background-color: rgba(255, 166, 0, 0.4);
  border: 0.3rem ridge orange;
}
.refresh h2 {
  background-color: rgba(255, 166, 0, 0.7);
  color: rgb(134, 37, 2);
  border: solid 0.5rem orange;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}
.clic {
  font-size: 1.5rem;
  font-weight: bolder;
  color: rgb(108, 30, 2);
}
</style>
