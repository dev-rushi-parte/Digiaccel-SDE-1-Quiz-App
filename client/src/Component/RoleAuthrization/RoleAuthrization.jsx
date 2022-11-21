import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUserData } from '../../Redux/AuthReducer/action'

function RoleAuthrization({ children }) {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState();
    const token = useSelector((state) => state.auth.authToken)



    useEffect(() => {
        dispatch(LoginUserData(token))
            .then((res) => {
                setUserName(res?.payload)
            })
    }, [])

    if (userName?.role == 'student') {
        return null

    }
    
    else {
        
        return children
    }
}

export default RoleAuthrization