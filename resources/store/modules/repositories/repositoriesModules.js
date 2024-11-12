import {ContactsRepository} from "./contactRepository/contactsRepository";

export const RepositoriesModules = {
    namespaced: true,
    modules: {
        contacts:ContactsRepository
    }
};
