//! file: lib.rs
//! author: Jacob Xie
//! date: 2023/09/02 19:43:53 Saturday
//! brief:

#![allow(non_snake_case)]

pub mod grpc_kbar {
    tonic::include_proto!("kbar");
}

pub mod provider;
