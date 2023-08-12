import { v4 as uuid } from 'uuid';

export const uuidGen = () => {
    const id = uuid()
    const arr = id.split('-')
    const myId = "user-"+arr[0]
    return myId;
    }   
