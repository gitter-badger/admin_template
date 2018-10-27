<!DOCTYPE html>
<html>
<head>
	<title>Admin</title>
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
		<h2>Main content</h2>
		<div class="chart-container">
			<canvas id="myChart" width="400" height="400"></canvas>
		</div>
	</main>

	<footer>
	<!-- footer -->	
	</footer>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>
	<script>
		var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		        datasets: [{
		            label: '# of Votes', // Chart Label
		            data: [12, 19, 3, 5, 2, 3],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});
		</script>
	<script src="assets/js/jquery-3.3.1.min.js"></script>
	<script src="assets/js/custom.js"></script>
</html>