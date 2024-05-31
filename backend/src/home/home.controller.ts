import {
  Controller,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { HomeService } from './home.service';
import { CreateHomeDto, HomeResponseDTO, UpdateHomeDto } from './dto/home.dto';
import { PropertyType } from '@prisma/client';
import { User, UserInfo } from '../user/decorators/user.decorator';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('/')
  getHomes(
    @Query('city') city?: string,
    @Query('minPrice') minPrice?: string,
    @Query('maxPrice') maxPrice?: string,
    @Query('propertyType') property_type?: PropertyType,
  ): Promise<HomeResponseDTO[]> {
    const price =
      minPrice || maxPrice
        ? {
            ...(minPrice && { gte: parseFloat(minPrice) }),
            ...(maxPrice && { lte: parseFloat(maxPrice) }),
          }
        : undefined;

    const filters = {
      ...(city && { city }),
      ...(price && { price }),
      ...(property_type && { property_type }),
    };
    return this.homeService.getHomes(filters);
  }

  @Get(':id')
  getHome(@Param('id', ParseIntPipe) id: number) {
    return this.homeService.getHomeById(id);
  }

  @Post()
  createHome(@Body() newHome: CreateHomeDto, @User() user: UserInfo) {
    return this.homeService.createHome(newHome, user.id);
  }

  @Put(':id')
  updateHome(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateHomeDto,
  ) {
    return this.homeService.updateHomeById(id, body);
  }

  @Delete(':id')
  deleteHome(@Param('id', ParseIntPipe) id: number) {
    return this.homeService.deleteHomeById(id);
  }
}
