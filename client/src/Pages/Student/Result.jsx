import React from 'react'
import Button from 'react-bootstrap/esm/Button'

function Result(props) {
    return (
        <>
            <div style={{ marginTop: "8rem" }} className=' bg-dark col-md-5  container center_div text-center border border-dark rounded-3' >

                <h1 className='text-light mt-5'>Result</h1>
                <h1 className='text-light mt-5 mb-5'>Total Score :{props.score}</h1>
                <Button className='mb-5 col-lg-5 col-sm-6 col-6 fs-5 bold'>Graph</Button>
            </div>
        </>
    )
}

export default Result
