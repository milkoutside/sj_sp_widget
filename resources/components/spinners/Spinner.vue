<template>
  <div v-if="isLoading" class="blur-background">
    <div class="content">
      <v-progress-circular
          color="primary"
          indeterminate
      ></v-progress-circular>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Spinner",
  computed: {
    ...mapState({
      isLoading: state => state.spinner.isLoading
    })
  }
}
</script>

<style scoped>
.blur-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  text-align: center;
  max-width: 80%;
  padding: 20px;
}
</style>
