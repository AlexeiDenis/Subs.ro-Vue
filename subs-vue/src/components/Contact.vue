<template>
  <div class="container">
    <h1>Contact</h1>
    <p>Ne puteti contacta la urmatoarele adrese de email:</p>
    <address>
      <ul role="list">
        <li role="listitem">
          <p>
            <a
              href="mailto:tehnic@subs.ro"
              >tehnic@subs.ro</a
            >
            - semnalare probleme tehnice.
          </p>
        </li>
        <li role="listitem">
          <p>
            <a
              href="mailto:comerical@subs.ro"
              >comerical@subs.ro</a
            >
            - propuneri de parteneriate sau reclame.
          </p>
        </li>
        <li role="listitem">
          <p>
            <a
              href="mailto:abuz@subs.ro"
              >abuz@subs.ro</a
            >
            - pentru a reclama incalcari ale regulamentului de catre utilizatori.
          </p>
        </li>
        <li role="listitem">
          <p>
            <a
              href="mailto:contact@subs.ro"
              >contact@subs.ro</a
            >
            - pentru restul mesajelor ce nu se incadreaza mai sus.
          </p>
        </li>
      </ul>
    </address>
    <p>
      <strong>Atentie!</strong> Trimiteti mesajele doar acolo unde se incadreaza
      ceea ce vreti sa aflati.
    </p>
    <p>Vi se va raspunde in cel mai scurt timp posibil.</p>
  </div>
</template>

<script>

export default{
mounted(){
    window.scrollTo(0,0)
}
}
</script>

<style scoped>
.container {
  margin-block: 2em;
  margin-inline: auto;
  width:95%;
  
  display: flex;
  flex-direction: column;
  gap: 1em;
}
h1 {
  align-self: center;
}
a {
  color: #3d5dc5;
}
p {
  font-size: 21px;
  line-height: 1.7;

}
.container ul {
  padding: 0;
  margin: 0;
}
.container ul li {
  list-style-type: none;
}
.container address {
  width: 95%;
  margin-inline: auto;
}
</style>
