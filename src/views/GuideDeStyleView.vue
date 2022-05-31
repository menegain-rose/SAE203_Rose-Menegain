<template>
    <main class="flex flex-col items-center text-center">
        <h1>Style guide</h1>
        <div>
            <h2 class="pt-10 pb-4">Les différentes tailles de polices</h2>
            <h1>Texte en H1</h1>
            <h2>Texte en H2</h2>
            <h3>Texte en H3</h3>
            <h4>Texte en H4</h4>
            <p>Texte p</p>
        </div>
        <div>
            <h2 class="pt-10 pb-4">Quelques images</h2>
            <img class="shrink-0 w-80 h-auto rounded-lg" src="/images-artistes-15juillet/KapBambino.png">
            <img class="shrink-0 w-80 h-auto rounded-lg" src="/images-artistes-15juillet/BlueStahli.png">
            <img class="shrink-0 w-80 h-auto rounded-lg" src="/images-artistes-15juillet/CrystalCastles.png">
        </div>
        <div>
            <h2 class="pt-10 pb-4">Quelques Cartes d'artiste</h2>
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
        </div>

        <div>
            <h2 class="pt-10 pb-4">Quelques Cartes de billets</h2>
            <article class="mx-3">
                <billet
                    price="150"
                    text="Forfait pack 2 pers. &   2 jours"
                    dates="Samedi 16 + Dimanche 17 Juillet"
                />

                <billet
                    price="300"
                    text="Forfait pack 4 pers. &   2 jours"
                    dates="Samedi 16 + Dimanche 17 Juillet"
                />
            </article>
        </div>
        <div>
            <h2 class="pt-10 pb-4">Les couleurs présentes</h2>
            <div class="w-28 h-28 bg-Color-Bouton"></div>
            <p>#9A1418</p>

            <div class="w-28 h-28 bg-Dark_Bouton"></div>
            <p>#630709</p>

            <div class="w-28 h-28 bg-HeadFoot"></div>
            <p>#0B0A0A</p>

            <div class="w-28 h-28 bg-Background"></div>
            <p>#0F0E0E</p>

            <div class="w-28 h-28 bg-PrincipalyText"></div>
            <p>#FEF3EC</p>

            <div class="w-28 h-28 bg-SecondaryText"></div>
            <p>#800D11</p>

            <div class="w-28 h-28 bg-Black-clear"></div>
            <p>#171719</p>
        </div>

    </main>
</template>

<script>
import card from "/src/components/card.vue";
import billet from "/src/components/billet.vue";

export default {
    components: {
    card,
    billet,
},    

};
</script>