import React from 'react';
import EventCard from './eventCard';
import './components_styles/eventList.css';


const EventList = () => {
    return (
        <div>
            <table className='table_center'>
                <tbody>
                    <tr className='eventRow'>
                        <td>
                        {<EventCard image="src/assets/Dragon.png" title="CHINESE NEW YEARS PARTY" description="This event will be hosted by the Chinese Associtation of New Corn City"/>}
                        </td>
                        <td>
                        {<EventCard image="src/assets/Dragon.png" title="MID AUTUMN FESTIVAL" description="This event will be hosted by the Chinese Associtation of New Corn City"/>}
                        </td>
                        <td>
                        {<EventCard image="src/assets/Dragon.png" title="CHINESE LANTURN FESTIVAL" description="This event will be hosted by the Chinese Associtation of New Corn City"/>}
                        </td> 
                        <td>
                        {<EventCard image="src/assets/Dragon.png" title="BREAK FAST WITH PRESIDENT DAY" description="This event will be hosted by the Chinese Associtation of New Corn City"/>}
                        </td> 
                    </tr>
                    <tr>
                        <td>
                        {<EventCard image="src/assets/Dragon.png" title="2024 Spring Gala Festival" description="This event will be hosted by the Chinese Associtation of New Corn City"/>}
                        </td> 
                        <td>
                        {<EventCard image="src/assets/Dragon.png" title="2025 Flower Show at the MET" description="This event will be hosted by the Chinese Associtation of New Corn City"/>}
                        </td> 
                        <td>
                        {<EventCard image="src/assets/Dragon.png" title="CHINESE DRAGON SHOW" description="This event will be hosted by the Chinese Associtation of New Corn City"/>}
                        </td> 
                        <td>
                        {<EventCard image="src/assets/Dragon.png" title="ASIAN CLUBS SOCIETIES MEET" description="This event will be hosted by the Chinese Associtation of New Corn City"/>}
                        </td> 
                    </tr>
                    <tr>
                        <td>
                        {<EventCard image="src/assets/Dragon.png" title="PROFESSIONAL DEVELOPMENT DAY" description="This event will be hosted by the Chinese Associtation of New Corn City"/>}
                        </td> 
                        <td>
                        {<EventCard image="src/assets/Dragon.png" title="WORK FOR EVERYONE DAY" description="This event will be hosted by the Chinese Associtation of New Corn City"/>}
                        </td> 
                    </tr>
                </tbody>
            </table>
        </div>
    );
};


export default EventList;
