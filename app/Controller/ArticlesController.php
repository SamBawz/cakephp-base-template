<?php

class ArticlesController extends AppController
{
	public function index() {

	}
	public function delete() {

	}
	public function add() {
		if(!empty($this->data)) {
			$var = $this->request->data;
			//debug($var);
			//exit();

			//Use the Article model template to save data to the database
			$this->Article->save($this->data);
		}

	}
}
