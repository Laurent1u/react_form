import React, {Component} from 'react';

export class Success extends Component
{
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
          <div>
              <h1>Thank you !</h1>
              <button type={'button'} className={'btn btn-light ml-1'} onClick={this.back}>Back</button>
          </div>
        );
    };
}

export default Success;