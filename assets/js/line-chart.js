$(document).ready(function(){
	// Global Option
	Chart.defaults.global.defaultFontFamily = 'Lato';
	Chart.defaults.global.defaultFontSize = 12;
	Chart.defaults.global.defaultFontColor = '#fff';
	// line chart
	var lineChart = document.getElementById("lineChart").getContext('2d');

	var chartData = [12, 5, 3, 5, 2, 3];

	var myChart = new Chart(lineChart, {
		type: 'line',
		data: {
		    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		    datasets: [{
		    	// Label
		        label: 'Number of Votes',
		        // chart background color
		        backgroundColor: [
		        'rgba(0, 0, 0, 0.06)'
			    ],
			    // Line color
		        borderColor: [
		        'rgb(176, 99, 198)'
		        ],
		        // border width of line
		        borderWidth: 2,
		        data: chartData
		    }]
		},
		options: {
			// legend:{labels: {fontColor: '#6d6d6d'}},
			legend: {
				display: false
			},
			// title: {
			// 	display: true,
			// 	fontColor: '#6d6d6d',
			// 	text: 'Custom Chart Title'
			// },
			scales: {
			    yAxes: [{
			        ticks: {
			            beginAtZero:true,
			            fontColor: '#fff'
			        }
			    }],
			    xAxes: [{
			    	ticks: {
			    		fontColor: '#fff'
			    	}
			    }]
			}
		}
	});
})