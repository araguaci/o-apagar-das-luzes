<template>
  <div class="bg-blue-400 opacity-75 dark:bg-gray-900 dark:text-white h-screen flex justify-center items-center">
      <article class="prose lg:prose-xl">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country.
        </p>
        <!-- ... -->
      </article>
      <Offcanvas v-model="showOffcanvas"> 
          <template #header>
              <h3>PRÓLOGO</h3>
          </template> <!-- <section v-for="i in 20" :key="i"> -->
          <section>
              <p class="my-5 text-justify"> Quando escrevi o livro Chapeuzinho Quase Vermelho, meu intuito era de forma irreverente despertar pessoas com preguiça de leitura a questionar, entender e montar o verdadeiro cenário global, com seus entendimentos descontaminados e uma vez livres, cada pessoa inicie sua jornada a partir da análise segura de tudo que está ocorrendo no mundo a nossa volta. </p>
              <p class="my-5 text-justify"> Pessoas que leram aquele livro, perguntaram-me porque fui tão sintético ao resumir tanto as informações expostas nele? - (resposta): era para não produzir um material muito denso em um livro muito grosso, pois essa geração é infelizmente a geração de analfabetos funcionais, não conseguem mais ler, apenas escanear com os olhos, não tem mais o processo de intuir ao interpretar. </p>
              <p class="my-5 text-justify"> Como vi que naquele livro as pessoas que leram tiveram despertamento, decidi então escrever essa série de 7 livros - só que de forma mais profunda, objetiva, sem tornar o livro cansativo e abordando tudo sem fazer muita volta de forma que no final da ultima página do ultimo livro você tenha um incômodo na alma com um desejo de pesquisar mais e assim obter uma vida livre de tantas prisões. </p>
              <p class="my-5 text-justify"> Porque essa série está diante de seus olhos? É minha missão, é meu dever dividir aquilo que me foi dado e é aquilo que sinto que Deus quer de mim. Minha intenção aqui é construir uma visão descontaminada de ISMOS e te desafiar a buscar conhecimento que te libertarão - nesses dias decisivos! </p>
              <p class="m-5 text-justify"> O que você ganhará com essa leitura:
              <ul class="list-disc">
                  <li class="ml-10">Despertará seus sentidos;</li>
                  <li class="ml-10">Descontaminará sua vida de venenos;</li>
                  <li class="ml-10">Dará o caminho das pedras para você seguir sua trilha.</li>
              </ul>
              </p>
              <p class="my-5 text-justify"> A minha proposta não é que com essas informações você reinvente a roda, mas que através dessa visão lúcida e coerente, você consiga fazer a análise mais correta dos eventos que hoje estão diante de nossos olhos - e que infelizmente 99% dos pagadores do "boleto eterno" não percebem. </p>
              <p class="my-5 text-justify"> Depois de ler livros que abordam esses temas, e perceber o quanto de lixo e contaminação neles contidos, saber que a maioria deles oferecem soluções fáceis que servem como placebo existencial a seus leitores que facilmente compram sem perceber os venenosos gatilhos que criam nesses crédulos em forma de existência terrena pífia e com fim em si mesma. </p>
              <p class="my-5 text-justify"> Esses cavalos de Tróia são proferidos de forma sagaz por esses autores e "descobridores" da pedra filosofal (na maioria deles são pagãos e ateus) e oferecem conclusões e soluções totalmente antagônicas a Verdade que será exposta nesses livros... Infelizmente, a maioria compra esse giló só porque ele vem encapado de chocolate. </p>
              <hr class="my-3" />
          </section>
      </Offcanvas> <button @click="toggleOffcanvas" class="shadow-md px-5 py-3 bg-gray-200 dark:bg-gray-500 hover:bg-gray-300 rounded"> Prólogo </button> <button @click="a_origem_livro1" class="shadow-md px-5 py-3 bg-gray-200 dark:bg-gray-500 hover:bg-gray-300 rounded"> O Origem - Livro 1 </button> <button @click="toggleTheme" class="shadow-md px-5 py-3 bg-gray-200 dark:bg-gray-500 hover:bg-gray-300 rounded"> <svg v-if="isDark" viewBox="0 0 24 24" fill="none" class="w-6 h-6">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" class="fill-gray-400/20"></path>
              <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" class="fill-white"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" class="fill-white"></path>
          </svg> <svg v-else viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
              <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-gray-400/20 stroke-gray-600"></path>
              <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-gray-600"></path>
          </svg> </button>
  </div>
</template>
<script>
  import Offcanvas from "vue-final-offcanvas";
  export default {
      components: {
          Offcanvas,
      },
      data() {
          return {
              showOffcanvas: false,
              isDark: false,
          };
      },
      methods: {
          toggleOffcanvas() {
              this.showOffcanvas = !this.showOffcanvas;
          },
          toggleTheme() {
              this.isDark = !this.isDark;
              if (this.isDark) {
                  document.documentElement.classList.add("dark");
              } else {
                  document.documentElement.classList.remove("dark");
              }
          },
          a_origem_livro1fail() {
              let url =
                  "https://github.com/araguaci/o-jogo-invisivel/raw/main/public/a_origem_livro1.pdf";
              window.open("/pdf/web/viewer.html?file=" + url);
          },
          a_origem_livro1() {
              //          let url = '/static/pdf/web/demo.pdf'
              let url = "a_origem_livro1.pdf";
              window.open("/pdf/web/viewer.html?file=" + url);
          },
      },
  };
</script>
<style>
  button {
      margin: 2px;
  }
</style>