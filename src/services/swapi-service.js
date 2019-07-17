export default class SwapiService {

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
        return this.getResource('/planets/')
    }

    getAllPlanetId(id) {
        return this.getResource(`/planets/${id}/`)
    }
    getAllStarships() {
        return this.getResource('/starships/')
    }

    getAllStarshipId(id) {
        return this.getResource(`/starships/${id}/`)
    }
};