import axios from 'axios';
export const ContactsModule = {
    state: () => ({
        zohoContact: {},
    }),
    mutations: {
        seZohoContact(state, zohoContact) {
            state.zohoContact = zohoContact;
        }
    },
    actions:{
        async getZohoContactById({state, commit}, contactId) {
            let contact = await ZOHO.CRM.API.getRecord({Entity:"Contacts",RecordID:contactId});
            if (contact.data?.[0]) {
                console.log("Contact Found, set:", contact.data[0]);
                return contact.data[0];
            }
            console.log("Empty Contact", contact);
            return {};
        }
    },
    namespaced: true
};
