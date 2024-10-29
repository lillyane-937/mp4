"use client";

import styled from "styled-components";

import {useState} from "react";
import Link from "next/link";

// Define a styled div with custom styles
const StyledDiv = styled.div`
  display: flex;                     
  flex-direction: column;             
  align-items: center;                
  color: white;                       
  background-color: #D8E2DC;          
`;

// Main component for the Home page
export default function Home() {
  // State hook to manage the input city value
  const [city, setCity] = useState("");

  return (
    // Container div with applied styles
    <StyledDiv>
      <h1>Find the Weather in any city!</h1> {/* Main heading for the app */}
      <p>Enter a city name below to get the current weather</p> {/* Instructional text */}

      {/* Input field to capture city name, bound to the city state */}
      <input
        type="text"
        value={city}
        placeholder="City Name"
        onChange={(e) => setCity(e.target.value)} // Update city state on text change
      />

      {/* Link to navigate to a dynamic URL based on the entered city */}
      <Link href={`/${city}`}>
        Get Weather
      </Link>
    </StyledDiv>
  );
}