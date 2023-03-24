import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { UserDto } from './dto/user.dto';
import { User } from './entity/user.entity';
import { UserQueries } from './entity/user_queries.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: typeof User,
    @Inject('USER_QUERY_REPOSITORY')
    private userQueryRepository: typeof UserQueries,
    private httpService: HttpService,
  ) {
    //
  }

  async search(userId: string, word: string) {
    const [user, userQueries] = await Promise.all([
      this.userRepository.findOne({
        where: { id: userId },
      }),
      this.userQueryRepository.findOne({
        where: { userId, queryString: word },
      }),
    ]);

    if (!user) {
      throw new Error('User not found');
    }

    const response = await firstValueFrom(
      this.httpService.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      ),
    );
    if (!userQueries) {
      this.userQueryRepository.create({
        userId,
        queryString: word,
      });
    }
    return response.data;
  }

  async createUser(userDto: UserDto) {
    return this.userRepository.create({
      userName: userDto.userName,
    });
  }
}
