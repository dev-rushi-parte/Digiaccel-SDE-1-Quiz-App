import React from 'react'
import Button from 'react-bootstrap/esm/Button'

function Start(props) {

    return (
        <>
            <div style={{ marginTop: "8rem" }} className=' bg-dark col-md-5  container center_div text-center border border-dark rounded-3' >

                <img
                    className=' mt-5 col-md-10 col-sm-5 col-10'
                    src='https://digiaccel.in/desktopbrandlogos/learn_gethired.svg'
                    alt='Img' />


                <h1 className='text-white mt-5 mb-5' >Wel-Come To Quiz</h1>

                <div className='text-light container center_div mb-4  fs-5 mt-2'>
                    Total Questions: {props.SortedData?.length}
                </div>
                <Button disabled={props.SortedData?.length < 10 ? true : false} onClick={() => props.setStart(true)} className='col-lg-6 col-sm-5 col-5 mb-5' >Start</Button>
            </div >
        </>
    )
}

export default Start
