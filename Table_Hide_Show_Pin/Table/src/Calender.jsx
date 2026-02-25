
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
function Calender() {
    const [events, setEvents] = useState([
        {
            title: 'Existing Event',
            start: new Date(),
            end: new Date(),
        },
    ]);

    // Handler for selecting a slot to add an event
    const handleSelectSlot = ({ start, end }) => {
        const title = window.prompt('Enter event title');
        if (title) {
            setEvents((prev) => [
                ...prev,
                {
                    start,
                    end,
                    title,
                },
            ]);
        }
    };

    // Handler for selecting an event (optional for interaction with events)
    const handleSelectEvent = (event) => {
        alert(`Event: ${event.title}`);
    };
    return (
        <div>
            <Link to="/" className='btn btn-success my-3'>Home</Link>
            <h1>My Calendar</h1>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectSlot={handleSelectSlot} // Handles adding events on slot click
                onSelectEvent={handleSelectEvent} // Optionally handles event clicks
                style={{
                    height: 500, margin: '50px',
                    border: '1px solid #d2d2d2',
                    padding: '20px'
                }}
            />
        </div>
    )
}

export default Calender
