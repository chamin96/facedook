<template>
  <div class="container mx-auto px-4">
    <div class="w-full md:w-2/3 lg:w-1/3 mx-auto p-5">
      <form class="flex flex-col" @submit.prevent="handleSubmit">
        <div class="flex flex-col mb-2 p-2">
          <label for="title" class="text-gray-700">Title</label>
          <input
            id="title"
            v-model="title"
            type="text"
            class="mt-0 block w-full px-0.5 border-0 border-b-2 border-primary focus:ring-0 focus:border-secondary"
            required
          />
        </div>

        <div class="flex flex-col mb-2 p-2">
          <label for="message" class="text-gray-700">Post</label>
          <textarea
            id="message"
            v-model="message"
            type="text"
            rows="5"
            class="mt-0 block w-full px-0.5 border-0 border-b-2 border-primary focus:ring-0 focus:border-secondary"
            required
          />
        </div>

        <div class="flex flex-col mb-2 p-2">
          <label for="tags" class="text-gray-700">Tags</label>
          <input
            id="tags"
            v-model="tags"
            type="text"
            class="mt-0 block w-full px-0.5 border-0 border-b-2 border-primary focus:ring-0 focus:border-secondary"
            required
          />
        </div>

        <div class="flex flex-col mb-2 p-2">
          <label
            for="image"
            class="w-48 border-primary text-primary border-2 p-2 hover:bg-primary hover:text-gray-200 rounded-md focus:outline-none"
          >
            <div class="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Add Photos
            </div></label
          >
          <input
            id="image"
            type="file"
            class="hidden"
            accept="image/*"
            @change="handleImage"
          />
          <img
            v-if="selectedFile"
            :src="selectedFile"
            class="h-36 w-full object-contain p-4"
            alt=""
          />
        </div>

        <div class="flex justify-center">
          <button
            type="submit"
            class="bg-primary text-gray-100 border-0 px-6 py-3 hover:bg-secondary hover:text-gray-200 rounded-md focus:outline-none"
          >
            Post
          </button>
        </div>
      </form>
    </div>
    <div v-if="posts" class="grid grid-cols-1 md:grid-cols-3">
      <div v-for="post in posts" :key="post._id">
        <post :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import post from '~/components/post.vue'

export default {
  components: { post },

  async asyncData({ $axios }) {
    const posts = await $axios.$get(
      `https://knztnt-memories.herokuapp.com/posts`
    )
    return { posts }
  },

  data() {
    return {
      title: '',
      message: '',
      tags: [],
      selectedFile: '',
    }
  },
  methods: {
    handleImage(e) {
      const file = e.target.files[0]
      this.createBase64Image(file)
    },
    createBase64Image(file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        this.selectedFile = e.target.result
      }
      reader.readAsDataURL(file)
    },
    handleSubmit() {
      console.log(this.title)
      console.log(this.message)
      console.log(this.tags)
      console.log(this.selectedFile)
    },
  },
}
</script>
