<template>
  <div :class="{ home_section: true, home_section_reverse: doReverse }">
    <div class="section_description">
      <!-- <h2 class="section_title">{{ sectionObj.title }}</h2> -->
      <div class="section_text" v-html="sectionObj.text"></div>
    </div>
    <div class="section_image">
      <img :src="imagePath" :alt="sectionObj.image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectionObj: Object,
    index: Number,
  },
  computed: {
    imagePath() {
      return require(`@/assets/TopPage/${this.sectionObj.image}`)
    },
    doReverse() {
      return this.index % 2 === 0
    },
  },
}
</script>

<style>
.home_section {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.home_section_reverse {
  flex-direction: row-reverse;
}
.section_description {
  width: 45%;
  text-align: left;
  justify-content: center;
}
.section_text {
  overflow-wrap: break-word;
}
.section_image {
  width: 45%;
}
.section_image > img {
  width: 100%;
}
</style>
