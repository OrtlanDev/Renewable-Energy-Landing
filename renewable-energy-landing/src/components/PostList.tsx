// src/pages/PostList.tsx
import { CircleHelp, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import PostService from "../api/post.api";
import { PostCard } from "./PostCard";

type Post = {
    id: number;
    title: string;
    description: string;
    created_at: string;
    main_image: string;
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
                <div className="flex flex-col items-center justify-center py-20">
                    <svg
                        className="animate-spin h-10 w-10 text-primary mb-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    <span className="text-primary-dark text-lg font-medium">Cargando posts...</span>
                </div>
            ) : posts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20">
                    <CircleHelp className="text-primary-alfa-25 scale-200 mb-10" />
                    <h3 className="text-2xl font-bold text-primary-dark mb-2">¡No hay publicaciones aún!</h3>
                    <p className="text-secondary-text text-center max-w-md">
                        Pronto encontrarás artículos interesantes sobre energía renovable aquí.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            description={post.description}
                            created_at={post.created_at}
                            main_image={post.main_image}
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
