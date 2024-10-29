"use client";

import {useParams} from "next/navigation";
import useSWR from "swr";
import styled from "styled-components";
import {Weather} from "@/app/interfaces/weather";
import WeatherCard from "@/components/weatherCard";


// Styled component for main content wrapper with custom styling
const WeatherContentWrapper = styled.main`
    width: 80vw;                  
    margin: auto;                
    background-color: #D8E2DC;    
`;

// Styled component for the city name heading
const CityName = styled.h1`
    color: white;                 
`;

// Styled component for the container holding all weather cards
const WeatherCardsContainer = styled.div`
    display: flex;                
    flex-flow: row wrap;          
    border: #9CAF88 5px solid;    
`;

// Main functional component for displaying city weather details
export default function CityPage() {
    // Get city parameter from URL using useParams
    const params = useParams();

    // Fetch weather data using SWR, targeting an API endpoint with the city name as a query parameter
    const { data, error } = useSWR(
        `/api/getWeatherData?city=${params.city}`,
        (url) => fetch(url).then((res) => res.json())
    );

    // Render error message if data fetching fails
    if (error) return <div>Failed to load</div>;

    // Show loading message while data is being fetched
    if (!data) return <div>Loading...</div>;

    // Extract weather days data from the response or set it to an empty array
    const days = data?.days || [];

    return (
        <WeatherContentWrapper>
            {/* Display the city name */}
            <CityName>{params.city}</CityName>
            
            {/* Container to hold individual weather cards */}
            <WeatherCardsContainer>
                {
                    // Map over each day's weather data and render a WeatherCard for each
                    days.map((weather: Weather, i: number) => (
                        <WeatherCard
                            key={i}                   
                            datetime={weather.datetime} 
                            conditions={weather.conditions} 
                            description={weather.description} 
                            tempmin={weather.tempmin} 
                            tempmax={weather.tempmax} 
                        />
                    ))
                }
            </WeatherCardsContainer>
        </WeatherContentWrapper>
    );
}