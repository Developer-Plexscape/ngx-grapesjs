export interface Editor {
}

export interface Config {
  container: string;
  plugins: string[];
  components: string;
  pluginsOpts: Record<string, any>;
  storageManager: {
    id: string
  };
}
