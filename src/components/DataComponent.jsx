import React, {Component} from "react";

const list = [
    {
      id: '1',
      object: 'Tequila',
      responsable: 'Blue',
    },
    {
        id: '2',
        object: 'Mezcal',
        responsable: 'Rex',
    },
  ];

class DataComponent extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <h2>List Object For Trip</h2>
                    <ul className="list-group">
                    {list.map(item => (
                        <li class="list-group-item" key={item.id}>
                            <div className="container">
                                <h4 class="list-group-item-heading">{item.object}</h4>
                                <p class="list-group-item-text">{item.responsable}</p>
                            </div>
                            <div className="container">
                                <button className="btn btn-warning">Update</button>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </li>
                        ))}
                    </ul>
                    <div className="list-group marginTop">
                        <button className="btn btn-success btn-block" >New</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DataComponent;