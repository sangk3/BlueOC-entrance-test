## Setup cho dự án react-redux
+ sử dụng npx create-react-app redux-react khởi tạo dự án redux app
+ Cài đặt các thư viện cần thiết như: redux react-redux redux-thunk 

## Cấu trúc thư mục dự án react-redux app:  

 `├──` public
 `│   └──` index.html
 `└──` src
 `     └──`components/
 `     |   └──`PostForm.jsx
 `     |   └──`PostsList.jsx  
 `     |___`redux/
 `     |   |___`reducers/
 `     |       |___`postReducer.js         
 `     |   |___`actions.js
 `     |   |___`store.js                                           
 `     |___`App.js
 `     |___`index.js

## Các thành phần chính của của 1 ứng dụng React-Redux
+ /public/index.html: tệp HTML chính của ứng dụng React. Có nhiệm vụ gắn kết truyền component vào
+ index.js: tệp JavaScript chính dùng để khởi tạo lên ứng dụng React.Giúp gắn kết các Component vào DOM, sử dụng để cấu hình Redux Store
+ App.js: ây là component chính của ứng dụng React, nơi chứa các component khác. Các component được khởi tạo từ /components sẽ dược truyền vào App.js, cho phép xây dựng các thành phần của 1 trang web
+ /components: Sư dụng các function xây dựng lên các phần cho giao diện người dùng(UI) 
+ /redux/actions: Xây dựng các function actions cho việc Fetch dữ liệu từ phía jsonplaceholder.typicode và thêm các posts mới
+ /redux/store.js: Kho lưu trữ và quản lý các state. Dữ liệu từ phía actions trả về sẽ được lưu trữ trong redux store phục vụ cho việc quản lý state, giúp dễ bảo trì hơn
+ /redux/reducers/postReducers.js: xử lý các dispatch mà actions gửi đến store, Xác định type của actions và thay đổi state với payload được gửi dispatch theo actions ===> return về state mới là các bài viết mới được thêm 

## Chi tiết hoạt động của dự án react-redux
# Component: 
+ Xây dựng lên 2 components chính là PostForm.jsx(sử dụng để thêm posts mới) và PostsList.jsx(Sử dụng để render ra toàn bộ posts đã có trên https://jsonplaceholder.typicode.com/posts)
+ PostForm.jsx: Cho phép người dùng thêm bài viết mới bằng cách sử dụng dispatch(addPost()) để gọi action creator từ actions.js.
+ PostsList.jsx: Hiển thị danh sách tất cả các bài viết đã có, sử dụng dispatch(fetchPosts()) để lấy dữ liệu từ API.
# action (/redux/actions.js)
+ Xây dựng các Async function gửi request đến server get dữ liệu về với fetchPosts() và async function addPost() để add new posts
+ dispatch({type: , payload:}) các async function đến redux-store để cập nhật state 
# store(/redux/store.js)
+ import các thư viện redux, redux-thunk, redux-devtools-extension và reducers
+ Sử dụng createStore để khởi tạo store với postReducer, nơi quản lý state của ứng dụng.
+ redux-thunk: Với mỗi action gửi đến redux-store sẽ được kiểm tra bởi redux-thunk để xác định actions là đồng bộ hay bất đồng bộ. Nếu là bất đồng bộ thì sẽ action sẽ được dispatch() khi actions đó được hoàn thành (redux-thunk giống Middleware)
# reducers(redux/reducers)
+ Thành phần reducers sẽ xử lý các actions được dispatch() dựa vào type và payload để cập nhật state 
+ reducers sẽ trả về state mới sau khi phân tích và xử lý các actions. các state này sẽ được lý bởi redux-store và để hiển thị các state này từ phía componentt cần sử dụng useSelector là 1 hook

## Chạy dự án
+ Open terminal với path Task3/react-redux chạy câu lệnh npm start để chạy ứng dụng