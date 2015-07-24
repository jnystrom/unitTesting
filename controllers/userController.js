var UserController =
	function (userService) {
		var service = userService;
		this.getUser = function (req, res) {
			var userId = req.params.userId;
			service.getUser(userId, function (error, user) {
				if(error){
					return res.status(400).send(error);
				}
				return res.json(user);
			});
		};
	};
module.exports = UserController;