<template>
    <div class="lesson-navigation d-flex align-items-center justify-content-right" style="direction: rtl;">
      <img :src="arrow" alt="" />
      <h4 class="text-center">
        המרחב שלי / קורס {{ lessonName }} {{ bookName }} / שיעור {{ lessonNumber }}
      </h4>
    </div>
</template>
  
  
  
  <script>
  import arrow from "../assets/arrow-previous.png";
  
  export default {
    name: 'LessonNavigation',
    props: {
      lessonNumber: Number,
      lessonName: String,
      bookName: String,

    },
    data() {
      return {
        arrow: arrow
      };
    }
  };
  </script>
  
  <style scoped>
  .selected-view {
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
  }
  
  h4 {
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    letter-spacing: 0em;
    margin-bottom: 0;
  }
  .lesson-navigation {
    padding-right: 20px;
    margin-top: 30px;
    gap: 5px;
    background-color: var(--root-background-color);
    font-family: "Anomalia 1.0 AAA";
  }
  </style>
