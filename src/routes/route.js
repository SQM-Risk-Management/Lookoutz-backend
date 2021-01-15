import { signUp, login } from '../controllers/controllers'

const routes = (app) => {
    app.route('/SignUp')
        .post(signUp)

        app.route('/Login')
        .post(login)
}

export default routes;