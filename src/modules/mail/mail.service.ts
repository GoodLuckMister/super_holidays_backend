import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { LoginUserDto } from 'modules/users/create-user.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserInformation(user: LoginUserDto) {
    await this.mailerService.sendMail({
      to: user.email,
      from: '"Support Team" <alexeysystem@meta.ua>',
      subject: 'Welcome to ZenBit! This is your access',
      template: './email-template',
      context: {
        name: user.email,
        email: user.email,
        password: user.password,
      },
    });
  }
}
