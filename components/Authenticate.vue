<template>
  <div class="w-full md:w-2/3 lg:w-1/3 mx-auto p-5">
    <form class="flex flex-col" @submit.prevent="handleSubmit">
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" required />

      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" required />

      <div class="submit">
        <button type="submit">Create an Account</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>
