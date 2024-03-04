<template>
  <div class="custom-top-bar d-flex justify-content-between shadow-effect mt-2 bg-white">
    <div class="left-section d-flex align-items-center justify-content-between rounded bg-white" style="width: 50vw;">
      <div class="left-content ms-3">
        <img :src="profilePicture" alt="profile Picture" class="me-2" />
        <img :src="notificationBell" alt="notification Bell" />
      </div>

      <div class="center-content d-flex align-items-center pt-2">
        <div class="nav-item text-center mx-3">
          <div class="nav-icon-circle">
            <img :src="monitorIcon" alt="monitor Icon" />
          </div>
          <h5 class="nav-title">בניית מערכת</h5>
        </div>

        <div class="nav-item text-center mx-3">
          <div class="nav-icon-circle">
            <img :src="calendarIcon" alt="calendar" />
          </div>
          <h5 class="nav-title">היומן שלי</h5>
        </div>

        <div class="nav-item text-center mx-3">
          <div class="nav-icon-circle selected">
            <img :src="mySpaceIcon" alt="my Space" />
          </div>
          <h5 class=" nav-title">המרחב שלי</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profilePicture from "../assets/profilePicture.png";
import notificationBell from "../assets/notificationBell.png";
import mySpaceIcon from "../assets/my_space.png";
import monitorIcon from "../assets/monitorIcon.png";
import calendarIcon from "../assets/calendarIcon.png";


export default {
  data() {
    return {
      profilePicture,
      notificationBell,
      mySpaceIcon,
      monitorIcon,
      calendarIcon,
    };
  }
};
</script>

<style scoped>
.nav-title {
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.004em;
  text-align: center;
}
.shadow-effect {
  box-shadow: 0px 1px 6px 2px rgba(12, 74, 110, 0.05),
              0px 2px 10px 0px rgba(12, 74, 110, 0.1);
}
.nav-icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav-icon-circle.selected {
  background-color: var(--light-blue);
}
</style>
