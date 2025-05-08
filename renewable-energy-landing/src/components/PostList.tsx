// src/pages/PostList.tsx
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";
import PostService from "../api/post.api";
import { PostCard } from "./PostCard";

type Post = {
    id: number;
    title: string;
    description: string;
    created_at: string;
    image: string;
    category: string;
    read_time: string;
    tags: string;
};

export default function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        PostService.fetchAll()
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => {
                console.error("Error al cargar posts:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="mt-6">
            <div className="flex items-center gap-2 text-3xl font-bold text-primary-text mb-6">
                <div className="p-2 rounded-lg text-primary-dark bg-primary-alfa-25">
                    <Clock />
                </div>
                <h2>Últimos Posts</h2>
            </div>

            {loading ? (
                <p className="text-gray-500">Cargando posts...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            description={post.description}
                            created_at={post.created_at}
                            image={post.image}
                            category={post.category}
                            readTime={post.read_time}
                            tags={post.tags}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
