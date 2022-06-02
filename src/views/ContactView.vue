<template>
  <main class="p-8">
    <h2 class="text-2xl">Contact</h2>

      <div class="pt-0 pb-3">
          <div class="h-96 w-auto"></div>
          <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
              <div class=" sm:p-12 -mt-72">
                  <form action="" method="post">
                      <div class="md:flex items-center">
                          <div class="w-full md:w-1/2 flex flex-col">
                              <label class="font-semibold leading-none text-PrincipalyText">Email</label>
                              <input type="text" class="leading-none text-PrincipalyText p-3 focus:outline-none focus:border-Dark_Bouton mt-4 border-0 bg-Dark_Bouton rounded" />
                          </div>
                      </div>
                      <div class="md:flex items-center mt-8">
                          <div class="w-full flex flex-col">
                              <label class="font-semibold leading-none text-gray-300">Object</label>
                              <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-Dark_Bouton mt-4 border-0 bg-Dark_Bouton rounded"/>
                          </div>
                          
                      </div>
                      <div>
                          <div class="w-full flex flex-col mt-8">
                              <label class="font-semibold leading-none text-PrincipalyText">Message</label>
                              <textarea type="text" class="h-40 text-base leading-none text-PrincipalyText p-3 focus:outline-none focus:border-Dark_Bouton mt-4 bg-Dark_Bouton border-0 rounded"></textarea>
                          </div>
                      </div>

                      <div class="flex justify-center pt-4">
                        <div>
                          <div class="form-check">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label inline-block text-PrincipalyText text-xs font-comfortaa" for="flexCheckDefault">
                              J’ai lu et j’accepte votre politique de confidentialité
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="flex items-center justify-end w-full">
                          <Bouton class="mt-4 font-semibold leading-none text-PrincipalyText py-4 px-10 hover:bg-Dark_Bouton focus:ring-2 focus:ring-offset-2 focus:ring-Dark_Bouton focus:outline-none">
                              Envoyer
                          </Bouton>
                      </div>
                  </form>
              </div>
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

