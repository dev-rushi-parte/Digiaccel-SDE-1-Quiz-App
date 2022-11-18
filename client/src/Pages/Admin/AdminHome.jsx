import React from 'react'
import Form from 'react-bootstrap/Form';
import NavbarTop from '../../Component/NavbarTop'
import style from './Admin.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AdminHome() {

    const HandelSelect = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <NavbarTop />
            <div style={{ marginTop: "10rem", width: "80%", margin: "auto" }}>

                <Button variant="info" className='float-end text-light'>Add Question</Button>

                <Card
                    className='container center_div text-center mt-5'
                    style={{ width: '50rem' }}>

                    <Card.Body>
                        <Card.Title>Genetate the Link</Card.Title>

                        <Form.Select
                            onChange={HandelSelect}
                            className='container center_div text-center mt-3'
                            style={{ width: '20rem' }} aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="10">Ten</option>
                            <option value="20">Twenty</option>
                            <option value="30">Thirty</option>
                        </Form.Select>

                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="success">Generate Link</Button>
                    </Card.Body>
                </Card>


            </div>
        </div>
    )
}

export default AdminHome