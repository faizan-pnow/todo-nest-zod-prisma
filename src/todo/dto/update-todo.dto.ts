// src/todo/dto/update-todo.dto.ts
import { z } from 'zod';

export const UpdateTodoDto = z.object({
  title: z.string().min(3).optional(),
  completed: z.boolean().optional(),
});

export type UpdateTodoDto = z.infer<typeof UpdateTodoDto>;
