$(document).ready(function(){
	// Global Option
	Chart.defaults.global.defaultFontFamily = 'Lato, Sans-serif';
	Chart.defaults.global.defaultFontSize = 12;
	Chart.defaults.global.defaultFontColor = '#fff';
	// line chart
	var lineChart = document.getElementById("lineChart").getContext('2d');
	// var data = []
	var chartData = [array];

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
		        '#492a24'
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
			            fontColor: '#6d6d6d'
			        }
			    }],
			    xAxes: [{
			    	ticks: {
			    		fontColor: '#6d6d6d'
			    	}
			    }]
			},
			// Styling tooltip
			tooltips: {
				displayColors: false,
				position: 'average',
				mode: 'index',
				intersect: false,
				yPadding: 7,
				xPadding: 7,
				backgroundColor: '#492a24',
				titleFontColor: '#e0b31c',
				bodyFontFamily: "'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue'",
				footerSpacing: 2,
				bodyFontColor: '#e7b91c',
				borderColor: '#e0b31c',
				bodySpacing: 2,
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
			}
		}
	});
})