function Movie_OnStart(){
StackTrace="Al Iniciar";
SoundPlay("musica",true);

}

function Frame__0_0(ID){
StackTrace="Escena 1 Fotograma 0";
Pause();


}

function Frame__1_0(ID){
StackTrace="Escena 2 Fotograma 0";
Pause();


}

function botonpausa_OnClick(){
StackTrace="boton pausa.Al Hacer Clic";
SoundPlay("sonido click",false);
VideoPause("video");
}

function botonpausa_OnRelease(){
StackTrace="boton pausa.Al Liberar";
SoundPlay("sonido click",false);
VideoResume("video");
}

function botoniralsonido_OnClick(){
StackTrace="boton ir al sonido.Al Hacer Clic";
SoundPlay("sonido click",false);
GotoSceneName("Escena2");
}

function HotSpot1_OnClick(){
StackTrace="HotSpot1.Al Hacer Clic";


}

function HotSpot1_OnOver(){
StackTrace="HotSpot1.Al Pasar";


}

function botónsonidovideo_OnClick(){
StackTrace="botón sonido video.Al Hacer Clic";
SoundPlay("sonido click",false);
VideoSetVolume("video",100);
}

function botónsonidovideo_OnRelease(){
StackTrace="botón sonido video.Al Liberar";
SoundPlay("sonido click",false);
VideoSetVolume("video",0);
}

function botonmúsica_OnClick(){
StackTrace="boton música.Al Hacer Clic";
SoundPlay("sonido click",false);
SoundStop("musica");
}

function botonmúsica_OnRelease(){
StackTrace="boton música.Al Liberar";
SoundResume("musica");
SoundPlay("sonido click",false);
}

function botoniralvideo_OnClick(){
StackTrace=" boton ir al video.Al Hacer Clic";
SoundPlay("sonido click",false);
GotoSceneName("Escena1");
}

