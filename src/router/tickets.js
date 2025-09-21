import { create } from "../controller/tickets/create.js";
import { index } from "../controller/tickets/index.js";
import { remove } from "../controller/tickets/remove.js";
import { updateStatus } from "../controller/tickets/updadeStatus.js";
import { update } from "../controller/tickets/update.js";
export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create
  },
  {
    method: "GET",
    path: "/tickets",
    controller: index
  },
  {
    method: "PUT",
    path: "/tickets/:id",
    controller: update
  },
   {
    method: "PATCH",
    path: "/tickets/:id/closed",
    controller: updateStatus
  },
   {
    method: "DELETE",
    path: "/tickets/:id",
    controller: remove
  },
]