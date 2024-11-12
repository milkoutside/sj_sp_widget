import Vue from 'vue';
import Vuex from 'vuex';
import { SpinnerModule } from "./modules/spinnerModule/spinnerModule";
import {ZohoModules} from "./modules/zoho/zohoModules";
import {RepositoriesModules} from "./modules/repositories/repositoriesModules";
import {SendPulseModules} from "./modules/sendpulse/sendPulseModules";


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    spinner: SpinnerModule,
    zoho: ZohoModules,
    repositories: RepositoriesModules,
    sendPulse: SendPulseModules

  }
});
export default store;