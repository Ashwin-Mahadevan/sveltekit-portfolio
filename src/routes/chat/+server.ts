import { redirect } from "@sveltejs/kit";

export const GET = () => {
	throw redirect(307, "https://www.spinster.ai/ashwin");
};
