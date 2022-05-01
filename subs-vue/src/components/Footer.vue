<script setup>
import { RouterLink, RouterView } from 'vue-router' 
</script>
<template>
    <footer>
            <section>
                <h3>Link-uri interne</h3>
                <RouterLink to="/filme">Subtitrari pentru filme</RouterLink>
                <RouterLink to="/seriale">Subtitrari pentru seriale</RouterLink>
                <RouterLink to="/subtitrari">Toate subtitrarile</RouterLink>
                <a href="#" style="color:hsla(21, 26%, 21%,0.5);">Subtitrari in alte limbi</a>
                <RouterLink to="/">Prima pagina</RouterLink>
                <a href="#" style="color:hsla(21, 26%, 21%,0.5);">Forum</a>
                <a href="#" style="color:hsla(21, 26%, 21%,0.5);">Trailere</a>
                <RouterLink to="/contact">Contact</RouterLink>
                <a href="#" style="color:hsla(21, 26%, 21%,0.5);">Acord utilizator</a>
                <a href="#" style="color:hsla(21, 26%, 21%,0.5);">Prelucrarea datelor</a>
               <RouterLink to="/regulament" >Regulament</RouterLink>
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