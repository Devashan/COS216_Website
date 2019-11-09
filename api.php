<?php



	class API
	{
		private $req;
		public $data;
		private $omdbkey = "7501af51";
		private $tmdbkey = "2dcb74713355d5056e48bbbc7e9ad7bd";
		private $db_conn;

		public static function instance()
		{
			static $instance = null;

			if ($instance == null)
			{
				$instance = new API();
			}

			return $instance;
		}

		private function __construct()
		{
			$this->req = curl_init();
			$url = '';

			curl_setopt($this->req, CURLOPT_PROXY, "phugeet.cs.up.ac.za:3128");

			curl_setopt($this->req, CURLOPT_URL, $url);
			curl_setopt($this->req, CURLOPT_RETURNTRANSFER, 1);

			$this->data = curl_exec($this->req);





			$CONFIG["db"] = new stdClass();
			$CONFIG['db']->user = 'u16029063';
			$CONFIG['db']->pw = 'Trustno1';
			$CONFIG['db']->host = '127.0.0.1';

			$this->db_conn = new mysqli($CONFIG['db']->host, $CONFIG['db']->user, $CONFIG['db']->pw);

			$this->db_conn->select_db('u16029063');




		}

		public function __destruct()
		{
			$this->db_conn->close();
		}

		public function changeTheme($key)
		{
			if (isset($key))
			{
				if ($this->db_conn->query("SELECT * FROM main_table WHERE API_key = '".$key."'")->num_rows == 0)
				{
					header("HTTP/1.1 404 BAD");
				}
				else
				{
					$theme = 0;

					if ($this->db_conn->query("SELECT * FROM preferences WHERE API_key = '".$key."'")->num_rows == 0)
					{
						$this->db_conn->query("INSERT INTO preferences (API_key) value ('".$key."')");
					}

					if ($this->db_conn->query("SELECT theme FROM preferences WHERE API_key = '".$key."'")->fetch_assoc()['theme'] == 0)
					{
						$this->db_conn->query("UPDATE preferences SET theme = 1 WHERE API_key = '".$key."'");
						$theme = 1;
					}
					else
					{
						$this->db_conn->query("UPDATE preferences SET theme = 0 WHERE API_key = '".$key."'");
					}


					header("HTTP/1.1 200 OK");
					echo $theme;
				}
			}
			else
			{
				header("HTTP/1.1 404 BAD");
			}
		}

		public function login($email)
		{


			$apikey = $this->db_conn->query("SELECT API_key FROM main_table WHERE email = '".$email."'")->fetch_assoc()['API_key'];

			$username = $this->db_conn->query("SELECT name FROM main_table WHERE email = '".$email."'")->fetch_assoc()['name'];

			echo "<script>sessionStorage.setItem('key','".$apikey."');sessionStorage.setItem('name','".$username."');</script>";

			header("HTTP/1.1 200 OK");
			header('Content-Type: text/plain');
		}


	}

	$type = $_POST['type'];


	if ($type == "login")
	{
		API::instance()->login($_POST['email']);
	}
	else if ($type == "theme")
	{
		API::instance()->changeTheme($_POST['key']);
	}









	/*if (!isset($_POST['type']))
	{

	}
	else if*/




	/*if (!isset($_POST['name']))
		header("HTTP/1.1 401 ERROR");

	echo API::instance($_POST['name'])->data;
	header("HTTP/1.1 200 OK");
	header("Content-Type: application/json");

	$obj = new stdClass();
	$obj->fun = "no fun";

	echo json_encode($obj);

	$api = API::instance();*/


?>


