import React, { Component } from 'react'
import { Form, Button,Modal } from 'react-bootstrap';
class Updatemodel extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showmodel} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>UP DATE</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updatedata}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label> Name</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.name} name='name' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>image</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.img} name='img'/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>level</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.level} name='level'/>
                            </Form.Group>
                            <Button variant="primary" type="submit"onClick={this.props.handleClose}>
                                update
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default Updatemodel