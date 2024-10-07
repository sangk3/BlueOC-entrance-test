import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { title, body };
        // sử dụng dispatch gửi yêu cầu post đến store 
        dispatch(addPost(newPost));
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className='text-center'>Add New Post</h2>
            <label for="post" className="form-label ms-3 fs-4 fw-bold ">Nhập tiêu đề</label>
            <div class="mb-3">

                <input type="text" className="form-control w-25 ms-3" id="post"
                    placeholder='Tiêu đề'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required />
            </div>
            <div class="mb-3">
            <label for="post" className="form-label ms-3 fs-4 fw-bold ">Nhập nội dung</label>
                <textarea className="form-control w-25 ms-3" placeholder="Nội dung" id="body"
                    style={{height: 100 + 'px'}}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required></textarea>
               
            </div>
            <button type="submit" className="btn btn-primary ms-3 mt-4">Thêm bài viết</button>
        </form>
    );
};

export default PostForm;
