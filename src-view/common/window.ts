/**
 * show
 */
export function windowShow() {
  window.__TAURI__.invoke('close_splashscreen');
}
