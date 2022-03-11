import React, {Component} from "react";
import ItemsTripService from "../api/ItemsTripService";


class DataComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            listItems:[],
            message: null,
            filterBy: [],
            filtersClassName: {
                elsaButton: "btn-outline-secondary",
                erickButton: "btn-outline-secondary",
                ferButton: "btn-outline-secondary",
                marioButton: "btn-outline-secondary",
                miguelButton: "btn-outline-secondary",
                nadiaButton: "btn-outline-secondary",
                noeButton: "btn-outline-secondary"
            }
        }
        this.additem = this.additem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.filterByAction = this.filterByAction.bind(this);
        this.isOnTheFilter = this.isOnTheFilter.bind(this);
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

    filterByAction(filterBySelect){
        let itemsFilterBy = [...this.state.filterBy];
        if(itemsFilterBy.some(item => item === filterBySelect)){
            itemsFilterBy = itemsFilterBy.filter( item => item !== filterBySelect);
        }else{
            itemsFilterBy.push(filterBySelect);
        }
        this.setState(
            {filterBy: itemsFilterBy}
        );
        console.log(itemsFilterBy);
        this.isOnTheFilter(filterBySelect, itemsFilterBy);
    }

    isOnTheFilter(responsable, itemsFilterBy){
        if(itemsFilterBy.some( filterBy => filterBy === responsable)){
            console.log("is on the filter: "+responsable);
            this.setClassNameToFilter(responsable, "btn-dark")
        }
        else{
            console.log("is NOT on the filter: "+responsable);
            this.setClassNameToFilter(responsable, "btn-outline-secondary")
        }
    }

    setClassNameToFilter(responsable, className){
        switch(responsable){
            case 'ELSA':
                console.log("responsable: "+responsable+" change classname to "+className);
                this.setState({filtersClassName: {...this.state.filtersClassName, elsaButton: className}});
                break;
            case 'ERICK':
                console.log("responsable: "+responsable+" change classname to "+className);
                this.setState({filtersClassName: {...this.state.filtersClassName, erickButton: className}});
                break
            case 'FERNANDA':
                console.log("responsable: "+responsable+" change classname to "+className);
                this.setState({filtersClassName: {...this.state.filtersClassName, ferButton: className}});
                break;
            case 'MARIO':
                console.log("responsable: "+responsable+" change classname to "+className);
                this.setState({filtersClassName: {...this.state.filtersClassName, marioButton: className}});
                break
            case 'MIGUEL':
                console.log("responsable: "+responsable+" change classname to "+className);
                this.setState({filtersClassName: {...this.state.filtersClassName, miguelButton: className}});
                break
            case 'NADIA':
                console.log("responsable: "+responsable+" change classname to "+className);
                this.setState({filtersClassName: {...this.state.filtersClassName, nadiaButton: className}});
                break;
            case 'NOE':
                console.log("responsable: "+responsable+" change classname to "+className);
                this.setState({filtersClassName: {...this.state.filtersClassName, noeButton: className}});
                break
        }
    }

    render(){
        return(
            <div>
                <div className="container">
                    <h2 className="h4-margin">Trip Objects</h2>
                    <nav class="nav nav-pills nav-fill">
                        <button className={`nav-item nav-link btn ${this.state.filtersClassName.elsaButton}`} onClick={() => this.filterByAction('ELSA')}>ELSA</button>
                        <button className={`nav-item nav-link btn ${this.state.filtersClassName.erickButton}`} onClick={() => this.filterByAction('ERICK')}>ERICK</button>
                        <button className={`nav-item nav-link btn ${this.state.filtersClassName.ferButton}`} onClick={() => this.filterByAction('FERNANDA')}>FERNANDA</button>
                        <button className={`nav-item nav-link btn ${this.state.filtersClassName.marioButton}`} onClick={() => this.filterByAction('MARIO')}>MARIO</button>
                        <button className={`nav-item nav-link btn ${this.state.filtersClassName.miguelButton}`} onClick={() => this.filterByAction('MIGUEL')}>MIGUEL</button>
                        <button className={`nav-item nav-link btn ${this.state.filtersClassName.nadiaButton}`} onClick={() => this.filterByAction('NADIA')}>NADIA</button>
                        <button className={`nav-item nav-link btn ${this.state.filtersClassName.noeButton}`} onClick={() => this.filterByAction('NOE')}>NOE</button>
                    </nav>
                    {this.state.message && <div className="alert alert-warning">{this.state.message}</div>}
                    <ul className="list-group">
                    {this.state.listItems
                        .filter( item => this.state.filterBy.length === 0 ? true : this.state.filterBy.some( filterBy => filterBy === item.responsable ))
                        .map( item => (
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
                    <div className="list-group marginTop marginBottom">
                        <button className="btn btn-success btn-block" onClick={this.additem}>New</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DataComponent;