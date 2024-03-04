<template>
  <div class="table-container">
    <div class="table-wrapper d-flex flex-column align-items-center justify-content-end ml-auto position-relative overflow-auto">
      <div class="header-row d-flex align-items-stretch justify-content-end sticky-top w-100 top-10">
        <TaskListStudentHeader :tasks="data.tasks"/>
        <div class="grades-column mx-2 d-flex flex-column align-items-center justify-content-center bg-white ">
          <div class="grade-title d-flex flex-column align-items-center text-center justify-content-center position-relative">
            <h5 class="fw-bold">ציון השיעור</h5>
            <h6 class="fw-bold">30 משקל</h6>
          </div>
        </div>
        <div class="student-names-column d-flex align-items-center justify-content-end pr-3 h-120 bg-white ">
          <h5 class="fw-bold">תלמידים</h5>
        </div>
      </div>
      <div class="student-table-list d-flex flex-column w-100">
        <StudentGradeTable :data="data" :students="students"  />
      </div>
    </div>
  </div>
</template>

<script>
import StudentGradeTable from "./StudentGradeTable.vue";
import TaskListStudentHeader from "./TaskListStudentHeader.vue";

export default {
  name: 'LessonTable',
  components: {
    StudentGradeTable,
    TaskListStudentHeader
  },
  props: {
    data: Object,
    students: Array
  }
};
</script>

<style scoped>
.grades-column {
  max-width: 10%;
  width: 10%;
}
.table-container {
  margin: 24px 52px 0px 24px;
}

.table-wrapper {
  min-width: 60vw;
  max-width: 65vw;
  min-height: 20vh;
  max-height: 70vh;
  overflow-x: auto;
}

.table-wrapper::-webkit-scrollbar {
  height: 3px; 
  background-color: lightgray; 
}


.table-wrapper::-webkit-scrollbar-thumb {
  background-color: var(--accent-background-color-2);
  border-radius: 2px; 
}


.table-wrapper::-webkit-scrollbar-thumb:hover {
  background-color: var(--accent-background-color-1); 
}
.header-row {
  left: 0;
  z-index: 1;
  padding-bottom: 8px;
  display: flex;
  align-items: stretch; /* Make all children of header-row take up all available height */
}

.student-names-column{
  width: 15%;
}

.student-names-column h5 {
  position: relative;
  top: 15%;
  font-size: 14px;
  font-weight: 700;
}

.grade-title {
  top: 21%;
}
.grade-title h6 {
  font-weight: 400;
  font-size: 12px;
}

.grade-title h5 {
  font-size: 14px;
  font-weight: 700;
}

.student-names-column h5 {
  font-size: 14px;
  font-weight: 600;
}

.grades-column h5,
.grades-column h6 {
  font-size: 14px;
  font-weight: 600;
}

.student-table-list {
  overflow-y: auto;
  overflow-x: clip;
}

.student-table-list::-webkit-scrollbar {
  width: 2px; 
  background-color: lightgray; 
}

.student-table-list::-webkit-scrollbar-thumb:hover {
  background-color: var(--secondary-background-color); 
}

.student-table-list::-webkit-scrollbar-thumb {
  background-color: var(--primary-background-color); 
  border-radius: 4px; 
}


</style>./TaskListStudentHeader.vue
