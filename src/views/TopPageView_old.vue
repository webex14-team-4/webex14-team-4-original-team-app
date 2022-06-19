<template>
  <div class="home">
    <div class="home_image">
      <img alt="Image" src="" />
    </div>
    <TopPageSectionVue
      v-for="(data, index) in section_datas"
      :key="data"
      :sectionObj="data"
      :index="index"
    ></TopPageSectionVue>
  </div>
</template>

<script>
import TopPageSectionVue from "@/components/TopPageSection.vue"

export default {
  name: "TopPageSectionView",
  components: {
    TopPageSectionVue,
  },
  data() {
    return {
      section_datas: [
        {
          title: "Explanation",
          text: "AlgoLearnでは<br>アルゴリズムの実際のソートコードから<br>実践的な学習を行うことができます",
          image: "algorithm.png",
        },
        {
          title: "How to use",
          text: "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
          image: "pc.png",
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
