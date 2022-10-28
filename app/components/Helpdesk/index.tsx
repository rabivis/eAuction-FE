import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    message?: boolean | String;
    messageType?: 'success'| 'danger' | 'alert' | '';
};

function Helpdesk(props: Props) {

    return (
        <div className="row pt-3" id="border-btm">
            <div className="col-8">
                { (props.message) && <div className={`alert alert-${props.messageType}`}>
                    <strong>{props.messageType}!</strong> {props.message}
                </div> }
            </div>
            <div className="col-4">
                <div className="row justify-content-right">
                    <div className="col-12">
                        <p className="mb-0 mr-4 mt-4 text-right"><FontAwesomeIcon icon={["fas", "headset"]} />&nbsp; customer@email.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Helpdesk;