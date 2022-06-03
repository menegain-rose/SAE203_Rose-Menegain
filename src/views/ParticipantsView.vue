<template>
  <main class="mx-5 py-10">
    <h2 class="text-2xl">Participants</h2>
    <div class="flex-col items-center text-center">
        <form class="py-3">
            <div>
            <input type="text" v-model='Nom' required class="p-1" />
            <Bouton class="mx-2 items-center" type="button" @click='createParticipants()' title="Créé">
                Créé
            </Bouton>
            </div>
        </form>
        
          <input type="text" v-model="filter" placeholder="Recherche" class="p-1"/>
          <Bouton class="mt-2 mb-6" type="button"  title="Filtrage">
              Recherche
          </Bouton>   

        <form v-for="Participants in filterByName" :key="Participants.id">
          <div>
              <input type="text" class="mx-2 my-2 p-1" v-model='Participants.Nom' required />
              <Bouton type="button" class="mx-2 my-2" @click="updateParticipants(Participants)" title="Modifier">
              Modifier
              </Bouton>
              <Bouton type="button" @click="deleteParticipants(Participants)" title="Supprimer">
              Supprimer
              </Bouton>
          </div>
        </form>
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
                listeParticipantsSynchro:[] ,
                filter:''
            }
        },

        components: {
          Bouton,
          Save
        }, 

          computed:{
            orderByName:function(){
            return this.listeParticipantsSynchro.sort(function(a,b){
                if(a.Nom < b.Nom) return -1;
                if(a.Nom > b.Nom) return 1;
                return 0;
            });
            },
            filterByName:function(){ 
              console.log ("FilterByName")
            if(this.filter.length > 0){
                let filter = this.filter.toLowerCase();
                return this.orderByName.filter(function(Participants){
                return Participants.Nom.toLowerCase().includes(filter);
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

           
            this.getParticipantsSynchro();
        },

        methods:{

            async getParticipantsSynchro(){
                const firestore = getFirestore();
                const dbParticipants= collection(firestore, "Participants");
                const query = await onSnapshot(dbParticipants, (snapshot) =>{
                this.listeParticipantsSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
                })
            },

            async createParticipants(){
                const firestore = getFirestore();
                const dbParticipants= collection(firestore, "Participants");
                const docRef = await addDoc(dbParticipants,{
                    Nom: this.Nom
                })
                //console.log('document créé avec le id : ', docRef.id);
             },

            async updateParticipants(Participants){
                const firestore = getFirestore();
                const docRef = doc(firestore, "Participants", Participants.id);
                await updateDoc(docRef, {
                    Nom: Participants.Nom
                }) 
             },

            async deleteParticipants(Participants){
                const firestore = getFirestore();
                const docRef = doc(firestore, "Participants", Participants.id);
                await deleteDoc(docRef);
             },

        }
    }
</script>