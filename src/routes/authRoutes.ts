import {Router, RouterOptions} from "express";

class AuthRotes{
    public router: Router;

    constructor(){
        this.router = Router();
        this.config();

    }
    config() {
        this.router.get('/',(req, res) => {
            res.send('Invocado Autenticacion')
        });

    }
}
const authRoutes = new AuthRotes();
export default authRoutes.router