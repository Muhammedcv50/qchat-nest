import { Controller, Post, Body, Get, Param, Delete, Put, Patch } from "@nestjs/common";
import { User } from "../entities/user.entity";
import { UserService } from "../services/user.service";
import { UserDto } from "../dtos/user.dto";
import { IdParamDto } from "@/common/dtos/urlParams.dto";

@Controller({
  path: 'users',
  version: '1',
})

export class UserController {
  constructor(private _userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: UserDto) {
    const user = await this._userService.create(createUserDto);
    return user;
  }

  @Get()
  async findAll() {
    return this._userService.findAll();
  }

  @Get(':id')
  async findOne(@Param() idParam: IdParamDto) {
    const { id } = idParam;
    return this._userService.findOne(id);
  }

  @Delete(':id')
  async delete(id: string) {
    await this._userService.delete(id);
  }

  @Patch(':id')
  async update(@Param() idParam: IdParamDto,@Body() patchUserDto: UserDto) {
    const { id } = idParam;
    return this._userService.update(id, patchUserDto);
  }
}

