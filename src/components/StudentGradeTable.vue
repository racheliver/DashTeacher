<template>
  <div>
    <div v-for="(student, index) in students" :key="index" class="student-info-container row align-items-center justify-content-between mb-2">
      <div class="col student-tasks-container d-flex align-items-center bg-white w-90 py-4">
        <div v-for="(task, index) in student.tasks" :key="index" class="student-info-row d-flex flex-column align-items-center justify-content-center w-50 h-70 position-relative pb-2">          <template v-if="task.status === 'failed'">
            <h4 class="task-status task-status-failed mb-0">{{ task.grade }}</h4>
          </template>
          <template v-else-if="task.status === 'perfect'">
            <h4 class="task-status task-status-perfect mb-0">{{ task.grade }}</h4>
          </template>
          <template v-else-if="task.status === 'mid'">
            <h4 class="task-status task-status-mid mb-0">{{ task.grade }}</h4>
          </template>
          <template v-else-if="task.status === 'checked'">
            <img :src="taskCompletedIcon" alt="Task completed" />
          </template>
          <template v-else-if="task.status === 'unchecked'">
            <img :src="taskIncompleteIcon" alt="task Incomplete Icon" />
          </template>
          <template v-else-if="task.status === 'inprogress'">
            <img :src="taskInProgressIcon" alt="task In ProgressIcon" />
          </template>
          <template v-else-if="task.status === 'empty'">
            <img :src="closedLessonIcon" alt="closed Lesson Icon" />
          </template>
          <template v-else-if="task.status === 'skipped'">
            <img :src="skippedIcon" alt="skipped" />
          </template>
        </div>
      </div>
        <div class="grade-info d-flex align-items-center justify-content-center h-64 bg-white ml-2">
        <h3>{{ student.grade }}</h3>
      </div>
      <div class="student-info d-flex flex-column justify-content-center bg-white ml-2">
        <h4 class="student-name" :style="{ direction: 'rtl' }" :title="getStudentTooltip(student.name)" @click="showStudentDetails(student.name)">
          {{ student.name }}
        </h4>
        <h5>הושלם {{ student.finished }}%</h5>
      </div>
    </div>
  </div>
</template>

<script>
import closedLessonIcon from "../assets/closed_lesson_icon.png";
import taskCompletedIcon from "../assets/task_completed_icon.png";
import taskInProgressIcon from "../assets/task_in_progress_icon.png";
import taskIncompleteIcon from "../assets/task_incomplete_icon.png";
import skippedIcon from "../assets/skipped_icon.png";
import { getStudentDetails } from "../gradeUtils";

export default {
  name: 'StudentGradeTable',
  props: {
    data: Object,
    students: Array
  },
  data() {
    return {
      closedLessonIcon,
      taskCompletedIcon,
      taskInProgressIcon,
      taskIncompleteIcon,
      skippedIcon
    };
  },
  methods: {
    showStudentDetails(studentName) {
      const studentDetails = getStudentDetails(studentName,this.data);
    },
    getStudentTooltip(studentName) {
      const studentDetails = getStudentDetails(studentName,this.data);
      if (studentDetails.error) {
        return "Student not found";
      } else {
        return `שם התלמיד: ${studentDetails.name}\nמידע נוסף: ${studentDetails.skipped}\nהערות: ${studentDetails.comments}`;
      }
    }
  }
};
</script>
<style scoped>
.student-info {
  width: 15.6%;
}
.grade-info,
.student-info {
  height: 90px;
  text-align: center;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grade-info h3 {
  font-size: 16px;
  font-weight: 600;
}

.grade-info {
  width: 10%;
}

.student-info h4 {
  font-weight: 700;
  font-size: 14px;
}

.student-info h5 {
  font-weight: 400;
  font-size: 12px;
}

.task-status {
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 36px;
  width: 36px;
}

.task-status-failed {
  color: var(--failed-text-color);
  background-color: var(--failed-background-color);
}

.task-status-mid {
  color: var(--mid-text-color);
  background-color: var(--mid-background-color);
}

.task-status-perfect {
  color: var(--perfect-text-color);
  background-color: var(--perfect-background-color);
}

.student-tasks-container {
  overflow-x: auto;
}
.student-name {
  cursor: pointer;
}
.tooltip {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.tooltip p {
  margin: 0;
  font-size: 14px;
}
</style>
