<template>
  <div>
    <h2>Landing page</h2>
    <no-ssr>
      <v-select
        v-model="selected"
        placeholder="Select Category"
        :options="['foo', 'bar']"
      ></v-select>
    </no-ssr>
  </div>
</template>
<script>
// import vSelect
export default {
  data() {
    return {
      selected: "",
    };
  },
};
</script>
