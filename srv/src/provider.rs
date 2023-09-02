//! file: provider.rs
//! author: Jacob Xie
//! date: 2023/09/02 19:57:39 Saturday
//! brief:

use std::collections::HashMap;

use anyhow::Result;
use itertools::Itertools;
use tonic::{Code, Request, Response, Status};

use crate::grpc_kbar::k_bar_server::KBar;
use crate::grpc_kbar::{KBarRequest, KBarResponse, KBarRow, SymbolList};

// ================================================================================================
// ADT
// ================================================================================================

pub type Symbol = String;

#[derive(Debug, Default)]
pub struct SrvKBar {
    data: HashMap<Symbol, Vec<KBarRow>>,
}

impl SrvKBar {
    pub fn new(csv_path: &str) -> Result<Self> {
        let mut csv = csv::Reader::from_path(csv_path)?;

        let data = csv
            .deserialize()
            .into_iter()
            .collect::<Result<Vec<KBarRow>, csv::Error>>()?
            .into_iter()
            .into_group_map_by(|r| r.symbol.clone());

        Ok(Self { data })
    }

    pub fn data(&self) -> &HashMap<Symbol, Vec<KBarRow>> {
        &self.data
    }
}

// ================================================================================================
// IMPL
// ================================================================================================

#[tonic::async_trait]
impl KBar for SrvKBar {
    async fn get_symbols(&self, _: Request<()>) -> Result<Response<SymbolList>, Status> {
        Ok(Response::new(SymbolList {
            data: self.data.keys().cloned().collect_vec(),
        }))
    }

    async fn get_k_bar(
        &self,
        request: Request<KBarRequest>,
    ) -> Result<Response<KBarResponse>, Status> {
        let symbol = &request.get_ref().symbol;

        let data = self
            .data
            .get(symbol)
            .ok_or(Status::new(
                Code::NotFound,
                format!("symbol <{}> not found", symbol),
            ))?
            .clone();

        Ok(Response::new(KBarResponse { data }))
    }
}
