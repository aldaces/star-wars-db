class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
    
        const rel = await fetch(`${this._apiBase}${url}`);
    
        if (!rel.ok) {
           throw new Error (`Could not fetch ${url}, received ${rel.status}`) 
        }
    
        const body = await rel.json();
        
        return body;
    }
    getAllPeople() {
        return this.getResource('/people/')
    }

    getAllPeopleId(id) {
        return this.getResource(`/people/${id}/`)
    }
    getAllPlanet() {
        return this.getResource('/planet/')
    }

    getAllPlanetId(id) {
        return this.getResource(`/planet/${id}/`)
    }
    getAllStarships() {
        return this.getResource('/starships/')
    }

    getAllStarshipId(id) {
        return this.getResource(`/starships/${id}/`)
    }
};

const swapi = new SwapiService();

swapi.getAllStarships().then((body) => {
    console.log(body)
});