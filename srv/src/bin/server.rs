//! file: server.rs
//! author: Jacob Xie
//! date: 2023/09/02 21:59:13 Saturday
//! brief:

use dotenv::{dotenv, var};
use srv::grpc_kbar::k_bar_server::KBarServer;
use srv::provider::SrvKBar;
use tonic::transport::Server;
use tower_http::cors::{Any, CorsLayer};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    dotenv().ok();

    let kbar_path = var("DATA_KBAR")?;
    let srv_kbar = SrvKBar::new(&kbar_path)?;
    let kbar = KBarServer::new(srv_kbar);

    let addr = "127.0.0.1:8001".parse()?;
    println!("listening on {}", addr);

    let cors = CorsLayer::new()
        .allow_headers(Any)
        .allow_methods(Any)
        .allow_origin(Any);

    Server::builder()
        .accept_http1(true)
        .layer(cors)
        .add_service(tonic_web::enable(kbar))
        .serve(addr)
        .await?;

    Ok(())
}
