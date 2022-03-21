import {useState, useEffect} from 'react';

const Test  = ()=>{

    const [events, setEvents] =useState<any>([]);

    const getEvents = async ()=>{
    const request = await fetch('/api/events_api');
    const response = await request.json();
    console.log("response", response);
    setEvents(response)

    }

    useEffect(()=> {
        getEvents()
    }, [])

    return (
        <div>
            {events && events.map((item: any) => <span>{item.title}</span>)}
        </div>
    )
}

export default Test;
