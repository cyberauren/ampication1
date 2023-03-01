import { Module } from "@nestjs/common";
import { AaaBAaaB4ModuleBase } from "./base/aaaBAaaB4.module.base";
import { AaaBAaaB4Service } from "./aaaBAaaB4.service";
import { AaaBAaaB4Controller } from "./aaaBAaaB4.controller";
import { AaaBAaaB4Resolver } from "./aaaBAaaB4.resolver";

@Module({
  imports: [AaaBAaaB4ModuleBase],
  controllers: [AaaBAaaB4Controller],
  providers: [AaaBAaaB4Service, AaaBAaaB4Resolver],
  exports: [AaaBAaaB4Service],
})
export class AaaBAaaB4Module {}
