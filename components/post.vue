<template>
  <div class="bg-light bg-opacity-5 rounded-xl shadow-md m-5 overflow-hidden">
    <div class="items-center p-4">
      <p class="text-dark font-semibold text-sm">
        {{ post.name }}
      </p>
      <p class="font-light text-gray-600 text-opacity-50 text-xs">
        {{ fromNow }} ago
      </p>
    </div>
    <img :src="post.selectedFile" class="h-72 w-full object-cover" alt="..." />
    <div class="p-2">
      <div class="py-2 flex items-center justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 cursor-pointer text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span class="ml-1 font-thin text-xs text-secondary"
          >Liked by {{ totalLikes }}</span
        >
      </div>
      <p class="text-secondary text-base mb-2">{{ post.title }}</p>
      <p class="text-dark text-sm subpixel-antialiased">
        {{ post.message }}
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fromNow() {
      return moment(this.post.createdAt).fromNow()
    },
    totalLikes() {
      return this.post.likes.length
    },
  },
}
</script>
