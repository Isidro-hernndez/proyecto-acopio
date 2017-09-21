<?php
	class Centro extends CI_Model {

		public $id;
		public $nombre;
		public $telefono;
		public $identificador;
		public $calle;
		public $numeroExt;
		public $numeroInt;
		public $colonia;
		public $ciudad;
		public $estado;
		public $pais;
		public $cp;
		public $horarios;
		public $coordenadas;
		public $verificado;
		public $createAt;
		public $updateAt;

		public function __construct(){
        	parent::__construct();
            $this->load->database();
        }

        public function get($filtros = array()){
        	$this->db->select('*');
        	$this->db->from('centros');
        	$this->db->order_by('nombre');

        	$query = $this->get();
        	return $query->result();
        }

        public function save(){
        	$this->db->set('nombre', $this->nombre);
        	$this->db->set('telefono', $this->telefono);
        	$this->db->set('identificador', $this->identificador);
        	$this->db->set('calle', $this->calle);
        	$this->db->set('numeroExt', $this->numeroExt);
        	$this->db->set('numeroInt', $this->numeroInt);
        	$this->db->set('colonia', $this->colonia);
        	$this->db->set('ciudad', $this->ciudad);
        	$this->db->set('estado', $this->estado);
        	$this->db->set('pais', $this->pais);
        	$this->db->set('cp', $this->cp);
        	$this->db->set('horarios', $this->horarios);
        	$this->db->set('coordenadas', 'POINT(0,0)', false);
        	$this->db->set('updateAt', date('Y-m-d H:i:s'));

        	if(!empty($this->id)){
        		$this->db->set('verificado', $this->verificado);
        		$this->db->where('id', $this->id);
        		return $this->db->update('centros');
        	}else{
        		$this->db->set('createAt', date('Y-m-d H:i:s'));
        		return $this->db->insert('centros');
        	}
        }

    }