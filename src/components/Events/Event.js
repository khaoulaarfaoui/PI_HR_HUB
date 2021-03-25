import React from 'react'

const Event = ({ event }) => {
    return (
        <tr>
            <td>{ event.eventName }</td>
            <td>{ event.eventDate}</td>
            <td>{ event.description }</td>
        </tr>
      /*
        <tbody>
          { (event.length > 0) ? event.map( (event, index) => {
             return (
              <tr key={ event.id }>
                <td>{ event.eventName }</td>
                <td>{ event.eventDate}</td>
                <td>{ event.description }</td>
              </tr>
            )
           }) : <tr><td colSpan="5">Loading...</td></tr> }
        </tbody>
      */
    );
  }

  export default Event;