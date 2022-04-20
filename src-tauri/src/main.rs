use tauri::Manager;

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let main_window = app.get_window("main").unwrap();
      // we perform the initialization code on a new task so the app doesn't freeze
      tauri::async_runtime::spawn(async move {
        // initialize your app here instead of sleeping :)
        println!("Initializing...");
        std::thread::sleep(std::time::Duration::from_secs(2));
        println!("Done initializing.");
        
        main_window.show().unwrap();
      });
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("failed to run app");
}
