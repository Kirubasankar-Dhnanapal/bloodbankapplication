import React from "react";
import "./App.css";
import { withRouter } from "react-router-dom";

class SearchDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bloodgroups: '',
            cities: '',
            districts: '',
            states: ''
        };
    }

    componentDidMount() {
        fetch(`http://bloodbank.nammatiruchengode.com/api/master/master-list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json()).then((result) => {
            this.setState({
                bloodgroups: result.data.BloodGroups,
                cities: result.data.Cities,
                districts: result.data.Districts,
                states: result.data.States
            })

        })
    }

    myFunction = () => {
        var x = document.getElementsByClassName("navbar1");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    getCity = () => {
        var citiId = document.getElementById('city');
        console.log(citiId.selectedIndex)
    }

    setBg = (e) => {
        var bloodgroup = document.getElementById('bloodgroup');
        console.log(bloodgroup);
    }

    render() {
        console.log(this.state.bloodgroups)
        return (
            <React.Fragment>
                {/* <div>
                    <span className='spantag'>Search Your Blood</span>
                    
                    <marquee className='marque' behavior="scroll" direction="left">Here is some scrolling text... right to left!</marquee>
                     </div> */}
                <div className='bloodsearchmain'>
                    <div>
                        <div className='bloodgroupdiv'>
                        <div style={{color:'white'}}>Blood Group : </div>
                        <select id='bloodgroup'>
                            {this.state.bloodgroups ? this.state.bloodgroups.map((re) =>
                                <option value={re.id}>{re.type}</option>) : null}
                        </select></div>
                        <div className='bloodgroupdiv'>
                        <div style={{color:'white'}}>City : </div>
                        <select id='city' className='selectcity' onChange={this.getCity}>
                            {this.state.cities ? this.state.cities.map((re) =>
                                <option value={re.state_id}>{re.name}</option>) : null}
                        </select>
                        </div>
                        <div className='bloodgroupdiv'>
                        <div style={{color:'white'}}>District : </div><select className='selectdistrict'>
                            {this.state.districts ? this.state.districts.map((re) =>
                                <option value={re.state_id}>{re.name}</option>) : null}
                        </select>
                        </div>
                        <div className='bloodgroupdiv'>
                        <div style={{color:'white'}}>State : </div><select className='selectstate'>
                            {this.state.states ? this.state.states.map((re) =>
                                <option value={re.id}>{re.name}</option>) : null}
                        </select>
                        </div>
                        <div className='bloodgroupdiv'>
                        <div style={{color:'white'}}>Country : </div><select id='country' className='selectCountry'>
                            <option value={0}>India</option>
                        </select>
                        </div>
                    </div>
                    <button className='buttonstyle'>Submit</button>
                </div>
                {/* <div className='smalldiv'>something</div>
                <div className='secondarydiv'>Someother</div> */}
            </React.Fragment>
        );
    }

}
export default withRouter(SearchDetails);
