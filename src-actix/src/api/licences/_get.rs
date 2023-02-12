use actix_web::{web, get, Responder};

use azure_tools::myazure::tables::get_entities;

use serde_json::{json, Value};

#[get("/api/licences/get-licences")]
async fn _get_licences() -> impl Responder {
    let entities = get_entities("licences").await;


    if let Ok(result) = entities {
        let convertedVector: Vec<Value> = result.iter().map(|value| {
            let organization = value.get("PartitionKey");
            let application = value.get("RowKey");
            let uid = value.get("Uid");
            let licenceType = value.get("Type");
            let validTo = value.get("ValidTo");

            return json!({
                "uid": uid,
                "uid": uid,
                "organization": organization,
                "application": application,
                "type": licenceType,
                "valid_to": validTo
            });
        }).collect();

        return web::Json(json!({
        "values": json!(convertedVector)
    }));
    } else {
        return web::Json(json!({
        "values": []
    }));
    }
}

pub fn mount(app: &mut web::ServiceConfig) {
    app.service(_get_licences);
}