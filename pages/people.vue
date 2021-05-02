<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 w-full p-4">
    <div v-for="person in peopleData.results" :key="person.email" class="">
      <person :person-data="person" />
    </div>
  </div>
</template>

<script>
import person from '~/components/person.vue'
export default {
  components: { person },

  async asyncData({ $axios }) {
    const peopleData = await $axios.$get(
      `https://randomuser.me/api/?results=20`
    )
    return { peopleData }
  },
}
</script>
