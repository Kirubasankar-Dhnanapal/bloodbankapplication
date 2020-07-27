import React from "react";
import "./App.css";
import { withRouter } from "react-router-dom";



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    register = () => {
        this.props.history.push('/register')
    }

    componentDidMount() {
        fetch(`http://ardhaappsdemo.nammatiruchengode.com/api/daily-information/today`).then((res) => res.json()).then((information) =>
            this.setState({
                data: information.data.DailyInformations
            })
        )
    }

    render() {
        console.log(this.state.data)
        return (
            <div>
                <div className='registercontainer'>
                    <div style={{ color: 'floralwhite', backgroundColor: 'goldenrod' }}><marquee behavior="scroll" direction="left">One Blood donate can save upto Three lives,After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</marquee></div>
                    <div className='mainheader'>

                        {/* <p>Please come forward and contribute. Your contribution will transform lives.</p> */}
                    </div>
                    <div style={{ color: 'brown' }}>
                        <div className='firstbox'>
                            <b>Why Should Donate Blood?</b>
                            <p className='firstpad'>Our Nation Requires 4 Crore Units of blood, but 40 lakh units are available. Every two seconds someone needs Blood. Blood donation is extremely noble deed, yet there is a scarcity of regular donors across india. We focus on creating & explaining a virtual army of blood donating vounteers who could be searched and contacted by family/care givers of a patient in times of need</p></div>
                        <div className='secondbox'>
                            <b>Am I Eligible to Donate Blood?</b>
                            <p className='firstpad'>Overall health- The donor must be fit and healthy, and should not be suffering from transmittable diseases.
                            Age and weight- The donor must be 18–65 years old and should weigh a minimum of 50  kg.
                            Pulse rate- Between 50 and 100 without irregularities.
                            Hemoglobin level- A minimum of 12.5 g/dL.
                            Blood pressure- Diastolic: 50–100 mm Hg, Systolic: 100–180 mm Hg.
                            Body temperature- Should be normal, with an oral temperature not exceeding 37.5 °C.
                            The time period between successive blood donations should be more than 3 months.</p></div>
                        <div className='thirdbox'>
                            <b>Types of Blood Donation</b>
                            <p className='firstpad'>The human body contains five liters of blood, which is made of several useful components i.e. Whole blood, Platelet, and Plasma.
                            Each type of component has several medical uses and can be used for different medical treatments. your blood donation determines the best donation for you to make.
                            </p></div>
                        <div className='fourthbox'>
                            <b className='blinking'>COVID-19 Convalescent Plasma Program</b>
                            <p className='firstpad'>In coordination with the Indian Government, the Red Cross is seeking people who are fully recovered from the new coronavirus to sign up to donate plasma to help current COVID-19 patients. Patients who have fully recovered following a COVID-19 diagnosis may have antibodies in their plasma that can help those with serious or immediately life-threatening COVID-19 infections.</p></div>
                    </div>
                    <div className='donationtag1'><p className='donationtag'>Learn About Donation</p>
                    </div>
                    <div className='bloodtable'>
                        <table className='tablediv'>
                            <th className='tableheaderdiv'>Blood Type</th>
                            <th className='tableheaderdiv'>Donate Blood to</th>
                            <th className='tableheaderdiv'>Receive Blood From</th>
                            <tbody className='tableheaderdiv'>
                                <tr><td>A+</td><td>A+ AB+</td><td>A+ A- O+ O-</td></tr>
                                <tr><td>O+</td><td>O+ A+ B+ AB+</td><td>O+ O-</td></tr>
                                <tr><td>B+</td><td>B+ AB+</td><td>B+ B- O+ O-</td></tr>
                                <tr><td>AB+</td><td>AB+</td><td>Everyone</td></tr>
                                <tr><td>A-</td><td>A+ A- AB+ AB-</td><td>A- O-</td></tr>
                                <tr><td>O-</td><td>Everyone</td><td>O-</td></tr>
                                <tr><td>B-</td><td>B+ B- AB+ AB-</td><td>B- O-</td></tr>
                                <tr><td>AB-</td><td>AB+ AB-</td><td>AB- A- B- O-</td></tr>
                            </tbody>
                        </table>
                        <span className='spandiv'>Did you Know ?</span>
                        <div className='information'>
                            <ul>
                                <li>World Health Day - 7 April</li>
                                <li>World Thalassemia Day - 8 May</li>
                                <li>World Donation Day - 14 June</li>
                                <li>World Hemophilia Day - 17 April</li>
                                <li>World Voluntary Donation Day - 1 October</li>
                                </ul>
                        </div>
                    </div>

                </div>
            </div>

        );
    }

}
export default withRouter(App);
