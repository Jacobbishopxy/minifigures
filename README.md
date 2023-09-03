# MiniFigures

A collection of graphs, which uses gRPC for communication, Rust (Tonic) for the backend server and React (protobuf-ts) for the frontend.

Tech stack:

- Backend:

  - [Prost](https://github.com/tokio-rs/prost): Protobuf

  - [Tonic](https://github.com/hyperium/tonic): gRPC server

  - [Tokio](https://github.com/tokio-rs/tokio): Async runtime

- Frontend:

  - [Vite](https://vitejs.dev/): Frontend tooling

  - [React](https://react.dev/): User interfaces

  - [Protobuf-ts](https://github.com/timostamm/protobuf-ts): Protobuf

  - [Antd](https://ant.design/): UI components

  - [ECharts](https://echarts.apache.org/): Visualization library

## Srv

Dependencies for gRPC:

```sh
cargo add prost prost-types tonic tonic-web
```

Test case:

```sh
grpcurl -plaintext -import-path proto -proto kbar.proto 127.0.0.1:8001 kbar.KBar/GetSymbols
grpcurl -d '{"symbol": "000001.SH"}' -plaintext -import-path proto -proto kbar.proto 127.0.0.1:8001 kbar.KBar/GetKBar
```

## Viz

Dependencies for gRPC:

```sh
yarn add @protobuf-ts/plugin @protobuf-ts/grpcweb-transport
```

Use case please see [protobuf-ts](https://github.com/timostamm/protobuf-ts/blob/main/MANUAL.md#grpc-web-transport)

## Data

- `kbar`: one must provide a CSV file (under `./data` dir) with head:

    `symbol,trade_date,pre_close,open_price,hight_price,low_price,close_price,change,pct_change,volume,amount`
