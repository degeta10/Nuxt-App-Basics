<template>
  <div>
    <h2>Making API Request</h2>
    <div class="container">
      <div class="col-md-12 col-lg-12 col-xl-12 col-12">
        <div class="row p-2 border border-primary">
          <Card v-for="(post, index) in posts" :key="index" :post="post" />
        </div>
        <button class="btn btn-default" v-scroll-to="'body'">
          Back to Top
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Card from "@/components/Card";
import { mapGetters } from "vuex";

export default {
  components: { Card },
  computed: {
    ...mapGetters(["posts"]),
    // posts() {
    //   return this.$store.getters.posts;
    // },
  },
  async asyncData({ store }) {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    store.dispatch("setPosts", response.data);
    // return { posts: response.data };
  },
  head: {
    title: "Posts",
  },
  mounted() {},
};
</script>