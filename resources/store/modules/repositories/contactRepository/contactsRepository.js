
import axios from 'axios';
export const ContactsRepository = {
    state: () => ({
        messages: [],
    }),
    mutations: {
        setMessages(state, messages) {
            state.messages = messages;
        }
    },
    actions:{
        async getMessagesByZohoContactId({state, commit}, contactId) {
            //Замени на свой адрес для получение из БД сообщений
            let messages = await axios.get(`http://server/${contactId}`);
            if (messages?.length > 0) {
                return messages;
            }
            console.log("Empty contact messages", messages);
            return [];
        }
    },
    namespaced: true
};