import { fetchPosts } from "./actions/async/getPosts";
import { fetchUsers } from "./actions/async/getUsers";
import { fetchPostsDetails } from "./actions/async/getPostDetails";
import { toggleTheme } from "./actions/sync/changeTheme";

export default { fetchPosts, fetchUsers, fetchPostsDetails, toggleTheme };
