import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AaaBAaaB4Service } from "./aaaBAaaB4.service";
import { AaaBAaaB4ControllerBase } from "./base/aaaBAaaB4.controller.base";

@swagger.ApiTags("aaaBAaaB4s")
@common.Controller("aaaBAaaB4s")
export class AaaBAaaB4Controller extends AaaBAaaB4ControllerBase {
  constructor(
    protected readonly service: AaaBAaaB4Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
