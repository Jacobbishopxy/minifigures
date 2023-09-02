/**
 * @fileoverview gRPC-Web generated client stub for kbar
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: kbar.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as kbar_pb from './kbar_pb';


export class KBarClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetSymbols = new grpcWeb.MethodDescriptor(
    '/kbar.KBar/GetSymbols',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    kbar_pb.SymbolList,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    kbar_pb.SymbolList.deserializeBinary
  );

  getSymbols(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<kbar_pb.SymbolList>;

  getSymbols(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: kbar_pb.SymbolList) => void): grpcWeb.ClientReadableStream<kbar_pb.SymbolList>;

  getSymbols(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: kbar_pb.SymbolList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kbar.KBar/GetSymbols',
        request,
        metadata || {},
        this.methodDescriptorGetSymbols,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kbar.KBar/GetSymbols',
    request,
    metadata || {},
    this.methodDescriptorGetSymbols);
  }

  methodDescriptorGetKBar = new grpcWeb.MethodDescriptor(
    '/kbar.KBar/GetKBar',
    grpcWeb.MethodType.UNARY,
    kbar_pb.KBarRequest,
    kbar_pb.KBarResponse,
    (request: kbar_pb.KBarRequest) => {
      return request.serializeBinary();
    },
    kbar_pb.KBarResponse.deserializeBinary
  );

  getKBar(
    request: kbar_pb.KBarRequest,
    metadata: grpcWeb.Metadata | null): Promise<kbar_pb.KBarResponse>;

  getKBar(
    request: kbar_pb.KBarRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: kbar_pb.KBarResponse) => void): grpcWeb.ClientReadableStream<kbar_pb.KBarResponse>;

  getKBar(
    request: kbar_pb.KBarRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: kbar_pb.KBarResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kbar.KBar/GetKBar',
        request,
        metadata || {},
        this.methodDescriptorGetKBar,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kbar.KBar/GetKBar',
    request,
    metadata || {},
    this.methodDescriptorGetKBar);
  }

}
