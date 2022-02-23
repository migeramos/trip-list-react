import React, {Component} from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ItemsTripService from "../api/ItemsTripService";

class ItemComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            description: 'Object',
            responsable: 'ELSA'
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount(){
        if(this.state.id===-1){
            return;
        }

        ItemsTripService.retriveItemById(this.state.id)
            .then(
                response => this.setState(
                    {
                        id: response.data.id,
                        description: response.data.description,
                        responsable: response.data.responsable
                    }
                )
            );
    }

    validate(values){
        let errors = {};
        if(values.description.length < 1){
            errors.description = "Description field should be at least 1 character"
        }
        return errors;
    }

    onSubmit(values){
        let itemObj ={
            description: values.description,
            responsable: values.responsable
        };
        if(this.state.id!==-1){
            itemObj = {
                id: this.state.id,
                ...itemObj
            };
        }
        ItemsTripService.saveItem(itemObj)
                .then(() => this.props.history.push('/'));
    }

    render(){
        let {description, responsable} = this.state;
        return (
            <div>
                <h1>Add Item</h1>
                <div className="container">
                    <Formik initialValues={{description, responsable}}
                            onSubmit={this.onSubmit}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={this.validate}
                            enableReinitialize={true}>
                        {(props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Responsable</label>
                                    <Field className="form-control" as="select" name="responsable">
                                        <option value="ELSA">ELSA</option>
                                        <option value="ERICK">ERICK</option>
                                        <option value="FERNANDA">FERNANDA</option>
                                        <option value="MARIO">MARIO</option>
                                        <option value="MIGUEL">MIGUEL</option>
                                        <option value="NADIA">NADIA</option>
                                        <option value="NOE">NOE</option>
                                    </Field>
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        );
    }


}

export default ItemComponent;