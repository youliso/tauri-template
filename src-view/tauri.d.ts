interface Window {
  __TAURI__: {
    invoke: (key: string) => void;
  };
}
