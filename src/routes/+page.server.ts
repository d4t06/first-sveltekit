import { PUBLIC_API_URL } from "$env/static/public";

export const load = async () => {
	const res: Promise<{ data: Song[] }> = fetch(`${PUBLIC_API_URL}/songs`).then(
		(res) => res.json(),
	);

	return { stream: res };
};
