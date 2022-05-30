<template>
  <header class="bg-HeadFoot flex justify-between py-1 px-2">
    <div>
      <router-link to="/"><img src="/logofestival.svg" class="h-20 w-auto" alt="LogoFestival"></router-link>
      <h1 class="font-rubik-mono-one text-xl text-SecondaryText">BonyFest</h1>
    </div>

    <div>
      <MenuIcon class="h-12 w-12 fill-PrincipalyText stroke-PrincipalyText" />
      <nav class="text-PrincipalyText">
        <RouterLink to="/Billeterie" class="">Billeterie</RouterLink>
        <RouterLink to="/LeFestival" class="">LeFestival</RouterLink>
        <RouterLink to="/" class="">Nouveautées</RouterLink>
        <RouterLink to="/Programme" class="">Programme</RouterLink>
      </nav>
    </div>

  </header>


  <main class="bg-Background">
  <RouterView />
  </main>


  <footer>
    <section class="flex flex-col items-center text-center bg-HeadFoot text-PrincipalyText pt-4 pb-8">
      <div class="flex items-center">
        <img class="h-20 w-auto" src="/logofestival.svg" alt="">
        <h3 class="font-rubik-mono-one text-xl">BONYFEST</h3>
      </div>
        <p class="font-rubik-mono-one font-normal text-lg my-2">15 > 17 juillet</p>
      <div class="m-4">
        <Facebook class="fill-PrincipalyText inline-block mx-2"></Facebook>
        <Instagram class="fill-PrincipalyText inline-block mx-2"></Instagram>
        <Youtube class="fill-PrincipalyText inline-block mx-2"></Youtube>
      </div>
      
      <a href="/MentionsLegals" class="font-comfortaa font-normal text-lg my-2">Mentions légales</a>
        <a href="/Contact" class="font-comfortaa font-normal text-lg my-2">Contact</a>
        <p class="font-comfortaa font-normal text-lg my-2">Patenaires</p>
    </section>
  </footer>
</template>

<script>
import { MenuIcon } from "@heroicons/vue/outline"
import Facebook from "/src/components/icons/facebook.vue";
import Instagram from "/src/components/icons/instagram.vue";
import Youtube from "/src/components/icons/youtube.vue";




export default {
  components: { MenuIcon, Facebook, Instagram, Youtube },
};
</script>

<style>
</style>