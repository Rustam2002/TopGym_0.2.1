export default {
    actions: {
        async fetchPosts(acceptedData) {
            const res = await fetch(
                'http://localhost:3001/posts?_limit=' 
            )
            const posts = await res.json()
            acceptedData.commit('updatePosts', posts)
        },
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        }
    },
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts
        }
    },
}