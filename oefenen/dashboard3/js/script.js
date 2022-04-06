const labels  = [
    "XboxOne",
    "Wii",
    "Nintendo DSi",
    "Pc",
]

const data = {
    labels: labels,
    datasets: [{
        label: "Most played consoles in Hours",
        data:[3000,1200,2130,4140],
        backgroundColor: ['rgb(255, 99, 132)',
        'rgb(67, 145, 155)',
        'rgb(48, 170, 221)',
        'rgb(0, 255, 198)' 

        ]

    }]
}

const config ={
    type:'doughnut',
    data:data,
    
}

const config2 ={
    type:'bar',
    data:data
}

const myChart = new Chart(
    document.getElementById("myChart1"),
    config

) 
const myChart1 = new Chart(
    document.getElementById("myChart2"),
    config2

) 

const myChart2 = new Chart(
    document.getElementById("myChart3"),
    config

) 
const myChart3 = new Chart(
    document.getElementById("myChart4"),
    config2

) 

