import axios from 'axios';
export const MessagesModule = {
    state: () => ({
        contact: {},
    }),
    mutations: {
        setContact(state, contact) {
            state.contact = contact;
        }
    },
    actions:{
        async sendTelegramMessage({state, commit}, messageData) {
            // Логика для отправки в тг
           return {};
        },
        async sendViberMessage({state, commit}, messageData) {
            // Логика для отправки в viber
            return {};
        }
    },
    namespaced: true
};