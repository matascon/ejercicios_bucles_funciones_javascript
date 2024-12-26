const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const newListTracks = [];
let existTrack = false;

for (const track of tracks) {
	if (!newListTracks.length) {
		newListTracks.push({[track.genre]: [track.title]});
	} else {
		newListTracks.forEach((listTrack) => {
			if (listTrack[track.genre]) {
				listTrack[track.genre].push(track.title);
				existTrack = true;
			}
		});
		if (!existTrack) {
			newListTracks.push({[track.genre]: [track.title]});
		}
		existTrack = false;
	}
}

console.log(newListTracks);