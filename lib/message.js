module.exports = class Message {
    constructor(message = {}){
        this.when = message.when || new Date();
        this.author = message.author || 'anonymous';
        this.body = message.body || '';
    }
}