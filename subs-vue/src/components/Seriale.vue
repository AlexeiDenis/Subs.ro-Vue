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
          imagine: "../batman.jpg",
          genul: "Drama, SF.",
          traducator: "Anonimus",
          uploader: "Aurelian",
          informatii: " cinemagia",
          comentarii: 105,
          Descarcari: 10.102,
          tipul: "film",
          sezonul: 1,
          anul: 2022,
          imdb: 1877830,
          rezumat:
            "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        },
        {
          id: "Kill Bill",
          imagine: "../killbill.jpg",
          genul: "Actiune",
          traducator: "Anonimus1",
          uploader: "Aurelian2",
          informatii: " cinemagia",
          comentarii: 10,
          Descarcari: 5.102,
          tipul: "film",
          anul: 2021,
          imdb: "0266697",
          rezumat:
            "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
        },
        {
          id: "Star Wars",
          imagine: "../starwars.jpg",
          genul: "Science Fiction",
          traducator: "Anonimus2",
          uploader: "Aurelian1",
          informatii: " cinemagia",
          comentarii: 125,
          Descarcari: 15.102,
          tipul: "film",
          imdb: "0076759",
          anul: 2015,
          rezumat:
            "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
        },
        {
          id: "Spinal Tap",
          imagine: "../spinaltap.jpg",
          genul: "Comedie",
          traducator: "Aurelian",
          uploader: "Anonimus",
          informatii: " cinemagia",
          comentarii: 5,
          Descarcari: 200,
          tipul: "film",
          imdb: "0088258",
          anul: 2016,
          rezumat:
            "Spinal Tap, one of England's loudest bands, is chronicled by film director Marty DiBergi on what proves to be a fateful tour.",
        },
        {
          id: "Good Thief",
          imagine: "../goodthief.jpg",
          genul: "Actiune",
          traducator: "Anonimus3",
          uploader: "Aurelian4",
          informatii: " cinemagia",
          comentarii: 265,
          Descarcari: 300,
          tipul: "serial",
          sezonul: 3,
          anul: 2021,
          currentlyEp: 6,
          imdb: "2332535",
          rezumat:
            "A Detroit-set crime noir thriller about three small-time thieves who rip off a neighborhood pawnbroker of his valuable baseball card collection, only to find out they've unleashed something much more sinister.",
        },
        {
          id: "Guardians Galaxy",
          imagine: "../guardiangalaxy.jpg",
          genul: "Drama, Sci-fi",
          traducator: "RETAIL",
          uploader: "retailsubs",
          informatii: " cinemagia",
          comentarii: 0,
          Descarcari: 989,
          tipul: "serial",
          sezonul: 1,
          anul: 2022,
          currentlyEp: 9,
          imdb: "2015381",
          rezumat:
            "Personajele principale incearca sa ajunga la limitele exterioare ale cosmosului. Gardienii trebuie sa se lupte pentru a-si putea intretine familia nou formata. In acest timp ei descopera misterele care inconjoara originea lui Peter Quill. ",
        },
        {
          id: "The Connection",
          imagine: "../theconnection.jpg",
          genul: "Actiune, Sci-fi",
          traducator: "Anonimus",
          uploader: "Aurelian",
          informatii: " cinemagia",
          comentarii: 11,
          Descarcari: 982,
          tipul: "film",
          imdb: "9826820",
          anul: 2018,
          rezumat:
            "Two strangers struggle to overcome insurmountable odds when they are suddenly faced with unimaginable powers and an unbreakable connection.",
        },
        {
          id: "Sonic The HedgeHog",
          imagine: "../sonic.jpg",
          genul: "Familie, Aventura",
          traducator: "RETAIL",
          uploader: "retailsubs",
          informatii: " cinemagia",
          comentarii: 2,
          Descarcari: 278,
          tipul: "serial",
          sezonul: 5,
          anul: 2021,
          currentlyEp: 9,
          imdb: "3794354",
          rezumat:
            "Filmul Sonic the Hedgehog urmărește peripețiile lui Sonic în încercările lui de a trece cu bine de dificultățile vieții de pe Pământ, împreună cu noul său prieten, Tom Wachowski (James Marsden). Sonic și Tom își unesc forțele pentru a-l opri pe diabolicul dr. Robotnik (Jim Carrey), care vrea să îl captureze pe Sonic și să-i folosească superputerile pentru a domina lumea. Sonic the Hedgehog este o comedie de acțiune live-action bazată pe seria de jocuri video-blockbuster …",
        },
        {
          id: "Halo",
          imagine: "../xl_2934286_93503ec7.jpg",
          genul: "Actiune, Aventura, Sci-fi",
          traducator: "Anonimus",
          uploader: "Aurelian",
          informatii: " cinemagia",
          comentarii: 3,
          Descarcari: 667,
          tipul: "film",
          anul: 2021,
          imdb: "2934286",
          rezumat:
            "Aliens threaten human existence in an epic 26th-century showdown. TV series based on the video game 'Halo.'",
        },
        {
          id: "Spider Man",
          imagine: "../spiderman.jpg",
          genul: "Aventura, Actiune",
          traducator: "RETAIL",
          uploader: "retailsubs",
          informatii: " cinemagia",
          comentarii: 105,
          Descarcari: 1,
          tipul: "film",
          anul: 2019,
          imdb: "10872600",
          rezumat:
            "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super ...",
        },
        {
          id: "Interstellar",
          imagine: "../interstellar.jpg",
          genul: "Horror",
          traducator: "RETAIL",
          uploader: "retailsubs",
          informatii: " cinemagia",
          comentarii: 7,
          Descarcari: 999,
          tipul: "serial",
          sezonul: 6,
          anul: 2014,
          currentlyEp: 6,
          imdb: "0816692",
          rezumat:
            "Protagonişti sunt Anne Hathaway şi Matthew McConaughey, membri ai unei echipe de exploratori porniţi într-o cutezătoare aventură odată cu descoperirea unui tunel al timpului, ce ar putea fi răspunsul la întrebările omenirii legate de deplasarea în spaţiu şi cucerirea imenselor distanţe ale unei călătorii interstelare.",
        },
        {
          id: "Jurrasic World Dominion",
          imagine: "../jurrasicdominion.jpg",
          genul: "Actiune",
          traducator: "RETAIL",
          uploader: "retailsubs",
          informatii: " cinemagia",
          comentarii: 0,
          Descarcari: 145,
          tipul: "film",
          anul: 2015,
          imdb: "8041270",
          rezumat:
            "Four years after the destruction of Isla Nublar, dinosaurs now live--and hunt--alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history's most fearsome creatures in a new Era",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    seriale() {
      return this.obiecte.filter((book) => book.tipul === "serial");
    },
  },
};
</script>

<template>
  <h1>Toate serialele</h1>
  <div class="card" v-for="test in seriale">
    <p class="init">
      {{ test.id }}
      <span v-if="test.tipul === 'serial'">
        - sezonul: {{ test.sezonul }} ({{ test.anul }})</span
      >
      <span v-else>{{ test.anul }}</span>
    </p>
    <div class="global-wrapper">
      <div class="container">
        <div class="wrapper-image">
          <img :src="test.imagine" :alt="test.id" width="600" height="938" />
        </div>
        <div class="wrapper-details">
          <p><span>Genul:</span> {{ test.genul }}</p>
          <p><span>Uploader:</span> {{ test.uploader }}</p>
          <p><span>Informatii:</span>{{ test.informatii }}</p>
          <p><span>Comentarii:</span> {{ test.comentarii }}</p>
          <p><span>Descarcari:</span> {{ test.Descarcari }}</p>
        </div>
      </div>
      <a href="#">IMDB</a>
      <RouterLink
        :to="{
          name: 'DetailsCard',
          params: {
            id: test.id,
            descarcari: test.Descarcari,
            imagine: test.imagine,
            genul: test.genul,
            traducator: test.traducator,
            uploader: test.uploader,
            sezonul: test.sezonul,
            anul: test.anul,
            rezumat: test.rezumat,
            episod: test.currentlyEp,
            tipul: test.tipul,
          },
        }"
        >Detalii</RouterLink
      >

      <a href="#">Descarca</a>
    </div>
  </div>
</template>

<style scoped>
.init {
  color: #6b3434;
  font-weight: 800;
  font-size: 1.4rem;
}
.global-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1em;
}
.container {
  display: flex;
  flex-direction: row;
  gap: 1.3em;
}
p {
  color: #241f1f;
}
.wrapper-details {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
}
.wrapper-details p {
  font-size: 18px;
}
.wrapper-details p span {
  font-weight: 700;
}
.card {
  margin-block-end: 2em;
  width: 95%;
  min-height: 379px;
  margin-inline: auto;
  background-color: rgba(227, 227, 227, 0.35);
  border: 1px solid rgba(0, 0, 0, 0.35);
  border-radius: 15px;
  padding: 0.6em;
}
.wrapper-image {
  width: 50%;
}
.wrapper-image img {
  max-inline-size: 100%;
  block-size: auto;
  object-fit: cover;
  aspect-ratio: 5/9;
  filter: drop-shadow(9px 9px 11px rgb(65, 63, 63));
}
h1 {
  margin-block: 2em;
  margin-inline: auto;
  width: fit-content;
  color: rgb(61, 25, 25);
  font-size: 1.5rem;
  font-weight: 800;
}
a {
  color: black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  height: 31px;
  padding-inline: 0.6em;
}
a:nth-of-type(1) {
  background-color: #48a1f3;
}
a:nth-of-type(2) {
  background-color: #dfa041;
}
a:nth-of-type(3) {
  background-color: #4dd437;
}
</style>
