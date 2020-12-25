const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged() {
        this.emit('User logged', {user: 'Celso Henrique'})
    }
}
const emitter = new EventEmitter();

Users.on('User logged', data =>{
    console.log(data);
});

Users.userLogged({ user: 'Celso Henrique'});
