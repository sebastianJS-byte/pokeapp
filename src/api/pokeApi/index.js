import { API_HOST } from "../../utils/constants.js";

class Pokemon {
    constructor() {
        this.host = API_HOST
    }

    getPokemonlist = async (endpointUrl) => {
        try {
            const url = `${this.host}/pokemon?limit=30&offset=0`
            const response = await fetch(endpointUrl || url)
            const data = await response.json()
            return [data, null]
        } catch (e) {
            console.log(e)
            return [null, e]
        }
    }

    getPokemonDetail = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            return [data, null]
        } catch (e) {
            console.log(e)
            return [null, e]
        }
    }

    getPokemonInfo = async (id) => {
        try {
            const url = `${this.host}/pokemon/${id}`
            const response = await fetch(url)
            const data = await response.json()
            return [data, null]
        } catch (e) {
            console.log(e)
            return [null, e]
        }
    }
}


export const pokeApi = new Pokemon()
