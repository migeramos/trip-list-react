import React, {Component} from "react";
import ItemsTripService from "../api/ItemsTripService";


class DataComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            listItems:[],
            message: null
        }
        this.additem = this.additem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount(){
        ItemsTripService.retriveAllItems()
            .then(
                response => {
                    this.setState({listItems: response.data});
                }
            )
    }

    additem(){
        this.props.history.push(`/items/-1`);
    }

    updateItem(id){
        this.props.history.push(`/items/${id}`);
    }

    deleteItem(id, description){
        ItemsTripService.deleteItem(id)
            .then(
                response => {
                    this.setState(
                        {message: `Item ${description} deleted`}
                    )
                    this.refreshItems();
                }
            );
    }

    refreshItems(){
        ItemsTripService.retriveAllItems()
            .then(
                response => {
                    this.setState({listItems: response.data});
                }
            );
    }

    render(){
        return(
            <div>
                <div className="container">
                    <h2 className="h4-margin">Trip Objects</h2>
                    {this.state.message && <div className="alert alert-warning">{this.state.message}</div>}
                    <ul className="list-group">
                    {this.state.listItems.map(item => (
                        <li className="list-group-item" key={item.id}>
                            <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <h4 className="list-group-item-heading">{item.description}</h4>
                                <p className="list-group-item-text">{item.responsable}</p>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <button className="btn btn-success btn-action" onClick={() => this.updateItem(item.id)}><i className="fa fa-bars"></i> Update</button>
                                <button className="btn btn-danger btn-action" onClick={() => this.deleteItem(item.id, item.description)}><i className="fa fa-trash"></i> Trash</button>
                            </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                    <div className="list-group marginTop">
                        <button className="btn btn-success btn-block" onClick={this.additem}>New</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DataComponent;