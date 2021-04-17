import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { AllEvents, DeleteEvents } from "../../Redux/actions/event/EventAction";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import AddEvents from "./AddEvents";
import ButterToast, { Cinnamon } from "butter-toast";
//import { DeleteSweep } from "@material-ui/icons";

const ViewEvent = (props) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAllEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = (id) => {
    const onSuccess = () => {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Delete Notification"
            content="Deleted successfully"
            scheme={Cinnamon.Crisp.SCHEME_PURPLE}
            //icon={<DeleteSweep />}
          />
        ),
      });
    };
    if (window.confirm("Are you sure to delete this event ?"))
      props.deleteEvents(id, onSuccess);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-800">
                    Events
                  </h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                      Name
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                      Date
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                      Description
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"></th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  {props.EventsList.map((event, index) => {
                    return (
                      <Fragment key={index}>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            {event.eventName}{" "}
                          </th>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            {event.eventDate}{" "}
                          </th>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            {event.description}{" "}
                          </th>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            <button
                              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setCurrentId(event._id)}
                            >
                              Edit
                            </button>{" "}
                          </th>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            <button
                              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => onDelete(event._id)}
                            >
                              Delete
                            </button>{" "}
                          </th>
                        </tr>
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-4/12 px-4">
          <AddEvents {...{ currentId, setCurrentId }} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  EventsList: state.eventsReducer.list,
});

const mapActionToProps = {
  fetchAllEvents: AllEvents,
  deleteEvents: DeleteEvents,
};

export default connect(mapStateToProps, mapActionToProps)(ViewEvent);

/*
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
       
                            
                            this.props.events.map(event =>{
                                return (
                                    //<p> Cannot read property 'events' of undefined ?????? </p>
                                    <Event key={event._id}
                                            event={event}
                                            
                                    />
                                    );
                            })
                             }
                        
                    </tbody>
                       
                </table>

              
        </>
        );
    };
    
};

const mapStateToProps = (state) => {
    return {
        events: state.eventData.events || [],
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

*/
