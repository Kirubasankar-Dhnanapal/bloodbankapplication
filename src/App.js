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

    render() {
        return (
            <div className='bloodcontainer'>
                {/* <div className='navbar'>
                    <ul><a style={{ color: 'white' }} href="#">Home</a></ul>
                    <ul><a style={{ color: 'white' }} href="#">Contact</a></ul>
                    <ul><a style={{ color: 'white' }} href="#/register" onClick={this.register}>Register</a></ul>
                </div> */}
                <div style={{ color: 'white' }}><marquee behavior="scroll" direction="left">Here is some scrolling text... right to left!</marquee></div>
                <div className='mainheader'>

                    <p>Please come forward and contribute. Your contribution will transform lives.</p></div>
                <div>
                    <div className='firstbox'>
                        <b>Start Your RapidPass</b>
                        <p className='firstpad'>Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location.</p></div>
                    <div className='secondbox'>
                        <b>Am I Eligible to Donate Blood?</b>
                        <p className='firstpad'>Are you eligible for blood donation? Find out about the eligibility requirements to donate blood today. Learn about general health, travel, medications, tattoos, and more.</p></div>
                    <div className='thirdbox'>
                        <b>Never Donated Blood Before?</b>
                        <p className='firstpad'>Blood donations can help save people's lives. Learn how blood donations help, what to expect, and how to get ready for your first blood donation.</p></div>
                    <div className='fourthbox'>
                        <b className='blinking'>COVID-19 Convalescent Plasma Program</b>
                        <p className='firstpad'>In coordination with the Indian Government, the Red Cross is seeking people who are fully recovered from the new coronavirus to sign up to donate plasma to help current COVID-19 patients. Patients who have fully recovered following a COVID-19 diagnosis may have antibodies in their plasma that can help those with serious or immediately life-threatening COVID-19 infections.</p></div>
                </div>
            </div>

        );
    }

}
export default withRouter(App);
