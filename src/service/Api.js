import { client } from './client';

export class Api {
  constructor() {
    this.client = client;
  }

  getInfoAllEpisodes() {
    return this.client.get('/episode');
  }

  getPageEpisodes(page) {
    return this.client.get(`/episode?page=${page}`);
  }

  getInfoCharacters(characters) {
    return this.client.get(`/character/${characters}`);
  }
}
