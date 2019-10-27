// General imports
import React from 'react'
// Styles
import './styles/Modal.css'

const Modal = ({ closeModal, user }) => {
    return (
        <div className="modal-content border-primary">
            <div className="modal-header">
                <h4 className="modal-title font-weight-bold">User details</h4>
            </div>
            <div className="modal-body">
                <div className="row center">
                    <div className="col-3">
                        <div className="center-block">
                            <img src={user.avatar} className="avatar" alt="avatar" />
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="center-block">
                            <h5><span className="font-weight-bold">Id:</span> {user.id}</h5>
                            <h5><span className="font-weight-bold">Email:</span> {user.email}</h5>
                            <h5><span className="font-weight-bold">Name:</span> {`${user.first_name} ${user.last_name}`}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={closeModal}>Close</button>
            </div>
        </div>
  )
}

export default Modal