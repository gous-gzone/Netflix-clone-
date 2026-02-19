// Netflix clone - movie data (replace with TMDB API for production)
const img = (seed, w = 300, h = 450) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const popularMovies = [
  { id: 1, title: 'Stranger Things', image: img('stranger1'), gradient: 'from-violet-900/80' },
  { id: 2, title: 'The Crown', image: img('crown2'), gradient: 'from-amber-900/60' },
  { id: 3, title: 'Wednesday', image: img('wednesday3'), gradient: 'from-slate-800' },
  { id: 4, title: 'Squid Game', image: img('squid4'), gradient: 'from-rose-900/70' },
  { id: 5, title: 'Money Heist', image: img('heist5'), gradient: 'from-red-900/70' },
  { id: 6, title: 'Dark', image: img('dark6'), gradient: 'from-blue-950' },
  { id: 7, title: 'Bridgerton', image: img('bridgerton7'), gradient: 'from-pink-900/60' },
  { id: 8, title: 'The Witcher', image: img('witcher8'), gradient: 'from-gray-800' },
  { id: 9, title: 'Narcos', image: img('narcos9'), gradient: 'from-amber-900/50' },
  { id: 10, title: 'Ozark', image: img('ozark10'), gradient: 'from-teal-900/60' },
];

export const trendingNow = [
  { id: 11, title: 'Breaking Bad', image: img('bb11'), gradient: 'from-green-900/70' },
  { id: 12, title: 'Peaky Blinders', image: img('pb12'), gradient: 'from-stone-800' },
  { id: 13, title: 'The Last of Us', image: img('tlou13'), gradient: 'from-emerald-900/60' },
  { id: 14, title: 'House of Dragon', image: img('hod14'), gradient: 'from-orange-900/60' },
  { id: 15, title: 'Arcane', image: img('arcane15'), gradient: 'from-indigo-900/70' },
  { id: 16, title: 'The Sandman', image: img('sandman16'), gradient: 'from-purple-950' },
  { id: 17, title: 'Mindhunter', image: img('mind17'), gradient: 'from-zinc-800' },
  { id: 18, title: 'Black Mirror', image: img('bm18'), gradient: 'from-slate-900' },
];

export const movies = [
  { id: 30, title: 'The Gray Man', image: img('grayman30'), gradient: 'from-slate-700' },
  { id: 31, title: 'Red Notice', image: img('rednotice31'), gradient: 'from-amber-800' },
  { id: 32, title: 'Glass Onion', image: img('glass32'), gradient: 'from-yellow-900' },
  { id: 33, title: 'Extraction 2', image: img('extraction33'), gradient: 'from-amber-950' },
  { id: 34, title: 'The Adam Project', image: img('adam34'), gradient: 'from-blue-900' },
  { id: 35, title: 'Enola Holmes 2', image: img('enola35'), gradient: 'from-rose-900' },
  { id: 36, title: 'Don\'t Look Up', image: img('dontlook36'), gradient: 'from-red-900' },
  { id: 37, title: 'The Killer', image: img('killer37'), gradient: 'from-zinc-800' },
  { id: 38, title: 'Leave the World Behind', image: img('leave38'), gradient: 'from-emerald-950' },
  { id: 39, title: 'Bird Box', image: img('birdbox39'), gradient: 'from-slate-900' },
];

export const drama = [
  { id: 40, title: 'The Crown', image: img('crownd40'), gradient: 'from-amber-900' },
  { id: 41, title: 'Succession', image: img('succession41'), gradient: 'from-zinc-800' },
  { id: 42, title: 'House of Cards', image: img('hoc42'), gradient: 'from-slate-900' },
  { id: 43, title: 'Damsel', image: img('damsel43'), gradient: 'from-rose-900' },
  { id: 44, title: 'The Diplomat', image: img('diplomat44'), gradient: 'from-blue-900' },
  { id: 45, title: 'Ginny & Georgia', image: img('ginny45'), gradient: 'from-pink-800' },
  { id: 46, title: 'The Watcher', image: img('watcher46'), gradient: 'from-red-900' },
  { id: 47, title: 'The Midnight Club', image: img('midnight47'), gradient: 'from-violet-950' },
  { id: 48, title: '1899', image: img('drama1899'), gradient: 'from-stone-900' },
  { id: 49, title: 'The Night Agent', image: img('nightagent49'), gradient: 'from-slate-800' },
];

export const comedy = [
  { id: 50, title: 'The Office', image: img('office50'), gradient: 'from-yellow-800' },
  { id: 51, title: 'Friends', image: img('friends51'), gradient: 'from-orange-600' },
  { id: 52, title: 'Community', image: img('community52'), gradient: 'from-amber-700' },
  { id: 53, title: 'The Good Place', image: img('goodplace53'), gradient: 'from-cyan-700' },
  { id: 54, title: 'Unbreakable Kimmy Schmidt', image: img('kimmy54'), gradient: 'from-pink-600' },
  { id: 55, title: 'Grace and Frankie', image: img('grace55'), gradient: 'from-rose-700' },
  { id: 56, title: 'Never Have I Ever', image: img('nhie56'), gradient: 'from-purple-700' },
  { id: 57, title: 'Emily in Paris', image: img('emily57'), gradient: 'from-pink-500' },
  { id: 58, title: 'Space Force', image: img('spaceforce58'), gradient: 'from-blue-800' },
  { id: 59, title: 'The Politician', image: img('politician59'), gradient: 'from-amber-800' },
];

export const hollywood = [
  { id: 60, title: 'Oppenheimer', image: img('oppenheimer60'), gradient: 'from-amber-950' },
  { id: 61, title: 'Barbie', image: img('barbie61'), gradient: 'from-pink-500' },
  { id: 62, title: 'Dune: Part Two', image: img('dune62'), gradient: 'from-amber-900' },
  { id: 63, title: 'The Batman', image: img('batman63'), gradient: 'from-slate-900' },
  { id: 64, title: 'Top Gun: Maverick', image: img('maverick64'), gradient: 'from-blue-900' },
  { id: 65, title: 'Avatar: The Way of Water', image: img('avatar65'), gradient: 'from-cyan-900' },
  { id: 66, title: 'John Wick 4', image: img('wick66'), gradient: 'from-zinc-800' },
  { id: 67, title: 'Black Widow', image: img('widow67'), gradient: 'from-red-900' },
  { id: 68, title: 'Spider-Man: No Way Home', image: img('spiderman68'), gradient: 'from-red-800' },
  { id: 69, title: 'The Avengers', image: img('avengers69'), gradient: 'from-blue-800' },
];

export const bollywood = [
  { id: 70, title: 'Jawan', image: img('jawan70'), gradient: 'from-red-900' },
  { id: 71, title: 'Pathaan', image: img('pathaan71'), gradient: 'from-rose-900' },
  { id: 72, title: 'Rocky Aur Rani', image: img('rark72'), gradient: 'from-pink-700' },
  { id: 73, title: 'Animal', image: img('animal73'), gradient: 'from-amber-900' },
  { id: 74, title: '3 Idiots', image: img('3idiots74'), gradient: 'from-yellow-700' },
  { id: 75, title: 'Dangal', image: img('dangal75'), gradient: 'from-amber-800' },
  { id: 76, title: 'RRR', image: img('rrr76'), gradient: 'from-orange-900' },
  { id: 77, title: 'Sacred Games', image: img('sg77'), gradient: 'from-amber-900' },
  { id: 78, title: 'Gully Boy', image: img('gully78'), gradient: 'from-indigo-900' },
  { id: 79, title: 'Delhi Belly', image: img('delhi79'), gradient: 'from-yellow-800' },
];

export const myList = [
  { id: 19, title: "The Queen's Gambit", image: img('gambit19'), gradient: 'from-cyan-900/50' },
  { id: 20, title: 'Lupin', image: img('lupin20'), gradient: 'from-blue-900/60' },
  { id: 21, title: 'Top Boy', image: img('topboy21'), gradient: 'from-yellow-900/40' },
  { id: 22, title: 'Sacred Games', image: img('sg22'), gradient: 'from-amber-900/60' },
  { id: 23, title: 'Stranger Things', image: img('st23'), gradient: 'from-violet-900' },
  { id: 24, title: 'Breaking Bad', image: img('bb24'), gradient: 'from-green-900' },
];

// All movies for search
export const allMovies = [
  ...popularMovies,
  ...trendingNow,
  ...movies,
  ...drama,
  ...comedy,
  ...hollywood,
  ...bollywood,
  ...myList,
];

export const searchMovies = (query) => {
  if (!query || query.trim().length < 2) return [];
  const q = query.trim().toLowerCase();
  return allMovies.filter((m) => m.title.toLowerCase().includes(q));
};
