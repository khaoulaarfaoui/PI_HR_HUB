import React, { Component } from 'react'
import { connect } from "react-redux";
import Event from "../../components/Events/Event"
import { AllEvents } from "../../Redux/actions/event/EventAction";


class ViewEvent extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.onFetch();
    }

    handleEdit(event) {
       
    }

  
    render(){
        return (
        <>
     
                    
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Event Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            /*
                            this.props.events.map(event =>{
                                return (
                                    <p> Cannot read property 'events' of undefined ?????? </p>
                                    <Event key={event.id}
                                            event={event}
                                             />
                                    )
                            })
                            */
                        }
                    </tbody>
                       
                </table>

              
        </>
        );
    }
};

const mapStateToProps = (state) => {
    return {
       // event: state.eventsData.events || [],
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(AllEvents());
        }
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewEvent);