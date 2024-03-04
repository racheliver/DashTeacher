<template>
  <div class="lesson-picker d-flex justify-content-between float-end">
    <!-- Lesson Preview -->
    <div class="lesson-preview-container cursor-pointer rounded border border-dark mt-3 d-flex">
      <div class="left-arrow d-flex align-items-center p-0">
        <img :src="left" alt="left arrow" />
      </div>
      <div class="lesson-preview-text d-flex align-items-center text-right fw-bold pl-2" :title="'תצוגה מקדימה של השיעור'" @click="showPopup = true">תצוגה מקדימה של השיעור</div>
    </div>

    <!-- Lesson Selector -->
    <div class="lesson-selector-container d-flex align-items-center pr-0">
      <div class="d-flex justify-content-end pr-2" @click="updateStartLessonLeft">
        <img :src="left" alt="left arrow" style="cursor: pointer;"/>
      </div>
      <div class="lesson-selector-text d-flex justify-content-center fw-light fs-4" :title="`${bookChapter} שיעור ${startLesson}`"> שיעור {{ startLesson }} - {{ bookChapter }} </div>
      <div @click="updateStartLessonRight" class="d-flex justify-content-start pl-2">
        <img :src="right" alt="right arrow" style="cursor: pointer;"/>
      </div>
    </div>

    <!-- Popup -->
    <div v-if="showPopup" class="popup preview-of-the-lesson fade show d-flex position-fixed top-0 bottom-0 right-0 left-0">
      <div class="modal-dialog modal-lg" style="direction: rtl;">
        <div class="modal-content bg-white overflow-auto">
          <div class="modal-header">
            <h5 class="modal-title mb-0">שיעור {{ startLesson }} - {{ bookChapter }}</h5>
            <button type="button" class="btn-close" @click="showPopup = false"></button>
          </div>
          <div class="modal-body position-relative p-4">
           <p>{{previewLesson}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import right from "../assets/chevron-previous.png";
import left from "../assets/chevron-forward.png";
import { fetchDataByLessonNumber, lengthLessons } from '../fetchLessonData.js';

export default {
  name: 'LessonSelector',
  props: {
    lessonNumber: Number,
    bookChapter: String,
    previewLesson: String
  },
  data() {
    return {
      left: left,
      right: right,
      showPopup: false,
      lessonsAmount: 0,
      startLesson: 1,
    };
  },
  methods: {
    async updateLessonData(newLessonNumber) {
      try {
        const newLessonData = await fetchDataByLessonNumber(this.startLesson);
        this.$emit('lessonDataChanged', newLessonData);
      } catch (error) {
        console.error('Error fetching lesson data:', error);
      }
    },
    sendDataToParent() {
      this.updateLessonData(this.startLesson);
    },
    updateStartLessonRight() {
      if (this.startLesson > 1) {
        this.startLesson--;
      }else{
        this.startLesson = this.lessonsAmount;
      }
      this.sendDataToParent();
    },
    updateStartLessonLeft() {
      if (this.startLesson < this.lessonsAmount) {
        this.startLesson++;
      }else{
        this.startLesson = 1;
      }
      this.sendDataToParent();
    }
  },
  mounted() {
    this.updateLessonData(this.startLesson);
    this.lessonsAmount = lengthLessons();
  }
};
</script>

<style scoped>
.lesson-picker {
  margin: 24px 52px 0px 24px;
  width: 67vw;
}
.lesson-preview-container,
.lesson-selector-container {
  width: fit-content;
  height: 42px;
  padding: 0px 22px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.lesson-preview-text,
.lesson-selector-text {
  margin: 0;
  word-break: break-word;
  white-space: nowrap;
}
.lesson-preview-text {
  font-family: SimplerPro Black;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.0025em;
  margin-right: 10px;
}
.lesson-selector-text {
  font-family: "Anomalia 1.0 AAA";
  line-height: 32px;
}
.left-arrow {
  width: 15%;
}
.preview-of-the-lesson {
  align-items: center;
  justify-content: center;
  z-index: 1040;
}
.modal-content {
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
.modal-header {
  border-bottom: 1px solid var(--border-color);
  padding: 0.5rem 1rem;
}

.modal-lg {
  max-width: 90%;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
