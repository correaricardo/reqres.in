// General imports
import React from 'react'
import { connect } from 'react-redux'
// Modal
import ReactModal from 'react-modal';
// Components
import Modal from '../components/Modal';

const mapStateToProps = state => ({
    ...state.modal
})

class ModalContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.closeModal = this.closeModal.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({
                modalIsOpen: nextProps.modalProps.open
            })
        }
    }

    closeModal() {
        this.setState({ modalIsOpen: false })
    }

    render() {  

        return (
            <div>
                <ReactModal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                    className="modal-dialog modal-dialog-centered"
                >
                    <Modal
                      closeModal={this.closeModal}
                      user={this.props.modalProps.user}
                    />

                </ReactModal>
            </div>
        )
  }
}

export default connect(
    mapStateToProps, 
    null
)(ModalContainer)