<template>
  <div id="nav">
    <h1 id="title">England 4eW</h1>
    <button id="buttonwrite" @click="write">Write</button>
  </div>
  <div id="wrapper">
    <div
      v-masonry="containerId"
      transition-duration="1s"
      item-selector=".postwrapper"
      fit-width="true"
      horizontal-order="true"
      id="content"
    >
      <div v-masonry-tile class="postwrapper" v-for="post in posts">
        <div class="posttitle">{{ post.title }}</div>
        <div class="post" v-html="post.data"></div>
        <div class="name">{{ post.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { collection, getDocs } from "@firebase/firestore";
import { onMounted, ref } from "vue";
import { db } from "../firebase/firebaseinit";
import router from "../router";

const write = () => {
  router.push("/write");
};

const posts = ref([]);

onMounted(async () => {
  const postsdata = await getDocs(collection(db, "posts"));
  postsdata.forEach((doc) => {
    posts.value.push(doc.data());
  });
});
</script>

<style scoped>
#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

#title {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: calc(20px + 1.5vw);
}

#wrapper {
  display: flex;
  justify-content: center;
}

#buttonwrite {
  width: 100px;
  height: 50px;
  text-align: center;
  font-size: 25px;
  color: white;
  background-color: black;
  border-radius: 5px;
}

#buttonwrite:hover {
  transform: scale(1.1);
}

.postwrapper {
  margin: 20px;
  margin-bottom: 0;
  border: 2px solid gray;
  width: 284.4px;
  border-radius: 20px;
  height: fit-content;
}

.posttitle {
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

.post {
  padding: 16px;
  width: 254.4px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 16px;
}
.name {
  height: 20px;
  width: 270px;
  font-style: italic;
  margin-right: 8.2px;
  text-align: right;
}
</style>
