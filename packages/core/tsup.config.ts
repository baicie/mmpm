import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts", "./src/postinstall.ts"],
  dts: true,
  sourcemap: true,
});
