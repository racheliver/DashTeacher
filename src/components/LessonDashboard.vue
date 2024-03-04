<template>
  <div>
    <LessonNavigation :lessonNumber="lessonData.lesson_number" :lessonName="lessonData.lesson_name" :bookName="lessonData.book_name" />
    <div class="lesson-dashboard">
      <LessonPicker @lessonDataChanged="handleLessonDataUpdated" :previewLesson="lessonData.preview_lesson" :lessonNumber="lessonData.lesson_number"
        :bookChapter="lessonData.book_chapter" />
      <div class="content-wrapper">
        <div class="overview-table-wrapper">
          <OverviewClasses :data="lessonData" :totalStudents="lessonData.total_students" :finished="lessonData.finished_the_class" />
          <GradeCorrectionInfo :data="lessonData" :correctionAverage="lessonData.avarage_corrections" />
          <LessonPerformanceChart :passed="lessonData.total_passed" :failed="lessonData.total_failed"
            :lessonNumber="lessonData.lesson_number" />
        </div>
        <div class="lesson-table">
          <LessonTable :data="lessonData" :students="info" />
        </div>
      </div>
    </div>
    <UserIcons />
  </div>
</template>

<script>
import LessonTable from "./LessonTable.vue";
import LessonNavigation from "./LessonNavigation.vue";
import LessonPicker from "./LessonPicker.vue";
import OverviewClasses from "./OverviewClasses.vue";
import GradeCorrectionInfo from "./GradeCorrectionInfo.vue";
import LessonPerformanceChart from "./LessonPerformanceChart.vue";
import UserIcons from "./UserIcons.vue";
import { calculateStudentInfo } from '../gradeUtils.js';

export default {
  name: "LessonDashboard",
  data() {
    return {
      lessonData: this.data,
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    receivedLessonData: {
      type: Object,
      default: null
    },
  },
  methods: {
    handleLessonDataUpdated(newLessonData) {
      try {
        this.lessonData = newLessonData;
        this.$emit('lessonDataChanged', newLessonData);
      } catch (error) {
        console.error('Error handling lesson data:', error);
      }
    }
  },
  components: {
    LessonNavigation,
    LessonPicker,
    LessonTable,
    OverviewClasses,
    GradeCorrectionInfo,
    LessonPerformanceChart,
    UserIcons
  },
  computed: {
    info() {
      return calculateStudentInfo(this.lessonData);
    },
  }
};
</script>

<style scoped>
.lesson-dashboard {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.lesson-dashboard .lesson-picker {
  width: 100%;
  max-width: 60.5%;
  align-self: flex-end;
}

.content-wrapper {
  display: flex;
}

.overview-table-wrapper {
  flex: 1;
}

.lesson-table {
  flex: 1;
  margin-left: 20px;
}
</style>
