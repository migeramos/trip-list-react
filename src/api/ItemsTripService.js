import axios from "axios";

class ItemsTripService {

    retriveAllItems(){
        return axios.get('http://localhost:8080/trip-list/items');
    }

    retriveItemById(id){
        return axios.get(`http://localhost:8080/trip-list/items/${id}`);
    }

    saveItem(item){
        return axios.post('http://localhost:8080/trip-list/items', item);
    }

    deleteItem(id){
        return axios.delete(`http://localhost:8080/trip-list/items/${id}`);
    }
}

export default new ItemsTripService();