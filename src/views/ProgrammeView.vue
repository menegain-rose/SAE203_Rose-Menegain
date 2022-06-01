<template>
  <main class="mx-5 py-10">
    <h2 class="text-2xl">LE PROGRAMME</h2>
    <div class="flex flex-col text-center object-center items-center">
        <div class=" border-terne-red border min max-w-[401px] m-5 rounded">
          <div class="p-2">
          <div class="btn-group">
            <Bouton class="bg-Dark_Bouton m-1">1er Jour</Bouton>
            <Bouton class="m-1">2ème Jour</Bouton>
            <Bouton class="m-1">3ème Jour</Bouton>        
          </div>
        </div>
        </div>


        <form>
          <div class="input-group">
              <p class="input-group-text">Nom</p>
            <input type="text" class="form-control" v-model='nom' required />
              <Save class="btn btn-light bg-Color-Bouton fill-PrincipalyText rounded-3xl inline-block" type="button" @click='createArtistes()' title="Création"></Save>
          </div>
        </form>



      <ul>
        <li>
          <h4>Kap Bambino</h4>
          <p>
            Vendredi 15 juillet, 19h 
            Grande scène
            Musique électronique | Bordeaux
          </p>
        </li>

        <li>
          <h4>Crystal Castles</h4>
          <p>
            Vendredi 15 juillet, 20h
            Scène Defburn
            Musique électronique | Bordeaux
        </p>
        </li>

        <li>
          <h4>Le Tigre</h4>
          <p>
            Vendredi 15 juillet, 19h 
            Grande scène
            Musique électronique | Bordeaux
          </p>
        </li>

        <li>
          <h4>Terror Visions</h4>
          <p>
            Vendredi 15 juillet, 23h
            Grande scène
            Musique électronique | Bordeaux
        </p>
        </li>

        <li>
          <h4>Love-Fine</h4>
          <p>
            Vendredi 15 juillet, 22h
            Petite scène
            Musique électronique | Bordeaux
          </p>
        </li>

        <li>
          <h4>Blue Stahli</h4>
          <p>
            Vendredi 15 juillet, 21h
            Petite scène
            Musique électronique | Bordeaux
        </p>
        </li>

        <li>
          <h4>Retard-O-Bot</h4>
          <p>
            Vendredi 15 juillet, 21h30
            Scène defburn
            Musique électronique | Bordeaux
          </p>
        </li>

        <li>
          <h4>Tying Tiffany</h4>
          <p>
            Vendredi 15 juillet
            Scène defburn, 1h
            Musique électronique | Bordeaux
        </p>
        </li>

        <li>
          <h4>Kap Bambino</h4>
          <p>
            Vendredi 15 juillet, 19h 
            Grande scène
            Musique électronique | Bordeaux
          </p>
        </li>

        <li>
          <h4>Crystal Castles</h4>
          <p>
            Vendredi 15 juillet, 20h
            Scène Defburn
            Musique électronique | Bordeaux
        </p>
        </li>

        <li>
          <h4>Le Tigre</h4>
          <p>
            Vendredi 15 juillet, 19h 
            Grande scène
            Musique électronique | Bordeaux
          </p>
        </li>

        <li>
          <h4>Terror Visions</h4>
          <p>
            Vendredi 15 juillet, 23h
            Grande scène
            Musique électronique | Bordeaux
        </p>
        </li>

        <li>
          <h4>Love-Fine</h4>
          <p>
            Vendredi 15 juillet, 22h
            Petite scène
            Musique électronique | Bordeaux
          </p>
        </li>

        <li>
          <h4>Blue Stahli</h4>
          <p>
            Vendredi 15 juillet, 21h
            Petite scène
            Musique électronique | Bordeaux
        </p>
        </li>

        <li>
          <h4>Retard-O-Bot</h4>
          <p>
            Vendredi 15 juillet, 21h30
            Scène defburn
            Musique électronique | Bordeaux
          </p>
        </li>

        <li>
          <h4>Tying Tiffany</h4>
          <p>
            Vendredi 15 juillet
            Scène defburn, 1h
            Musique électronique | Bordeaux
        </p>
        </li>
      </ul>
    </div>



  </main>

</template>

<script>
import Bouton from "../components/icons/Bouton.vue";

// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot, 
    orderBy
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'
import Save from "../components/icons/Save.vue";


export default {
  name:'ListeView',
  data() {
    return {
      listeArtistes:[],  // Liste des pays - collection pays Firebase
      nom:null, // Pour la création d'un nouveau pays
      filter:''
    }
  },

    components: {
    Bouton,
    Save
}, 

  computed:{
    // Tri des pays par nom en ordre croissant
    orderByName:function(){
      // Parcours et tri des pays 2 à 2
      return this.listeArtistes.sort(function(a,b){
        // Si le nom du pays est avant on retourne -1
        if(a.nom < b.nom) return -1;
        // Si le nom du pays est après on retourne 1
        if(a.nom > b.nom) return 1;
        // Sinon ni avant ni après (homonyme) on retourne 0
        return 0;
      });
    },
    // Filtrage de la propriété calculée de tri
    filterByName:function(){
      // On effectue le fitrage seulement si le filtre est rnseigné
      if(this.filter.length > 0){
        // On récupère le filtre saisi en minuscule (on évite les majuscules)
        let filter = this.filter.toLowerCase();
        // Filtrage de la propriété calculée de tri
        return this.orderByName.filter(function(Artistes){
          // On ne renvoie que les pays dont le nom contient 
          // la chaine de caractère du filtre
          return Artistes.nom.toLowerCase().includes(filter);
        })
      }else{
        // Si le filtre n'est pas saisi
        // On renvoie l'intégralité de la liste triée
        return this.orderByName;
      }
    }
  },
  mounted(){ // Montage de la vue
    // Appel de la liste des pays synchronisée
    this.getArtistes();
  },
  methods: {
    async getArtistes(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbArtistes= collection(firestore, "Artistes");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbArtistes, (snapshot) =>{
      console.log('query', query);
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeArtistes = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
        console.log('listeArtistes', this.listeArtistes);
      })      
    },

    async createArtistes(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbArtistes= collection(firestore, "Artistes");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement    
      const docRef = await addDoc(dbArtistes,{
          nom: this.nom
      })
      console.log('document créé avec le id : ', docRef.id);
    },

    async updatePays(Artistes){
        // Obtenir Firestore
        const firestore = getFirestore();
        // Base de données (collection)  document pays
        // Reference du pays à modifier
        const docRef = doc(firestore, "Artistes", Artistes.id);
        // On passe en paramètre format json
        // Les champs à mettre à jour
        await updateDoc(docRef, {
            nom: Artistes.nom
        }) 
      },

      async deleteArtistes(Artistes){
          // Obtenir Firestore
          const firestore = getFirestore();
          // Base de données (collection)  document pays
          // Reference du pays à supprimer
          const docRef = doc(firestore, "Artistes", Artistes.id);
          // Suppression du pays référencé
          await deleteDoc(docRef);
        },

  }
}
</script>
