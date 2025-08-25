import { configManager } from "./singleton/config-manager.ts";


configManager.setConfig("app_name", "My App");
configManager.setConfig("app_version", "1.0.0");
configManager.setConfig("app_description", "This is my app.");

console.log(configManager.getConfig("app_name"));
console.log(configManager.getConfig("app_version"));
console.log(configManager.getConfig("app_description"));
console.log(configManager.getAllConfig());