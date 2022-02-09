import { fetchNewsList, fetchJobList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/api';

export default {
    async FETCH_NEWS({ commit }) {
        // return fetchNewsList()
        //         .then(({ data }) => {
        //             commit('SET_NEWS', data);
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         });
        const response = await fetchNewsList();
        commit('SET_NEWS', response.data);
        return response;
    },
    async FETCH_JOBS({ commit }) {
        // return fetchJobList()
        //         .then(({ data }) => {
        //             commit('SET_JOBS', data);
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         });
        const response = await fetchJobList();
        commit('SET_JOBS', response.data);
        return response;
    },
    async FETCH_ASK({ commit }) {
        // return fetchAskList()
        //         .then(({ data }) => {
        //             commit('SET_ASK', data);
        //         })
        //         .then(error => {
        //             console.log(error);
        //         });
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },
    async FETCH_USER({ commit }, username) {
        // return fetchUserInfo(username)
        //         .then(({ data }) => {
        //             commit('SET_USER', data);
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         });
        const response = await fetchUserInfo(username);
        commit('SET_USER', response.data);
        return response;
    },
    async FETCH_ITEM({ commit }, askId) {
        // return fetchItemInfo(askId)
        //         .then(({ data }) => {
        //             commit('SET_ITEM', data);
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         });
        const response = await fetchItemInfo(askId);
        commit('SET_ITEM', response.data);
        return response;
    },
    async FETCH_LIST({ commit }, pageName) {
        // return fetchList(pageName)
        //         .then(({ data }) => commit('SET_LIST', data))
        //         .catch(error => console.log(error));
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    }
};