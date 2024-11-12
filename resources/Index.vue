<template>
  <v-app>
    <chat></chat>
    <chat-footer></chat-footer>
    <spinner></spinner>
  </v-app>
</template>

<script>

import Spinner from "./components/spinners/Spinner.vue";
import Chat from "./components/chats/Chat.vue";
import ChatFooter from "./components/footers/ChatFooter.vue";
import {mapActions, mapMutations} from "vuex";

export default {
  name: "Index",
  components: {Chat, Spinner,ChatFooter},
  data() {
    return {}
  },
  computed: {

  },
  methods: {
    ...mapActions({
      getMessagesByZohoContactId: 'repositories/contacts/getMessagesByZohoContactId',
      getZohoContactById: 'zoho/contacts/getContactById',
    }),
    ...mapMutations({
      startSpinner: 'spinner/startSpinner',
      stopSpinner: 'spinner/stopSpinner',
      seZohoContact:'zoho/contacts/seZohotContact',
      setMessages:'repositories/contacts/setMessages'
    }),
    async init() {
      console.log("init")
      await ZOHO.embeddedApp.on("PageLoad", async (data) => {
        this.startSpinner();
        let contactId = data.EntityId;
        console.log("contact id",contactId)
        let contact = await this.getZohoContactById(contactId);
       // let contactMessages = await this.getMessagesByZohoContactId(contactId);
        this.seZohoContact(contact);
       // this.setMessages(contactMessages);
        this.stopSpinner();
      });
      await ZOHO.embeddedApp.init().catch(error=>{
        console.log("Init error:",error)
      });
    },
  },

  async created() {
    await this.init();
  },
  async mounted() {

  }

}
</script>

<style scoped>

</style>
