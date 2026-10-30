// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type Song = {
		id: string;
		meta: string[];
		name: string;
		first_letter: string;
		image_url: string;
		image_file_id: string;
		song_url: string;
		song_file_id: string;
		beat_url: string;
		beat_file_id: string;
		owner_email: string;
		distributor: string;
		is_official: boolean;
		duration: number;
		like: number;
		comment: number;
		total_play: number;
		lyric_id: string;
		blurhash_encode: string;
		singers: Singer[];
		// singer_map: Record<string, boolean>;
		// main_genre?: Genre;
		// genres: Genre[];
		genre_ids: string[];
		// genre_map: Record<string, boolean>;
		size: number;
		queue_id: string;
		today_play: number;
		week_play: number;
		last_week_rank: number;
		rank: number;
		release_year: number;
		updated_at: Timestamp;
		created_at: Timestamp;
		last_active: Timestamp;
	};

	type Singer = {
		id: string;
		meta: string[];
		name: string;
		image_url: string;
		image_file_id: string;
		blurhash_encode: string;
		description: string;
		like: number;
		created_at: Timestamp;
	};

	type Tab = "playing" | "queue" | "lyric";

	type Lyric = {
		start: number;
		end: number;
		text: string;
	};

	type SongLyric = {
		base: string;
		lyrics: string;
	};

	type LyricStatus = "active" | "done" | "coming";
}

export {};
