<template>
    <div class="users-container">
      <img :src="avatars[0]" alt="Avatar Boy" />
      <img :src="avatars[1]" alt="Avatar Girl" />
      <img :src="messageIcon" alt="Message" />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import avatarBoy from "../assets/avatar_boy.png";
  import avatarGirl from "../assets/avatar_girl.png";
  import message from "../assets/chatIcon.png";
  
  export default {
    name: 'UserIcons',
    setup() {
      const avatars = ref([avatarBoy, avatarGirl]);
      const messageIcon = ref(message);
  
      return { avatars, messageIcon };
    }
  };
  </script>
  
<style scoped>

  .users-container {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 2.5%;
}


    .users-container {
        margin-bottom: 8px;
    }
</style>
  