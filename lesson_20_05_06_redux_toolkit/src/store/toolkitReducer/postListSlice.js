import { createSlice } from '@reduxjs/toolkit';

const postListSlice = createSlice({
  name: 'postList',
  initialState: {
    postList: [
      { postId: 1, title: 'About weather' },
      { postId: 2, title: 'About sport' },
      { postId: 3, title: 'About cars' },
    ],
    commentList: [
      { commentId: 1, postId: 1, message: 'comment 1!' },
      { commentId: 2, postId: 1, message: 'comment 2!' },
      { commentId: 3, postId: 2, message: 'comment 3!' },
      { commentId: 4, postId: 2, message: 'comment 4!' },
      { commentId: 5, postId: 2, message: 'comment 5!' },
      { commentId: 6, postId: 3, message: 'comment 6!' },
    ],
  },
  reducers: {
    addNewComment(state, action) {
      state.commentList.push({
        commentId: Date.now(),
        postId: action.payload.postId,
        message: action.payload.message,
      });
    },
    remComment(state, action) {
      state.commentList = state.commentList.filter(
        elem => elem.commentId !== action.payload
      );
    },
    addNewPost(state, action) {
      state.postList.push({
        postId: Date.now(),
        title: action.payload,
      });
    },
    remPostItem(state, action) {
      state.commentList = state.commentList.filter(
        elem => elem.postId !== action.payload
      ); // cto bi udalialis kommentariji v hranilise toze
      state.postList = state.postList.filter(
        elem => elem.postId !== action.payload
      );
    },
  },
});

export default postListSlice.reducer;
export const { addNewComment, remComment, addNewPost, remPostItem } =
  postListSlice.actions;

// Задание 1.
// Реализуйте добавление комментария через input, определив новый кейс.
// Добавление должно происходить только после того, как будет нажата клавиша Enter
