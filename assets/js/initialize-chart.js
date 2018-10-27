$(document).ready(function(){
	// Global Option
	Chart.defaults.global.defaultFontFamily = 'Lato';
	Chart.defaults.global.defaultFontSize = 12;
	Chart.defaults.global.defaultFontColor = '#fff';
	// line chart
	let lineChart = document.getElementById("lineChart").getContext('2d');
	let chartData = [12, 5, 3, 5, 2, 3];
	let myChart = new Chart(lineChart, {
		type: 'line',
		data: {
		    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		    datasets: [{
		        label: 'Number of Votes',
		        // chat background color
		        backgroundColor: [
		        'rgba(255, 255, 255, 0.44)'
			    ],
			    // Line color
		        borderColor: [
		        'rgba(255, 255, 255, 0.87)'
		        ],
		        // border width of line
		        borderWidth: 5,
		        data: chartData
		    }]
		},
		options: {
			legend:{labels: {fontColor: 'white'}},
			title: {
				display: true,
				fontColor: 'white',
				tet: 'Custom Chart Title'
			},
			scales: {
			    yAxes: [{
			        ticks: {
			            beginAtZero:true,
			            fontColor: 'white'
			        }
			    }],
			    xAxes: [{
			    	ticks: {
			    		fontColor: 'white'
			    	}
			    }]
			}
		}
	});

	// bar chart
	let barChartContext = document.getElementById("barChart").getContext('2d');

	let barChartData = [12, 5, 3, 5, 2, 3];
	let barChart = new Chart(barChartContext, {
		type: 'bar',
		data: {
		    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		    datasets: [{
		        label: 'Number of Votes',
		        // chat background color
		        backgroundColor: [
			        'red',
			        'blue',
			        'yellow',
			        'green',
			        'purple',
			        'orange'
			    ],
			    hoverBorderWidth: 2,
			    // Line color
		        borderColor: [
			        'rgba(255, 255, 255, 0.87)',
			        'rgba(255, 255, 255, 0.87)',
			        'rgba(255, 255, 255, 0.87)',
			        'rgba(255, 255, 255, 0.87)',
			        'rgba(255, 255, 255, 0.87)',
			        'rgba(255, 255, 255, 0.87)',
		        ],
		        // border width of line
		        borderWidth: 1,
		        data: barChartData
		    }]
		},
		options: {
			legend:{labels: {fontColor: 'white'}},
			title: {
				display: true,
				fontColor: 'white',
				tet: 'Custom Chart Title'
			},
			scales: {
			    yAxes: [{
			        ticks: {
			            beginAtZero:true,
			            // fontColor: 'white'
			        }
			    }]
			    // xAxes: [{
			    // 	ticks: {
			    // 		fontColor: 'white'
			    // 	}
			    // }]
			}
		}
	});
})