import {defineConfig} from "vitest/config";

export default defineConfig({
    test: {
        silent: false,
        disableConsoleIntercept: true,
        reporters: ["verbose"],
    },
});
