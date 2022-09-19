<template>
  <input type="text" v-model="name" placeholder="first-name last-name" />
  <input type="text" v-model="title" placeholder="Title" />
  <div class="about">
    <editor
      api-key="jsvlfar0ke1dnz3qs8fab25fyog6zo4vrwgfc5hwidmle72z"
      :init="{
        height: height * 0.9,
        width: 290,
        menubar: true,
        plugins: ['image', 'link'],
        skin: 'oxide-dark',
        statusbar: false,
      }"
      v-model="content"
    />
  </div>
</template>

<script setup>
import editor from "@tinymce/tinymce-vue";
import { ref } from "vue";
const content = ref("");
const name = ref("");
const title = ref("");
const height = window.innerHeight;
</script>

<style scoped>
.about {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
