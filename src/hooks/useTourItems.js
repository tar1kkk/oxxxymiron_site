import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTourItems } from "../reducers/tourReducer";

export const useTourItems = () => {
    const dispatch = useDispatch();

    const { items = [], isLoading } = useSelector((state) => state.tour);

    useEffect(() => {
        dispatch(getTourItems());
    }, []);

    return { items, isLoading };
};