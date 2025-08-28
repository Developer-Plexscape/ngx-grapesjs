export interface EditorConfig {
  container: string;
  plugins: string[];
  components: string;
  pluginsOpts: Record<string, any>;
  storageManager: {
    id: string;
  };
}
