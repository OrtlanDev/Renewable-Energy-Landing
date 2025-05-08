import { Calendar, Clock } from "lucide-react";

interface PostCardProps {
    id: string | number;
    title: string;
    description: string;
    created_at: string;
    image?: string;
    category: string;
    readTime: string;
    tags: string;
}

export function PostCard({ id, title, description, created_at, image, category, readTime, tags }: PostCardProps) {
    return (
        <article key={id} className="card">
            <div className="relative h-52 w-full">
                <img
                    src={image || "src/assets/images/placeholder.svg"}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bg-primary-alfa-25 text-primary-text py-1 px-2 rounded-lg top-2 left-2">
                    {category}
                </div>
            </div>

            <div className="pt-4 space-y-4">
                <div className="flex items-center text-sm text-primary-text gap-4">
                    <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{created_at && new Date(created_at).toLocaleDateString()}</span>
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {readTime}
                    </span>
                </div>

                <div>
                    <h3 className="font-bold text-xl text-primary-text line-clamp-2">{title}</h3>
                    <p className="text-secondary-text line-clamp-2 mt-1">{description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {(typeof tags === "string"
                        ? tags
                              .split(",")
                              .map((t) => t.trim())
                              .filter(Boolean)
                        : []
                    ).map((tag, index) => (
                        <span
                            key={index}
                            className=" bg-primary-alfa-25 text-xs font-medium px-2.5 py-0.5 rounded-md text-primary"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}
