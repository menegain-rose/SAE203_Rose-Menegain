<template>
  <main class="pb-10">
    <h1 class="text-2xl absolute text-center top-40">BIENVENUE AU BONYFEST</h1>

    <img src="/images-home/accueil.png" alt="">
    <h2 class="m-5 items-center text-center">15 > 17 juillet</h2>
    <Bouton class="float-right mr-5">
      <router-link to="/Billeterie" >Billeterie</router-link>
    </Bouton>
    
    <div class="items-center text-center mt-24 font-raleway text-2xl text-PrincipalyText">
      <h5 class="m-4">50 Artistes</h5>
      <h5 class="m-4">3 Scènes</h5>
      <h5 class="m-4">3 Jours</h5>
    </div>

    <div class="bg-Black-clear pt-1">
      <h2 class="m-8">Nos artistes</h2>
      <Bouton class=" mr-5">
        <router-link to="/Artistes">Découvrir</router-link>
      </Bouton>
  
      <!-- caroussel -->
  
              <article class="pt-10 flex flex-col items-center">
                  <card
                      imageartist="/images-artistes-15juillet/KapBambino.png"
                      name="Kap bambino"
                      date="15 juillet"
                  />
    <Swipe class="fill-PrincipalyText  "></Swipe>
              </article>
  
      <!-- caroussel -->

    </div>

    <img src="/images-home/programme.png" alt="image de concert">
    <h2>DECOUVREZ NOTRE PROGRAMME</h2>
    <p>Quel jour votre artiste préféré va-t-il passer ?</p>
    <Bouton>
      <router-link to="/Programme">Découvrir</router-link>
    </Bouton>

    <h2>Pour ne pas vous perdre</h2>
    <img src="/images-home/carte.png" alt="carte pour s'orrienter">
    <Bouton>
      <router-link to="/LeFestival">Voir plus</router-link>
    </Bouton>

  </main>
</template>

<script>
import Bouton from '/src/components/icons/Bouton.vue'
import card from "/src/components/card.vue";
import Swipe from "/src/components/icons/swipe.vue";

export default {

        components: { 
            Bouton,
            card,
            Swipe
        },

};
</script>