<template>
  <div class="home">
    <HelloWorld :msg="name" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      name: process.env.VUE_APP_NAME
    }
  },
  components: {
    HelloWorld
  }
}
</script>
