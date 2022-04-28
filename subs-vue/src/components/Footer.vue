<script setup>
import { RouterLink, RouterView } from 'vue-router' 
</script>
<template>
    <footer>
            <section>
                <h3>Link-uri interne</h3>
                <a href="#">Subtitrari pentru filme</a>
                <a href="#">Subtitrari pentru seriale</a>
                <RouterLink to="/subtitrari">Toate subtitrarile</RouterLink>
                <a href="#">Subtitrari in alte limbi</a>
                <a href="#">Prima pagina</a>
                <a href="#">Forum</a>
                <a href="#">Trailere</a>
                <a href="#">API</a>
                <a href="#">Acord utilizator</a>
                <a href="#">Prelucrarea datelor</a>
                <a href="#">Regulament</a>
            </section>
            <section>
                <h3>Informatii generale</h3>
                <p>Parteneri: <a href="#">Cinemagia</a></p>
                <p> &copy; <a href="#">Subs.ro</a> <time datetime="2006">2006</time> - <time datetime="2022">2022</time>
                    Toate drepturile rezervate </p>
            </section>
        </footer>
</template>

<style scoped>
footer {
  background-color: #e5e2cc;
  padding-block: 1em;
  padding-inline: 0.5em;
  width: 95%;
  margin-inline: auto;
}

footer section {
  display: flex;
  flex-direction: column;
  gap: 0.4em;
}
footer section:nth-of-type(1) {
  margin-bottom: 2em;
}

footer section h3 {
  background-color: #3d5dc5;
  color: whitesmoke;
  padding-inline: 0.2em;
  padding-block: 0.1em;
  font-weight: 800;
}
footer section:nth-of-type(1) a {
  color: #443228;
  border-bottom: 2px solid rgb(96, 96, 199);
  padding: 0.4em;
  width: max-content;
  font-weight: 700;
}
footer section p,
footer section h3,
footer section a {
  margin: 0;
}
footer section p {
  color: #41200e;
}
footer section p:nth-of-type(2) {
  font-size: 0.6rem;
}
</style>