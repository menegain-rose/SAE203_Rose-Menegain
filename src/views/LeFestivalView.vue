<template>
  <main class="p-8">
    <h2 class="text-2xl">Le Festival</h2>

  <div class="flex-col items-center grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(250px,2fr))]">
    <div class="mx-3">
      <Bouton class="my-3">
        <slot>Télécharger</slot>
      </Bouton>
      <img class="mt-3 mb-8" src="/images-festival/carte.png" alt="Carte du festival">
    </div>

    <div class="mx-3">
      <h2 class="my-3">
        Espace concerts
      </h2>
      <p class="my-3">
        Nous vous offrons 3 scènes de concerts, qui pourrons accueillir vos artistes préférés durant ses 3 jours !
      </p>
      <img class="mt-3 mb-8" src="/images-festival/concert.png" alt="Photo d'un concert">
    </div>

    <div class="mx-3">
      <h2 class="my-3">
        MERCH
      </h2>
      <p class="my-3">
        Vous avez envie de vous acheter un goodies de notre festival ou d’un de nos artistes, n’hésitez plus et aller sur nos stands qui pourrons vous satisfaire à coût sur !
      </p>
      <img class="mt-3 mb-8" src="/images-festival/merch.png" alt="Image des tee-shirts en ventes">
    </div>

    <div class="mx-3">
      <h2 class="my-3">
        Camping
      </h2>
      <p class="my-3">
        Une petite faim, une petite soif ? Pas de panique des bars sont sur notre espace !
        Vous y retrouverez nourriture (burgers, sandwichs, hot dogs...), et boissons fraiches (bières, eau, sodas....).
      </p>
      <img class="mt-3 mb-8" src="/images-festival/camping.png" alt="Photo de camping">
    </div>

    <div class="mx-3">
      <h2 class="my-3">
        Bar
      </h2>
      <p class="my-3">
        Nous vous offrons bien évidemment la possibilitée de vous poser sur notre espace camping durant ses 3 jours avec caravan, voiture, ou tente ! 
        Peu importe vous êtes les bienvenues !
      </p>
      <img class="mt-3 mb-6" src="/images-festival/bar.png" alt="Photo d'un hot dogs">
    </div>
  </div>


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