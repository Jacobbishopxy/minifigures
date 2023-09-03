/**
 * @file:	menu.ts
 * @author:	Jacob Xie
 * @date:	2023/09/03 09:16:33 Sunday
 * @brief:
 **/


export const menuMapping = new Map([
    ["/", {index: 0, name: "Home"}],
    ["kbar", {index: 1, name: "KBar"}],
])

export type PageInfo = [number, string, string]

export interface AppProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    routes: any
}


export const pageGenerator = (param: AppProps): Array<PageInfo> => {
    return param.routes.map((obj: {path: string}) => {
        const value = menuMapping.get(obj.path)
        const index = value?.index
        const name = value?.name

        return [index, obj.path, name]
    }).sort((a: PageInfo, b: PageInfo) => a[0] - b[0])
}
