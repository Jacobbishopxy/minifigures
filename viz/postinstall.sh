#!/usr/bin/env bash
# author:	Jacob Xie
# @date:	2023/09/02 21:50:42 Saturday
# @brief:

protoc -I=../proto ../proto/*.proto \
    --js_out=import_style=commonjs,binary:./src/autogen/ \
    --grpc-web_out=import_style=typescript,mode=grpcweb:./src/autogen/ \
    --plugin=protoc-gen-grpc-web=./node_modules/.bin/protoc-gen-grpc-web

