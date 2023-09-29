export const getService = async (url:string) => {
    const settings = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const fetchResponse = await fetch('https://pokeapi.co/api/v2/'+url, settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }    
};