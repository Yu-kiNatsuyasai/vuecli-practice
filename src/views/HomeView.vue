<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="name" />
    <VForm @submit="onSubmit" v-slot="{ errors }">
      <!-- {{errors}} -->
      <div class="mb-3">
        <label for="userEmail" class="form-label">Email</label>
        <VField
          id="userEmail"
          name="userEmail"
          type="email"
          class="form-control"
          placeholder="請輸入 Email"
          rules="email|required"
          :class="{ 'is-invalid': errors['userEmail'] }"
        ></VField>
        <ErrorMessage name="userEmail" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="userName" class="form-label">姓名</label>
        <VField
          id="userName"
          name="userName"
          type="text"
          class="form-control"
          placeholder="請輸入姓名"
          rules="required"
          :class="{ 'is-invalid': errors['userName'] }"
        ></VField>
        <ErrorMessage name="userName" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="userPhone" class="form-label">電話</label>
        <VField
          id="userPhone"
          name="userPhone"
          type="text"
          class="form-control"
          placeholder="請輸入電話"
          rules="isPhone"
          :class="{ 'is-invalid': errors['userPhone'] }"
        ></VField>
        <ErrorMessage name="userPhone" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="userRegion" class="form-label">地區</label>
        <VField
          as="select"
          id="userRegion"
          name="userRegion"
          class="form-control"
          rules="required"
          :class="{ 'is-invalid': errors['userRegion'] }"
        >
          <option value="">請選擇地區</option>
          <option value="台北市">台北市</option>
          <option value="高雄市">高雄市</option>
          <option value="花蓮市">花蓮市</option>
        </VField>
        <ErrorMessage name="userRegion" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="userAddress" class="form-label">地址</label>
        <VField
          id="userAddress"
          name="userAddress"
          type="text"
          class="form-control"
          placeholder="請輸入地址"
          rules="required"
          :class="{ 'is-invalid': errors['userAddress'] }"
        ></VField>
        <ErrorMessage name="userAddress" class="invalid-feedback"></ErrorMessage>
      </div>

      <button class="btn btn-primary" type="submit">Submit</button>
    </VForm>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      user: {},
      name: process.env.VUE_APP_NAME
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    onSubmit (values, { resetForm }) {
      this.user = values
      console.log(this.user)
      resetForm()
    }
  },
  created () {
    // console.log(this)
  }
}
</script>
