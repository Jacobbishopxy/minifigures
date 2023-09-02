//! file: build.rs
//! author: Jacob Xie
//! date: 2023/09/02 19:58:32 Saturday
//! brief:

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let kbar = "../proto/kbar.proto";

    tonic_build::configure()
        .type_attribute("KBarRow", "#[derive(serde::Deserialize, serde::Serialize)]")
        .compile(&[kbar], &["../proto"])?;

    Ok(())
}
