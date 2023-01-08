mod api;

use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use serde_json::json;

#[get("/test")]
pub async fn test() -> impl Responder {
    web::Json(json!({
        "test": "Hello",
    }))
}


pub fn mount(webRef: &mut web::ServiceConfig) {
    webRef.service(test);
}


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let ipAddress = "127.0.0.1";
    let port = 5000;

    println!("Running on: http://{}:{}", ipAddress, port);

    HttpServer::new(|| {
        App::new()
            .app_data(web::FormConfig::default())
            .configure(mount)
            .configure(api::mount)
    }).bind((ipAddress, port))?.run().await
}
