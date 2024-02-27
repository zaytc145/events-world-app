import {Alert, Button, Card, Col, Form, Input, InputNumber, Row, Statistic} from "antd";
import {useCallback, useState} from "react";
import baseApi from "../../http/appApi";
import LocationDataChart from "./LocationDataChart";
import LocationDataTable from "./LocationDataTable/LocationDataTable";

const Events = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });
    const [tableData, setTableData] = useState([]);
    const [locationData, setLocationData] = useState(null)


    const onSubmit = useCallback(async (formData) => {
        setError(null);
        setIsLoading(true);
        try {
            const response = await baseApi.post('/events', formData);
            setChartData(response.data.chartData);
            setTableData(response.data.tableData);
            setLocationData(response.data.locationData);
        } catch (e) {
            setError(e.response.data);
        } finally {
            setIsLoading(false);
        }
    }, [])

    return <Row gutter={[24, 24]}>
        <Col span={12}>
            <Card>
                {error && <Alert message={error} type="error" showIcon style={{marginBottom: 10}}/>}
                <Form
                    onFinish={onSubmit}
                    validateTrigger="onBlur"
                    layout="inline"
                    initialValues={{
                        "city": "shanghai"
                    }}
                    style={{marginBottom: 10}}
                >

                    <Form.Item
                        label="city"
                        name="city"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        style={{flex: 1}}
                    >
                        <Input style={{width: '100%'}}/>
                    </Form.Item>
                    <Form.Item wrapperCol={{span: 14, offset: 4}}>
                        <Button type="primary" htmlType="submit" loading={isLoading}>Find</Button>
                    </Form.Item>
                </Form>
                {locationData && <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="lat" value={locationData[0]}/>
                    </Col>
                    <Col span={12}>
                        <Statistic title="lng" value={locationData[1]} precision={2}/>
                    </Col>
                </Row>}
            </Card>
        </Col>
        <Col span={24}>
            <Card>
                <LocationDataTable data={tableData}/>
            </Card>
        </Col>
        <Col span={24}>
            <Card>
                <LocationDataChart data={chartData}/>
            </Card>
        </Col>
    </Row>
}

export default Events;