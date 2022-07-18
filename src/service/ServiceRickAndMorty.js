import { Api } from './Api';

export class ServiceRickAndMorty {
  #countPages;
  #episodes = new Map();
  #charactersInfo = new Map();

  constructor() {
    this.api = new Api();
  }

  async getCountPages() {
    if (this.#countPages != null) {
      return this.#countPages;
    }

    const { data } = await this.api.getInfoAllEpisodes();
    this.#countPages = data.info.pages;

    return this.#countPages;
  }

  async getPageEpisodes(page) {
    if (this.#episodes.has(page)) {
      return this.#episodes.get(page);
    }

    const { data } = await this.api.getPageEpisodes(page);
    this.#episodes.set(page, data?.results);

    return data?.results;
  }

  async getInfoCharacters(characters) {
    const result = [];
    let restIdCharacters = characters.split(',');

    characters.split(',').forEach((idCharacter) => {
      if (this.#charactersInfo.has(idCharacter)) {
        result.push(this.#charactersInfo.get(idCharacter));
        restIdCharacters = restIdCharacters.filter((id) => id !== idCharacter);
      }
    });

    if (restIdCharacters.length > 0) {
      const { data } = await this.api.getInfoCharacters(
        restIdCharacters.join(',')
      );

      data.forEach((character) => {
        this.#charactersInfo.set(character.id.toString(), character);
        result.push(character);
      });
    }

    return result;
  }
}
