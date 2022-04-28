<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<script>
export default {
  data() {
    return {
      obiecte: [
        {
          id: "Batman",
          imagine: "src/assets/xl_1877830_764432ad.webp",
          genul: "Drama, SF.",
          traducator: "Anonimus",
          uploader: "Aurelian",
          informatii: "cinemagia",
          comentarii: 105,
          Descarcari: 10.102,
          tipul: "film",
          sezonul: 1,
          anul: 2022,
          rezumat:
            "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        },
        {
          id: "Kill Bill",
          imagine: "src/assets/xl_266697_d1d415b0.webp",
          genul: "Actiune",
          traducator: "Anonimus1",
          uploader: "Aurelian2",
          informatii: "cinemagia",
          comentarii: 10,
          Descarcari: 5.102,
          tipul: "film",
          anul: 2021,
          rezumat:"After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
        },
        {
          id: "Star Wars",
          imagine: "src/assets/test.webp",
          genul: "Science Fiction",
          traducator: "Anonimus2",
          uploader: "Aurelian1",
          informatii: "cinemagia",
          comentarii: 125,
          Descarcari: 15.102,
          tipul: "film",
          anul: 2015,
          rezumat:"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
        },
        {
          id: "Spinal Tap",
          imagine: "src/assets/xl_96697_8fffca15.webp",
          genul: "Comedie",
          traducator: "Aurelian",
          uploader: "Anonimus",
          informatii: "cinemagia",
          comentarii: 5,
          Descarcari: 200,
          tipul: "film",
          anul: 2016,
          rezumat:"Spinal Tap, one of England's loudest bands, is chronicled by film director Marty DiBergi on what proves to be a fateful tour."
        },
        {
          id: "God Thief",
          imagine: "src/assets/xl_2332535_35f186a0.webp",
          genul: "Actiune",
          traducator: "Anonimus3",
          uploader: "Aurelian4",
          informatii: "cinemagia",
          comentarii: 265,
          Descarcari: 300,
          tipul: "serial",
          sezonul: 3,
          anul: 2021,
          currentlyEp: 6,
          rezumat:"A Detroit-set crime noir thriller about three small-time thieves who rip off a neighborhood pawnbroker of his valuable baseball card collection, only to find out they've unleashed something much more sinister.",
        },
        {
          id: "Guardians Galaxy",
          imagine: "src/assets/xl_2015381_2a13ec7d.webp",
          genul: "Drama, Sci-fi",
          traducator: "RETAIL",
          uploader: "retailsubs",
          informatii: "cinemagia",
          comentarii: 0,
          Descarcari: 989,
          tipul: "serial",
          sezonul: 1,
          anul: 2022,
          currentlyEp: 9,
          rezumat:"Personajele principale incearca sa ajunga la limitele exterioare ale cosmosului. Gardienii trebuie sa se lupte pentru a-si putea intretine familia nou formata. In acest timp ei descopera misterele care inconjoara originea lui Peter Quill. ",
        },
        {
          id: "The Connection",
          imagine: "src/assets/xl_9826820_f94ff667.webp",
          genul: "Actiune, Sci-fi",
          traducator: "Anonimus",
          uploader: "Aurelian",
          informatii: "cinemagia",
          comentarii: 11,
          Descarcari: 982,
          tipul: "film",
          anul: 2018,
        },
        {
          id: "Sonic The HedgeHog",
          imagine: "src/assets/xl_12412888_a51d9d97.webp",
          genul: "Familie, Aventura",
          traducator: "RETAIL",
          uploader: "retailsubs",
          informatii: "cinemagia",
          comentarii: 2,
          Descarcari: 278,
          tipul: "serial",
          sezonul: 5,
          anul: 2021,
          currentlyEp: 9,
          rezumat:
            "Filmul Sonic the Hedgehog urmărește peripețiile lui Sonic în încercările lui de a trece cu bine de dificultățile vieții de pe Pământ, împreună cu noul său prieten, Tom Wachowski (James Marsden). Sonic și Tom își unesc forțele pentru a-l opri pe diabolicul dr. Robotnik (Jim Carrey), care vrea să îl captureze pe Sonic și să-i folosească superputerile pentru a domina lumea. Sonic the Hedgehog este o comedie de acțiune live-action bazată pe seria de jocuri video-blockbuster …",
        },
        {
          id: "Halo",
          imagine: "src/xl_2934286_93503ec7.jpg",
          genul: "Actiune, Aventura, Sci-fi",
          traducator: "Anonimus",
          uploader: "Aurelian",
          informatii: "cinemagia",
          comentarii: 3,
          Descarcari: 667,
          tipul: "film",
          anul: 2021,
          rezumat:"Aliens threaten human existence in an epic 26th-century showdown. TV series based on the video game 'Halo.'"
        },
        {
          id: "Spider Man",
          imagine: "src/assets/xl_10872600_c809b67f.jpg",
          genul: "Aventura, Actiune",
          traducator: "RETAIL",
          uploader: "retailsubs",
          informatii: "cinemagia",
          comentarii: 105,
          Descarcari: 1,
          tipul: "film",
          anul: 2019,
          rezumat:
            "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super ...",
        },
        {
          id: "Interstellar",
          imagine: "src/assets/xl_816692_a074ce1f.webp",
          genul: "Horror",
          traducator: "RETAIL",
          uploader: "retailsubs",
          informatii: "cinemagia",
          comentarii: 7,
          Descarcari: 999,
          tipul: "serial",
          sezonul: 6,
          anul: 2014,
         currentlyEp: 6,
         rezumat:"Protagonişti sunt Anne Hathaway şi Matthew McConaughey, membri ai unei echipe de exploratori porniţi într-o cutezătoare aventură odată cu descoperirea unui tunel al timpului, ce ar putea fi răspunsul la întrebările omenirii legate de deplasarea în spaţiu şi cucerirea imenselor distanţe ale unei călătorii interstelare.",
        },
        {
          id: "Jurrasic World Dominion",
          imagine: "src/assets/xl_8041270_f6f5cdc2.webp",
          genul: "Actiune",
          traducator: "RETAIL",
          uploader: "retailsubs",
          informatii: "cinemagia",
          comentarii: 0,
          Descarcari: 145,
          tipul: "film",
          anul: 2015,
          rezumat:"Four years after the destruction of Isla Nublar, dinosaurs now live--and hunt--alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history's most fearsome creatures in a new Era",
        },
      ],
    };
  },
  computed: {
    last3() {
      return this.obiecte.slice(-3);
    },
    onlymovies() {
      return this.obiecte.filter((book) => book.tipul === "film");
    },
    onlyseries() {
      return this.obiecte.filter((book) => book.tipul === "serial");
    },
  },
};
</script>

<template>
  <RouterView />
  <h1>Subtitrari filme si seriale in limba romana</h1>
  <details lang="ro">
    <summary lang="ro">Aderare în echipa noastră</summary>
    Suntem în căutarea membrilor potriviți pentru a completa componența echipei
    noastre. Dacă știi să sincronizezi subtitrări sau poți traduce dintr-o limbă
    de circulație internațională în limba română la un standard ridicat, nu
    ezita să ne contactezi. (puteți folosi forumul, mesajele private sau
    adresele de e-mail din pagina de contact)
  </details>
  <section>
    <h2 class="title">Cele mai recente</h2>
    <div class="container-carousel">
      <div class="carousel">
        <RouterLink
          v-for="ob in last3"
          :to="{
            name: 'DetailsCard',
            params: {
              id: ob.id,
              descarcari: ob.Descarcari,
              imagine: ob.imagine,
              genul: ob.genul,
              traducator: ob.traducator,
              uploader: ob.uploader,
              sezonul: ob.sezonul,
              anul: ob.anul,
              rezumat: ob.rezumat,
              episod: ob.currentlyEp,
              tipul:ob.tipul,
            },
          }"
        >
          <img :src="ob.imagine" :alt="ob.id" width="600" height="938" />
        </RouterLink>
      </div>
    </div>
  </section>
  <section>
    <h2 class="title"><RouterLink to="/about">Seriale</RouterLink></h2>
    <div class="container-carousel">
      <div class="carousel">
        <RouterLink v-for="ob in onlyseries"  :to="{
            name: 'DetailsCard',
            params: {
              id: ob.id,
              descarcari: ob.Descarcari,
              imagine: ob.imagine,
              genul: ob.genul,
              traducator: ob.traducator,
              uploader: ob.uploader,
              sezonul: ob.sezonul,
              anul: ob.anul,
              rezumat: ob.rezumat,
              episod: ob.currentlyEp,
              tipul:ob.tipul,
            },
          }">
          <img :src="ob.imagine" :alt="ob.id" width="600" height="938" />
        </RouterLink>
      </div>
    </div>
  </section>

  <section>
    <h2 class="title"><RouterLink to="/about">Filme</RouterLink></h2>
    <div class="container-carousel">
      <div class="carousel">
        <RouterLink v-for="ob in onlymovies"  :to="{
            name: 'DetailsCard',
            params: {
              id: ob.id,
              descarcari: ob.Descarcari,
              imagine: ob.imagine,
              genul: ob.genul,
              traducator: ob.traducator,
              uploader: ob.uploader,
              sezonul: ob.sezonul,
              anul: ob.anul,
              rezumat: ob.rezumat,
              episod: ob.currentlyEp,
              tipul:ob.tipul,
            },
          }">
          <img :src="ob.imagine" :alt="ob.id" width="600" height="938" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-weight: 800;
  font-size: 190%;
  margin-block: 1.5em;
  color: rgb(61, 25, 25);
  text-align: center;
  width: fit-content;
  width: -moz-fit-content;
}
.title {
  color: #943225;
  position: relative;
  width: fit-content;
  font-size: 175%;
  overflow: hidden;
  transition: all 0.235s ease-out;
}

main > section {
  margin-bottom: 2em;
  width: 95%;
  margin-inline: auto;
}

.container-carousel .carousel a img {
  object-fit: cover;
  border-radius: 20px;
  width: 200px;
  height: 300px;
}
.container-carousel {
  position: relative;
  width: 100%;
  scroll-behavior: smooth;
}
.container-carousel .carousel {
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;
  padding-block: 0.7em;
  gap: 2em;
}

.active {
  transform: scale(1.02);
  filter: drop-shadow(5px 5px 8px gray);
}

details {
  color: #110b11;
  width: 95%;
  margin-inline: auto;
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
  line-height: 1.5;
  hyphens: auto;
  -webkit-hyphens: auto;
  margin-block: 2em;
}
summary {
  color: rgb(184, 84, 84);
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}
</style>
