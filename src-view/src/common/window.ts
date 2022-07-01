import { invoke } from '@tauri-apps/api/tauri';

export function show_main() {
  invoke('show_main');
}
