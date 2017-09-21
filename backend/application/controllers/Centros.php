<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Centros extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	public function __construct(){
		parent::__construct();

		setlocale(LC_ALL,"es_MX");

		$this->load->helper(array('url', 'form'));
		$this->load->library(array('session', 'form_validation'));
	}

	public function index(){
		$this->load->view('header');
		$this->load->view('usuarios/list');
		$this->load->view('footer');
	}

	public function insert(){
		try {
			// $valores = json_decode($this->input->raw_input_stream);

	  //   	if(!$valores && empty($this->input->post())){
	  //   		throw new Exception("Error en el formato de datos enviados", 405);
	  //   	}

	  //   	$datos = array(
	  //   		'nombre' => (!empty($this->input->post('nombre')) ? $this->input->post('nombre') : $valores->nombre),
	  //   		'telefono' => (!empty($this->input->post('telefono')) ? $this->input->post('telefono') : $valores->telefono),
	  //   		'identificador' => (!empty($this->input->post('identificador')) ? $this->input->post('identificador') : $valores->identificador),
	  //   		'calle' => (!empty($this->input->post('calle')) ? $this->input->post('calle') : $valores->calle),
	  //   		'numeroExt' => (!empty($this->input->post('numeroExt')) ? $this->input->post('numeroExt') : $valores->numeroExt),
	  //   		'numeroInt' => (!empty($this->input->post('numeroInt')) ? $this->input->post('numeroInt') : $valores->numeroInt),
	  //   		'colonia' => (!empty($this->input->post('colonia')) ? $this->input->post('colonia') : $valores->colonia),
	  //   		'ciudad' => (!empty($this->input->post('ciudad')) ? $this->input->post('ciudad') : $valores->ciudad),
	  //   		'estado' => (!empty($this->input->post('estado')) ? $this->input->post('estado') : $valores->estado),
	  //   		'pais' => (!empty($this->input->post('pais')) ? $this->input->post('pais') : $valores->pais),
	  //   		'cp' => (!empty($this->input->post('cp')) ? $this->input->post('cp') : $valores->cp),
	  //   		'horarios' => (!empty($this->input->post('horarios')) ? $this->input->post('horarios') : $valores->horarios),
	  //   		'coordenadas' => (!empty($this->input->post('coordenadas')) ? $this->input->post('coordenadas') : $valores->coordenadas)
	  //   	);

	  //   	$this->form_validation->set_data($datos);

	    	$this->form_validation->set_message('required', 'El {field} es obligatorio');
	    	$this->form_validation->set_message('valid_email', 'El {field} no es valido');

	    	$this->form_validation->set_rules('nombre', 'Nombre', 'trim|required');
	    	$this->form_validation->set_rules('telefono', 'Teléfono', 'trim');
	    	$this->form_validation->set_rules('identificador', 'No. de identificación', 'trim');
	    	$this->form_validation->set_rules('calle', 'Calle', 'trim|required');
	    	$this->form_validation->set_rules('numeroExt', 'Número Externo', 'trim|required');
	    	$this->form_validation->set_rules('numeroInt', 'Número Interno', 'trim');
	    	$this->form_validation->set_rules('colonia', 'Colonia', 'trim|required');
	    	$this->form_validation->set_rules('ciudad', 'Ciudad', 'trim|required');
	    	$this->form_validation->set_rules('estado', 'Estado', 'trim|required');
	    	$this->form_validation->set_rules('pais', 'País', 'trim|required');
	    	$this->form_validation->set_rules('cp', 'Código Postal', 'trim');
	    	$this->form_validation->set_rules('horarios', 'Horario de atención', 'trim');
	    	$this->form_validation->set_rules('coordenadas', 'Colonia', 'trim');

			if ($this->form_validation->run() == FALSE){
				throw new Exception($this->form_validation->error_string(' ', ' '), 403);
			}

			$this->load->model('centro');

			$this->centro->nombre = $this->input->post('nombre');
			$this->centro->telefono = $this->input->post('telefono');
			$this->centro->identificador = $this->input->post('identificador');
			$this->centro->calle = $this->input->post('calle');
			$this->centro->numeroExt = $this->input->post('numeroExt');
			$this->centro->numeroInt = $this->input->post('numeroInt');
			$this->centro->colonia = $this->input->post('colonia');
			$this->centro->ciudad = $this->input->post('ciudad');
			$this->centro->estado = $this->input->post('estado');
			$this->centro->pais = $this->input->post('pais');
			$this->centro->cp = $this->input->post('cp');
			$this->centro->horarios = $this->input->post('horarios');
			$this->centro->coordenadas = $this->input->post('coordenadas');

			if(!$this->centro->save()){
				throw new Exception("Error en el servidor", 500);
			}

			$respuesta = array("code" => 200, "msg" => "El se guardo correctamente");

    	} catch (Exception $e) {
    		$respuesta = array("code" => $e->getCode(), "msg" => $e->getMessage());
    	}

    	header('Content-Type: application/json');
    	echo json_encode($respuesta);
	}

}
