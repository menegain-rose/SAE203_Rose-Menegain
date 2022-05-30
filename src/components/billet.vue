<template>
    <div>
        <figure class="mt-10">
            <figcaption class="bg-Black-clear h-36 w-72">
                <h2>{{ price }}€</h2>
                <h3>{{ text }}</h3>
            </figcaption>

            <figcaption class="bg-Dark_Bouton text-PrincipalyText h-36 w-72">
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