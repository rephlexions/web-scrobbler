export {};

Connector.playerSelector = '.page-live-tracks__body';

Connector.artistSelector =
	'.page-live-tracks__list li:first-child .live-track__artist-title';

Connector.trackSelector =
	'.page-live-tracks__list li:first-child .live-track__song-title';

Connector.scrobbleInfoLocationSelector = '.page-live-tracks__title';
Connector.scrobbleInfoStyle = {
	...Connector.scrobbleInfoStyle,
	fontSize: '0.7em',
	marginTop: '0.7em',
};
