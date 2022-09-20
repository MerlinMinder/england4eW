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
              toolbar_mode: 'floating',
            },
            plugins: ['image', 'link', 'lists'],
            skin: 'oxide-dark',
            statusbar: false,
          }"
          v-model="content"
        />
      </div>
      <div id="postwrapper" :style="{ borderColor: color }">
        <div id="title">{{ title }}</div>
        <div id="time">
          {{ String(new Date(Date.now())).slice(0, 15) }}
        </div>
        <div id="post" v-html="content"></div>
        <div id="name">{{ name }}</div>
      </div>
    </div>
    <button id="buttonpost" @click="post">Post</button>
  </div>
</template>

<script setup>
import { doc, setDoc } from "@firebase/firestore";
import editor from "@tinymce/tinymce-vue";
import { onMounted, ref } from "vue";
import { db } from "../firebase/firebaseinit";
import router from "../router";
const content = ref("");
const name = ref("");
const title = ref("");
const color = ref("#000000");

onMounted(() => {
  color.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

const post = async () => {
  await setDoc(
    doc(db, "posts", String(Date.now())),
    {
      data: content.value,
      title: title.value,
      name: name.value,
      time: Date.now(),
      color: color.value,
    },
    { merge: true }
  );
  content.value = "";
  title.value = "";
  name.value = "";
  color.value = "#000000";
  router.push("/");
};
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
  border: 5px solid gray;
  border-radius: 20px;
  height: fit-content;
}

#title {
  width: 270px;
  margin-left: 8.2px;
  padding-top: 10px;
  height: 40px;
  font-size: 26px;
  border-bottom: 2px solid gray;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 20px;
}

#time {
  margin-top: 5px;
  height: fit-content;
  width: 270px;
  text-align: right;
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

#buttonpost {
  margin-top: 20px;
  width: 280px;
  height: 40px;
  font-size: 25px;
  border-radius: 10px;
  background-color: lightgray;
}

#buttonpost:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
