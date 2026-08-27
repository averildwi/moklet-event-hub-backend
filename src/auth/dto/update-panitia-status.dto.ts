import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class UpdatePanitiaStatusDto {
  @ApiProperty({ description: 'Status aktif/non-aktif akun panitia.' })
  @IsBoolean()
  isActive: boolean;
}
