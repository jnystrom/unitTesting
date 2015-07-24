var UserService = function (repository) {
	var repo = repository;

	this.addUser = function (user, next) {
		//var self = this;
		repo.find("User", user, function (err, existingUser) {
			if (err) {
				return next(err);
			}
			if (!existingUser) {
				return repo.create("User", user, next);
			} else {
				next("user already exists", existingUser);
			}
		});
	};

	this.getUser = function (userId, next) {
		return repo.find("User", {_id: userId}, next);
	};
};
module.exports = UserService;