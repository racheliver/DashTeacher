<template>
    <div class="grade-info-container d-flex justify-content-between text-right mt-4 ml-auto">
      <div class="grade-info-left bg-white d-flex flex-column">
        <h1 class="grade-number">{{ averageGrade }}</h1>
        <h4 class="grade-label fw-300">ממוצע ציונים</h4>
      </div>
      <div class="grade-info-right bg-white d-flex fw-bold align-items-center">
        <div class="row">
          <div class="col cycle-fixes">
            <h5 class="correction-label fw-300 mb-0 ml-2 float-right" style="inline-size: max-content;">ממוצע סבבי</h5>
            <h5 class="correction-label fw-300 mb-0">תיקונים</h5>
          </div>
          <div class="col">
            <h1 class="correction-value fs-2 mr-3 mb-0 align-self-center">{{ correctionAverage }}</h1>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { calculateAverageGrade } from '../gradeUtils.js';
  export default {
    name: 'GradeCorrectionInfo',
    props: {
       correctionAverage: Number,
       data: Object
    },
    computed: {
      averageGrade() {
        return calculateAverageGrade(this.data);
    }
  }
  };
  </script>
  
  <style scoped>
  .grade-info-container {
    border: 1px solid var(--border-color);
    width: 20vw;
  }
  
  .grade-info-left h1,
  .grade-info-right h1 {
    font-weight: bold;
    font-family: "Anomalia 1.0 AAA";
  }
  
  .grade-info-left h4,
  .grade-info-right h5 {
    font-size: 14px;
    font-family: "SimplerPro Black";
  }
  
  .grade-number {
    color: var(--average-class-grade-color);
    font-size: 48px;
  }
  
  .grade-info-left, .grade-info-right {
    align-items: center;
    justify-content: center;
    width: 48%;
    height: 100px;
    border: 1px solid var(--border-color);
    margin: 14px 0px;
    background-color: white;
    border-radius: 3px;
  }
  @media (max-width: 1570px) {
    .cycle-fixes {
      margin-right: 5px;
    }
  }
  </style>
  