const config = require('../settings/config');
const { readdirSync, statSync, unlinkSync } = require('fs');
const { join } = require('path');

let handler = async (m, { reply, args }) => {
  const sesi = [config.session];
  const array = [];

  sesi.forEach(dirname => {
    readdirSync(dirname).forEach(file => {
      if (file !== 'creds.json') { 
        array.push(join(dirname, file));
      }
    });
  });

  const deletedFiles = [];

  array.forEach(file => {
    const stats = statSync(file);

    if (stats.isDirectory()) {
      console.log(`skipping directory: ${file}`);
    } else {
      unlinkSync(file);
      deletedFiles.push(file);
    }
  });

  reply('success');

  if (deletedFiles.length > 0) {
    console.log('Deleted files:', deletedFiles);
  }

  if (deletedFiles.length == 0) {
    reply('tidak ada file yang tersisa di folder session');
  }
};

handler.help = ['clearsession'];
handler.tags = ['owner'];
handler.command = ["csesi", "clearsesi"];
handler.isBot = true;

module.exports = handler;
