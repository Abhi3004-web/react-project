import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Weather_Api } from "../Api/Weather_Api";

function WeatherCard({ city }) {
    //const queryClient = useQueryClient();
    const { isLoading, error, data } = useQuery({
        queryKey: ["weather", city],
        queryFn: () => Weather_Api(city),
        enabled: !!city, // only run when city exists
        staleTime: 300000, // 5 min cache
    });
    //console.log(queryClient.getQueriesData())
    if (!city) return <p>Search for a city</p>;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <h2>{data.name}</h2>
            <p>🌡 Temp: {data.main.temp} °C</p>
            <p>💧 Humidity: {data.main.humidity}%</p>
            <p>🌬 Wind: {data.wind.speed} m/s</p>
        </div>
    );
}
export default WeatherCard;