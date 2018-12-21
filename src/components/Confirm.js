import React, {Component} from 'react';

export class Confirm extends Component
{
    continue = e => {
        e.preventDefault();
        // Process form

        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {values: {firstName, lastName, email, occupation, city, bio}} = this.props;

        return (
            <div className={'row'}>
                <div className={'col-md-12 p-2'}>
                    <ul className="list-group mb-2">
                        <li className="list-group-item list-group-item-action">First Name: {firstName}</li>
                        <li className="list-group-item list-group-item-action">Last Name: {lastName}</li>
                        <li className="list-group-item list-group-item-action">Email: {email}</li>
                        <li className="list-group-item list-group-item-action">Occupation: {occupation}</li>
                        <li className="list-group-item list-group-item-action">City: {city}</li>
                        <li className="list-group-item list-group-item-action">Male: {bio}</li>
                    </ul>

                    <button type={'button'} className={'btn btn-info mr-1'} onClick={this.continue}>Continue</button>
                    <button type={'button'} className={'btn btn-light ml-1'} onClick={this.back}>Back</button>
                </div>
            </div>
        );
    }
}

export default Confirm;