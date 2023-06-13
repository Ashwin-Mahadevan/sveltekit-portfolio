import { redis } from "$lib/server/database";

const { format } = Intl.NumberFormat("en", { notation: "compact" });

export const load = async () => {
	const views = await redis.incr("views").then(format);

	return { views };
};
