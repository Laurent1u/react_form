import React, {Component} from 'react';

export class FormUserDetails extends Component
{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const {values, handleChange} = this.props;

        return (
            <div className={'row'}>
                <div className={'col p-2'}>
                    <form action="#">
                        <div className={'form-group'}>
                            <label htmlFor="firstName">
                                <input type="text" className={'form-control'} name={'firstName'} id={'firstName'} placeholder={' '}
                                       onChange={handleChange('firstName')}
                                       defaultValue={values.firstName}
                                />
                                <span className={'placeholder'}>First name..</span>
                            </label>
                        </div>
                        <div className={'form-group'}>
                            <label htmlFor="lastName">
                                <input type="text" className={'form-control'} name={'lastName'} id={'lastName'} placeholder={' '}
                                       onChange={handleChange('lastName')}
                                       defaultValue={values.lastName}
                                />
                                <span className={'placeholder'}>Last name..</span>
                            </label>
                        </div>
                        <div className={'form-group'}>
                            <label htmlFor="email">
                                <input type="text" className={'form-control'} name={'email'} id={'email'} placeholder={' '}
                                       onChange={handleChange('email')}
                                       defaultValue={values.email}
                                />
                                <span className={'placeholder'}>Email..</span>
                            </label>
                        </div>
                        <button type={'button'} className={'btn btn-info'} onClick={this.continue}>Continue</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormUserDetails;