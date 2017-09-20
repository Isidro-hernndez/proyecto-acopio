<section class="margin-box-iuv">
	<div class="container">
	<?php form_open('', array('name' => 'frmRegistro', 'id' => 'frmRegistro')); ?>
		<div class="panel panel-default">
			<div class="panel-body">
				<legend>Datos Contacto</legend>
				<div class="row">
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>Nombre:</label>
							<input type="text" name="nombre" class="form-control" value="">
						</div>
					</div>
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>Apellido Paterno:</label>
							<input type="text" name="apellidoPat" class="form-control" value="">
						</div>
					</div>
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>Apellido Materno:</label>
							<input type="text" name="apellidoMat" class="form-control" value="">
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>Correo Electrónico:</label>
							<input type="email" name="email" class="form-control" value="">
						</div>
					</div>
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>Teléfono:</label>
							<input type="text" name="telefono" class="form-control" value="">
						</div>
					</div>
				</div>

				<legend>Datos Centro de Acopio</legend>
				<div class="row">
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>Nombre*:</label>
							<input type="text" name="centro_nombre" class="form-control" value="">
						</div>
					</div>
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>Teléfono de atención*:</label>
							<input type="text" name="centro_telefono" class="form-control" value="">
						</div>
					</div>
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>No. de identificación:</label>
							<input type="text" name="identificacion" class="form-control" value="">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>Calle*:</label>
							<input type="text" name="calle" class="form-control" value="">
						</div>
					</div>
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>Número Exterior*:</label>
							<input type="text" name="numeroExt" class="form-control" value="">
						</div>
					</div>
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>Número Interior:</label>
							<input type="text" name="numeroInt" class="form-control" value="">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>Colonia*:</label>
							<input type="text" name="colonia" class="form-control" value="">
						</div>
					</div>
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>Ciudad*:</label>
							<input type="text" name="ciudad" class="form-control" value="">
						</div>
					</div>
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>Estado*:</label>
							<input type="text" name="estado" class="form-control" value="">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>País*:</label>
							<input type="text" name="pais" class="form-control" value="">
						</div>
					</div>
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>Código Postal*:</label>
							<input type="text" name="cp" class="form-control" value="">
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12 col-sm-4 col-sm-offset-8">
						<div class="form-group">
							<button type="submit" class="btn btn-success btn-block">Registrar</button>
						</div>
					</div>
				</div>

				<i>*Campos obligatorios</i>

			</div>
		</div>
	<?php form_close(); ?>
	</div>
</section>