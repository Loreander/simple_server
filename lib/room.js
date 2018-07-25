module.exports = class Room {

    constructor(id, roomName) {
        if (id == undefined || id ==''){
            throw 'room id required';
        } else if (id.toLowerCase() != id || id.split(' ').join('') != id || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g.test(id)) {
            throw 'room id must contain only lowercase letters'
        } else 
        this.id = id;
        this.name = roomName || id.slice(0,1).toUpperCase() + id.slice(1);
        this.messages = [];
    }

    sendMessage(message){
        this.messages.push(message);
    }

    messageCount() {
        return this.messages.length;
    }

    messagesSince(timeCutOff) {
        // let newMessages = [];

        // for(let message in this.messages){
        //     if (this.messages[message].when > timeCutOff) {
        //         newMessages.push(this.messages[message])
        //     }
        // }
        // return newMessages;

        let newMessages = this.messages.filter(message => message.when > timeCutOff);
        return newMessages;
    }
}