/**
 * Do not reference this file anywhere.
 * It is loaded in index.js when the server starts
 * and is attached to the globals.js
 *
 * This is not "best" practice. .env files with the npm package 'dotenv' combined with a config file is best.
 * But this is simple and it works.
 *
 * !!!!!!!!Make sure to add to .gitignore if you don't want anything sensitive being saved to your repo!!!!!!!
 *
 */

/**
 * Config vars
 * @type {{environment: string, port: number}}
 */
module.exports = {
    environment: 'development',
    port: 3006
}