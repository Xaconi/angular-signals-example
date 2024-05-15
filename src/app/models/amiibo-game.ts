import { AmiiboUsage } from "./amiibo-usage";

export interface AmiiboGame {
  amiiboUsage: AmiiboUsage;
  gameID: Array<string>;
  gameName: string;
}
