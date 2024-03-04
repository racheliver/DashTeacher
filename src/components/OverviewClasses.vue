<template>
    <div class="class-status-container bg-white text-right ml-auto mt-4">
      <div class="class-status-content">
        <h2>סטטוס שיעור</h2>
        <div class="class-status">
          <h3 class="complete-class"> השלימו את השיעור {{ this.data.finished_the_class }}/{{ data.total_students }}</h3>
          <h3 class="student-in-class"> נמצאים כרגע בשיעור {{ data.total_students-skipped }}/{{ data.total_students }}</h3>
          <h3 class="failed-in-class"> נכשלו בשיעור {{ failed }}/{{ data.total_students }}</h3>
          <h3 class="skipped-class"> דילגו על השיעור {{ skipped }}/{{ data.total_students }}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { countSkippedStudents, failedClass } from '../gradeUtils'
  export default {
    name: 'OverviewClasses',
    props: {
      finished: Number,
      data: Object,
    },
    computed: {
      skipped() {
        return countSkippedStudents(this.data);
      },
      failed() {
        return failedClass(this.data);
      }
  }
  };
  </script>
  
  <style scoped>
  .class-status-container {
    border: 1px solid var(--border-color);
    width: 20vw;
  }

  .class-status-content h2{
    font-size: 24px;
    font-weight: 300;
    padding: 8px 8px;
    border-bottom: 1px solid var(--border-color);
  }
  
  .class-status {
    padding: 10px 8px;
  }
  .class-status h3 {
    margin: 10px 0px;
    font-size: 14px;
    font-weight: 700;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .complete-class {
    color: var(--complete-class-color);
    background-color: var(--complete-class-color-background);
  }
  .student-in-class {
    color: var(--student-in-class-color);
    background-color: var(--student-in-class-color-background);
  }
  .failed-in-class {
    color: var(--failed-in-class-color);
    background-color: var(--failed-in-class-color-background);
  }
  .skipped-class{
    color: var(--skipped-class-color);
    background-color: var(--skipped-class-color-background);
  }
  </style>
  import { computed } from 'vue';
