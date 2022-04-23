
<template>
<h1>Contents page</h1>
    <RouterLink v-for="ob in obiecte" :key="ob.id" :to="{name: 'ContentDetail', params:{id: ob.id}}"> <p>{{ob.id}}</p> </RouterLink>
</template>

<script>
export default{
    data(){
        return {
           obiecte:[
                {id:"Batman",imagine:"https://xl.movieposterdb.com/22_02/2022/1877830/xl_1877830_764432ad.jpg?v:2022-04-23%2006:58:56",genul:"Drama, SF.",traducator:"Anonimus",uploader:"Aurelian", informatii:"cinemagia",comentarii:105, Descarcari:10.102,tipul:"film"},
                {id:"Kill Bill",imagine:"https://xl.movieposterdb.com/08_05/2003/266697/xl_266697_d1d415b0.jpg?v:2022-04-22%2021:08:23",genul:"Actiune",traducator:"Anonimus1",uploader:"Aurelian2", informatii:"cinemagia",comentarii:10, Descarcari:5.102,tipul:"film"},
                {id:"Star Wars",imagine:"https://xl.movieposterdb.com/12_05/1977/76759/xl_76759_7dc4ecb6.jpg?v:2022-04-20%2020:30:08",genul:"Science Fiction",traducator:"Anonimus2",uploader:"Aurelian1", informatii:"cinemagia",comentarii:125, Descarcari:15.102,tipul:"film"},
                {id:"Spinal Tap",imagine:"https://xl.movieposterdb.com/09_02/1989/96697/xl_96697_8fffca15.jpg?v:2022-04-12%2022:13:55",genul:"Comedie",traducator:"Aurelian",uploader:"Anonimus", informatii:"cinemagia",comentarii:5, Descarcari:200, tipul:"film"},
                {id:"God Thief",imagine:"https://xl.movieposterdb.com/22_04/2021/2332535/xl_2332535_35f186a0.jpg?v:2022-04-22%2017:36:56",genul:"Actiune",traducator:"Anonimus3",uploader:"Aurelian4", informatii:"cinemagia",comentarii:265, Descarcari:300,tipul:"serial"},
                {id:"Guardians Galaxy",imagine:"https://xl.movieposterdb.com/14_07/2014/2015381/xl_2015381_2a13ec7d.jpg?v:2022-04-19%2010:57:30",genul:"Drama, Sf",traducator:"RETAIL",uploader:"retailsubs", informatii:"cinemagia",comentarii:0, Descarcari:989,tipul:"serial"},
                {id:"The Connection",imagine:"https://xl.movieposterdb.com/22_04/2021/9826820/xl_9826820_f94ff667.jpg?v:2022-04-22%2017:49:20",genul:"Actiune, Sf",traducator:"Anonimus",uploader:"Aurelian", informatii:"cinemagia",comentarii:11, Descarcari:982,tipul:"film"},
                {id:"Sonic The HedgeHog",imagine:"https://xl.movieposterdb.com/22_03/2022/12412888/xl_12412888_a51d9d97.jpg?v:2022-04-14%2008:58:20",genul:"Familie, Aventura",traducator:"RETAIL",uploader:"retailsubs", informatii:"cinemagia",comentarii:2, Descarcari:278,tipul:"serial"},
                {id:"Chinesse",imagine:"https://xl.movieposterdb.com/22_04/1970/453091/xl_453091_fe6dce2d.jpg?v:2022-04-22%2017:30:32",genul:"Horror",traducator:"Anonimus",uploader:"Aurelian", informatii:"cinemagia",comentarii:3, Descarcari:667,tipul:"film"},
                {id:"Spider Man",imagine:"https://xl.movieposterdb.com/21_12/2021/10872600/xl_10872600_c809b67f.jpg?v:2022-04-12%2007:51:27",genul:"Aventura, Actiune",traducator:"RETAIL",uploader:"retailsubs", informatii:"cinemagia",comentarii:105, Descarcari:1,tipul:"film"},
                {id:"Interstellar",imagine:"https://xl.movieposterdb.com/14_09/2014/816692/xl_816692_a074ce1f.jpg?v:2022-04-18%2004:49:14",genul:"Horror",traducator:"RETAIL",uploader:"retailsubs", informatii:"cinemagia",comentarii:7, Descarcari:999,tipul:"serial"},
                {id:"Jurrasic World Dominion",imagine:"https://xl.movieposterdb.com/22_04/2022/8041270/xl_8041270_f6f5cdc2.jpg?v:2022-04-23%2015:28:42",genul:"Actiune",traducator:"RETAIL",uploader:"retailsubs", informatii:"cinemagia",comentarii:0, Descarcari:145,tipul:"film"}
                ]
        }
    }
}
</script>
