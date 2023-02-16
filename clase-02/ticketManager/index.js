class TicketManager {
    #profitBasePrice
    constructor() {
        this.events = [];
        this.#profitBasePrice = 0.15;
    }

/**
 * validate inputs of event.
 * @param {string} name - event name.
 * @param {string} place - event place.
 * @param {string} price - event price.
 * @return {boolean} true or false.
 */
    validateFields = (name, place, price) => {
        if(!name || !place || !price) {
            return false;
        }
        return true;
    }
/**
 * print events register.
 * @return {Array} events array.
 */
    getEvents = () => {
        console.log("Eventos Registrados: ", this.events);
        return this.events;
    }

/**
 * register a new event.
 * @param {string} name - event name.
 * @param {string} place - event place.
 * @param {string} price - event price.
 * @param {string} capacity - event capacity.
 * @param {string} date - event date.
 */    

    addevents = (name, place, price, capacity, date) => {
        let id = 0;
        if(!this.validateFields) {
            console.log("faltan campos para registrar un evento")
            return;
        }

        if(this.events.length) {
            const lastEventRegister = this.events[this.events.length - 1];
            id = lastEventRegister.id + 1;
        } else {
            id++;
        }

        price = (price + (price * this.#profitBasePrice));

        this.events.push({
            name,
            place,
            price,
            capacity: capacity ??= 50,
            date: date ??= new Date(),
            participants: []
        });
    }

/**
 * add user to a event.
 * @param {string} eventId - eventId to add user.
 * @param {string} userId - id of user to add.
 * @param {string} userName - name of user.
 */  

    addUser = (eventId, userId, userName) => {
        const eventIfExist = this.events.find((event)=> event === eventId);
        if(!eventIfExist) {
            console.log(`El evento ${eventId} no existe`);
            return;
        }

        const { participants } = eventIfExist;

        const userExistInEvent = participants.find((user) => user.userId === userId);

        if(userExistInEvent) {
            console.log(`El usuario ${userId} se encuentra registrado`);
            return;
        }

        const indexOfEventInArray = this.events.findIndex((event)=> event === eventId);
        this.events[indexOfEventInArray].participants.push({
            eventId,
            userId,
            userName
        })
    }

/**
 * put event on tour.
 * @param {string} eventId - eventId to add user.
 * @param {string} place - event place.
 * @param {string} date - event date.
 */    
    putEventOnTour = (eventId, place, date) => {
        let id = 0
        if(this.events.length) {
            const lastEventRegister = this.events[this.events.length - 1];
            id = lastEventRegister.id + 1;
        } else {
            id++;
        }
        const eventIfExist = this.events.find((event)=> event === eventId);
        this.events.push({
            id,
            place,
            date: date ??= new Date(),
            participants: [],
            ...eventIfExist
        })
    }
}