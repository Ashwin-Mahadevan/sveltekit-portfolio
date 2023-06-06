import kv from "@vercel/kv";
import { KV_REST_API_TOKEN, KV_REST_API_URL } from "$env/static/private";

export const load = async () => ({
	views: kv.get("views").then((views) => (views as number) || 0)
});
