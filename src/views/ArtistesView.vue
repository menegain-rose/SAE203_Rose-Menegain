<template>
  <main class="p-8 pb-10">
    <h2 class="text-2xl">ARTISTES</h2>
    <p>
      Quels artistes on vous proposes durant ses 3 jours au BonyFest !?
    </p>
    <div class="flex flex-col text-center object-center items-center">
      <div class="border-terne-red border min max-w-[401px] m-5 rounded">
        <div class="p-2">
        <div class="btn-group">
          <Bouton class="bg-Dark_Bouton m-1">1er Jour</Bouton>
          <Bouton class="m-1">2ème Jour</Bouton>
          <Bouton class="m-1">3ème Jour</Bouton>        
        </div>
      </div>
      </div>
    </div>

        <section class=" flex-col object-center items-center grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            <article>
                <card
                    imageartist="/images-artistes-15juillet/KapBambino.jpg"
                    name="Kap bambino"
                    date="15 juillet"
                />
            </article>

            <article>
                <card
                    imageartist="/images-artistes-15juillet/BlueStahli.jpg"
                    name="Blue Stahli"
                    date="15 juillet"
                />
            </article>

            <article>
                <card
                    imageartist="/images-artistes-15juillet/CrystalCastles.jpg"
                    name="Crystal Castles"
                    date="15 juillet"
                />
            </article>

            <article>
               <router-link to="/PageArtiste">
                    <card
                        imageartist="/images-artistes-15juillet/LeTigre.jpg"
                        name="Le tigre"
                        date="15 juillet"
                    />
                </router-link>
            </article>

            <article>
                <card
                    imageartist="/images-artistes-15juillet/LoveFine.jpg"
                    name="LoveFine"
                    date="15 juillet"
                />
            </article>

            <article>
                <card
                    imageartist="/images-artistes-15juillet/RetardOBot.jpg"
                    name="Retard O Bot"
                    date="15 juillet"
                />
            </article>

            <article>
                <card
                    imageartist="/images-artistes-15juillet/TerrorVisions.jpg"
                    name="Terror Visions"
                    date="15 juillet"
                />
            </article>

            <article>
                <card
                    imageartist="/images-artistes-15juillet/TyingTiffany.jpg"
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