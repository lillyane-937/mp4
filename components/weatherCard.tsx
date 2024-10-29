import styled from "styled-components";
import {Weather} from "@/app/interfaces/weather";


// Define a styled div component for the weather card 
const WeatherCardWrapper = styled.div`
    display: flex;                 // Use flexbox for layout
    flex-direction: column;         // Stack items vertically
    justify-content: center;        // Center content vertically within the div
    padding: 1rem;                  // Add padding around the content
    border: 1px solid white;        // Add a white border
    margin: 1rem;                   // Add margin around the card
    width: 200px;                   // Set a fixed width for the card
    border-radius: 10px;            // Round the corners
    color: white;                   // Set text color to white
`;

// component to display weather data 
export default function WeatherCard(props: Weather) {
    return (
        // Use the styled WeatherCardWrapper for the card container
        <WeatherCardWrapper className="weather-card">
            <h2>{props.datetime}</h2>            {/* Display the date/time */}
            <p>{props.conditions}</p>            {/* Display main weather conditions (e.g., cloudy) */}
            <p>{props.description}</p>           {/* Display a more detailed description */}
            <p>{`${props.tempmin}° - ${props.tempmax}°`}</p> {/* Display temperature range */}
        </WeatherCardWrapper>
    );
}