let barChartContext = document.getElementById("barChart").getContext('2d');
$(document).ready(function(){
	let barChartContext = document.getElementById("barChart").getContext('2d');
	
	Chart.defaults.global.defaultFontFamily = 'Lato';
	Chart.defaults.global.defaultFontSize = 12;
	Chart.defaults.global.defaultFontColor = '#fff';
	// Chart.defaults.scale.gridLines.display = false;

	let barChartData = [12, 5, 3, 5, 2, 3];
	let barChart = new Chart(barChartContext, {
		type: 'bar',
		data: {
		    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		    datasets: [{
		    	// Label name
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
			// legend:{labels: {fontColor: '#6d6d6d'}},
			legend: {
				display: false
			},
			// Chart title
			// title: {
			// 	display: true,
			// 	fontColor: '#000',
			// 	text: 'Custom Chart Title'
			// },
			scales: {
			    yAxes: [{
			    	// gridLines: {
        		// color: '#b566c77a',
        		//},
			        ticks: {
			            beginAtZero:true,
			            fontColor: '#6d6d6d'
			        }
			    }],
			    xAxes: [{
			    	// gridLines: {
        		//color: '#b566c77a',
        		//},
			    	ticks: {
			    		fontColor: '#6d6d6d'
			    	}
			    }]
			},
			tooltips: {
				displayColors: false,
				position: 'nearest',
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
			}
		}
	});
});
	