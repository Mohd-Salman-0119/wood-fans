const { signupController, loginController, getUser } = require("../imports/controllers.imports");
const { express } = require("../imports/modules.imports")
const { authorize } = require("../imports/middleware.imports")

const authRoutes = express.Router();

authRoutes.post('/login', loginController);
authRoutes.post('/signup', signupController);
authRoutes.route('/user').get(authorize, getUser);


module.exports = { authRoutes }