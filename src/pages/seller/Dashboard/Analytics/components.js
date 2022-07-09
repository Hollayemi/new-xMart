import { Doughnut, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

export const TransacChart = ({ chartLoader, title, all, left }) => {
    return (
        <div className="bg-white m-2 rounded py-1 shadow w-64 h-16 flex items-center px-3">
            <div className="w-32">
                <p className="text-gray-300 text-xs">{title}</p>
                <h5>
                    {left} of {all}
                </h5>
            </div>
            <div className="w-36 max-w-[100px] h-full">{chartLoader}</div>
        </div>
    );
};

// export const ChartGraph = ({ ctx }) => {
//     //
//     const myChart = new ChartJS(ctx, {
//         type: 'bar',
//         data: {
//             labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//             datasets: [
//                 {
//                     label: '# of Votes',
//                     data: [12, 19, 3, 5, 2, 3],
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.2)',
//                         'rgba(54, 162, 235, 0.2)',
//                         'rgba(255, 206, 86, 0.2)',
//                         'rgba(75, 192, 192, 0.2)',
//                         'rgba(153, 102, 255, 0.2)',
//                         'rgba(255, 159, 64, 0.2)',
//                     ],
//                     borderColor: [
//                         'rgba(255, 99, 132, 1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(255, 159, 64, 1)',
//                     ],
//                     borderWidth: 1,
//                 },
//             ],
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true,
//                 },
//             },
//         },
//     });

//     return { myChart };
// };

/*













*/
export const Graph2 = ({ myData, labels, legend }) => {
    let data = {
        labels: labels,
        datasets: [
            {
                label: '# of Votes',
                data: myData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.5,
                pointBorderWidth: 0,
                borderWidth: 1,
            },
        ],
    };
    let options = {
        maintainAspectRatio: false,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
        plugins: {
            legend: legend, // Hide legend
        },
        scales: {
            y: {
                display: false, // Hide Y axis labels
            },
            x: {
                display: false, // Hide X axis labels
            },
        },
        elements: {
            point: {
                borderWidth: 0,
                radius: 3,
                backgroundColor: 'rgba(0,0,0,0)',
            },
        },
    };

    return <Doughnut data={data} options={options} />;
};
