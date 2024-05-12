export interface Amiibo {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release: {
      au: string;
      eu: string;
      jp: string;
      na: string;
  };
  tail: string;
  type: string;
  games3DS?: Array<AmiiboGame>;
  gamesSwitch?: Array<AmiiboGame>;
  gamesWiiU?: Array<AmiiboGame>;
}

interface AmiiboUsage {
  Usage: string;
  write: string;
}

interface AmiiboGame {
  amiiboUsage: AmiiboUsage;
  gameID: Array<string>;
  gameName: string;
}
