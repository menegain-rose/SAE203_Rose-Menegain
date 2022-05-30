<template>
  <main class="p-5 pb-10">
    <h2 class="text-2xl">ARTISTES</h2>
    <p>
      Quels artistes on vous proposes durant ses 3 jours au BonyFest !?
    </p>

      <div class="flex flex-col border-terne-red border m-5 rounded">
        <div class="p-2">
        <div class="btn-group">
          <Bouton class="bg-Dark_Bouton m-1">1er Jour</Bouton>
          <Bouton class="m-1">2ème Jour</Bouton>
          <Bouton class="m-1">3ème Jour</Bouton>        
        </div>
      </div>
      </div>

        <section class="flex flex-col items-center">
            <article>
                <card
                    imageartist="/images-artistes-15juillet/KapBambino.png"
                    name="Kap bambino"
                    date="15 juillet"
                />
            </article>

            <article>
                <card
                    imageartist="/images-artistes-15juillet/BlueStahli.png"
                    name="Blue Stahli"
                    date="15 juillet"
                />
            </article>

            <article>
                <card
                    imageartist="/images-artistes-15juillet/CrystalCastles.png"
                    name="Crystal Castles"
                    date="15 juillet"
                />
            </article>

            <article>
                <card
                    imageartist="/images-artistes-15juillet/LeTigre.png"
                    name="Le tigre"
                    date="15 juillet"
                />
            </article>

            <article>
                <card
                    imageartist="/images-artistes-15juillet/LoveFine.png"
                    name="LoveFine"
                    date="15 juillet"
                />
            </article>

            <article>
                <card
                    imageartist="/images-artistes-15juillet/RetardOBot.png"
                    name="Retard O Bot"
                    date="15 juillet"
                />
            </article>

            <article>
                <card
                    imageartist="/images-artistes-15juillet/TerrorVisions.png"
                    name="Terror Visions"
                    date="15 juillet"
                />
            </article>

            <article>
                <card
                    imageartist="/images-artistes-15juillet/TyingTiffany.png"
                    name="Tying Tiffany"
                    date="15 juillet"
                />
            </article>
    </section>
  </main>
</template>

<script>
import card from "/src/components/card.vue";
import Bouton from "../components/icons/Bouton.vue";

export default {
    components: {
    card,
    Bouton
},    

};
</script>