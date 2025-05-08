import axiosInstance from "./axiosInstance";

const PostService = {
    fetchAll: () => axiosInstance.get("posts/"),
};

export default PostService;
