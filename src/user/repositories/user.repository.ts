import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { UserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  protected _userRepository: Repository<User>;

  constructor(dataSource: DataSource) {
    this._userRepository = dataSource.getRepository(User);
  }

  async create(createUserInput: UserDto): Promise<User> {
    return this._userRepository.save({ ...createUserInput });
  }

  async findOne(id: string): Promise<User | null> {
    return this._userRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<User[]> {
    return this._userRepository.find();
  }

  async delete(id: string) {
    const user = await this.findOne(id);
    if (user) {
      return this._userRepository.softRemove(user);
    }
  }

  async update(id: string, updateUserInput: DeepPartial<User>): Promise<User> {
    await this._userRepository.save({ id, ...updateUserInput });
    return this.findOne(id);
  }

  async findByUsername(username: string) {
    return this._userRepository.findOne({
      where: { username },
      select: ['username', 'password'],
    });
  }
}
