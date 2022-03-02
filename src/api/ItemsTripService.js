import axios from "axios";

class ItemsTripService {

    constructor(){
        console.log(process.env);
        console.log(process.env.REACT_APP_TRIP_TOKEN);
        if(process.env.PRODTOKEN != null){
            this.host = 'https://trip-list-eevee1.herokuapp.com';
        }
        else{
            this.host = 'http://localhost:8080';
        }
    }

    retriveAllItems(){
        return axios.get(`${this.host}/trip-list/items`);
    }

    retriveItemById(id){
        return axios.get(`${this.host}/trip-list/items/${id}`);
    }

    saveItem(item){
        return axios.post(`${this.host}/trip-list/items`, item);
    }

    deleteItem(id){
        return axios.delete(`${this.host}/trip-list/items/${id}`);
    }
}

export default new ItemsTripService();