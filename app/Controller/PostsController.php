<?php
class PostsController extends AppController {
    public $helpers = array('Html', 'Form');

    public function index() {

    }

    public function add() {

    }

    public function get_posts() {
        $this->autoRender = false;
        //$this->set('posts', $this->Post->find('all'));
        $posts = $this->Post->find('all');

        //return json_encode($posts);
        echo json_encode($posts);
        exit;
    }

    public function add_posts() {
        //($this->request->is('post'));
        $retVal = [
            'status' => false,
        ];
        //debug($this->request->data);
        $data = $this->request->data;
        $this->Post->create();
        if ($result = $this->Post->saveall($data)) {
        //$this->Flash->success(__('The post has been saved.'));
        } else {
        //$this->Flash->error(__('The post could not be saved. Please, try again.'));
        }
        //$retVal['status'] = $result;
        //return json_encode($retVal);//errorになる、後で調べる
        echo json_encode($retVal);
        exit;
    }

    public function delete_post() {
        //($this->request->is('post'));
        //debug($this->request->data);
        $retVal = [
            'status' => false,
        ];
        $retVal['status'] = $this->Post->delete($this->request->data['id']);

        echo json_encode($retVal);
        exit;
    }

    public function search_post() {
        $this->autoRender = false;
        $retVal = [
            'status' => false,
        ];
        $id = $this->request->data['id'];
        if(!$this->Post->exists((int)$id)){
            echo json_encode($retVal);
            exit;
        }else {
            $options = array('conditions' => array('Post.'.$this->Post->primaryKey => $id));
            $retVal['data'] = $this->Post->find('first', $options);
            echo json_encode($retVal);
            exit;
        }
    }

    public function edit_post() {
        $this->autoRender = false;
        $posts = $this->Post->find('all');

        echo json_encode($posts);
        exit;
    }
}
