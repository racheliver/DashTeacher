<template>
  <div class="task-list-header bg-white d-flex align-items-center  p-2 flex-grow-1">
    <div v-for="(task, index) in tasks" :key="index" class="task-item d-flex w-50 flex-column justify-content-between align-items-center">
      <img class="pb-1" :src="getTaskImage(task.type)" alt="empty" />
      <h5 class="fw-bold">{{ task.name }}</h5>
      <h6><img :src="edit" alt="Edit Task Points" />מס' נקודות</h6>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import edit from "../assets/edit.png";
import contentQuestion from "../assets/content_question.png";
import closedQuestion from "../assets/closed_question.png";
import openQuestion from "../assets/opened_question.png";

export default {
  name: 'TaskListStudentHeader',
  props: {
    tasks: Array
  },
  setup(props) {
    const editIcon = ref(edit);
    const contentQuestionIcon = ref(contentQuestion);
    const closedQuestionIcon = ref(closedQuestion);
    const openQuestionIcon = ref(openQuestion);

    const getTaskImage = (taskType) => {
      if (taskType === "open Question") {
        return openQuestionIcon.value;
      } else if (taskType === "closed Question") {
        return closedQuestionIcon.value;
      } else if (taskType === "content") {
        return contentQuestionIcon.value;
      }
    };

    return {
      edit: editIcon,
      getTaskImage
    };
  },  
};
</script>

<style scoped>

.task-item h5 {
  font-weight: 700;
}

.task-item h6 {
  font-size: 12px;
  font-weight: 400;
}

.task-item h5 {
  font-size: 14px;
  font-weight: 600;
}

.task-item h6 {
  font-size: 12px;
  font-weight: 400;
}

</style>
