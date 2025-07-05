import { cookies } from "next/headers";
import { createJWT, verifyJWT } from "./jwt";

const cookie_name = "pizza";

export function getJWT() {
  return new Promise(async (resolve, reject) => {
    try {
      const _cookies = await cookies();
      const cookie = _cookies.get(cookie_name);

      if (cookie) {
        const result = await verifyJWT(cookie.value);

        resolve(result);
      } else resolve(null);
    } catch (err) {
      reject(err);
    }
  });
}

export function setJWT() {
  return new Promise(async (resolve, reject) => {
    try {
      const token = await createJWT();
      const _cookies = await cookies();

      _cookies.set(cookie_name, token, {
        httpOnly: true,
        secure: (process.env.NODE_ENV === "production"),
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7
      });

      resolve(token);
    } catch (err) {
      reject(err);
    }
  });
}