import kv from "@vercel/kv";

export const load = () => ({ views: kv.incr("views") });
