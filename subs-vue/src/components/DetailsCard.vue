<template>
  <article class="continut">
    <div class="wrapper">
      <h1 v-if="tipul === 'serial'">
        {{ id }} - Sezonul <span>{{ sezonul }} ({{ anul }})</span>
      </h1>
      <h1 v-else>
        <span> {{ id }} ({{ anul }})</span>
      </h1>
      <div class="flag">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <section class="imagine">
      <div class="wrapper-imagine">
        <img :src="imagine" :alt="id" width="600" height="938" />
      </div>
    </section>

    <section class="detalii">
      <p><span> Genul:</span> {{ genul }}</p>
      <p><span>Traducator:</span> {{ traducator }}</p>
      <p>
        <span>Uploader:</span> <span class="uploader">{{ uploader }}</span>
      </p>
      <p><span> Nr. descarcari:</span> {{ Descarcari }}</p>
      <p v-if="tipul === 'serial'">
        <span>Comentariu subtitrare:</span>

        <span class="status"
          ><span class="episoade">NOU! Episoadele 1-{{ episod }}</span> .
          Sezonul 1, ep. 1-5, pentru <span class="version">WEB-DL</span>.
          Enjoy!</span
        >
      </p>
      <details>
        <summary>Rezumat</summary>
        {{ rezumat }}
      </details>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      Descarcari: this.$route.params.descarcari,
      imagine: this.$route.params.imagine,
      genul: this.$route.params.genul,
      traducator: this.$route.params.traducator,
      uploader: this.$route.params.uploader,
      sezonul: this.$route.params.sezonul,
      anul: this.$route.params.anul,
      episod: this.$route.params.episod,
      rezumat: this.$route.params.rezumat,
      tipul: this.$route.params.tipul,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.continut {
  width: 95%;
  margin-inline: auto;
  margin-block: 2em;
  display: flex;
  flex-direction: column;
  gap: 1.6em;
}

.wrapper-imagine {
  width: 100%;
}
.wrapper-imagine img {
  max-inline-size: 100%;
  block-size: auto;
  object-fit: cover;
  object-position: top center;
  border-radius: 11px;
  aspect-ratio:2/2;
}
.wrapper {
  display: flex;
  flex-direction: column;
}
.flag {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 28px;
  height: 28px;
  align-self: flex-end;
}
.flag .line {
  flex: 1;
}
.flag .line:nth-of-type(1) {
  background-color: #cf0921;
}

.flag .line:nth-of-type(2) {
  background-color: #fcd20f;
}
.flag .line:nth-of-type(3) {
  background-color: #002780;
}
.wrapper h1 {

  color:rgb(61, 25, 25);
  font-size: 1.5rem;
  font-weight: 800;
}

.detalii p {
  color: #241f1f;
  line-height: 1.46;
  font-size: 1.1rem;
}
.detalii p .status {
  display: block;
}
.detalii p span:not(.uploader, .status) {
  font-weight: 700;
}

.detalii p .uploader {
  color: #9c4409;
}
.detalii details {
  margin-block-start: 0.5em;
  padding: 0.2em;
  border: 1px solid #aaa;
}
.version {
  color: rgb(100, 172, 231);
}
.episoade {
  color: rgb(235, 16, 16);
}
</style>
