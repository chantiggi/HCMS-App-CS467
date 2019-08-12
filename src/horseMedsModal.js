import React from 'react';
import { AMMedList } from './AMMedList';
import { PMMedList } from './PMMedList';

import { MedList } from './medList';

export class HorseMedsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if(!this.props.show) {
            return null;
        }
        return (
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6>Horse Medications - {this.props.horseName}</h6>
                            <button type="button" className="close" aria-label="Close" onClick={this.props.onClose}>X</button>
                        </div>
                        <div className="modal-body modal-sm">
                            <h6>AM:</h6>
                            <AMMedList horseID={this.props.horseID}></AMMedList>
                            <h6>PM:</h6>
                            <PMMedList horseID={this.props.horseID}></PMMedList>
                        </div>
                    </div>
                </div>
        )
    }
}








