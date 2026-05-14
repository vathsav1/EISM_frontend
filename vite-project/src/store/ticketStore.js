import { create } from "zustand";

const useTicketStore = create((set) => ({
  tickets: [],

  addTicket: (ticket) =>
    set((state) => ({
      tickets: [...state.tickets, ticket],
    })),

  updateTicket: (ticketId, updatedData) =>

    set((state) => ({
      tickets: state.tickets.map(
        (ticket) =>
          ticket.id === ticketId?
           {
              ...ticket,
              ...updatedData,
            }
          : ticket
    ),
  })),  
}));



export default useTicketStore;