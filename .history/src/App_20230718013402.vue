<template>
    <div class="w-full bg-white dark:text-white dark:bg-gray-900 dark:text-white">
      <article class="lg:prose-xl justify-center indent-4 mx-10 center items-center">
        <h3 class="drop-shadow-md">Inquérito do Fim do Mundo, o apagar das luzes do Direito Brasileiro. </h3>
        <p class="drop-shadow-md text-justify m-[2px]">
          — O crime sem castigo leva ao castigo sem crime. 
          Uma das bem-aventuranças do Sermão da Montanha diz 

respeito à justiça:“Bem-aventurados aqueles que têm fome e sede de justiça, 

porque serão saciados.” (Mt 5, 6). Isso significa que a justiça é um anseio que habita 

o coração do homem. Obrigar o homem a viver sem justiça é como tentar fazê-lo 

viver sem coração.
        </p>
        <p class="drop-shadow-md text-justify m-[2px]">
          Mas o que acontece quando, por alguma razão, o anseio universal pela premiação 

do bem e a punição do mal não é realizado pela justiça humana? O que acontece 

quando os bandidos, os ladrões, os corruptos, os estupradores, os pedófilos e os 

assassinos não recebem a justa sanção? Ah, meus amigos, aí acontece algo 

terrível. 
        </p>  
        <p class="drop-shadow-md text-justify m-[2px]">
          Quando a justiça não funciona, a sede e a fome mencionadas por Jesus continuam 

existindo, e precisam ser saciadas por algum método. Eis que esse método é a 

transformação dos inocentes em culpados. Uma sociedade que não pune seus 

criminosos fatalmente acabará punindo seus membros que não cometeram crime 

algum. Se a Justiça não cumpre efetivamente o seu papel, ela será substituída pelo 

Crime, no tribunal em que a sede de justiça se mata com veneno. 
        </p>
        <p class="drop-shadow-md  m-[2px]">
Paulo Antônio Briguet
        </p>      
      </article>
    </div>
    <div class="opacity-100 pb-5 dark:bg-gray-900 dark:text-white flex justify-center items-center h-full">
      <button @click="toggleOffcanvas" class="shadow-md px-5 py-3 bg-gray-200 dark:bg-gray-500 hover:bg-gray-300 rounded"> SUMÁRIO </button> 
      <button @click="toggleOffcreditos" class="shadow-md px-5 py-3 bg-gray-200 dark:bg-gray-500 hover:bg-gray-300 rounded"> CRÉDITOS </button> 
      <button @click="inquerito_do_fim_do_mundo" class="shadow-md px-5 py-3 text-slate-200 bg-violet-700 dark:bg-violet-700 hover:bg-blue-700 rounded"> INQUÉRITO DO FIM DO MUNDO </button> 
      <button @click="toggleTheme" class="shadow-md px-5 py-3 bg-gray-200 dark:bg-gray-500 hover:bg-gray-300 rounded"> 
        <svg v-if="isDark" viewBox="0 0 24 24" fill="none" class="w-6 h-6">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" class="fill-gray-400/20"></path>
              <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" class="fill-white"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" class="fill-white"></path>
          </svg> 
          <svg v-else viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
              <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-gray-400/20 stroke-gray-600"></path>
              <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-gray-600"></path>
          </svg> 
      </button>
      <br />
      <Offcanvas v-model="showOffcreditos"> 
          <template #header>
              <h3>CRÉDITOS</h3>
          </template>
          <!-- <section v-for="i in 20" :key="i"> -->
          <section>
              <p class="my-5 text-justify"> 1ª Edição Agosto de 2020 EDITORA EDA Educação Direito e Alta Cultura <br /> <br />Inquérito do Fim do Mundo, o apagar das luzes do Direito Brasileiro <br /> <br />Copyright © by Editora E.D.A. <br />Organizadora: Cláudia R. de Morais Piovezan <br />Editor: Edson Morais Piovezan <br />Projeto e organização: Cláudia R. de Morais Piovezan <br />Diagramação & projeto gráfico: Lucas de Oliveira Fófano <br />Revisão de provas: Lucas de Oliveira Fófano Capa: Rodrigo Nankin </p>
              <hr class="my-3" />
              <h3>Ficha Catalográfica </h3>
              <p class="my-5 text-justify">Inquérito do Fim do Mundo, o apagar das luzes do Direito Brasileiro <br />Cláudia R. de Morais Piovezan organizadora.</p>
              <p class="my-5 text-justify">1ª ed. Londrina, PR. <br />Editora E.D.A. Educação, Direito e Alta Cultura, 2020. 220p 16x23cm <br />ISBN: 978-65-990713-5-5 </p>
              <ul class="list-disc">
                  <li class="ml-10"> 1. Direito Constitucional. </li>
                  <li class="ml-10"> 2. Direitos e liberdades fundamentais. </li>
                  <li class="ml-10"> 3. Direito Processual Penal. </li>
                  <li class="ml-10"> 4. Controle social CDD 342342.7 343.1 </li>
              </ul>
              <p class="my-5 text-justify">CDU 342 / 342.085 / 345.05 / 303.33 </p>
              <hr class="my-3" />
              <h3>Distribuição</h3>
              <p class="my-5 text-justify"> CEDET Centro de Desenvolvimento Profissional e Tecnológico <br />Rua Armando Strazzacappa, 490, Fazenda Santa Cândida, Campinas/SP <br />Editora Educação Direito e Alta Cultura. <br />CNPJ 34.314.174/0001-40 <br />Site educacaodireitoaltacultura.com.br <br /> </p>
              <p class="my-5 text-justify"> O conteúdo desta obra é de inteira responsabilidade de seus autores. </p>
          </section>
      </Offcanvas>
      <Offcanvas v-model="showOffcanvas"> 
          <template #header>
              <h3>SUMÁRIO </h3>
          </template>
          <!-- <section v-for="i in 20" :key="i"> -->
          <section>
              <div class="my-5 text-justify">
              <h3>CAPÍTULO I </h3> O Ministério da Verdade 2.0: o combate às (supostas) fake news é mais PERIGOSO DO QUE A MAIS PERIGOSA DAS FAKE NEWS <ul class="list-disc">
                  <li class="ml-10"> A GÊNESE DAS FAKE NEWS, UMA HISTÓRIA TAMBÉM FAKE </li>
                  <li class="ml-10">2 O NOVO CATACLISMA MUNDIAL: NÃO O GENOCÍDIO E A VIOLÊNCIA, MAS OS BOATOS </li>
                  <li class="ml-10">3 quis custodiet ipsos custodes? </li>
              </ul>
              </div>
              <hr class="my-3" />
              <p class="my-5 text-justify">
              <h3>CAPÍTULO II </h3> O INQUÉRITO DO FIM DO MUNDO, A RUÍNA DAS LIBERDADES E A LUTA PELO DIREITO <ul class="list-disc">
                  <li class="ml-10"> Introdução </li>
                  <li class="ml-10">2 O Supremo Tribunal Federal e seu inquérito n° 4.781: uma ESSÊNCIA DITATORIAL </li>
                  <li class="ml-10">3 As CONTRADIÇÕES DO STF: O CASUÍSMO DO INQUÉRITO DO FIM DO MUNDO EM FRANCA DIVERGÊNCIA A POSICIONAMENTOS ANTERIORES DA mesma Corte </li>
                  <li class="ml-10">4 A PROIBIÇÃO DE ACESSO AOS AUTOS DA INVESTIGAÇÃO AOS ADVOGADOS DOS INVESTIGADOS — A PERSECUÇÃO FEITA NAS SOMBRAS E A CRIAÇÃO ARTIFICIAL DE NARRATIVAS POR TERCEIROS </li>
                  <li class="ml-10">5 Considerações finais </li>
              </ul>
              </p>
              <hr class="my-3" />
              <p class="my-5 text-justify">
              <h3>CAPÍTULO III </h3> O Inquérito do fim do Direito: explicando para o leigo o inquérito do FIM DO MUNDO <ul class="list-disc">
                  <li class="ml-10"> O QUE É, AFINAL, UM INQUÉRITO? </li>
                  <li class="ml-10">2 Sistema acusatório? Nunca ouvi falar </li>
                  <li class="ml-10">3 Mas... e o artigo 43 do Regimento Interno do STF? </li>
                  <li class="ml-10">4 A VÍTIMA DO CRIME NÃO PODE JULGAR O ACUSADO </li>
                  <li class="ml-10">5 Conclusão </li>
              </ul>
              </p>
              <hr class="my-3" />
              <p class="my-5 text-justify">
              <h3>CAPÍTULO IV </h3> O STF E SEUS INQUÉRITOS ILEGAIS <ul class="list-disc">
                  <li class="ml-10"> Introdução </li>
                  <li class="ml-10">2 Das redes sociais </li>
                  <li class="ml-10">3 Dos inquéritos ilegais </li>
                  <li class="ml-10">4 Conclusão </li>
              </ul>
              </p>
              <hr class="my-3" />
              <p class="my-5 text-justify">
              <h3>CAPÍTULO V </h3> O Inquérito Do Apocalipse: da pós verdade à barbárie <ul class="list-disc">
                  <li class="ml-10"> Introdução </li>
                  <li class="ml-10">2 Um Processo Líquido e Orwelliano </li>
                  <li class="ml-10">3 Ativismo judicial como precursor do inquérito 4.781 </li>
                  <li class="ml-10">4 O Controle de Constitucionalidade e o ativismo judicial </li>
                  <li class="ml-10">5 Um inquérito que não tem fim </li>
                  <li class="ml-10">6 Buscando a real natureza do Inquérito e das suas medidas </li>
                  <li class="ml-10">7 Análise da natureza das medidas cautelares </li>
                  <li class="ml-10">8 O INQUÉRITO COMO VINGANÇA — O RETORNO À BARBÁRIE </li>
                  <li class="ml-10">9 Conclusão </li>
              </ul>
              </p>
              <hr class="my-3" />
              <p class="my-5 text-justify">
              <h3>CAPÍTULO VI </h3> A TENTATIVA DE ARQUIVAMENTO DO INQUÉRITO DAS FAKE NEWS PELA PROCURADORIA-GERAL DA REPÚBLICA <ul class="list-disc">
                  <li class="ml-10"> Introdução </li>
                  <li class="ml-10">2 O QUE É O ARQUIVAMENTO DO INQUÉRITO? </li>
                  <li class="ml-10">3 A PROMOÇÃO DE ARQUIVAMENTO NOS INQUÉRITOS DE ATRIBUIÇÃO ORIGINÁRIA DOS TRIBUNAIS </li>
                  <li class="ml-10">4 OS ARQUIVAMENTOS PROMOVIDOS NO INQUÉRITO N° 4.781 </li>
                  <li class="ml-10">5 Poderia o STF indeferir o arquivamento promovido pela Procuradoria-Geral da República? </li>
              </ul>
              </p>
              <hr class="my-3" />
              <p class="my-5 text-justify">
              <h3>CAPÍTULO VII </h3> INQUÉRITO DAS FAKE NEWS: O ÁPICE DA DESLEGITIMAÇÃO DO PODER JUDICIAL </p>
              <hr class="my-3" />
              <p class="my-5 text-justify">
              <h3>CAPÍTULO VIII </h3> O INQUÉRITO DAS FAKE NEWS E A FACE OCULTA DO ATIV1SMO JUDICIAL <ul class="list-disc">
                  <li class="ml-10"> 1 Introdução </li>
                  <li class="ml-10">2 Marxismo Cultural </li>
                  <li class="ml-10">3 A Escola de Frankfurt </li>
                  <li class="ml-10">4 Teoria Crítica </li>
                  <li class="ml-10">5 Teoria Crítica do Direito </li>
                  <li class="ml-10">6 Constitucionalismo Pós-Moderno </li>
                  <li class="ml-10">7 Antonio Gramsci </li>
                  <li class="ml-10">8 Gramsci no Brasil </li>
                  <li class="ml-10">9 Conclusão </li>
              </ul>
              </p>
          </section>
      </Offcanvas> 
      
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
              showOffcreditos: false,
              isDark: false,
          };
      },
      methods: {
          toggleOffcanvas() {
              this.showOffcanvas = !this.showOffcanvas;
          },
          toggleOffcreditos() {
              this.showOffcreditos = !this.showOffcreditos;
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
          inquerito_do_fim_do_mundo() {
              //          let url = '/static/pdf/web/demo.pdf'
              let url = "/pdf/web/inquerito_do_fim_do_mundo.pdf";
              window.open("/pdf/web/viewer.html?file=" + url);
          },
      },
  };
</script>
<style>
/*
  html {
      background: hsla(143, 100%, 29%, 0.73);
      background: linear-gradient(0deg, hsla(52, 100%, 50%, 1) 0%, hsla(143, 100%, 29%, 1) 50%, hsla(220, 100%, 23%, 1) 100%);
      background: -moz-linear-gradient(0deg, hsla(52, 100%, 50%, 1) 0%, hsla(143, 100%, 29%, 1) 50%, hsla(220, 100%, 23%, 1) 100%);
      background: -webkit-linear-gradient(0deg, hsla(52, 100%, 50%, 1) 0%, hsla(143, 100%, 29%, 1) 50%, hsla(220, 100%, 23%, 1) 100%);
      filter: progid: DXImageTransform.Microsoft.gradient(startColorstr="#FEDD00", endColorstr="#009639", GradientType=1);
  }
*/
  button {
      margin: 3px;
  }
</style>