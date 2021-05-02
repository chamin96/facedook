<template>
  <div
    class="md:flex bg-light bg-opacity-10 rounded-xl shadow-md p-4 md:p-0 m-5 overflow-hidden"
  >
    <div class="">
      <img
        :src="personData.picture.large"
        class="w-32 h-32 md:w-full md:h-full object-cover md:rounded-none rounded-full mx-auto"
        alt="..."
      />
    </div>
    <div class="pt-6 md:p-8 text-center md:text-left space-y-1">
      <p class="text-lg font-semibold text-secondary">
        {{ personData.name.first }} {{ personData.name.last }}
      </p>
      <p>{{ personData.location.state }} {{ personData.location.country }}</p>
      <p>{{ personData.phone }}</p>
      <p>{{ personData.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    personData: {
      type: Object,
      required: true,
    },
  },
}
</script>
