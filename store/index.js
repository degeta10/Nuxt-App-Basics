import axios from "axios";

// stores
export const state = () => ({
    posts: {}
});

// getters
export const getters = {
    posts(state) {
        return state.posts;
    }
};

// mutations
export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts;
    }
};

// actions
export const actions = {
    async nuxtServerInit({ commit }) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        commit("SET_POSTS", response.data);
    }
    // setPosts({ commit }, posts) {
    //     commit("SET_POSTS", posts);
    // }
};