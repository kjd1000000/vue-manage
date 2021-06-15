<template>
  <div class="designPage" v-loading="loading">
    <iframe
      class="designPage"
      src="http://form.making.link/basic-version/#/zh-CN/"
      frameborder="0"
      @load="load"
    ></iframe>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {
      loading: true,
      timmer:null,
    };
  },

  // activated() {
  //   console.log("CRE");
  //   this.loading = true;

  //   window.onkeydown =
  //     window.onkeyup =
  //     window.onkeypress =
  //       function (event) {
  //         // 判断是否按下F12，F12键码为123
  //         if ((event.keyCode = 123)) {
  //           event.preventDefault(); // 阻止默认事件行为
  //           window.event.returnValue = false;
  //         }
  //       };
  //   window.oncontextmenu = function () {
  //     event.preventDefault(); // 阻止默认事件行为
  //     return false;
  //   };
  //   var threshold = 160; // 打开控制台的宽或高阈值
  //   // 每秒检查一次
  //   this.timmer = window.setInterval(function () {
  //     if (
  //       window.outerWidth - window.innerWidth > threshold ||
  //       window.outerHeight - window.innerHeight > threshold
  //     ) {
  //       // 如果打开控制台，则刷新页面
  //       window.location.reload();
  //     }
  //   }, 1e3);
  // },
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
    load() {
      this.loading = false;
      console.log(12312);
    },
  },
};
</script>

<style  scoped>
.designPage {
  width: 100%;
  height: 85vh;
}
</style>