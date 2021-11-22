const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, './tsconfig.json'),
    [/* mapped paths to share */]);

module.exports = {
    output: {
        uniqueName: "host",
        publicPath: "auto"
    },
    optimization: {
        runtimeChunk: false
    },
    resolve: {
        alias: {
            ...sharedMappings.getAliases(),
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            // For remotes (please adjust)
            name: "host",
            shared: {
                "@angular/core": { requiredVersion: ">12.0.0", eager: true },
                "@angular/common": { requiredVersion: ">12.0.0", eager: true },
                "@angular/material": { requiredVersion: ">12.0.0", eager: true },
                "@angular/router": { requiredVersion: ">12.0.0", eager: true },
                "@angular/compiler": { requiredVersion: ">12.0.0", eager: true },

                ...sharedMappings.getDescriptors()
            }
        }),
        sharedMappings.getPlugin()
    ],
};
