<template>
  <div class="jumbotron">
    <h1 class="display-4">{{ post.title }}</h1>
    <p class="lead">
      {{ post.body }}
    </p>
    <p class="lead">
      <nuxt-link :to="{ name: 'posts' }" class="btn btn-primary btn-lg"
        >Back</nuxt-link
      >
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      post: "",
    };
  },
  async asyncData({ params }) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    return { post: response.data };
  },
  head() {
    return {
      title: this.post.title,
    };
  },
};
</script>