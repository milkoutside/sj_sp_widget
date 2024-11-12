
import axios from 'axios';
export const ContactsModule = {
    state: () => ({
        contact: {},
    }),
    mutations: {
        setContact(state, contact) {
            state.contact = contact;
        }
    },
    actions:{
        async getContactById({state, commit}, contactId) {
            // Логика для контакта, если нужна??
           return {};
        }
    },
    namespaced: true
};