require('@babel/register')({ presets: [ [ '@babel/preset-env', { targets: { node: '8.17.0', }, }, ] ], })
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, file) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', (file) => {
    console.log('+++ /plugins/index.mjs called')
    try {
      if (file.filePath.includes('index')) {
        console.log('*** index file loaded')
      } else {
        console.log(`--- other file loaded: ${file.filePath}`)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`caught error: ${error}`)
    }
    return file.filePath
  }
  )
  }
