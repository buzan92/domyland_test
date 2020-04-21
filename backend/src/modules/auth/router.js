import * as auth from "./controller";
import { prepareParams, extract } from "../../middleware/smartRequest";
import { ensureUser } from "../../middleware/validators";

export const baseUrl = "/api/v1/auth";

export default [
  {
    method: "POST",
    route: "/",
    handlers: [auth.authUser]
  },
  {
    method: "POST",
    route: "/google",
    handlers: [
      prepareParams(ctx => extract(ctx.request.body)(["token"])),
      auth.googleAuth
    ]
  },
  {
    method: "GET",
    route: "/me",
    handlers: [
      ensureUser,
      auth.me
    ]
  }
];
