<template>
  <div>
    <h2>{{ user.fullName }}</h2>
    <img :src="user.picture" :alt="user.fullName" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      user: {
        fullName: '',
        picture: ''
      }
    }
  },
  methods: {
    getData () {
      // console.log(this.$route.params)
      const seed = this.$route.params.id
      axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
        // console.log(res)
        const data = { ...res.data.results[0] }
        this.user.fullName =
          data.name.title + ' ' + data.name.first + ' ' + data.name.last
        this.user.picture = data.picture.large
      })
    }
  },
  created () {
    // console.log('DynamicRouter' + this.$route.params.id + 'Created')
    this.getData()
  }
}
</script>
