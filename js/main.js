const $video = document.querySelector('#video');

const $play = document.querySelector('#play');

const $pausa = document.querySelector('#pausa');

const $backward = document.querySelector('#backward');

const $forward = document.querySelector('#forward');

$play.addEventListener('click', handlePlay);
$pausa.addEventListener('click', handlePausa);
$backward.addEventListener('click',handleBackward);
$forward.addEventListener('click',handleForward);


$pausa.hidden = true;


function handlePlay(){
    $video.play()
    $play.hidden = true;
    $pausa.hidden = false;
    console.log('Le diste click al boton de play');

}

function handlePausa(){
    $video.pause()
    $play.hidden = false;
    $pausa.hidden = true;

    console.log('Le diste click al boton de Pausa');
}

function handleBackward(){
    $video.currentTime = $video.currentTime - 10;
    console.log('10 segundos hacia atras',$video.currentTime);

}               

function handleForward(){
    $video.currentTime = $video.currentTime + 10;
    console.log('10 segundos hacia adelante',$video.currentTime);
}               


