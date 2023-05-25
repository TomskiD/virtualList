<script setup>

defineProps({
  label: { type: String, default: "" },
  onClick: { type: Function, default: () => { } },
});

</script>

<template>
  <button
    class="bg-primary-click text-white disabled:opacity-70 disabled:cursor-not-allowed rounded-lg p-3 mt-4 relative left-[20px] sm:static"
    @click="onClick">
    {{ label }}
  </button>
</template>

<style></style>