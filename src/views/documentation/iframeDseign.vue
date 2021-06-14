<template>
    <div class="designPage"   v-loading='loading'>
      <iframe class="designPage" src="http://cdn.kcz66.com/k-form-design.html" frameborder="0" @load='load'></iframe>
    </div>
    
</template>

<script>
  //import x from ''
  export default {
    components: {},
    data () {
      return {
        loading:true
      };
    },
   
    activated() {
      console.log('CRE')
      this.loading = true
      // this.$loading({
      //     lock: true,
      //     text: 'Loading',
      //     spinner: 'el-icon-loading',
      //     background: 'rgba(0, 0, 0, 0.7)'
      //   });
    },
    methods: {
      load(){
        this.loading = false
        console.log(12312)
      }
    },
  }
</script>

<style  scoped>
.designPage{
    width: 100%;
    height: 85vh;
  }
</style>