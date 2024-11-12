<template>
  <v-container fluid class="m-0 p-0">
    <div class="chat-container">
      <div
          v-for="(message, index) in messages"
          :key="index"
          class="chat-message"
          :class="{'from-user': message.isUser, 'from-bot': !message.isUser}"
      >
        <template v-if="!message.isUser">
          <div class="message-avatar">
            <v-avatar size="40">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/640px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="avatar">
            </v-avatar>
          </div>
          <div class="message-content">
            <div class="message-name text-start mx-2">Користувач</div>
            <div class="message-bubble">
              <span class="message-text">{{ message.text }}</span>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="message-content">
            <div class="message-name text-end mx-2">Оператор</div>
            <div class="message-bubble">
              <span class="message-text">{{ message.text }}</span>
            </div>
          </div>
          <div class="message-avatar">
            <v-avatar size="40">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/640px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="avatar">
            </v-avatar>
          </div>
        </template>
      </div>
    </div>
  </v-container>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Chat",
  data() {
    return {
      newMessage: "",
      messages: [
        { text: "test?", isUser: false },
        { text: "test", isUser: true }
      ]
    };
  },
  computed: {
    ...mapState({
      //messages: state => state.repositories.contacts.messages,
    }),
  },
  methods: {

  }
};
</script>

<style scoped>
.chat-container {
  margin: 0 auto;
  padding: 20px;
  height: 400px;
  overflow-y: auto;
  background-color: #f4f4f8;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.chat-message {
  display: flex;
  margin: 10px 0;
  align-items: center;
}

.chat-message.from-user {
  justify-content: flex-end;
}

.chat-message.from-bot {
  justify-content: flex-start;
}

.message-avatar {
  margin: 0 10px;
}

.message-content {
  max-width: 70%;
}

.message-name {
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 5px;
}

.message-bubble {
  padding: 10px 15px;
  border-radius: 20px;
  background-color: #0088cc;
  color: white;
  font-size: 14px;
  line-height: 1.4;
  word-wrap: break-word;
}

.chat-message.from-bot .message-bubble {
  background-color: #e1e1e1;
  color: black;
}
::-webkit-scrollbar {
  display: none;
}
</style>
