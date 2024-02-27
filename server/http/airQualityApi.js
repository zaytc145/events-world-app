import axios from "axios";

const airQualityApi = axios.create({
    baseURL: 'https://api.waqi.info',
    params: {
        token: '105208f7c2fb3b7de1c6bc310e4e7c27f85879ff'
    }
})

export default airQualityApi