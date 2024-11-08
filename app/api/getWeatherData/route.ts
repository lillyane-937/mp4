import {NextResponse} from "next/server";
export const dynamic = "force-dynamic";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export async function GET(request: Request): Promise<NextResponse> {

    // Extract query parameters from the request URL
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city"); // Get the "city" parameter from the URL

    // Check if the "city" parameter is provided; if not, return a 400 error response
    if (!city) {
        return NextResponse.json({ error: "No [city] provided" }, { status: 400 });
    }

    // Make a request to the external weather API, using the city parameter for a 7-day forecast
    const res = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=us&include=days%2Ccurrent%2Cevents&key=${WEATHER_API_KEY}&contentType=json`
    );

    // Check if the fetch request was successful (status 200); otherwise, return a 500 error response
    if (res.status !== 200) {
        console.log(await res.json())
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }

    // Parse the response data as JSON
    const data = await res.json();

    // Return the data as a JSON response
    return NextResponse.json(data);
}
