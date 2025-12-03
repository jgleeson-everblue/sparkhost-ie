import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Simple blog collection - category comes from folder name
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedDate: z.string(),
    author: z.string().default('SparkHost Team'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
