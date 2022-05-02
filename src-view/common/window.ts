import { invoke } from '@tauri-apps/api/tauri';

/**
 * show
 */
export function windowShow() {
  invoke('close_splashscreen');
}
