import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'


function Result(props) {

    const navigate = useNavigate()

    return (
        <>
            <div style={{ marginTop: "8rem" }}
                className=' bg-dark col-md-5  container center_div text-center border border-dark rounded-3' >

                <h1 className='text-light mt-5'>Result</h1>
                <h1 className='text-light mt-5 mb-5'>Total Score :{props.score}</h1>
                <div>
                    <Button onClick={() => navigate("/graph")} className='mb-5 col-lg-5 col-sm-6 col-6 fs-5 bold'>Graph</Button>
                </div>
            </div>
        </>
    )
}

export default Result
