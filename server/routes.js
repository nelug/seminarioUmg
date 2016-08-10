var passport = require('passport');

var personaCtrl = require ('./controller/persona');
var menuCtrl = require ('./controller/menu');
var subMenuCtrl = require ('./controller/catalogo');
var User = require('./model/user.js');
module.exports = function(app) {
	
	app.get('/api/menu', menuCtrl.getMenu);
	app.get('/api/catalogo', subMenuCtrl.getCatalogo);
	app.get('/api/persona', personaCtrl.getPersona);
	app.post('/api/persona', personaCtrl.setPersona);
	app.put('/api/persona/:persona_id', personaCtrl.updatePersona);
	app.delete('/api/persona/:persona_id', personaCtrl.removePersona);
	app.get('/*', function(req, res) {
		res.sendfile('./app/index.html'); 
	});
	
	app.post('/api/user/register', function(req, res) {
		User.register(new User({ username: req.body.username }),
		req.body.password, function(err, account) {
			if (err) {
				return res.status(500).json({
					err: err
				});
			}
			passport.authenticate('local')(req, res, function () {
				return res.status(200).json({
					status: 'Registration successful!'
				});
			});
		});
	});
	
	app.post('/api/user/login', function(req, res, next) {
		passport.authenticate('local', function(err, user, info) {
			if (err) {
				return next(err);
			}
			if (!user) {
				return res.status(401).json({
					err: info
				});
			}
			req.logIn(user, function(err) {
				if (err) {
					return res.status(500).json({
						err: 'Could not log in user'
					});
				}
				res.status(200).json({
					status: 'Login successful!'
				});
			});
		})(req, res, next);
	});
	
	app.get('/api/user/logout', function(req, res) {
		req.logout();
		res.status(200).json({
			status: 'Bye!'
		});
	});
	
	app.get('/api/user/status', function(req, res) {
		if (!req.isAuthenticated()) {
			return res.status(200).json({
				status: false
			});
		}
		res.status(200).json({
			status: true
		});
	});
};