import { invoke } from '@tauri-apps/api/tauri';

/**
 * show
 */
export function windowShow() {
  setTimeout(() => {
    invoke('close_splashscreen');
  }, 400);
}
