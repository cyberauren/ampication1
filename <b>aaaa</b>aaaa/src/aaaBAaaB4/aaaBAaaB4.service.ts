import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AaaBAaaB4ServiceBase } from "./base/aaaBAaaB4.service.base";

@Injectable()
export class AaaBAaaB4Service extends AaaBAaaB4ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
