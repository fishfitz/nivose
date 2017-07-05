import api from '../api/';

export default {
    namespaced: true,
    state: {
        post: {},
        posts: []
    },
    mutations: {
        SET_POSTS(state, {posts, replace, up}) {
            state.post = {};
            if (replace) {
                state.posts = posts;
            }
            else if (up) {
                state.posts.unshift(...posts);
            }
            else {
                state.posts.push(...posts);
            }
        },
        SET_POST(state, post) {
            state.posts = [];
            state.post = post;
        },
        REMOVE_POST(state, postID) {
            state.posts.splice(state.posts.findIndex(p => p.slug === postID), 1);
        },
        ADD_COMMENT(state, {postID, comment}) {
            const index = state.posts.findIndex(p => p.slug === postID);
            state.posts[index].comments.push(comment);
            state.posts.splice(index, 1, Object.assign({}, state.posts[index]));
        },
        REMOVE_COMMENT(state, {postID, commentID}) {
            const index = state.posts.findIndex(p => p.slug === postID);
            const comments = state.posts[index].comments;
            comments.splice(comments.findIndex(c => c._id === commentID), 1);
            state.posts.splice(index, 1, Object.assign({}, state.posts[index]));
        }
    },
    actions: {
        SEARCH_POSTS({commit}, {tags, page, pageSize, replace = false, up = false}) {
            return api({
                path: 'GET_posts',
                data: {
                    tagsToExclude: tags.filter(t => !t.include).map(t => t.name),
                    tagsToInclude: tags.filter(t => t.include).map(t => t.name),
                    withComments: true,
                    page,
                    pageSize
                }
            }).then(({posts}) => commit('SET_POSTS', {posts, replace, up}));
        },
        SUBMIT_POST({commit}, {description, tags, image}) {
            const data = new window.FormData();
            data.append('description', description);
            data.append('image', image);
            data.append('tags', JSON.stringify(tags.map(t => t.name)));
            return api({
                path: 'POST_post',
                data
            }).then(post => commit('SET_POST', post));
        },
        DELETE_POST({commit}, {postID}) {
            return api({
                path: 'DELETE_post-$postID',
                params: {postID}
            }).then(() => commit('REMOVE_POST', postID));
        },
        SUBMIT_COMMENT({commit}, {postID, content}) {
            return api({
                path: 'POST_post-$postID-comment',
                params: {
                    postID
                },
                data: {
                    content
                }
            }).then(comment => commit('ADD_COMMENT', {postID, comment}));
        },
        DELETE_COMMENT({commit}, {postID, commentID}) {
            return api({
                path: 'DELETE_post-$postID-comment-$commentID',
                params: {
                    postID,
                    commentID
                }
            }).then(() => commit('REMOVE_COMMENT', {postID, commentID}));
        }
    }
};
