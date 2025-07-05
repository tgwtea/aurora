import { jwtVerify, SignJWT } from "jose";
import { v4 } from "uuid";

const secret = new TextEncoder().encode(process.env.SESSION_KEY);

export async function createJWT() {
  return new Promise(async (resolve, reject) => {
    try {
      const jwt = await new SignJWT({
        uid: v4()
      })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secret);

      resolve(jwt);
    } catch (err) {
      reject(err);
    }
  });
}

export function verifyJWT(token) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await jwtVerify(token, secret);

      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}