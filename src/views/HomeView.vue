<template>
  <div class="home">
    <div class="home_image">
      <img alt="Image" src="" />
    </div>
    <HomeSectionVue
      v-for="(data, index) in section_datas"
      :key="data"
      :sectionObj="data"
      :index="index"
    ></HomeSectionVue>
  </div>
</template>

<script>
import HomeSectionVue from "@/components/HomeSection.vue"

export default {
  name: "HomeView",
  components: {
    HomeSectionVue,
  },
  data() {
    return {
      section_datas: [
        {
          title: "Explanation",
          text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          image: "sample.jpg",
        },
        {
          title: "How to use",
          text: "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
          image: "sample.jpg",
        },
      ],
    }
  },
}
</script>

<style>
.home_image {
  height: 200px;
  border: 1px gray solid;
}
</style>
