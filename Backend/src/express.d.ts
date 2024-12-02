// src/express.d.ts

import { userPayload } from "./Entities/Usertypes"; // Adjust to the correct path

declare global {
  namespace Express {
    interface Request {
      userdata?: userPayload;
    }
  }
}
