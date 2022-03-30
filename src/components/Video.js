import React from 'react';
import s from "./Video.module.css";
import ReactPlayer from 'react-player';
import { useMachine } from '@xstate/react';
import { createMachine, assign } from 'xstate';

const playerMachine = createMachine({
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


export const Video = () => {
    const [state, send] = useMachine(playerMachine);

    const togglePlayPause = () => {
        state.context.video === false ? send('PLAY') : send('PAUSE')
    }

     return (
         <div className={s.container}>
            <div className={s.player_wrapper}>   
                <div className={s.exit_btn}>
                    <button className={s.button_exit}>X</button>    
                </div>           
                <ReactPlayer 
                    className={s.react_player}
                    url='https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8' 
                    playing={state.context.video}  
                    loop={true}  
                    />  
                <div className={s.control_btn}>
                    <button onClick={togglePlayPause}> {state.context.video ? "Pause" : "Play"} </button> 
                    <button onClick={()=>{}}>Zoom</button> 
                </div>                                  
            </div>        
        </div>
     )     
}