<script setup>
import Button from "../components/Button.vue";
import Header from "../components/Header.vue";
import Modal from "../components/Modal.vue";

import { ref, computed } from "vue";
import { useVirtualList } from "@vueuse/core";

import { generateArrayOfObjects } from "../utils/index";

const data = ref([]);
const searchValue = ref("");
const isOpenModal = ref(false);
const selectedItems = ref(null);

const filteredData = computed(() => {
  if (searchValue.value.trim().length > 0) {
    return data.value.filter((message) =>
      message.title.includes(searchValue.value.trim())
    );
  }
  return data.value;
});

const { list, containerProps, wrapperProps } = useVirtualList(filteredData, {
  itemHeight: 96,
});

const generateData = () => {
  data.value = generateArrayOfObjects();
};

const openModal = (selectedItem) => {
  selectedItems.value = selectedItem;
  isOpenModal.value = !isOpenModal.value;
};
</script>

<template>
  <div class="container w-full mx-auto md:max-w-[720px] lg:max-w-[960px]">
    <Button label="Generate Data" :on-click="generateData" />
    <Header label="Messages" :count="data.length" />
    <input v-model="searchValue" class="border-solid border-2 rounded-lg p-2 mb-4 relative left-[20px] sm:static"
      type="text" placeholder="Search by title..." />
    <div v-bind="containerProps"
      class="h-[75vh] p-2 rounded grid grid-cols-1 gap-4 border-solid border-2 sm:static m-[20px] sm:m-0">
      <div v-if="searchValue !== '' && filteredData.length === 0" class="flex justify-center items-start text-4xl">
        No results.
      </div>
      <div v-if="searchValue === '' && filteredData.length === 0" class="flex justify-center items-center text-4xl">
        Click green button to generate messages.
      </div>
      <div v-if="filteredData.length > 0" v-bind="wrapperProps" class="max-w-sm mx-auto bg-white p-4 rounded-lg shadow">
        <div v-for="{ index, data } in list" :key="index"
          class="flex flex-col items-center space-x-2 text-sm border-2 mb-4 cursor-pointer rounded-lg h-[80px] px-4 justify-center border-neutral-600"
          @click="openModal(data)">
          <div class="font-bold">
            id:
            {{ data.id }}
          </div>
          <div class="italic">title: {{ data.title }}</div>
          <div class="underline text-primary-click">
            email : {{ data.email }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal :is-modal-open="isOpenModal" :payload="selectedItems" />
</template>

<style></style>