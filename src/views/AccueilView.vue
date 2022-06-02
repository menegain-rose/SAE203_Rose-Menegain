<template>
  <main class="pb-20 p-8">
    <h1 class="text-2xl absolute text-center top-40">BIENVENU AU BONYFEST</h1>

    <img src="/images-home/accueil.png" alt="">
    <div class="items-center text-center">
      <h2 class="m-5">15 > 17 juillet</h2>
      <Bouton class="">
        <router-link to="/Billeterie" >Billeterie</router-link>
      </Bouton>
    </div>
    
    <div class="items-center text-center mt-5 font-raleway text-2xl text-PrincipalyText">
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
      <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-artistes-15juillet/KapBambino.jpg">
    </div>
    <div class="snap-center shrink-0 first:pl-8 last:pr-8">
      <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-artistes-15juillet/BlueStahli.jpg">
    </div>
    <div class="snap-center shrink-0 first:pl-8 last:pr-8">
      <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-artistes-15juillet/CrystalCastles.jpg">
    </div>
    <div class="snap-center shrink-0 first:pl-8 last:pr-8">
      <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-artistes-15juillet/LeTigre.jpg">
    </div>
    <div class="snap-center shrink-0 first:pl-8 last:pr-8">
      <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-artistes-15juillet/LoveFine.jpg">
    </div>
    <div class="snap-center shrink-0 first:pl-8 last:pr-8">
      <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-artistes-15juillet/RetardOBot.jpg">
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

    <div>
      <img src="/images-home/programme.png" alt="image de concert">
      <h2 class="absolute left-5 -mt-[600px]">DECOUVREZ NOTRE PROGRAMME</h2>
      <p class="absolute left-9 -mt-[540px]">Quel jour votre artiste préféré va-t-il passer ?</p>
      <Bouton class="absolute left-40 -mt-[500px]">
        <router-link to="/Programme">Découvrir</router-link>
      </Bouton>
    </div>

    <div>
      <h2 class="m-6">Pour ne pas vous perdre</h2>
      <div class="flex flex-col items-center text-center ">
        <img src="/images-home/carte.png" alt="carte pour s'orrienter">
        <Bouton class="my-2">
          <router-link to="/LeFestival">Voir plus</router-link>
        </Bouton>
      </div>
    </div>

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