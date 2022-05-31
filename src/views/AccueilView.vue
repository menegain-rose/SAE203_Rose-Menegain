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

    <div class="bg-Black-clear pt-1 pb-24 my-6">
      <h2 class="m-6">Nos artistes</h2>

      <div class="flex flex-col items-center">
        <Bouton>
          <router-link to="/Artistes">Découvrir</router-link>
        </Bouton>
    
        <!-- caroussel -->
    
<div class="relative rounded-xl overflow-auto">

  <!-- Contents -->
  <div class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14 pt-14">
    <div class="snap-center shrink-0">
      <div class="shrink-0 w-4 sm:w-48"></div>
    </div>
    <div class="snap-center shrink-0 first:pl-8 last:pr-8">
      <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-artistes-15juillet/KapBambino.png">
    </div>
    <div class="snap-center shrink-0 first:pl-8 last:pr-8">
      <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-artistes-15juillet/BlueStahli.png">
    </div>
    <div class="snap-center shrink-0 first:pl-8 last:pr-8">
      <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-artistes-15juillet/CrystalCastles.png">
    </div>
    <div class="snap-center shrink-0 first:pl-8 last:pr-8">
      <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-artistes-15juillet/LeTigre.png">
    </div>
    <div class="snap-center shrink-0 first:pl-8 last:pr-8">
      <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-artistes-15juillet/LoveFine.png">
    </div>
    <div class="snap-center shrink-0 first:pl-8 last:pr-8">
      <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-artistes-15juillet/RetardOBot.png">
    </div>
    <div class="snap-center shrink-0">
      <div class="shrink-0 w-4 sm:w-48"></div>
    </div>
  </div>
</div>
    
        <!-- caroussel -->
      </div>
        <Swipe class="fill-PrincipalyText float-right"></Swipe>
    </div>

    <img src="/images-home/programme.png" alt="image de concert">
    <h2>DECOUVREZ NOTRE PROGRAMME</h2>
    <p>Quel jour votre artiste préféré va-t-il passer ?</p>
    <Bouton>
      <router-link to="/Programme">Découvrir</router-link>
    </Bouton>

    <h2 class="m-6">Pour ne pas vous perdre</h2>
    <img src="/images-home/carte.png" alt="carte pour s'orrienter">
    <Bouton class="float-right m">
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