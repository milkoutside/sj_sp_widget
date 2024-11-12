<template>
  <v-container fluid class="m-0 p-0">
    <div class="chat-footer">
      <div class="row">
        <div class="col-11">
          <v-text-field
              v-model="newMessage"
              placeholder="Напишите сообщение..."
              class="chat-input"
              hide-details
              outlined
              dense
          ></v-text-field>
        </div>
        <div class="col-1">
          <v-btn icon class="send-button" @click="sendMessage">
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ChatFooter",
  data() {
    return {
      newMessage: "",
    };
  },
  methods: {
    sendMessage() {
      console.log("Message:", this.newMessage);
      this.newMessage = "";
    },
  },
};
</script>

<style scoped>
.chat-footer {
  margin: 0 auto;
  padding: 20px;
  overflow-y: auto;
  background-color: #f4f4f8;
  border-top: 1px #c1c9d7 solid;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.chat-input {
  margin-right: 0;
}

.send-button {
  color: #0088cc;
}

.send-button:hover {
  color: #005f99;
}
</style>
