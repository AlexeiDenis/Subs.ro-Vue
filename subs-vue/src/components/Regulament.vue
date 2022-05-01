<template>
<div class="container">
 <h1>Regulament</h1>
<section>
    <h2>
        Regulament General:
    </h2>
    <p>
        <ul>
            <li>
                Nu aveti dreptul de a face reclama altor website-uri prin intermediul informatiilor furnizate de dvs. In cazul in care acest lucru se intampla, informatia dvs va fi modificata fara o notificare prealabila.
            </li>
            <li>Nu aveti dreptul la mai mult de 1 cont pe viata.</li>
            <li>Nu folositi un limbaj defaimator la dresa celorlalti.</li>
            <li>Nu faceti spam prin intermediul forumului, comentariilor sau mesajelor private</li>
            <li>Nu incalcati regulile instituite ad-hoc, in functie de fituatie de catre personalul administrativ. </li>
        </ul>
    </p>
</section>
<section>
    <h2>Sanctiuni</h2>
    <p>In cazul in care nu veti respecta vreuna din aceste reguli, riscati sa ramaneti fara dreptul de a mai folosi anumite sectiuni alte site-ului sau, in cazuri extreme, vi se va bloca accesul.</p>
</section>
<section>
    <h2>Modificarea regulamentului</h2>
    <p>Modificarile la care regulamentul poate fi supus nu vor fi anuntate, iar dvs in calitate de utilizatori aveti obligatia de a verifica periodic aceasta pagina.</p>
</section>
<section>
    <h2>Dispozitii finale</h2>
    <p>In cazul in care considerati ca nu puteti respecta aceste reguli, va rugam incetati folosirea site-ului.</p>
</section>
</div>
</template>

<style scoped>
.container{
    width:95%;
    margin-block:2em;
    margin-inline:auto;
    display:flex;
    flex-direction:column;
    gap:1em;
}
.container h2{
    margin-block:1em;
}
.container h1{
    align-self:center;
}
p{line-height:1.6;}
.container section:nth-of-type(1) p{
    font-size:16px;
}
</style>

<script>
export default{

    mounted(){
        window.scrollTo(0,0)
    }
}
</script>