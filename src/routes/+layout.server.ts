import { redis } from "$lib/server/database";

const { format } = Intl.NumberFormat("en", { notation: "compact" });

export const load = async () => {
	return { views: redis.incr("views").then(format) };
};
