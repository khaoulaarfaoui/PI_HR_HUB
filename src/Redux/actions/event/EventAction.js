import {
    ADD_EV_SUCCESS,
    ADD_EV_ERR,
    FETCH_EV_SUCCESS,
    FETCH_EV_ERR,
    EDIT_EV_SUCCESS,
    EDIT_EV_ERR,
    DELETE_EV_SUCCESS,
    DELETE_EV_ERR,
} from "./types"

import axios from 'axios';

const URL = 'http://localhost:8088/events/';
export const FetchEvents = () => axios.get(URL + "allEvents");
export const AddEvents = ( () => axios.post(URL + "addEvents"));

//FETCH-------------------
export const FetchEventsSuccess = (data) => {
    return{
        type: FETCH_EV_SUCCESS,
        payload: data,
    }
}

const normalizedResponse = (data) => {
    const a = data.map(item=>{
        const keys = Object.keys(item);
        keys.forEach( k => {
            item[k.toLowerCase()] = item[k];
            delete item[k];
        });
        return item;
    });
    return a;
}

export const AllEvents = () => {

    return (dispatch) => {
        return axios.get(URL + "allEvents")
        .then(response =>{
            const data = normalizedResponse(response.data);
            dispatch(FetchEventsSuccess(data));
            console.log("All +"); 
        }).catch(error => {
            console.log(error.message); 
        });
    };
}

//ADD------------------
export const createEventSuccess = (data) => {
    return{
        type: ADD_EV_SUCCESS,
        payload: data,
    }
}

export const CreateEvents = (event) => {
    const data = {
        eventName: event.eventName,
        eventDate: event.eventDate,
        description: event.description,
    }

    return (dispatch) =>{
        return axios.post(URL + "addEvents", data)
        .then(response =>{
            const data = response.data;

            const normalizedData = {
                eventName: data.eventName,
                eventDate: data.eventDate,
                description: data.description,
            };

            dispatch(createEventSuccess(normalizedData));
        }).catch(error => {
            console.log(error.message); 
        });
    }
}