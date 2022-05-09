use wasm_bindgen::prelude::*;

#[wasm_bindgen(module = "/js/window.js")]
extern "C" {
    #[wasm_bindgen]
    pub fn show_main();
}
