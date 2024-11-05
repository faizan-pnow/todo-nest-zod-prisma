// src/todo/todo.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Prisma } from '@prisma/client';  

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto) {
    // Ensure CreateTodoDto is correctly typed and required fields are set
    const validatedData = CreateTodoDto.parse(createTodoDto); // Zod validation

    return this.prisma.todo.create({
      data: validatedData as Prisma.TodoCreateInput, // Explicit cast to Prisma's expected type
    });
  }


  async findAll() {
    return this.prisma.todo.findMany();
  }

  async findOne(id: number) {
    return this.prisma.todo.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.prisma.todo.update({
      where: { id },
      data: updateTodoDto,
    });
  }

  async remove(id: number) {
    return this.prisma.todo.delete({
      where: { id },
    });
  }
}
