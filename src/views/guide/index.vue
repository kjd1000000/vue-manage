<template>
  <div class="app-container" v-loading='loading'>
   
     <iframe class="designPage" src="https://yyhsong.github.io/iDataV/case03/index.html" @load='load' frameborder="0"></iframe>
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'

export default {
  name: 'Guide',
  data() {
    return {
      loading:true,
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver()
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
      },
      guide() {
        this.driver.defineSteps(steps)
        this.driver.start()
    }
    },
  
}
</script>
<style scoped>
 .designPage{
    width: 100%;
    height: 80vh;
  }
</style>
