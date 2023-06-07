import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewComment,
  remComment,
} from '../store/toolkitReducer/postListSlice';

const PostList = () => {
  const dispatch = useDispatch();
  const postList = useSelector(store => store.posts.postList);
  const commentList = useSelector(store => store.posts.commentList);

  const inputHandler = (e, postId) => {
    if (e.key === 'Enter') {
      // console.log(postId, e.target.value);

      dispatch(addNewComment({ postId, message: e.target.value }));
    }
  };

  return (
    <div>
      <h2>Post list</h2>
      <div>
        {postList.map((elem, index) => (
          <div key={index}>
            <h3>{elem.title}</h3>
            <div>
              {commentList
                .filter(value => value.postId === elem.postId)
                .map((elem, index) => (
                  <div
                    onDoubleClick={() => dispatch(remComment(elem.commentId))}
                    key={index}
                  >
                    {elem.message}
                  </div>
                ))}
            </div>
            <input onKeyDown={e => inputHandler(e, elem.postId)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
