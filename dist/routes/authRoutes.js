"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AuthRotes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            res.send('Invocado Autenticacion');
        });
    }
}
const authRoutes = new AuthRotes();
exports.default = authRoutes.router;
//# sourceMappingURL=authRoutes.js.map