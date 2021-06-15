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
      driver: null,
      timmer:null
    }
  },
  mounted() {
    this.driver = new Driver()
  },
     activated() {
    console.log("CRE");
    this.loading = true;

    window.onkeydown =
      window.onkeyup =
      window.onkeypress =
        function (event) {
          // 判断是否按下F12，F12键码为123
          if ((event.keyCode = 123)) {
            event.preventDefault(); // 阻止默认事件行为
            window.event.returnValue = false;
          }
        };
    window.oncontextmenu = function () {
      event.preventDefault(); // 阻止默认事件行为
      return false;
    };
    var threshold = 160; // 打开控制台的宽或高阈值
    // 每秒检查一次
    this.timmer = window.setInterval(function () {
      if (
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold
      ) {
        // 如果打开控制台，则刷新页面
        window.location.reload();
      }
    }, 400);
  },
  deactivated() {
    clearTimeout(this.timmer)
    window.onkeydown =
      window.onkeyup =
      window.onkeypress =
        function (event) {
          // 判断是否按下F12，F12键码为123
          if ((event.keyCode = 123)) {
          
          }
        };
    window.oncontextmenu = function () {
      
    };
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
