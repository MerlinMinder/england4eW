<template>
  <div id="wrap">
    <div id="container">
      <div id="editor">
        <input class="input" type="text" v-model="title" placeholder="Title" />
        <input
          class="input"
          type="text"
          v-model="name"
          placeholder="first-name last-name"
        />
        <editor
          api-key="jsvlfar0ke1dnz3qs8fab25fyog6zo4vrwgfc5hwidmle72z"
          :init="{
            height: height * 0.7,
            width: 290,
            menubar: true,
            mobile: {
              menubar: true,
            },
            plugins: ['image', 'link', 'lists'],
            skin: 'oxide-dark',
            statusbar: false,
          }"
          v-model="content"
        />
      </div>
      <div id="postwrapper">
        <div id="title">{{ title }}</div>
        <div id="post" v-html="content"></div>
        <div id="name">{{ name }}</div>
      </div>
    </div>
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
#wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

#editor {
  padding-top: 20px;
  margin: 0 20px;
  margin-top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.input {
  width: 270px;
  height: 30px;
  border-radius: 10px;
  font-size: 20px;
  margin-bottom: 20px;
}

#postwrapper {
  margin: 20px;
  margin-bottom: 0;
  border: 2px solid gray;
  border-radius: 20px;
  height: fit-content;
}

#title {
  width: 270px;
  margin-left: 8.2px;
  padding-top: 10px;
  height: 30px;
  font-size: 24px;
  border-bottom: 2px solid gray;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 20px;
}

#post {
  padding: 16px;
  width: 254.4px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 16px;
}

#name {
  height: 20px;
  width: 270px;
  font-style: italic;
  margin-right: 8.2px;
  text-align: right;
}
</style>
