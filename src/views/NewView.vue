<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newpage/a" class="list-group-item list-group-item-action">
          元件 A
        </router-link>
        <router-link to="/newpage/b" class="list-group-item list-group-item-action">
          元件 B
        </router-link>
        <router-link to="/newpage/namedpage/a2b" class="list-group-item list-group-item-action">
          元件 A+B
        </router-link>
        <router-link to="/newpage/namedpage/b2c" class="list-group-item list-group-item-action">
          元件 B+C
        </router-link>
        <router-link to="/newpage/routernavigation" class="list-group-item list-group-item-action">
          路由導覽
        </router-link>
        <router-link :to="`/newpage/dynamicrouter/${userId}`" class="list-group-item list-group-item-action">
          前往user頁面(params)
        </router-link>
        <router-link :to="`/newpage/dynamicrouterbyprops/${userId}`" class="list-group-item list-group-item-action">
          前往user頁面(props)
        </router-link>
      </div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" disabled v-model="userId" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="changeUserId">隨機產生userID</button>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      userId: '0d1f13ccc49dcea9'
    }
  },
  methods: {
    changeUserId () {
      axios.get('https://randomuser.me/api/')
        .then(res => {
          // console.log(res)
          this.userId = res.data.info.seed
        })
    }
  }
}
</script>
