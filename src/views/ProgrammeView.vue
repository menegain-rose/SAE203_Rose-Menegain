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
        <div class="my-4 text-center font-bree-serif text-2xl text-white" v-for="Artistes in listeArtistes" :key="Artistes.id">
        <p>{{ Artistes.Nom }}</p>
        </div>

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



export default {
  data() {
    return {
      Nom: null,
      message: null,
      listeArtistes: [],
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
};
</script>


