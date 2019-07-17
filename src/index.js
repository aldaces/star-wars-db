const getResource = async (url) => {
    
    const rel = await fetch(url);
    const body = await rel.json();
    
    return body;
};

getResource('https://swapi.co/api/people/1/').then( (body) => {
    console.log(body);
});