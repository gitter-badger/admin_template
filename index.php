<!DOCTYPE html>
<html>
<head>
	<title>Admin</title>
	 <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">

</head>
<body>

</body>
	<header>
	<!-- Header -->
		<h1>Simple header</h1>
	</header>
	
	<aside>
	<!-- Didebar-->	
		<nav>
			<div class="sidebar-logo">
				<h1 class="admin-header">Admin</h1>
			</div>
			<ul>
				<li><a href="#">Overview</a></li>
				<li>
					<a href="#">links 1</a>
				</li>
				<li><a href="#">links with sub menu</a></li>
			</ul>
		</nav>
	</aside>
	<main>
	<!-- Content -->
		<div class="container">
			<div class="header">
				<h2>Main content</h2>
			</div>
			<div class="row">
				<div class="column col-6">
					<div id="line-chart" class="card cyan darken-1">
					<div class="card-content">
							<h1>This card sample for chart</h1>
							<span>Column 1</span>	
							<canvas id="myChart" width="400" height="200"></canvas>
						</div>		
					</div>
				</div>
				<div class="column col-6">
					<div class="card">
						<div class="card-content">
							<h1>This card sample for chart</h1>
							<span>Column 2</span>	
						</div>
						
					</div>
				</div>
			</div>
			<canvas id="myChart" width="400" height="400"></canvas>
		</div>

	</main>

	<footer>
	<!-- footer -->	
	</footer>
	<script src="assets/js/chart-min.js"></script>
	<script src="assets/js/jquery-3.3.1.min.js"></script>

	<script src="assets/js/custom.js"></script>
	<script>
		var ctx = document.getElementById("myChart").getContext('2d');
		var myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		        datasets: [{
		            label: 'Number of Votes',
		            data: [12, 5, 3, 5, 2, 3],
		            backgroundColor: [
		            'rgba(255, 255, 255, 0.44)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		            'rgba(255, 255, 255, 0.87)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 5
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
	</script>
</html>