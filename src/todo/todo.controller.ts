// src/todo/todo.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ZodError } from 'zod';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    try {
      return await this.todoService.create(createTodoDto);
    } catch (error) {
      if (error instanceof ZodError) {
        throw new Error('Invalid data');
      }
      throw error;
    }
  }

  @Get()
  async findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.todoService.findOne(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(Number(id), updateTodoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.todoService.remove(Number(id));
  }
}
