<script setup>

defineProps({
  label: { type: String, default: "" },
  count: { type: Number, default: 0 },
});

</script>

<template>
  <h2 class="text-secondary-click left-[20px] text-4xl my-4 pl-[20px] sm:pl-0">
    {{ label }} : {{ count }}
  </h2>
</template>

<style></style> 