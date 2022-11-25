export default class SwapIpiService {
  async getResourse (url) {
    const request = await fetch(url);
    if (!request.ok) {
      throw new Error(`Could not fetch ${url}, recieve ${request.status}`);
    }
    return await request.json();
  }

  async getAllPeople() {
    const result = await this.getResourse(`https://swapi.dev/api/people/`);
    return result.results;
  }
  async getPerson(id) {
    const result = await this.getResourse(`https://swapi.dev/api/people/${id}/`);
    return result;
  }
  async getAllPlanets() {
    const result = await this.getResourse(`https://swapi.dev/api/planets/`);
    return result.results;
  }
  async getPlanet(id) {
    const result = await this.getResourse(`https://swapi.dev/api/planets/${id}/`);
    return result;
  }
  async getAllStarShips() {
    const result = await this.getResourse(`https://swapi.dev/api/starships/`);
    return result.results;
  }
  async getStarship(id) {
    const result = await this.getResourse(`https://swapi.dev/api/starships/${id}/`);
    return result;
  }
}

// const swapi = new SwapIpiService();
// swapi.getAllPeople()
//   .then((arr) => arr.forEach((element) => console.log(element.name)));
// swapi.getPerson(2)
//   .then((person) => console.log(person.name));

