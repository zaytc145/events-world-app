import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Colors
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Colors
);

const LocationDataChart = (props) => {
    return <div style={{height: 600}}>
        <Line data={props.data} options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                colors: {
                    enabled: true
                }
            }
        }}/>
    </div>
}

export default LocationDataChart