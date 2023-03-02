import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AaaBAaaB4ResolverBase } from "./base/aaaBAaaB4.resolver.base";
import { AaaBAaaB4 } from "./base/AaaBAaaB4";
import { AaaBAaaB4Service } from "./aaaBAaaB4.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Aaabaaab4)
export class AaaBAaaB4Resolver extends AaaBAaaB4ResolverBase {
  constructor(
    protected readonly service: AaaBAaaB4Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
