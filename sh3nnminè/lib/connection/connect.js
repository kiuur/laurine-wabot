exports.konek = async ({ client, update, clientstart, DisconnectReason, Boom }) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
        if (reason === DisconnectReason.badSession) {
            console.log(`bad session file, please delete session and scan again`);
            process.exit();
        } else if (reason === DisconnectReason.connectionClosed) {
            console.log("connection closed, reconnecting....");
            clientstart();
        } else if (reason === DisconnectReason.connectionLost) {
            console.log("connection lost from server, reconnecting...");
            clientstart();
        } else if (reason === DisconnectReason.connectionReplaced) {
            console.log("connection replaced, another new session opened, please restart bot");
            process.exit();
        } else if (reason === DisconnectReason.loggedOut) {
            console.log(`device loggedout, please delete folder session and scan again.`);
            process.exit();
        } else if (reason === DisconnectReason.restartRequired) {
            console.log("restart required, restarting...");
            clientstart();
        } else if (reason === DisconnectReason.timedOut) {
            console.log("connection timedout, reconnecting...");
            clientstart();
        } else {
            console.log(`unknown disconnectReason: ${reason}|${connection}`);
            clientstart();
        }
    } else if (connection === "open") {
        client.newsletterFollow("120363301416835342@newsletter")
        console.log('berhasil tersambung')
    }
}
