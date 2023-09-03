# minifigures

## Srv

Dependencies for GRPC:

```sh
cargo add prost prost-types tonic tonic-web
```

Test case:

```sh
grpcurl -plaintext -import-path proto -proto kbar.proto 127.0.0.1:8001 kbar.KBar/GetSymbols
grpcurl -d '{"symbol": "000001.SH"}' -plaintext -import-path proto -proto kbar.proto 127.0.0.1:8001 kbar.KBar/GetKBar
```

## Viz

Dependencies for GRPC:

```sh
yarn add @protobuf-ts/plugin @protobuf-ts/grpcweb-transport
```

Use case please see [protobuf-ts](https://github.com/timostamm/protobuf-ts/blob/main/MANUAL.md#grpc-web-transport)

## Reference

- [Tonic](https://github.com/hyperium/tonic)

- [grpcurl](https://github.com/fullstorydev/grpcurl)

- [protobuf-ts](https://github.com/timostamm/protobuf-ts)
