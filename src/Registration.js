import React from "react";
import "./App.css";
import { withRouter } from "react-router-dom";

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mobnumber: '',
            emailId: '',
            dob: '',
            bg: ''
        };
    }

    setName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    setMobnumber = (e) => {
        this.setState({
            mobnumber: e.target.value
        })
    }

    setEmail = (e) => {
        this.setState({
            emailId: e.target.value
        })
    }

    setDob = (e) => {
        this.setState({
            dob: e.target.value
        })
    }

    setBg = (e) => {
        this.setState({
            bg: e.target.value
        })
    }

    componentDidMount() {
        fetch(`http://bloodbank.nammatiruchengode.com/api/master/master-list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) =>
            res.json()).then((result) => {
                this.setState({
                    bloodgroups: result.data.BloodGroups,
                    cities: result.data.Cities,
                    districts: result.data.Districts,
                    states: result.data.States
                })
            }
            )
    }

    sendDetails = () => {
        if (this.state.name && this.state.mobnumber && this.state.emailId && this.state.dob && this.state.bg) {
            fetch(`http://localhost:3002/insertblooddata`, {
                method: 'POST',
                body: JSON.stringify({ name: this.state.name, mobilenumber: this.state.mobnumber, emailId: this.state.emailId, dob: this.state.dob, bg: this.state.bg }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => res.json()).then((result) => {
                result.success === true ? this.props.history.push('/app') : alert('Insertion failed')
            })
        } else {
            alert('Data Insufficient')
        }
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

    getUserDetails = () => {
        var formData = new FormData();
        formData.append('name',)
        formData.append('bloodgroup',)
        formData.append('mobilenumber',)
        formData.append('city',)
        formData.append('district',)
        formData.append('state',)
        formData.append('emailId',)
        formData.append('dob',)
        formData.append('userId',)
        formData.append('password',)
        formData.append('confirmpassword',)
        formData.append('availability',)

    }

    render() {
        console.log(this.state.bloodgroups)
        console.log(this.state.cities)
        console.log(this.state.states)
        console.log(this.state.districts)
        return (
            <React.Fragment>
                <div>
                    {/* <div className='bloodheader'><b>Blood Group Registration</b> */}
                    {/* </div> */}
                    <div className='bloodheader2'><b>Blood Group Registration</b></div>
                    <div className='bloodcontainer'>
                        <div className='nameboxdiv'>
                            <div style={{ color: 'white' }}>Name :</div><input className='textboxStyle' type='text' id='name' value={this.state.name} onChange={(e) => this.setName(e)}></input>
                        </div>
                        <div className='nameboxdiv'>
                            <div style={{ color: 'white' }} >Blood Group : <input className='bloodnameinput' type='text' id='name' value={this.state.bg} onChange={(e) => this.setBg(e)}></input></div>
                        </div>
                        <div className='mobnumberboxdiv'>
                            <div style={{ color: 'white' }} className='mobnumber'>Mobile Number : </div><input className='mobnumberinputdiv' type='number' id='name' value={this.state.mobnumber} onChange={(e) => this.setMobnumber(e)}></input>
                        </div>
                        <div className='cityboxdiv'>
                            <div style={{ color: 'white' }} className='citydiv'>City : </div><select id='city' className='textboxStyle' onChange={this.getCity}>
                                {this.state.cities ? this.state.cities.map((re) =>
                                    <option value={re.state_id}>{re.name}</option>) : null}
                            </select>
                        </div>

                        <div className='districtboxdiv'>
                            <div style={{ color: 'white' }}>District : </div><select className='districtselctdiv'>
                                {this.state.districts ? this.state.districts.map((re) =>
                                    <option value={re.state_id}>{re.name}</option>) : null}
                            </select>
                        </div>

                        <div className='stateboxdiv'>
                            <div style={{ color: 'white' }}>State : </div><select className='stateselectdiv'>
                                {this.state.states ? this.state.states.map((re) =>
                                    <option value={re.id}>{re.name}</option>) : null}
                            </select>
                        </div>
                        <div className='emailboxdiv'>
                            <div style={{ color: 'white' }} className='emaildiv'>Email : </div><input className='emailinputdiv' type='text' id='emailId' value={this.state.emailId} onChange={(e) => this.setEmail(e)}></input>
                        </div>
                        <div className='dobboxdiv'>
                            <div style={{ color: 'white' }} className='dobdiv'>DOB : </div><input className='dobinputdiv' type='date' id='dob' value={this.state.dob} onChange={(e) => this.setDob(e)}></input>
                        </div>
                        <div className='userIdboxdiv'>
                            <div style={{ color: 'white' }} className='dobdiv'>UserId : </div><input className='userIdinputdiv' id='userId' onChange={(e) => this.setDob(e)}></input>
                        </div>
                        <div className='passwrdboxdiv'>
                            <div style={{ color: 'white' }} className='dobdiv'>Password : </div><input className='passwrdinputdiv' id='password' onChange={(e) => this.setDob(e)}></input>
                        </div>

                        <div className='passwrdboxdiv'><div style={{ color: 'white' }} className='dobdiv'>Re-type Password : </div><input className='passwrdinputdiv' id='confirmpassword' onChange={(e) => this.setDob(e)}></input>
                        </div>
                        <div className='passwrdboxdiv'><div style={{ color: 'white' }} className='dobdiv'>Please Confirm Availability :
                        <select className='passwrdinputdiv'>
                                <option value={1}>Yes</option>
                                <option value={2}>No</option>
                            </select></div>
                        </div>
                        <div className='buttdiv'><button className='buttonStyle' onClick={this.sendDetails}>Register</button></div>
                        {/* <div className='warningdiv'><p>Important : All Voluntary Donors are warned of likely misuse of blood donated by them at the hospital with or without the knowledge of the hospital management. At some places the hospital staff have taken the blood and sold it to others for a price. As a responsible citizen/voluntary blood donor, we request you to keep a watch on such people and hospitals. Donors must inform the F2S team members/coordinators of such areas in case of any doubt.</p></div> */}

                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default withRouter(Registration);
