<template>
  <div class="container">
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">參考網址</h5>
    <a class="card-link" href="https://next.router.vuejs.org/zh/api/#routelocationnormalized">路由屬性</a>
    <a class="card-link" href="https://next.router.vuejs.org/zh/api/#router-方法">路由方法</a>
    <a class="card-link" href="https://next.router.vuejs.org/zh/api/#routeroptions">路由選項</a>
  </div>
</div>
<br />
    <div class="btn-group" role="group" aria-label="Basic outlined example">
      <button type="button" class="btn btn-outline-primary" @click="getRoute">
        getRoute
      </button>
      <button type="button" class="btn btn-outline-primary" @click="push">
        Push
      </button>
      <button type="button" class="btn btn-outline-primary" @click="replace">
        Replace
      </button>
      <button type="button" class="btn btn-outline-primary" @click="go">
        Go
      </button>
    </div>
    <hr />
    <button type="button" class="btn btn-outline-primary" @click="addRoute">
      新增路由
    </button>
    <router-link to="/newabout">前往新增的路由</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    getRoute () {
      // 取得路由的屬性(this.$route)
      // 常用項目：fullPath(完整路徑)、params(參數)、query(?search=查詢關鍵字)
      console.log(this.$route)
      // 取得路由的方法
      console.log(this.$router)
    },
    // 跳轉到指定頁面（有歷史紀錄）
    push () {
      this.$router.push('/newpage/dynamicrouterbyprops/0d1f13ccc49dcea9')
    },
    // 跳轉到指定頁面（無歷史紀錄）
    replace () {
      this.$router.replace('/newpage/dynamicrouterbyprops/0d1f13ccc49dcea9')
    },
    // 跳轉到前/後幾個頁面
    go () {
      this.$router.go(-1)
      // 上一頁也可用this.$router.back()
    },
    // 臨時新增路由
    addRoute () {
      this.$router.addRoute({
        path: '/newabout',
        name: 'newAbout',
        component: () => import('./AboutView.vue')
      })
    }
  }
}
</script>
