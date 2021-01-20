import React, { useEffect, useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './drum.css';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';

let one = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3';
let two = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3';
let three = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3';
let four = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3';
let five = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3';
let six = 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3';
let seven = 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3';
let eight = 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3';
let nine = 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3';

function useKey(key,callBack) {
    const callbackRef = useRef(callBack);

    useEffect(()=>{
        callbackRef.current = callBack;
    });

    useEffect(()=>{
        function handle(event) {
            if (event.code === key){
                callbackRef.current(event)
            }
        }
        document.addEventListener('keypress',handle);
        return () => document.removeEventListener('keypress', handle)
    }, [key])
};

let qDom = document.getElementById('Q');
console.log(qDom);

export default function Drum(){
const [sonido,setSonido] = useState('Play Me!');
const botonQ = useRef(null);
const botonW = useRef(null);
const botonE = useRef(null);
const botonA = useRef(null);
const botonS = useRef(null);
const botonD = useRef(null);
const botonZ = useRef(null);
const botonX = useRef(null);
const botonC = useRef(null);

function PlaySound(sound){
    let audio = new Audio(sound);
    audio.play();
}

function handleQ(){
    setSonido(() => 'Botón Q');
    PlaySound(one);
    botonQ.current.style.backgroundColor= 'lightpink';
    const timer = setTimeout(() => botonQ.current.style.backgroundColor= null, 200);
    
};
function handleW(){
    setSonido(() => 'Botón W');
    PlaySound(two);
    botonW.current.style.backgroundColor= 'lightpink';
    const timer = setTimeout(() => botonW.current.style.backgroundColor= null, 200);
};
function handleE(){
    setSonido(() => 'Botón E');
    PlaySound(three);
    botonE.current.style.backgroundColor= 'lightpink';
    const timer = setTimeout(() => botonE.current.style.backgroundColor= null, 200);
};

function handleA(){
    setSonido(() => 'Botón A');
    PlaySound(four);
    botonA.current.style.backgroundColor= 'lightpink';
    const timer = setTimeout(() => botonA.current.style.backgroundColor= null, 200);
};

function handleS(){
    setSonido(() => 'Botón S');
    PlaySound(five);
    botonS.current.style.backgroundColor= 'lightpink';
    const timer = setTimeout(() => botonS.current.style.backgroundColor= null, 200);
};

function handleD(){
    setSonido(() => 'Botón D');
    PlaySound(six);
    botonD.current.style.backgroundColor= 'lightpink';
    const timer = setTimeout(() => botonD.current.style.backgroundColor= null, 200);
};

function handleZ(){
    setSonido(() => 'Botón Z');
    PlaySound(seven);
    botonZ.current.style.backgroundColor= 'lightpink';
    const timer = setTimeout(() => botonZ.current.style.backgroundColor= null, 200);
};

function handleX(){
    setSonido(() => 'Botón X');
    PlaySound(eight);
    botonX.current.style.backgroundColor= 'lightpink';
    const timer = setTimeout(() => botonX.current.style.backgroundColor= null, 200);
};
function handleC(){
    setSonido(() => 'Botón C');
    PlaySound(nine);
    botonC.current.style.backgroundColor= 'lightpink';
    const timer = setTimeout(() => botonC.current.style.backgroundColor= null, 200);
};

 useKey('KeyQ',handleQ);
 useKey('KeyW',handleW);
 useKey('KeyE',handleE);
 useKey('KeyA',handleA);
 useKey('KeyS',handleS);
 useKey('KeyD',handleD);
 useKey('KeyZ',handleZ);
 useKey('KeyX',handleX);
 useKey('KeyC',handleC);
 

    return(
        <React.Fragment>
            <Paper id='drum-machine'>
            <Typography id='emoji' >(っ▀¯▀)つ</Typography>
                <Typography id='main-title'>Drum Machine</Typography>
                <Typography id='main-sub'>Groovy Beats on your fingers!</Typography>
                <div id='drum-section'>
                    <Grid container spacing={1} id='bateria'>
                        <Grid item xs={4} >
                            <Button ref={botonQ} className='drum-pad' id='Q' onClick={handleQ} color='primary' variant='contained'>Q</Button>
                            <audio src={one} id='Q' className='clip' autoPlay />
                        </Grid>
                        <Grid item xs={4} >
                            <Button ref={botonW} className='drum-pad' id='W' onClick={handleW} color='primary' variant='contained'>W</Button>
                            <audio src={two} id='W' className='clip' autoPlay />
                        </Grid>
                        <Grid item xs={4} >
                            <Button ref={botonE} className='drum-pad' id='E' onClick={handleE} color='primary' variant='contained'>E</Button>
                            <audio src='#' id='E' className='clip' />
                        </Grid>
                        <Grid item xs={4} >
                            <Button ref={botonA} className='drum-pad' id='A' onClick={handleA} color='primary' variant='contained'>A</Button>
                            <audio src='#' id='A' className='clip' />
                        </Grid>
                        <Grid item xs={4} >
                            <Button ref={botonS} className='drum-pad' id='S' onClick={handleS} color='primary' variant='contained'>S</Button>
                            <audio src='#' id='S' className='clip' />
                        </Grid>
                        <Grid item xs={4} >
                            <Button ref={botonD} className='drum-pad' id='D' onClick={handleD} color='primary' variant='contained'>D</Button>
                            <audio src='#' id='D' className='clip' />
                        </Grid>
                        <Grid item xs={4} >
                            <Button ref={botonZ} className='drum-pad' id='Z' onClick={handleZ} color='primary' variant='contained'>Z</Button>
                            <audio src='#' id='Z' className='clip' />
                        </Grid>
                        <Grid item xs={4} >
                            <Button ref={botonX} className='drum-pad' id='X' onClick={handleX} color='primary' variant='contained'>X</Button>
                            <audio src='#' id='X' className='clip' />
                        </Grid>
                        <Grid item xs={4} >
                            <Button ref={botonC} className='drum-pad' id='C' onClick={handleC} color='primary' variant='contained'>C</Button>
                            <audio src='#' id='C' className='clip' />
                        </Grid>
                    </Grid> 
                <div id='display' >
                    <Paper id='display-box'>{sonido}</Paper>
                </div>
                </div>
            </Paper>
        </React.Fragment>
    )
};
