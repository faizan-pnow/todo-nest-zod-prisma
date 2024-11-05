// src/todo/dto/create-todo.dto.ts
import { z } from 'zod';

export const CreateTodoDto = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long'),
  completed: z.boolean().optional(),
});

export type CreateTodoDto = z.infer<typeof CreateTodoDto>;
