<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  data(){
    return{
      isActive : false
    }
  },
  methods:{
    openNav(){
      if(!this.isActive){
        this.isActive=true;
        this.$refs.test.style.opacity="1";
        this.$refs.test;
      }
      else{
        this.$refs.test.style.opacity="0";
          this.isActive=false;
      }
    }
  }
};
</script>

<template>
  <div class="about">
  <h1 @click="openNav()">About Page</h1>
  <p ref="test" class="active">shwoooosh</p>
  </div>
</template>

<style>
.about {
  padding-block: 4em;
}
p{opacity:0;color:black;}
.active{
  animation: col 3s ease-in infinite alternate;
}

@keyframes col {
  to{
    color:yellow;
  }
}
</style>
