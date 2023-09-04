/**
 * @file:	index.tsx
 * @author:	Jacob Xie
 * @date:	2023/09/02 19:45:37 Saturday
 * @brief:
 **/

import {useEffect, useState} from "react"
import ReactECharts from "echarts-for-react"
import {GrpcWebFetchTransport} from "@protobuf-ts/grpcweb-transport"
import {Card, Select} from "antd"
import {useLocalStorageState} from "ahooks"

import {KBarClient} from "../../autogen/kbar.client"
import {Empty} from "../../autogen/google/protobuf/empty"
import {KBarRow} from "../../autogen/kbar"
import {generateEChartsOption} from "./helper"


// ================================================================================================
// GRPC
// ================================================================================================

const transport = new GrpcWebFetchTransport({
    baseUrl: import.meta.env.VITE_SERVER_ADDR,
    format: "binary"
})
const client = new KBarClient(transport)


// ================================================================================================
// Helper
// ================================================================================================

type KBarSymbol = string

// Filter `option.label` match the user type `input`
const filterOption = (input: string, option?: {label: string; value: string}) =>
    (option?.label || "").includes(input)

// ================================================================================================
// Page
// ================================================================================================


const KBar = () => {
    const [symbolList, setSymbolList] = useState<KBarSymbol[]>()
    const [selectedSymbol, setSelectedSymbol] = useLocalStorageState<KBarSymbol>("kbar-selectedSymbol")
    const [kbarData, setKBarData] = useState<KBarRow[]>()

    // fetch symbol list
    useEffect(() => {
        client.getSymbols(Empty).then(res => setSymbolList(res.response.data))
    }, [])

    useEffect(() => {
        if (selectedSymbol)
            client.getKBar({symbol: selectedSymbol}).then(res => setKBarData(res.response.data))
    }, [selectedSymbol])

    const onChange = (value: string) => {
        setSelectedSymbol(value)
    }

    return <Card
        title={
            <Select
                showSearch
                placeholder="Select a symbol"
                optionFilterProp="children"
                value={selectedSymbol}
                onChange={onChange}
                filterOption={filterOption}
                options={symbolList?.map(e => ({label: e, value: e}))}
            />
        }
        headStyle={{background: "beige"}}
        bodyStyle={{background: "beige"}}
    >
        {
            kbarData ?
                <ReactECharts
                    option={generateEChartsOption(kbarData)}
                    notMerge={true}
                    lazyUpdate={true}
                    theme={"theme_name"}
                    style={{minHeight: "65vh"}}
                /> :
                <>Please select a symbol</>
        }
    </Card>
}

export default KBar
