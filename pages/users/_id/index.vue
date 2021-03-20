<template>
  <div>users id: {{ $route.params.id }}</div>
</template>
<script>
export default {
  validate(context) {
    return /^\d+$/.test(context.params.id);
  },
};
</script>