mod users;

use actix_web::{web};

pub fn mount(app: &mut web::ServiceConfig) {
    users::mount(app);
}

