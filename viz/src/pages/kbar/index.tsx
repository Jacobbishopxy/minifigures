/**
 * @file:	index.tsx
 * @author:	Jacob Xie
 * @date:	2023/09/02 19:45:37 Saturday
 * @brief:
 **/

import ReactECharts from "echarts-for-react"

const KBar = () => {
    const options = {
        grid: {top: 20, right: 40, bottom: 20, left: 40},
        xAxis: {
            type: "category",
            data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                data: [400, 300, 350, 200, 280],
                type: "bar",
                smooth: true
            }
        ],
        tooltip: {
            trigger: "axis"
        }
    }


    return (
        <ReactECharts
            option={options}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
        />
    )
}

export default KBar
