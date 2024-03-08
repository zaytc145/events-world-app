import {Alert, Button, Card, Col, Form, Input, InputNumber, Row, Statistic} from "antd";
import {useCallback, useState} from "react";
import baseApi from "../../http/appApi";
import LocationDataChart from "./LocationDataChart";
import LocationDataTable from "./LocationDataTable/LocationDataTable";
import {useGetPollutionDataMutation} from "../../http/pollutionApi";

const Events = () => {
    const [getPollutionData, {data = {
        locationData: null,
        tableData: [],
        chartData: {
            labels: [],
            datasets: []
        }
    }, isLoading, isError, error }] = useGetPollutionDataMutation();
    console.log(error)
    const onSubmit = useCallback(async (formData) => {
        getPollutionData(formData)
        return
    }, [])

    return <Row gutter={[24, 24]}>
        <Col span={12}>
            <Card>
                {isError && <Alert message={error.error} type="error" showIcon style={{marginBottom: 10}}/>}
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
                {data.locationData && <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="lat" value={data.locationData[0]}/>
                    </Col>
                    <Col span={12}>
                        <Statistic title="lng" value={data.locationData[1]} precision={2}/>
                    </Col>
                </Row>}
            </Card>
        </Col>
        <Col span={24}>
            <Card>
                <LocationDataTable data={data.tableData}/>
            </Card>
        </Col>
        <Col span={24}>
            <Card>
                <LocationDataChart data={data.chartData}/>
            </Card>
        </Col>
    </Row>
}

export default Events;