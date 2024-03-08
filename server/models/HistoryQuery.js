import mongoose from 'mongoose';

const HistoryQueryModelSchema = new mongoose.Schema({
    city: String, location: Array, pollutionData: {
        o3: Array,
        pm10: Array,
        pm25: Array,
        uvi: Array,
    }
});

const HistoryQueryModel = mongoose.model("HistoryQueryModel", HistoryQueryModelSchema);

export default HistoryQueryModel;