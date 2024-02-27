class EventsService {
    getChartData(data) {
        const {daily} = data.forecast
        const uniqueDatesSet = new Set()
        const chartData = {
            labels: [],
            datasets: []
        }

        Object.keys(daily).forEach(pollutionType => {
            const pollutionData = daily[pollutionType]
            const data = []
            pollutionData.forEach(pollutionInfo => {
                data.push(pollutionInfo.avg)
                uniqueDatesSet.add(pollutionInfo.day)
            })
            chartData.datasets.push({
                label: pollutionType,
                data
            })
        })

        chartData.labels = Array.from(uniqueDatesSet).sort((a, b) => {
            return +new Date(a) - +new Date(b)
        })

        return chartData
    }

    getTableData(data) {
        const tableData = [];
        const dataByDate = {}
        const {daily} = data.forecast
        Object.keys(daily).forEach(pollutionType => {
            const pollutionData = daily[pollutionType]

            pollutionData.forEach(pollutionInfo => {
                if (!dataByDate[pollutionInfo.day]) {
                    dataByDate[pollutionInfo.day] = {}
                }

                dataByDate[pollutionInfo.day][pollutionType] = pollutionInfo.avg
            })
        })

        return Object.keys(dataByDate).map(day => {
            return {
                day,
                ...dataByDate[day]
            }
        })
    }
}

export default EventsService