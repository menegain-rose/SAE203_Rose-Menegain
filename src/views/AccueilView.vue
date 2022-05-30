<template>
  <main>
    <h1 class="text-2xl">BIENVENUE AU BONYFEST</h1>

    <img src="/images-home/accueil.png" alt="">
    <h2>15 > 17 juillet</h2>
    <Bouton>
      <slot>Billeterie</slot>
    </Bouton>
    <ul>
      <li>50 Artistes</li>
      <li>3 Scènes</li>
      <li>3 Jours</li>
    </ul>
    <h2>Nos artistes</h2>
    <Bouton>
      <router-link to="/Artistes">Découvrir</router-link>
    </Bouton>

    <!-- caroussel -->

    <img src="/swipe-left.svg" class="h-20 w-auto" alt="swipe left">

    <img src="/images-home/programme.png" alt="image de concert">
    <h2>DECOUVREZ NOTRE PROGRAMME</h2>
    <p>Quel jour votre artiste préféré va-t-il passer ?</p>
    <Bouton>
      <slot>Découvrir</slot>
    </Bouton>

    <h2>Pour ne pas vous perdre</h2>
    <img src="/images-home/carte.png" alt="carte pour s'orrienter">
    <Bouton>
      <slot>Voir plus</slot>
    </Bouton>

  </main>
</template>

<script>
import Bouton from '/src/components/icons/Bouton.vue'

export default {

        components: { 
            Bouton,
        },

};
</script>