import axiosInstance from "./axiosInstance";

const PostService = {
    fetchAll: () => {
        const token = localStorage.getItem("token");
        return axiosInstance.get("posts/", {
            headers: token ? { Authorization: `Token ${token}` } : {},
        });
    },
};

export default PostService;
