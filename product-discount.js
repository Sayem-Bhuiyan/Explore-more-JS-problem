/*
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket nembers is more than 100, but less than 200.
first 100 ticket will be 100, rest ticket will be 80 tk per piece
    first 100 ---> 100
    100+ ---> 90
3. if you purchase more than 200 tickets
    first 100 ---> 100 tk 
    101- 200 ---> 90 tk 
    200+ ----> 70 tk
*/

function ticketPrice(ticketQuantity){
    const firstTicketRate = 100;
    const secondTicketRate = 90;
    const thirdTicketRate = 70;

    if ( ticketQuantity <= 100){
        const price = ticketQuantity * firstTicketRate;
        return price
    }
    else if ( ticketQuantity <= 200){
        const first100Price = 100 * firstTicketRate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = 90 * restTicketQuantity;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else if (ticketQuantity > 200){
        const first100TicketPrice = 100 * firstTicketRate;
        const second100TicketPrice = 100 * secondTicketRate;
        const restTicket = ticketQuantity - 200;
        const restQuantityTicketPrice = thirdTicketRate * restTicket;

        const totalTicketPrice = first100TicketPrice + second100TicketPrice + restQuantityTicketPrice;
        return totalTicketPrice;
    }
}

let totalTicket = 201;
let totalTicketPrice = ticketPrice(totalTicket);
console.log(totalTicketPrice);