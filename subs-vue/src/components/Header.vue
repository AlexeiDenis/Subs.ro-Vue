<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<script>
export default {
  data() {
    return {
      semafor: false,
    };
  },
  methods: {
    openToggle() {
      if (!this.semafor) {
        this.$refs.t.style.display = "flex";
        this.semafor = true;
      } else {
        this.$refs.t.style.display = "none";
        this.semafor = false;
      }
    },
    mounted() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<template>
  <header>
    <nav>
      <div class="wrapper-nav">
        <div class="logo">
          <router-link to="/">
            <img
              src="@/assets/subs.png"
              alt="page logo"
              width="100"
              height="31"
          /></router-link>
        </div>
        <div class="search">
          <input type="text" placeholder="Cautare..." />
        </div>
        <div ref="t" class="primary-navigation">
         
          <div class="links">
            <div class="col1">
              <RouterLink to="/" @click="openToggle()">Acasa</RouterLink>
              <RouterLink to="/subtitrari" @click="openToggle()"
                >Subtitrari</RouterLink
              >
              <RouterLink to="/" @click="openToggle()">Trailere</RouterLink>
              <RouterLink to="/" @click="openToggle()">Upload</RouterLink>
            </div>
            <div class="col2">
              <RouterLink to="/" @click="openToggle()">Forum</RouterLink>
              <RouterLink to="/" @click="openToggle()">Cautare</RouterLink>
              <RouterLink to="/" @click="openToggle()">RSS</RouterLink>
              <RouterLink to="/" @click="openToggle()">Panel</RouterLink>
            </div>
          </div>
          <RouterLink to="/contact" @click="openToggle()">Contact</RouterLink>
          <div class="auth">
            <div class="col1">
              <p>Am deja un cont</p>
              <button>Autentificare</button>
            </div>
            <div class="col2">
              <p>Vreau sa devin membru</p>
              <button>Inregistrare</button>
            </div>
          </div>
         
        </div>
        <div @click="openToggle()" class="menu">
          <button aria-label="open primary navigation">
            <div class="wrapper-line">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
.logo {
  align-self: flex-end;
}

nav {
  min-width: 313px;
  width: 95%;
  margin-top: 15px;
  margin-inline: auto;
  position: relative;
}
nav::before {
  content: url(@/assets/text.svg);
  position: absolute;
  bottom: -30px;
  right: 0;
}
.wrapper-nav {
  background-color: #e8e8e3;
  padding: 0.2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid hsla(0, 0%, 0%, 15%);
  position: relative;
}
.wrapper-nav::before {
  content: url(@/assets/hr.svg);
  position: absolute;
  bottom: -15px;
  left: 0;
}
.search {
  width: 140px;
  height: 19px;
  align-self: center;
}

input {
  font-size: 1.2rem;
  width: 140px;
  height: 25px;
  background-color: #eae1e1;
  padding: 5px;
  border: 1px solid #41200e;
  border-radius: 5px;
}

::placeholder {
  color: rgba(79, 17, 17, 50%);
  font-size: 1rem;
}
button {
  margin: 0;
  padding: 0;
  border: 0;
}
.menu {
  align-self: center;
  height: 30px;
  display: grid;
  place-content: center;
}
.line {
  width: 27px;
  height: 5px;
  background-color: #772e07;
  position: relative;
}
.line:nth-of-type(1) {
  border-radius: 3px 3px 0 0;
}
.line:nth-of-type(2) {
  border-radius: 2px 2px 5px 5px;
}
.line:nth-of-type(3) {
  border-radius: 0 0 3px 3px;
}
.wrapper-line {
  display: flex;
  gap: 3px;
  flex-direction: column;
}

.primary-navigation {
 background-color: #e8e8e3;
  color: white;
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  display: none;
  flex-direction: column;
}

.links {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(0, 0%, 0%, 0.7);
  gap: 1em;
  margin-block-start: 67px;
}

.col1,
.col2 {
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  align-items: center;
}
.col1 a,
.col2 a {
  font-size: 1.5rem;
  font-weight: 600;
}
.primary-navigation > a {
  color: #fb3232;
  font-size: 1.6rem;
  font-weight: 700;
  background-color: rgba(228, 213, 205, 0.25);
  padding: 0.5em;
  border: 1px solid hsla(0, 0%, 0%, 0.3);
  width: max-content;
  margin-block-start: 37px;
  align-self: center;
}
.primary-navigation .auth {
  display: flex;
  justify-content: center;
  width: 86%;
  gap: 1em;
  margin-inline: auto;
  align-items: center;
  margin-block-start: 45px;
  border-top: 6px dashed #e4d5cd;
}
.primary-navigation .auth p,
.primary-navigation .auth button {
  color: black;
}
.primary-navigation .auth p {
  border-bottom: 1px solid rgba(0, 0, 0, 0.44);
  font-size: 11px;
  font-weight: 600;
  width: fit-content;

  margin-block-start: 19px;
}
.primary-navigation .auth button {
  font-size: 20px;
  border-radius: 5px;
  padding-block: 1em;
  padding-inline: 0.4em;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  margin-block-start: 1em;
  width: max-content;
}
.primary-navigation .auth .col1 button {
  background-color: #7199c7;
}
.primary-navigation .auth .col2 button {
  background-color: #cc6f6f;
}

</style>
