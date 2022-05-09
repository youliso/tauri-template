const invoke = window.__TAURI__.invoke;

export function show_main() {
  invoke("show_main");
}
