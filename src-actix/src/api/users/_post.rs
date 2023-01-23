use actix_multipart::Multipart;
use actix_web::{web, post, Responder};
use serde::Deserialize;

use serde_json::{json};


#[derive(Deserialize)]
struct LoginCredentials {
    user_name: String,
    password: String,

}


#[post("/api/users/try-login")]
// pub async fn _try_login_user(mut payload: Multipart) -> impl Responder {
pub async fn _try_login_user(login_data: web::Form<LoginCredentials>) -> impl Responder {
    println!("User name: {:?}", login_data.user_name);
    println!("User password: {:?}", login_data.password);

    println!("Heere");

    web::Json(json!({
        "is_valid": false,
        "user_role": "admin",
        "user_data": json!({
            "user_name": "Erik",
            "user_surname": "Palencik",
        })
    }))
}

pub fn mount(app: &mut web::ServiceConfig) {
    app.service(_try_login_user);
}