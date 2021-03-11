import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional() // it's optional so no errors will be thrown
  @IsPositive() // check if value is > 0
  @Type(() => Number) // tranform input value to number
  limit: number;

  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  offset: number;
}
