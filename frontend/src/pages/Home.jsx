import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/action";

export default function Home() {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state)

    useEffect(() => {
        dispatch(getUsers())
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            ini homepage
            {JSON.stringify(users)}
        </div>
    );
}

