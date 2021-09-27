import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setLoading} from "../../redux/actions/main";

export const Order = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLoading(false));
    }, [dispatch]);

    return (
        <div>
            OrderOrderOrder
        </div>
    )
}