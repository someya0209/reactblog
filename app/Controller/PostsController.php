<?php
class PostsController extends AppController {
    public $helpers = array('Html', 'Form');

    public function index() {}

    public function get_posts() {
        $this->autoRender = false;
        //$this->set('posts', $this->Post->find('all'));
        $posts = $this->Post->find('all');
        return json_encode($posts);
    }
}
