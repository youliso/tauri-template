const invoke = window.__TAURI__.invoke;

export function show_main() {
  try {
    invoke("show_main");
  } catch (error) {}
}
