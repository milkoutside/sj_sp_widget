import {MessagesModule} from "./messagesModule/messagesModule";
import {ContactsModule} from "./contactsModule/contactsModule";

export const SendPulseModules = {
    namespaced: true,
    modules: {
        messages:MessagesModule,
        contacts:ContactsModule
    }
};
