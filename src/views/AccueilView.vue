<template>
  <main class="flex flex-col items-center text-center pb-10">
    <h1 class="text-2xl drop-shadow-2xl shadow-Color-Bouton">BIENVENUE AU BONYFEST</h1>

    <img src="/images-home/accueil.png" alt="">
    <h2>15 > 17 juillet</h2>
    <Bouton>
      <router-link to="/Billeterie">Billeterie</router-link>
    </Bouton>
    
    <div>
      <p>50 Artistes</p>
      <p>3 Scènes</p>
      <p>3 Jours</p>
    </div>

    <h2>Nos artistes</h2>
    <Bouton>
      <router-link to="/Artistes">Découvrir</router-link>
    </Bouton>

    <!-- caroussel -->

            <article>
                <card
                    imageartist="/images-artistes-15juillet/KapBambino.png"
                    name="Kap bambino"
                    date="15 juillet"
                />
            </article>

    <!-- caroussel -->

    <Swipe class="fill-PrincipalyText"></Swipe>


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