<template>
  <div>
    <h2>Making API Request</h2>
    <div class="container">
      <div class="col-md-12 col-lg-12 col-xl-12 col-12">
        <div class="row p-2 border border-primary">
          <Card v-for="(post, index) in posts" :key="index" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Card from "@/components/Card";
export default {
  components: { Card },
  data() {
    return {
      posts: "",
    };
  },
  async asyncData() {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return { posts: response.data };
  },
  head: {
    title: "Posts",
  },
  mounted() {},
};
</script>