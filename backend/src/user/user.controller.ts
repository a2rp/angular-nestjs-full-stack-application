import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './data/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/all')
  getAllUsers(): User[] {
    return this.userService.findAllUsersService();
  }

  @Post('/add')
  addUser(@Body() user: User): {} {
    let message = this.userService.addUserService(user);

    if (message === 'exists') {
      const response = {
        message: 'duplicate email',
        success: false,
      };
      return response;
    } else if (message === 'success') {
      const response = {
        message: 'registered successfully',
        success: true,
      };
      return response;
    } else {
      const response = {
        message: 'internal error',
        success: false,
      };
      return response;
    }
  }

  @Put('/update')
  updateUser(@Body() user: User): {} {
    const message = this.userService.updateUserService(user);

    if (message === 'success') {
      const response = {
        message: 'updated successfully',
        success: true,
      };
      return response;
    } else {
      const response = {
        message: 'internal error',
        success: false,
      };
      return response;
    }
  }

  @Delete('/delete/:id')
  deleteUser(@Param('id') userId: string): string {
    return this.userService.deleteUserService(userId);
  }

  @Get('/generate-pdf')
  generatePDF() {
    return this.userService.generatePDFService();
  }

  @Get('/download-pdf')
  downloadPDF() {
    return this.userService.downloadPdf();
  }

  @Get('/view-pdf')
  viewPDF() {
    return this.userService.viewPdf();
  }
}
