<template>
  <div class="container">
    <h1>404</h1>
    <p>Page not found</p>
  </div>
</template>

<style scoped>
.container {
  margin-block: 3em;
  width: 95%;
  margin-inline: auto;
  display: grid;
  place-content: center;
}
.container h1,
.container p {
  margin: 0;
}
.container p {
  font-size: 1.5rem;
  color: rgb(61, 25, 25);
  font-weight: 800;
}
.container h1 {
  justify-self: center;
  font-size: 5rem;
  font-weight: 800;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;

  background-image: linear-gradient(
    to right,
    rgb(129, 75, 75),
    rgb(61, 25, 25)
  );
  animation: animbgk 6s linear alternate infinite;
}
@keyframes animbgk {
  to {
    background-position: 11rem;
  }
}
</style>
