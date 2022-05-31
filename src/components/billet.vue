<template>
    <div class="flex flex-col items-center text-center" >
        <figure class="mt-6">
            <figcaption class="bg-Black-clear h-32 w-64 text-PrincipalyText font-rubik-mono-one">
                <h2 class="text-2xl p-6">{{ price }}€</h2>
                <h3 class="text-lg">{{ text }}</h3>
            </figcaption>

            <figcaption class="bg-Dark_Bouton text-PrincipalyText h-32 w-64">
                <h3 class="p-4 font-raleway text-base">{{ dates}}</h3>
                <Bouton>Acheter</Bouton>
            </figcaption>
        </figure>
    </div>
</template>

<script >
import { RouterLink } from "vue-router";
import Bouton from "./icons/Bouton.vue";

export default {
    props: {
        price: Number,
        text: String,
        dates: String,
    },

    components: {
    RouterLink,
    Bouton
},
}

</script>