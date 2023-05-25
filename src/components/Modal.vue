<script setup>
import { ref, watchEffect } from "vue";
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  isModalOpen: { type: Boolean, default: false },
  payload: { type: Object, default: {} },
});
const modal = ref(null);

watchEffect(() => {
  if (props.isModalOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});

onClickOutside(modal, () => (props.isModalOpen = false));
</script>

<template>
  <Teleport to="#modal">
    <Transition name="modal-outer">
      <div v-show="isModalOpen"
        class="fixed w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
        <Transition name="modal-inner">
          <div v-if="isModalOpen" ref="modal" class="relative bg-white self-start mt-12 max-w-screen-md">
            <button class="absolute px-5 py-2 top-0 right-0 text-white text-xl" @click="isModalOpen = false">
              x
            </button>
            <h2 class="bg-secondary-click text-white uppercase p-3">
              {{ props.payload.title }}
            </h2>
            <div class="p-4 max-h-[700px] overflow-y-auto text-justify">
              {{ props.payload.desc }}
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
