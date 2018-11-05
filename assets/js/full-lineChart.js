$(document).ready(function(){
	// Global Option
	Chart.defaults.global.defaultFontFamily = 'Lato';
	Chart.defaults.global.defaultFontSize = 12;
	Chart.defaults.global.defaultFontColor = '#fff';
	// line chart
	let lineChart = document.getElementById("full-lineChart").getContext('2d');
	let chartData = [12, 5, 3, 5, 2, 3];
	let myChart = new Chart(lineChart, {
		type: 'line',
		data: {
		    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		    datasets: [{
		    	// Label name
		        label: 'Number of Votes',
		        // chat background color
		        backgroundColor: [
                'rgba(0, 0, 0, 0.06)'
			    ],
			    // Line color
		        borderColor: [
		        'rgb(176, 99, 198)'
		        ],
		        // border width of line
		        borderWidth: 5,
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
			// 	text: 'Custom Chart Title'
			// },
			scales: {
			    yAxes: [{
			    	display: true,
			        ticks: {
			            beginAtZero:true,
			            fontColor: '#6d6d6d'
			        }
			    }],
			    xAxes: [{
			    	display: true,
			    	ticks: {
			    		fontColor: '#6d6d6d'
			    	}
			    }]
			},
			tooltips: {
				displayColors: false,
				position: 'average',
				mode: 'index',
				intersect: false,
				yPadding: 15,
				xPadding: 15,
				backgroundColor: 'white',
				titleFontColor: '#6d6d6d',
				footerSpacing: 4,
				bodyFontColor: 'black',
				borderColor: '#cacaca',
				bodySpacing: 4,
				borderWidth: 2,
				callbacks: {
					//Used label callback to return the desired label
					label: function(tooltipItem, data) {
						// tootlip label
						return tooltipItem.xLabel + " : " + tooltipItem.yLabel;
					},
					// remove title
					title: function(tooltipItem, data){
						// Add tootlip title
						return 'Number of votes';
					}	
				}
			},
			hover: {
				mode: 'nearest',
				intersect: true
			}
		}
	});
})