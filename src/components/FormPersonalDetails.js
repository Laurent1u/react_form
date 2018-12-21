import React, {Component} from 'react';

export class FormPersonalDetails extends Component
{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {values, handleChange} = this.props;

        return (
            <div className={'row'}>
                <div className={'col-lg-12 p-2'}>
                    <form action="#">
                        <div className={'form-group'}>
                            <label htmlFor="occupation">
                                <input type="text" className={'form-control'} name={'occupation'} id={'occupation'} placeholder={' '}
                                       onChange={handleChange('occupation')}
                                       defaultValue={values.occupation}
                                />
                                <span className={'placeholder'}>Occupation..</span>
                            </label>
                        </div>
                        <div className={'form-group'}>
                            <label htmlFor="city">
                                <input type="text" className={'form-control'} name={'city'} id={'city'} placeholder={' '}
                                       onChange={handleChange('city')}
                                       defaultValue={values.city}
                                />
                                <span className={'placeholder'}>City..</span>
                            </label>
                        </div>
                        <div className={'form-group'}>
                            <label htmlFor="bio">
                                <input type="text" className={'form-control'} name={'bio'} id={'bio'} placeholder={' '}
                                       onChange={handleChange('bio')}
                                       defaultValue={values.bio}
                                />
                                <span className={'placeholder'}>Bio..</span>
                            </label>
                        </div>
                        <button type={'button'} className={'btn btn-info mr-1'} onClick={this.continue}>Continue</button>
                        <button type={'button'} className={'btn btn-light ml-1'} onClick={this.back}>Back</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormPersonalDetails;