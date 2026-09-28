import { PUBLIC_API_URL } from "$env/static/public";

export const load = async () => {
	const res = await fetch(`${PUBLIC_API_URL}/songs`);

	if (!res.ok) return [];
	const payload = await res.json();

	return { songs: payload.data as Song[] };
};
