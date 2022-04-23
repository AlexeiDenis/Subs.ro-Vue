<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <header>
        <nav>
            <div class="wrapper-nav">
                <div class="logo">
                    <router-link to="/">
                    <img src="@/assets/subs.png" alt="page logo" width="100" height="31"></router-link>
                </div>
                <div class="search">
                    <input type="text" placeholder="Cautare...">
                </div>
                <div class="menu">
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
  background-color: rgba(0, 0, 0, 0.05);
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
  font-weight: 600;
}
button {
  margin: 0;
  padding: 0;
  border: 0;
  background-color: inherit;
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
</style>