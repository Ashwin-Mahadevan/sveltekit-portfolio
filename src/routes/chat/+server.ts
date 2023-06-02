import { redirect } from "@sveltejs/kit";

export const GET = ({ fetch }) => {
	throw redirect(307, "https://www.spinster.ai/ashwin");
};
