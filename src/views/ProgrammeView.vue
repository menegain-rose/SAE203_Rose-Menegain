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



        <form class="py-3">
            <div>
            <input type="text" v-model='Nom' required />
            <Bouton class="mx-2 items-center" type="button" @click='createArtistes()' title="Créé">
                Créé
            </Bouton>
            </div>
        </form>
        
          <input type="text" v-model="filter" placeholder="Filtre"/>
          <Bouton class="mt-2 mb-6" type="button"  title="Filtrage">
              Recherche
          </Bouton>   

        <form v-for="Artistes in filterByName" :key="Artistes.id">
          <div>
              <input type="text" class="mx-2 my-2" v-model='Artistes.Nom' required />
              <Bouton type="button" class="mx-2 my-2" @click="updateArtistes(Artistes)" title="Modifier">
              Modifier
              </Bouton>
              <Bouton type="button" @click="deleteArtistes(Artistes)" title="Supprimer">
              Supprimer
              </Bouton>
          </div>
        </form>









    <!--    <form @submit.prevent="createArtistes"> 
          <div>
              <p >Nom</p>
            <input type="text"  v-model='Nom' required />
              <Save class=" bg-Color-Bouton fill-PrincipalyText rounded-3xl inline-block" type="button" @click='createArtistes()' title="Création"></Save>
          </div>
          
          <div class="my-4 text-center font-bree-serif text-2xl text-white" v-for="Artistes in listeArtistes" :key="Artistes.id">
          <p>{{ Artistes.Nom }}</p>
          <img v-bind:src="Artistes.Image" />

        <input type="file" ref="file" id="file" @change="previewImage"> 
          </div>
        </form> --> 



      <ul class="mt-14 mb-5">
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
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'
import Save from "../components/icons/Save.vue";
import Bouton from '/src/components/icons/Bouton.vue'


import { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


    export default {   
        data(){
            return{                
                user:{         
                    email:null,
                    password:null
                },
                message:null, 
                Nom:null, 
                listeArtistesSynchro:[] ,
                filter:''
            }
        },

        components: {
          Bouton,
          Save
        }, 

          computed:{
            orderByName:function(){
            return this.listeArtistesSynchro.sort(function(a,b){
                if(a.Nom < b.Nom) return -1;
                if(a.Nom > b.Nom) return 1;
                return 0;
            });
            },
            filterByName:function(){ 
              console.log ("FilterByName")
            if(this.filter.length > 0){
                let filter = this.filter.toLowerCase();
                return this.orderByName.filter(function(Artistes){
                return Artistes.Nom.toLowerCase().includes(filter);
                })
            }else{
                return this.orderByName;
            }
            }
        },

        mounted(){ 
            
                let user = getAuth().currentUser;
                if(user){
                    this.user = user;
                    this.message = "User déjà connecté : "+this.user.email;
                }else{
                    this.message = "User non connecté : "+this.user.email;
                }

           
            this.getArtistesSynchro();
        },

        methods:{

            async getArtistesSynchro(){
                const firestore = getFirestore();
                const dbArtistes= collection(firestore, "Artistes");
                const query = await onSnapshot(dbArtistes, (snapshot) =>{
                this.listeArtistesSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
                })
            },

            async createArtistes(){
                const firestore = getFirestore();
                const dbArtistes= collection(firestore, "Artistes");
                const docRef = await addDoc(dbArtistes,{
                    Nom: this.Nom
                })
                //console.log('document créé avec le id : ', docRef.id);
             },

            async updateArtistes(Artistes){
                const firestore = getFirestore();
                const docRef = doc(firestore, "Artistes", Artistes.id);
                await updateDoc(docRef, {
                    Nom: Artistes.Nom
                }) 
             },

            async deleteArtistes(Artistes){
                const firestore = getFirestore();
                const docRef = doc(firestore, "Artistes", Artistes.id);
                await deleteDoc(docRef);
             },

        }
    }
</script>


