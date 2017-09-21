<!DOCTYPE html>
<html class="no-js" lang="es">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<title><?php echo isset($title) ? $title : 'Centros de acopio'; ?></title>

		<!-- Fonts CSS -->
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">

		<link rel="stylesheet" type="text/css" href="<?php echo site_url('public/bower_components/bootstrap/dist/css/bootstrap.css'); ?>">
		<link rel="stylesheet" type="text/css" href="<?php echo site_url('public/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css'); ?>">
		
		<!-- Font Awesome -->
		<link rel="stylesheet" type="text/css" href="<?php echo site_url('public/css/font-awesome.min.css'); ?>">
		
		<link rel="stylesheet" type="text/css" href="<?php echo site_url('public/css/styleapp.css'); ?>">

		<!-- DataTables -->
        <link rel="stylesheet" type="text/css" href="<?php echo site_url('public/bower_components/datatables.net-bs/css/dataTables.bootstrap.css'); ?>">
        <link rel="stylesheet" type="text/css" href="<?php echo site_url('public/bower_components/datatables.net-responsive-bs/css/responsive.bootstrap.css'); ?>">
        <link rel="stylesheet" type="text/css" href="<?php echo site_url('public/bower_components/datatables.net-fixedcolumns-bs/css/fixedColumns.bootstrap.min.css'); ?>">

        <!-- Select2 -->
        <link rel="stylesheet" type="text/css" href="<?php echo site_url('public/bower_components/select2/dist/css/select2.min.css'); 
        ?>">
        <link rel="stylesheet" type="text/css" href="<?php echo site_url('public/bower_components/select2-bootstrap-theme/dist/select2-bootstrap.min.css'); ?>">

        <script>
			(function(e,t,n){
				var r = e.querySelectorAll("html")[0];
				r.className = r.className.replace(/(^|\s)no-js(\s|$)/,"$1js$2")
			})(document,window,0);
		</script>
	</head>
	<body>

		<div class="page-wrap">
			<header>
				<div class="container">
					<div class="row">
						<div class="col-xs-12 col-sm-6 col-md-6">
							<div class="subtitle">
								<h1>Centros de Acopio</h1>
								<p><?php echo isset($descripcion) ? $descripcion : ''; ?></p>
							</div>
						</div>
					</div>
				</div>
			</header>