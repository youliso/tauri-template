use tauri_build::{try_build, Attributes, WindowsAttributes};

fn main() {
  if let Err(error) = try_build(
    Attributes::new()
      .windows_attributes(WindowsAttributes::new().window_icon_path("../resources/build/icons/icon.ico")),
  ) {
    panic!("error found during tauri-build: {:#?}", error);
  }
}
