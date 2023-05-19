import { Body, Delete, Get, Injectable, Param, Patch, Post } from '@nestjs/common';
import { UserDto } from '../dtos/user.dto';
import { IdParamDto } from '@/common/dtos/urlParams.dto';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  async create(@Body() createUserDto: UserDto) {
    const user = await this.repository.create(createUserDto);
    return user;
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    return this.repository.findOne(id);
  }

  async delete(id: string) {
    await this.repository.delete(id);
  }

  async update(id: string, updateUserDto: UserDto) {
    return this.repository.update(id, updateUserDto);
  }

  async findByUsername(username : string){
    return this.repository.findByUsername(username);
  }
}
