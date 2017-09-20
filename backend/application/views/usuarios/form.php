<section class="margin-box-iuv">
	<div class="container">
	<?php form_open('/', array('name' => 'frmUsuario', 'id' => 'frmUsuario')); ?>
		<div class="panel panel-default">
			<div class="panel-body">
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
							<label>Rol:</label>
							<select name="rol" class="form-control">
								<option>-- Selecciona una opción --</option>
							</select>
						</div>
					</div>
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>Email:</label>
							<input type="email" name="email" class="form-control" value="">
						</div>
					</div>
					<div class="col-xs-12 col-sm-4">
						<div class="form-group">
							<label>Contraseña:</label>
							<input type="password" name="password" class="form-control" value="">
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12 col-sm-3 col-sm-offset-6">
						<div class="form-group">
							<a href="<?php echo site_url('usuarios/'); ?>" class="btn btn-default btn-block">Cancelar</a>
						</div>
					</div>
					<div class="col-xs-12 col-sm-3">
						<div class="form-group">
							<button type="submit" class="btn btn-success btn-block">Guardar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	<?php form_close(); ?>
	</div>
</section>