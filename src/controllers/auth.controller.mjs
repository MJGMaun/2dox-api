const authUser = async (req, res) => {
	res.sendStatus(200);
}
const getStatus = async (req, res) => {
	return req.user ? res.send(req.user) : res.sendStatus(401);
}
const logoutUser = async (req, res) => {
	if (!reqç.user) return res.sendStatus(401);
	req.logout((err) => {
		if (err) return res.sendStatus(400);
		res.send(200);
	});
}

// router.get("/api/auth/discord", passport.authenticate("discord"));
// router.get(
// 	"/api/auth/discord/redirect",
// 	passport.authenticate("discord"),
// 	(request, response) => {
// 		response.sendStatus(200);
// 	}
// );

export { authUser, getStatus, logoutUser };