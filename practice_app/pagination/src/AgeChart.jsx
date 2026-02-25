import {
    Bar,
    BarChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid
} from "recharts"
function AgeChart({ data }) {
    return (
        <>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    dataKey="Age"
                    nameKey="count"
                    outerRadius={150}
                    fill="#8884d8"
                />
                <Tooltip />
            </PieChart>

            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Age" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}
export default AgeChart;