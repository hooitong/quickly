export class Show {
  public name: string;
  public type: string;
  public season: number;
  public episode: number;
  public airdate: Date;
  public poster: string;
  public synopsis: string;
  public episodeTitle: string;

  constructor(name: string, type: string, season: number,
              episode: number, airdate: Date, poster: string,
              synopsis: string, episodeTitle: string) {
    this.name = name;
    this.type = type;
    this.season = season;
    this.episode = episode;
    this.airdate = airdate;
    this.poster = poster;
    this.synopsis = synopsis;
    this.episodeTitle = episodeTitle;
  }
}
