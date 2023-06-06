import kv from "@vercel/kv";

const { format } = Intl.NumberFormat("en", { notation: "compact" });

export const load = () => {
	const views = kv.incr("views").then(format);

	return {
		stream: { views }
	};
};
