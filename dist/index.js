"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res, next) => {
    try {
        res.send("Cape Cod Server");
    }
    catch (error) {
        next(error);
    }
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
app.post("/validate", (req, res) => {
    const data = req.body;
    console.log("post receivedd and data is : ", data);
    res.send(validate(data.password));
});
const validate = (password) => {
    return password === "abcd";
};
