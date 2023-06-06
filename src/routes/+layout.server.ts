import kv from "@vercel/kv";

const { format } = Intl.NumberFormat("en", { notation: "compact" });

export const load = async () => {
	const views = kv.incr("views").then(format);

	console.log(await views);

	return {
		stream: { views }
	};
};
