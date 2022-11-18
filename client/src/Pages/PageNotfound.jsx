import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function PageNotfound() {
    return (
        <div>
            <div className="col-md-12 text-center fs-1" style={{ "marginTop": "15%" }} >Page Not Found</div>

            <Link to='/'>    <Button className='col-md-12 text-center' style={{ width: '18rem', "marginTop": "5%", marginLeft: "40.5%" }} variant="success">Go Back To Home Page</Button></Link>

        </div>
    )
}

export default PageNotfound
