import { createMachine, assign } from 'xstate';

export const playerMachine = createMachine({
    context: {
        video: false,       // initial state
    },
    on: {
        PLAY: {
            actions: assign({
                video: (context) => context.video = true,
            }),
        },
        PAUSE: {
            actions: assign({
                video: (context) => context.video = false,
            }),
        },
    },        
})



  