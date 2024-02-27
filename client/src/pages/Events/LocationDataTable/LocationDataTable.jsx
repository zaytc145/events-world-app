import LOCATION_DATA_TABLE_COLUMNS from "./LocationDataTableColumns";
import {Table} from "antd";

const LocationDataTable = (props) => {
    return <Table columns={LOCATION_DATA_TABLE_COLUMNS} dataSource={props.data} />
}

export default LocationDataTable