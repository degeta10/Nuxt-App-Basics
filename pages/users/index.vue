<template>
  <div>
    <div>hello</div>
    <input type="text" v-model="user_id" />
    <!-- <nuxt-link :to="{ path: `/users/${user_id}` }">Go</nuxt-link> -->
    <nuxt-link :to="{ name: `users-id`, params: { id: user_id } }"
      >Go</nuxt-link
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      user_id: 1,
    };
  },
  methods: {},
};
</script>