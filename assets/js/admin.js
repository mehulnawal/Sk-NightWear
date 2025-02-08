// dropdown toggle srt
$(document).ready(function () {
    $(".catalog-li").click(function () {
        $(".catalog-dropdown").toggleClass("catalog-dropdown-toggle");
        $(".catalog-up").toggleClass("toggle-angle-none");
        $(".catalog-down").toggleClass("toggle-angle-block");;
        return false;
    })

    $(".international-li").click(function () {
        $(".international-dropdown").toggleClass("catalog-dropdown-toggle");
        $(".international-up").toggleClass("toggle-angle-none");
        $(".international-down").toggleClass("toggle-angle-block");;
        return false;
    })

    $(".online-store-li").click(function () {
        $(".online-store-dropdown").toggleClass("catalog-dropdown-toggle");
        $(".online-store-up").toggleClass("toggle-angle-none");
        $(".online-store-down").toggleClass("toggle-angle-block");;
        return false;
    })
})
// dropdown toggle end

// sidebar toggle srt
$(document).ready(function () {
    $(".menu").click(function () {
        $(".sidebar").toggleClass("sidebar-toggle")
        $(".head-inner").toggleClass("margin-left")
        $(".nav").toggleClass("nav-toggle")
    })
})
// sidebar toggle end

// language dropdown srt
$(document).ready(function () {
    $(".language").click(function () {
        $(".language-dropdown").toggleClass("language-dropdown-toggle")
        $(".bell-dropdown").removeClass("bell-dropdown-toggle")
        $(".profile-dropdown").removeClass("profile-dropdown-toggle")
        return false;
    })
})
// language dropdown end

// dark-light mode srt
$(document).ready(function () {
    $(".sun").click(function () {
        $(this).addClass("sun-toggle")
        $(".moon").addClass("moon-toggle")
        $(".sidebar").addClass("darkMode")
        $(".head .nav").addClass("darkMode")
        $(".head .head-inner").addClass("darkMode-head-inner")
        return false;
    })
})

$(document).ready(function () {
    $(".moon").click(function () {
        $(".sun").removeClass("sun-toggle")
        $(this).removeClass("moon-toggle")
        $(".sidebar").removeClass("darkMode")
        $(".head .nav").removeClass("darkMode")
        $(".head .head-inner").removeClass("darkMode-head-inner")
        return false;
    })
})
// dark-light mode end

// notifications dropdown srt
$(document).ready(function () {
    $(".bell-head").click(function () {
        $(".bell-dropdown").toggleClass("bell-dropdown-toggle")
        $(".language-dropdown").removeClass("language-dropdown-toggle")
        $(".profile-dropdown").removeClass("profile-dropdown-toggle")
        return false;
    })
})
// notifications dropdown end

// profile dropdown srt
$(document).ready(function () {
    $(".profile").click(function () {
        $(".profile-dropdown").toggleClass("profile-dropdown-toggle")
        $(".language-dropdown").removeClass("language-dropdown-toggle")
        $(".bell-dropdown").removeClass("bell-dropdown-toggle")
    })
})
// profile dropdown end

// line chart srt
const ctx = document.getElementById('weeklyChart').getContext('2d');

// Data for Sales and Orders
const salesData = {
    labels: ['2025-01-11', '2025-01-16', '2025-01-17'], // Dates
    datasets: [
        {
            label: 'Sales',
            data: [500, 3500, 4000], // Sales data points
            borderColor: '#22d3ee', // Teal line color
            backgroundColor: 'rgba(34, 211, 238, 0.3)', // Transparent teal fill
            borderWidth: 2,
            tension: 0.4, // Smooth line
            pointBackgroundColor: '#22d3ee',
        },
    ],
};

const ordersData = {
    labels: ['2025-01-11', '2025-01-16', '2025-01-17'], // Dates
    datasets: [
        {
            label: 'Orders',
            data: [300, 2000, 900], // Orders data points
            borderColor: '#16a34a', // Green line color
            backgroundColor: 'rgba(22, 163, 74, 0.3)', // Transparent green fill
            borderWidth: 2,
            tension: 0.4, // Smooth line
            pointBackgroundColor: '#16a34a',
        },
    ],
};

// Chart Configuration
const config = {
    type: 'line',
    data: salesData, // Initially show Sales data
    options: {
        responsive: true,
        maintainAspectRatio: true, // Ensure chart adapts to container
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#cbd5e1', // Light color for legend text
                },
            },
            title: {
                display: true,
                text: 'Weekly Sales',
                color: '#cbd5e1', // Light color for title text
                font: {
                    size: 18,
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#cbd5e1', // Light color for x-axis labels
                },
                grid: {
                    color: '#334155', // Dark grid color
                },
            },
            y: {
                ticks: {
                    color: '#cbd5e1', // Light color for y-axis labels
                },
                grid: {
                    color: '#334155', // Dark grid color
                },
            },
        },
    },
};

// Create the Chart
const chart = new Chart(ctx, config);

// Add Toggle Functionality
document.getElementById('salesTab').addEventListener('click', () => {
    chart.data = salesData; // Update to Sales data
    chart.options.plugins.title.text = 'Weekly Sales'; // Update title
    chart.update();

    // Update tab styles
    document.getElementById('salesTab').classList.add('active');
    document.getElementById('ordersTab').classList.remove('active');
});

document.getElementById('ordersTab').addEventListener('click', () => {
    chart.data = ordersData; // Update to Orders data
    chart.options.plugins.title.text = 'Weekly Orders'; // Update title
    chart.update();

    // Update tab styles
    document.getElementById('ordersTab').classList.add('active');
    document.getElementById('salesTab').classList.remove('active');
});

// line chart end

// pie chart srt
const pieData = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [10, 20, 30, 40, 50],  // Static data
            backgroundColor: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF'], // Static colors
        }
    ]
};

const pieChartConfig = {
    type: 'pie',
    data: pieData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Pie Chart'
            }
        }
    },
};

// Create pie chart
const pieChartCtx = document.getElementById('myChart').getContext('2d');
const pieChart = new Chart(pieChartCtx, pieChartConfig);

// pie chart end

// dataset 
var data = [
    [
        "11638",
        "19 Jan, 2025 6:04 PM",
        "ABC",
        "Cash",
        "60",
        "Delivered",
        "Delivered",
        "Delivered"
    ],
    [
        "11639",
        "20 Jan, 2025 6:04 PM",
        "ABCD",
        "Cash",
        "65",
        "Cancel",
        "Delivered",
        "Delivered"
    ]
];

$('#example').DataTable({
    data: data,
    columns: [
        { title: "Order ID" },
        { title: "Date & Time" },
        { title: "Customer" },
        { title: "Payment Method" },
        { title: "Amount" },
        {
            title: "Status",
            render: function (data, type, row) {
                // Render status badges
                if (data === "Delivered") {
                    return '<span class="badge badge-delivered" style="background-color: green;color: white;border-radius: 10px;">Delivered</span>';
                } else if (data === "Pending") {
                    return '<span class="badge badge-pending" style="background-color: orange;color: white;border-radius: 10px;">Pending</span>';
                } else if (data === "Processing") {
                    return '<span class="badge badge-processing" style="background-color: blue;color: white;border-radius: 10px;">Processing</span>';
                } else if (data === "Cancel") {
                    return '<span class="badge badge-cancel" style="background-color: red;color: white;border-radius: 10px;">Cancel</span>';
                }
                return data;
            }
        },
        {
            title: "Action",
            render: function (data, type, row) {
                // Render dropdown menu
                return `
                    <select style="background-color: #1F2937; color: #9ca3af; border: 2px solid #9ca3af;border-radius: 5px">
                        <option style="background-color: #1F2937; color: #9ca3af; border: 2px solid #9ca3af;" value="Delivered" ${data === "Delivered" ? "selected" : ""}>Delivered</option>
                        <option style="background-color: #1F2937; color: #9ca3af; border: 2px solid #9ca3af;" value="Pending" ${data === "Pending" ? "selected" : ""}>Pending</option>
                        <option style="background-color: #1F2937; color: #9ca3af; border: 2px solid #9ca3af;" value="Processing" ${data === "Pending" ? "selected" : ""}>Pending</option>
                        <option style="background-color: #1F2937; color: #9ca3af; border: 2px solid #9ca3af;" value="Cancel" ${data === "Pending" ? "selected" : ""}>Pending</option>
                    </select>
                `;
            }
        },
        {
            title: "Invoice",
            render: function () {
                // Render icons and button
                return `
                    <a href="#" class="" style="color: #9ca3af;font-size: 17px;margin-right: 10px;">
                        <i class="bi bi-printer"></i>
                    </a>

                    <a href="#" class="" style="color: #9ca3af;font-size: 17px;margin-right: 10px;">
                        <i class="bi bi-search"></i>
                    </a>
                `;
            }
        }
    ]
});
