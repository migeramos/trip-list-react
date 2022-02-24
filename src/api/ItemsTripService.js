import axios from "axios";

class ItemsTripService {

    host = 'https://trip-list-eevee1.herokuapp.com';

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