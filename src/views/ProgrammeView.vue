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


        <form @submit.prevent="createArtistes">
          <div class="input-group">
              <p class="input-group-text">Nom</p>
            <input type="text" class="form-control" v-model='Nom' required />
              <Save class="btn btn-light bg-Color-Bouton fill-PrincipalyText rounded-3xl inline-block" type="button" @click='createArtistes()' title="Création"></Save>
          </div>
          
          <div class="my-4 text-center font-bree-serif text-2xl text-white" v-for="Artistes in listeArtistes" :key="Artistes.id">
          <p>{{ Artistes.Nom }}</p>
          <img class="preview img-fluid" :src="imageData" />
          <input type="file" class="custom-file-input" ref="file" id="file" 
                                    @change="previewImage"
                                    >
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
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import Save from "../components/icons/Save.vue";
import Bouton from '/src/components/icons/Bouton.vue'

    import { 
        getStorage,             // Obtenir le Cloud Storage
        ref,                    // Pour créer une référence à un fichier à uploader
        getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
        uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

export default {
  data() {
    return {
      Nom: null,
      message: null,
      listeArtistes: [],
      imageData: null,
    };
  },

  components: {
    Bouton,
    Save
  }, 
  mounted() {
    this.getArtistes();
  },
  methods: {
    async getArtistes() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "Artistes");
      const query = await getDocs(dbArtistes);
      query.forEach((doc) => {
        let Artistes = {
          id: doc.id,
          Nom: doc.data().Nom,
        };
        this.listeArtistes.push(Artistes);
      });
    },
  },

async getArtistes(){            
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document pays
            const dbArtistes = collection(firestore, "Artistes");
            // Liste des participants triés
            // query permet de faire une requête sur Firebase
            // notement pour filtrer, trier ... des données
            //orderBy permet de préciser sur quel élément trier, et dans quel ordre
            // ici le nom du pays par ordre croissant (asc)            
            const q = query(dbArtistes, orderBy('Nom', 'asc'));
            // Récupération de la liste des pays à partir de la query
            // La liste est synchronisée
            await onSnapshot(q, (snapshot) => {
                this.listeArtistes = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))  
console.log("Liste des Artistes", this.listeArtistes);      
            })      
        },

        previewImage: function(event) {
            // Mise à jour de la photo du participant
            this.file = this.$refs.file.files[0];
            // Récupérer le nom du fichier pour la photo du participant
            this.participant.photo = this.file.name;
            // Reference to the DOM input element
            // Reference du fichier à prévisualiser
            var input = event.target;
            // On s'assure que l'on a au moins un fichier à lire
            if (input.files && input.files[0]) {
                // Creation d'un filereader
                // Pour lire l'image et la convertir en base 64
                var reader = new FileReader();
                // fonction callback appellée lors que le fichier a été chargé
                reader.onload = (e) => {
                    // Read image as base64 and set to imageData
                    // lecture du fichier pour mettre à jour 
                    // la prévisualisation
                    this.ImageData = e.target.result;
                }
                // Demarrage du reader pour la transformer en data URL (format base 64) 
                reader.readAsDataURL(input.files[0]);        
            }
        },

        async createArtistes(){
            // Obtenir storage Firebase
            const storage = getStorage();
            // Référence de l'image à uploader
            const refStorage = ref(storage, 'Artistes/'+this.Artistes.photo);
            // Upload de l'image sur le Cloud Storage
            await uploadString(refStorage, this.imageData, 'data_url').then((snapshot) => {
                console.log('Uploaded a base64 string');
                
                // Création du participant sur le Firestore
                const db = getFirestore();
                const docRef = addDoc(collection(db, 'Artistes'), this.Artistes );
            });
            // redirection sur la liste des participants
            this.$router.push('/Artistes');            
        }
    }




</script>


