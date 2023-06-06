import kv from "@vercel/kv";

const { format } = Intl.NumberFormat("en", { notation: "compact" });

export const load = async () => {
	return { views: kv.incr("views").then(format) };
};
