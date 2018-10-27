<!DOCTYPE html>
<html>
<head>
	<title>Admin</title>
	 <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
	<!-- Iclude this icon font from google fonts -->
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
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
			<ul class="side-menu">
				<li class="active">
					<a href="#"> 
					<i class="material-icons">timeline</i>
					<span>Overview</span>
					</a>
				</li>
				<li>
					<a href="#"> 
					<i class="material-icons">today</i>
					<span>Reports</span>
					</a>
				</li><li>
					<a href="#"> 
					<i class="material-icons">equalizer</i>
					<span>Sales</span>
					</a>
				</li>
			</ul>
		</nav>
	</aside>
	<main>
	<!-- Content -->
		<div class="container">
<!-- 	<div class="header">
				<h2>Reports</h2>
			</div> -->
			<div class="row">
				<div class="column col-6">
					<div class="chart card cyan darken-1">
					<div class="card-content">
							<h1>This card sample for chart</h1>
							<span>Column 1</span>	
							<canvas id="lineChart" width="400" height="200"></canvas>
						</div>		
					</div>
				</div>
				<div class="column col-6">
					<div class="chart card col-6 purple darken-1">
						<div class="card-content">
							<h1>This card sample for chart</h1>
							<span>Column 2</span>
								<canvas id="barChart" width="400" height="200"></canvas>	
						</div>
					</div>
				</div>
			</div>
		</div>

	</main>

	<footer>
	<!-- footer -->	
	</footer>
	<script src="assets/js/chart-min.js"></script>
	<script src="assets/js/jquery-3.3.1.min.js"></script>

	<script src="assets/js/custom.js"></script>
	<script src="assets/js/initialize-chart.js"></script>
</html>