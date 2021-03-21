<template>
  <div class="col-12 col-md-4 col-lg-3 col-xl-3">
    <div class="card text-black bg-default mb-3" style="max-width: 18rem">
      <div class="card-header">
        {{ post.id }}.&nbsp;
        <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">{{
          post.title
        }}</nuxt-link>
      </div>
      <div class="card-body">
        <h5 class="card-title">
          {{ post.body }}
        </h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: Object,
  },
};
</script>