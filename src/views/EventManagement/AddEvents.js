import React, { Component } from 'react'
//import { useDispatch } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
//import Footer from "components/Footers/Footer.js";
import EventsView from './EventsView';
import {CreateEvents} from "../../Redux/actions/event/EventAction";
import { connect } from "react-redux";

class AddEvent extends Component {

    constructor(props){
        super(props);
        this.state = {
            eventName: '',
            eventDate: '',
            description:'',
        };
    }

    
    //const [eventName, seteventName] = useState("");
    //const [eventDate, seteventDate] = useState("");
    //const [description, setdescription] = useState("");

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state);
    }

    handleOnValueChange(e) {
        this.setState({ 
            [e.target.name]: e.target.value,
        })
    }

    handleReset(e){
        e.preventDefault();
        this.setState({
            eventName: '',
            eventDate: '',
            description:'',
        });
    }
   
render() {
    return (
      <>
        <IndexNavbar fixed />

<section className="header relative  items-center flex h-screen max-h-860-px">
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h1 className="text-gray-600 text-sm font-bold">
                  Add Events
                </h1>
              </div>
              
              
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              
              <Form onSubmit={this.handleSubmit.bind(this)}>
               
                  <div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Event Name
                      </label>
                      <Input
                        type="text"
                        name="eventName" 
                        value={this.state.eventName}                       
                        onChange={this.handleOnValueChange.bind(this)}
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Event Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Event Date
                      </label>
                      <Input
                        type="date"
                        name="eventDate"
                        value={this.state.eventDate}
                        onChange={this.handleOnValueChange.bind(this)}
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Event date"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Description
                      </label>
                      <Input
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleOnValueChange.bind(this)}
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Event description"
                      />
                    </div>

                    <div className="text-center mt-6">
                      <button type="submit"
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                        Add Event
                      </button>
                      <button type="button"
                        onClick={this.handleReset.bind(this)}
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                        Reset
                      </button>
                    </div>
                  </div>
                
              </Form>
            </div>
          </div>
        </div>

        

      </div>
    </div>
</section>

<section className="  pb-16 bg-gray-300 relative pt-32">
        
        <div className=" container mx-auto">
          <div className=" bannerdarkmode flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
               
            </div>
          </div>
        </div>

</section>
    

        
      </>
         );
    }   

};

const mapStateToProps = (state) => {
    return{

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (event) => {
                dispatch(CreateEvents(event));
            }
        };
}

export default connect (mapStateToProps, mapDispatchToProps) (AddEvent);