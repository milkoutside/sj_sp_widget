export const SpinnerModule = {
    state: () => ({
        isLoading: false,
    }),
    mutations: {
        startSpinner(state) {
            state.isLoading = true;
        },
        stopSpinner(state) {
            state.isLoading = false;
        }
    },
    namespaced: true
};