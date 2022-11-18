import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUserData } from '../../Redux/AuthReducer/action'

function RoleAuthrization({ children }) {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState();
    const token = useSelector((state) => state.auth.authToken)

    // console.log(userName?.name)

    useEffect(() => {
        dispatch(LoginUserData(token))
            .then((res) => {
                console.log(res.payload, "page")
                setUserName(res?.payload)
            })
    }, [])

    if (userName?.role == 'student') {
        return null

    }
    // else if (userName?.role == 'admin') {

    // }
    else {
        // console.log(children, "children")
        return children
    }
}

export default RoleAuthrization