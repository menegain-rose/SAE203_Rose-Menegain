<template>
  <main class="p-8">
    <h2 class="text-2xl">Le Festival</h2>

    <Bouton>
      <slot>Télécharger</slot>
    </Bouton>
    <img src="/images-festival/carte.png" alt="">

    <h2>
      Espace concerts
    </h2>
    <p>
      Nous vous offrons 3 scènes de concerts, qui pourrons accueillirs vos artistes préférés durant ses 3 jours !
    </p>
    <img src="/images-festival/concert.png" alt="">

    <h2>
      MERCH
    </h2>
    <p>
      Vous avez envie de vous acheter un goodies de notre festival ou d’un de nos artistes, n’hésitez plus et aller sur nos stands qui pourrons vous satisfaire à coût sur !
    </p>
    <img src="/images-festival/merch.png" alt="">

    <h2>
      Camping
    </h2>
    <p>
      Une petite faim, une petite soif ? Pas de panique des bars sont sur notre espace !
      Vous y retrouverez nourriture (burger, sandwichs, hot dogs...), et boissons fraiches (bières, eau, soda....).
    </p>
    <img src="/images-festival/camping.png" alt="">

    <h2>
      Bar
    </h2>
    <p>
      Nous vous offrons bien évidemment la possibilitée de vous poser sur notre espace camping durant ses 3 jours avec caravan, voiture, ou tente ! 
      Peu importe vous êtes les bienvenue !
    </p>
    <img src="/images-festival/bar.png" alt="">




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