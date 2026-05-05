export const Weather_Api = async (city) => {
    const API_Key = import.meta.env.VITE_API_KEY;
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`);
    if (!res.ok) {
        throw new Error("city is not found")
    }
    return res.json();
}
