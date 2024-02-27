import express from 'express'
import bodyParser from "body-parser";
import cors from 'cors'
import mongoose from "mongoose";
import UserModel from "./models/User.js";
import UserDto from "./DTOs/UserDTO.js";
import airQualityApi from "./http/airQualityApi.js";
import EventsService from "./sevices/EventsService.js";

const port = 3001
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/users/:id', async (req, res) => {
    const userId = req.params.id
    const user = await UserModel.findById(userId);
    res.send(new UserDto(user))
})

app.post('/login', async (req, res) => {
    const {login, password} = req.body;

    const user = await UserModel.findOne({
        login
    });

    if (!user || user.password !== password) {
        return res.status(401).send("Неверный логин или пароль");
    }

    return res.send(new UserDto(user))
})

app.post('/register', async (req, res) => {
    const {
        login,
        email,
        password
    } = req.body;

    const user = new UserModel({
        login,
        email,
        password,
    })

    await user.save();
    res.send(new UserDto(user))
})

app.post('/events', async (req, res) => {
    const {
        city
    } = req.body
    const response = await airQualityApi.get(`feed/${city}`)
    const {data, status} = response.data

    if (status === 'error') {
        return res.status(404).send(data)
    }

    const eventsService = new EventsService();

    res.send({
        locationData: data.city.geo,
        chartData: eventsService.getChartData(data),
        tableData: eventsService.getTableData(data)
    })
})

app.listen(port, () => {
    mongoose.connect(
        "mongodb://root:root@localhost:27017/mongoose?authSource=admin"
    );
    console.log(`Listening on port ${port}`)
})