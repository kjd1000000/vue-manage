<template>
  <div class="app-container">
    <!-- <aside>
      {{ $t('guide.description') }}
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a>
    </aside>
    <el-button icon="el-icon-question" type="primary" @click.prevent.stop="guide">
      {{ $t('guide.button') }}
    </el-button> -->
     <iframe class="designPage" src="https://yyhsong.github.io/iDataV/case03/index.html" frameborder="0"></iframe>
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
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver()
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>
<style scoped>
 .designPage{
    width: 100%;
    height: 100vh;
  }
</style>
