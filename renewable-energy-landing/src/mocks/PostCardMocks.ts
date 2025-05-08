// src/data/mockPosts.ts
export const mockPosts = Array.from({ length: 11 }, (_, i) => ({
    id: i + 1,
    title: `Post número ${i + 1}`,
    description: "Este es un resumen breve del contenido del post. Aprenderás algo útil aquí.",
    created_at: "2025-05-08",
    image: "",
    category: "Tecnología",
    readTime: `${3 + (i % 5)} min`,
    tags: ["React", "Clean Code", "UX"].slice(0, (i % 3) + 1),
}));
