/*estilo TRANSIT>_transitdemo*/

@charset "UTF-8";

@font-face {
    font-family: 'Helvetica Inserat LT Std';
    src: url('fonts/HelveticaInseratLTStd-Roman.eot');
    src: url('fonts/HelveticaInseratLTStd-Roman.eot?#iefix') format('embedded-opentype'),
        url('fonts/HelveticaInseratLTStd-Roman.woff2') format('woff2'),
        url('fonts/HelveticaInseratLTStd-Roman.woff') format('woff'),
        url('fonts/HelveticaInseratLTStd-Roman.ttf') format('truetype'),
        url('fonts/HelveticaInseratLTStd-Roman.svg#HelveticaInseratLTStd-Roman') format('svg');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Helvetica Neue LT Std';
    src: url('fonts/HelveticaNeueLTStd-HvCn.eot');
    src: url('fonts/HelveticaNeueLTStd-HvCn.eot?#iefix') format('embedded-opentype'),
        url('fonts/HelveticaNeueLTStd-HvCn.woff2') format('woff2'),
        url('fonts/HelveticaNeueLTStd-HvCn.woff') format('woff'),
        url('fonts/HelveticaNeueLTStd-HvCn.ttf') format('truetype'),
        url('fonts/HelveticaNeueLTStd-HvCn.svg#HelveticaNeueLTStd-HvCn') format('svg');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Atma';
    src: url('fonts/Atma-Medium.eot');
    src: url('fonts/Atma-Medium.eot?#iefix') format('embedded-opentype'),
        url('fonts/Atma-Medium.woff2') format('woff2'),
        url('fonts/Atma-Medium.woff') format('woff'),
        url('fonts/Atma-Medium.ttf') format('truetype'),
        url('fonts/Atma-Medium.svg#Atma-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Minion Pro';
    src: url('fonts/MinionPro-Regular.eot');
    src: url('fonts/MinionPro-Regular.eot?#iefix') format('embedded-opentype'),
        url('fonts/MinionPro-Regular.woff2') format('woff2'),
        url('fonts/MinionPro-Regular.woff') format('woff'),
        url('fonts/MinionPro-Regular.ttf') format('truetype'),
        url('fonts/MinionPro-Regular.svg#MinionPro-Regular') format('svg');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Titillium';
    src: url('fonts/Titillium-Bold.eot');
    src: url('fonts/Titillium-Bold.eot?#iefix') format('embedded-opentype'),
        url('fonts/Titillium-Bold.woff2') format('woff2'),
        url('fonts/Titillium-Bold.woff') format('woff'),
        url('fonts/Titillium-Bold.ttf') format('truetype'),
        url('fonts/Titillium-Bold.svg#Titillium-Bold') format('svg');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'Titillium';
    src: url('fonts/Titillium-Semibold.eot');
    src: url('fonts/Titillium-Semibold.eot?#iefix') format('embedded-opentype'),
        url('fonts/Titillium-Semibold.woff2') format('woff2'),
        url('fonts/Titillium-Semibold.woff') format('woff'),
        url('fonts/Titillium-Semibold.ttf') format('truetype'),
        url('fonts/Titillium-Semibold.svg#Titillium-Semibold') format('svg');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Supernett cn';
    src: url('fonts/Supernettcn-Bold.eot');
    src: url('fonts/Supernettcn-Bold.eot?#iefix') format('embedded-opentype'),
        url('fonts/Supernettcn-Bold.woff2') format('woff2'),
        url('fonts/Supernettcn-Bold.woff') format('woff'),
        url('fonts/Supernettcn-Bold.ttf') format('truetype'),
        url('fonts/Supernettcn-Bold.svg#Supernettcn-Bold') format('svg');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'Titillium';
    src: url('fonts/Titillium-Regular.eot');
    src: url('fonts/Titillium-Regular.eot?#iefix') format('embedded-opentype'),
        url('fonts/Titillium-Regular.woff2') format('woff2'),
        url('fonts/Titillium-Regular.woff') format('woff'),
        url('fonts/Titillium-Regular.ttf') format('truetype'),
        url('fonts/Titillium-Regular.svg#Titillium-Regular') format('svg');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Atma';
    src: url('fonts/Atma-SemiBold.eot');
    src: url('fonts/Atma-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('fonts/Atma-SemiBold.woff2') format('woff2'),
        url('fonts/Atma-SemiBold.woff') format('woff'),
        url('fonts/Atma-SemiBold.ttf') format('truetype'),
        url('fonts/Atma-SemiBold.svg#Atma-SemiBold') format('svg');
    font-weight: 600;
    font-style: normal;
}


body {
    height: auto;
    font-size: 16px;
    font-weight: 500;
    color: #231F20;
    font-family: 'Titillium';
    background-color: #fff;
}

.body_clase .content-wrapper,
.body_clase.view-mode .content-wrapper {
    font-size: 16px;
    font-weight: 300
}

.slide-wrapper {
    text-align: left
}

#actividad .carousel-inner .item-container {
    -webkit-box-shadow: rgba(0,0,0,.298039) 0 3px 9px;
    -moz-box-shadow: rgba(0,0,0,.298039) 0 3px 9px;
    box-shadow: 0 3px 9px rgba(0,0,0,.43);
    padding-bottom: 0;
    background: #fff;
    max-width: 960px
}

/*#actividad .content .header,
#actividad .content .header .chapter,
#actividad .content .header .title img {
    display: none
}*/

#actividad .content .header {
    border-bottom: none
}

.info-alumno .nombre-alumno {
    max-width: 189px
}

#actividad .pregunta .texto_curso {
    font-size: 2rem
}

.texto_curso p {
    line-height: 1.8!important;
    margin-bottom: 20px;
    font-size: 1.9rem;
    font-weight: 500
}

p {
    margin: 0 0 10px;
    font-size: 2.2rem;
    font-weight: 500
}

.bck-t-align-center {
    line-height: 1.7em!important
}


#book-index #indice .units ul li.active a,
#book-index .col-main {
   background: #C40C42;
}

body:not(.isTablet) #book-index #indice .units ul li:not(.disabled) a:hover {
    background: #C40C42;
}

#indice .unit-content {
    -webkit-box-shadow: none;
    box-shadow: none
}

#indice .unit-content .header .title {
    display: none;
}

#indice .unit-content .actividades .item .nota {
    background-color: #428bca
}

#indice .units ul li {
    -webkit-border-radius: 10px 10px 37px 10px;
    -moz-border-radius: 10px 10px 37px 10px;
    -webkit-box-shadow: 1px 1px 2px 0px #b6b6b6;
    box-shadow: 1px 1px 2px 0px #b6b6b6;
    border-radius: 10px 10px 37px 10px;
}

#indice .units ul li.active:not(.disabled),
#indice .units ul li:focus:not(.disabled) {
    background: #C40C42;
    border-radius: 10px 10px 37px 10px;
    border: 3px solid #ffffff;
}

#indice .units ul li.hover:not(.disabled),
#indice .units ul li:hover:not(.disabled),
body:not(.isTablet) #indice .units ul li:hover:not(.disabled) {
    background: #EF3D61;
    border-radius: 10px 10px 37px 10px;
    border: 3px solid #fff;
}

#book-index #indice .unit-content a,
#book-index #indice .unit-content a:active,
#book-index #indice .unit-content a:focus,
#book-index #indice .unit-content a:hover,
#indice .units ul li a:active,#indice .units ul li a:focus,
#indice .units ul li a:hover {
    color: #fff
}

#indice .actividades a:active,#indice .actividades a:focus,
#indice .actividades a:hover {
    color: #c40c42;
}

#book-index #indice .unit-content .actividades .item {
    background: transparent;
    margin: 0 auto
}

#book-index #indice .unit-content .actividades .item .title {
    font-weight: 700
}

#book-index #indice .unit-content .actividades .item.active,#book-index #indice .unit-content .actividades .item.current,
body:not(.isTablet) #book-index #indice .unit-content .actividades .item:active,
body:not(.isTablet) #book-index #indice .unit-content .actividades .item:hover {
    background: transparent;
    border-bottom: 2px solid #fff;
    padding-left: 10px
}

.transitdemo-navbar h3 {
    width: 75%;
    margin: auto auto 15px;
    font-size: 2rem;
    font-weight: 700
}

#actividad .texto_curso {
    font-size: 2rem;
    line-height: 1.9
}

#actividad .class_slide {
    padding: 20px 97px 10px
}

body.is_app #actividad .class_slide {
    padding-top: 20px
}

#actividad .slide_content_type_1 .pregunta .texto_curso {
    font-size: 2.1rem
}

.slide_content_type_29 .paint .main-canvas {
    border: 1px solid #fff
}

#actividad .content .header .title h3 {
    color: #4b4b4b;
    width: 100%;
    padding: 13px 0;
    font-weight: 700;
}

#actividad .content .header .title h3:before {
    display: none
}

#actividad .content .header .title h3:after {
    display: none
}

.slide_main input {
    max-width: 98%;
    height: 1,43
}

.texto_curso li input {
    height: 1.8em!important;
    margin-bottom: 7px
}

.keyboardInput {
    height: 1.8em
}

.transitdemo-navbar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #000;
    background: #545759
}

body.is_app .transitdemo-navbar {
    -webkit-transition: top .5s linear;
    -o-transition: top .5s linear;
    -moz-transition: top .5s linear;
    transition: top .5s linear
}

body.is_app .transitdemo-navbar.ocultar {
    top: -136px
}

.transitdemo-navbar .navbar-content {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    text-align: center
}

.navbar-bottom {
    padding: inherit
}

.logo-publisher {
    width: 87px;
    height: 35px;
    margin: 9px 0;
    background: none
}

.edit .logo-publisher {
    display: none
}

.edit -publisher {
    top: 2px;
    width: 40px;
    height: 40px
}

/*logo*/
.content_type_curso_transitdemo .libro-left ul li .title:before {
    content: "";
    background-size: contain;
    top: 12px;
    background-image: url(images/logo_transit.jpg) !important;
    position: fixed;
    width: 100px;
    height: 23px;
    background-repeat: no-repeat;
    left: 50%;
    margin-left: -40px;
    opacity: 1;
}

.navbar-content .logo-publisher {
    display: inline-block;
    position: absolute;
    top: -2px;
    left: 0;
    width: 98px;
    height: 37px;
    background: url(images/logo_transit.jpg) 0 0 no-repeat;
    -webkit-background-size: contain;
       -moz-background-size: contain;
         -o-background-size: contain;
            background-size: contain;
    background-position: center center;
}

.content_type_curso_transitdemo.content_type_clase_transitdemo .libro-left ul li .title:before {
    opacity: 0;
}

.transitdemo-navbar .copyright {
display: none;
}

#actividad .content img {
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px
}

li img {
    vertical-align: top
}

#actividad .workspace.test .checkbox-option label.filter-label,#actividad .workspace.test .radio-option label.filter-label,#actividad .workspace.true-false .checkbox-option label.filter-label,#actividad .workspace.true-false .radio-option label.filter-label {
    font-size: 1.8rem;
    font-weight: 300
}

#actividad .workspace.true-false .tf-option {
    display: inline-block;
    margin-left: 70px
}

#actividad .content .workspace.test ul li .bck-ul li:before,#actividad .content .workspace.test ul li ul li:before {
    display: none
}

#actividad .workspace.matching .img-relaciones img {
    margin: 0;
    border: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0
}

#actividad .drag .circulo_gris p {
    text-align: left
}

#actividad .workspace.multiplechoice_horizontal .opcion {
    display: inline-block;
    margin: 10px;
    padding: 0 5px
}

#actividad .workspace.multiple-choice .opcion p {
    text-align: inherit;
}

#actividad .workspace.multiplechoice_horizontal>ul.move-text {
    text-align: center
}

.slide_main .multiple-solution-marker {
    display: none
}

.slide.crosswords-puzzle .enunciado {
    font-size: 2rem;
    line-height: 2.5rem
}

.fillblanks-draggable-wrapper .response {
        color: #A39888;
        border: 3px solid #A39888;
}

.fillblanks-draggable-wrapper .response p {
    position: relative;
    margin: 0;
    text-align: center;
    padding: 5px 10px;
    font-size: 1.8rem;
    font-weight: 600;
}

body #actividad .workspace.chooseblanks .inline-answer a {
    display: inline-block;
    vertical-align: text-top;
    border: 2px solid #00bdff;
    color: #787878;
    padding: 0 6px;
    margin: 2px;
    -webkit-border-radius: 13px;
    -moz-border-radius: 13px;
    border-radius: 13px
}

#actividad .workspace.chooseblanks .inline-answer a:hover {
    background-color: #d2eff7;
    color: #414141
}

#actividad .workspace.chooseblanks .inline-answer a.selected:not(.respuesta_ok):not(.respuesta_ko):not(.solucion) {
    background-color: #0597ca;
    color: #fff;
    font-weight: 400
}

#actividad .workspace.chooseblanks .inline-answer a.respuesta_ok {
    color: #00bdff;
    border-color: #00bdff;
    background-color: #fff;
    padding: 6px;
    font-size: 2.5rem
}

#actividad .workspace.chooseblanks .inline-answer {
    display: inline;
    position: relative;
    top: -9px
}

#actividad .workspace.chooseblanks .solucion {
    border-bottom: 1px solid #00bdff;
    background-color: #bbffb6
}

#actividad .workspace.matching .opcion {
    overflow: hidden;
    min-height: 2.5em;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 10px;
    border: 2px solid #A39888;
    margin: 2px 0;
    padding: 5px;
    width: 100%;
    float: left
}

#actividad .workspace.matching .opcion:hover {
    background: rgba(224,247,255,.6196078431372549)
}

.slide_main .img-input-container,
 .slide_main input {
    border-bottom-color: #a39888;
    background-color: #F2E7D8;
    box-shadow: inset 0px 2px 5px 0px #a39888;
}

.cke_inner,.cke_wysiwyg_div {
    background: #fff
}

#actividad .box p {
    font-size: 2rem;
    line-height: 1.5
}

#actividad .workspace.clasificar .clasificar_lista .classify-item {
    border-color: #A39888;
    padding: 6px
}

#actividad .workspace.clasificar .clasificar_conjuntos .group-name-title {
    display: table-cell;
    vertical-align: middle;
    font-weight: 600;
}

#actividad .workspace.clasificar .clasificar_conjuntos .conjunto .group-box {
    border: 3px solid rgb(163 152 136);
    padding-top: 15px
}

#actividad .workspace.ordenar.ordenar_horizontal li {
    padding: 4px 40px
}

#actividad .workspace.ordenar .js-rank-item {
    margin-bottom: 16px
}

#actividad .workspace.ordenar li>p {
    line-height: 1.3
}

/*audios*/
#actividad .player.audio {
    background-image: url(images/audio_transit.png);
    -webkit-background-size: 100% 100%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: contain;
    background-position: 0;
    background-color: rgba(154,153,158,0);
    vertical-align: middle;
}

/*#actividad .player.audio:hover {
    -webkit-box-shadow: 2px 2px 2px undefinedpx #a8a3a2;
    box-shadow: 2px 2px 2px undefinedpx #a8a3a2
}*/

#actividad .content img.player,
#actividad .player.audio,
#actividad .player.video,
#help-panel-content .player,
#remote-alert-modal-rich .player {
    height: 45px!important;
    width: 50px;
    display: inline-block;
    background-repeat: no-repeat;
    border-radius: 0;
    margin-right: 5px;
    margin-top: -10px;
    padding: 0;

}

#actividad .player.audio,
#actividad .player.video,
#help-panel-content .player,
#remote-alert-modal-rich .player {
    background-color: rgba(0,128,0,0)
}

body:not(.edit) #actividad a:not(.cke_button):not(.zoom_flag_img) {
    background-color: transparent
}

#actividad .content img.player,
#actividad .player.audio,
#actividad .player.video,
#help-panel-content .player,
#remote-alert-modal-rich .player:hover {
    -webkit-box-shadow: 2px 2px 2px undefinedpx #a8a3a2;
    box-shadow: 2px 2px 2px undefinedpx #a8a3a2
}

#swipeview-slider>div {
    background-color: inherit
}

/*.bck-title {
    color: #000
}*/

/*.bck-title {
    border-bottom: none;
}*/

.bck-title {
    border-bottom: none;
    color: #9acb1e;
    font-size: 2.1rem;
    font-weight: bold;
}

.bck-title-1 {
    color: #EF3D61;
    font-size: 28px;
    font-weight: 700;
    font-family: 'Supernett cn';
    text-transform: uppercase;
}


.bck-title-1:before {
    content: none;
    display: none
}

.bck-title-2 {
    color: #EF3D61;
    font-size: 25px;
    font-weight: 700;
    font-family: 'Supernett cn';
    font-style: italic;
}

.bck-title-3 {
    color: #EF3D61;
    font-weight: 600;
    font-family: 'Titillium';
}

.bck-title-4 {
     color: #556772;
    text-transform: uppercase;
    font-size: 25px;
}

.bck-title-5 {
    color: #ef3d61;
    font-size: 40px;
    width: fit-content;
    font-weight: 500;
    font-family: 'Atma';
}

.bck-title-6 {
    color: #ef3d61;
    font-size: 28px;
    width: fit-content;
    font-weight: 500;
    font-family: 'Atma';
}


/*enfasis*/
/*.bck-enfasis {
    font-size: 5rem;
    color: inherit
}*/

.bck-enfasis-1 {
    padding: 7px 18px;
    background-color: #FFF9AD;
    border-radius: 55px 125px 31px 111px/108px 65px 125px 50px;
}

.bck-enfasis-2 {
    font-size: 14px;
    color: #EF3D61;
    font-weight: 500;
    font-style: italic;
    font-family: 'Atma';
    position: relative;
    margin-left: -37px;
    padding-right: 20px;
}

.bck-enfasis-3 {
    color: #EF3D61;
    font-weight: inherit;
}

.bck-enfasis-4 {
    font-style: italic;
    font-size: 18px;
}

.bck-enfasis-5 {
    color: #00ADEE;
    font-weight: inherit;
}

.bck-enfasis-6 {
    color: #F68A4D;
    font-weight: inherit;
}


.bck-enfasis-7 {
    color: #EC00A8;
    font-weight: inherit;
}

.bck-enfasis-8 {
    color: #90C73E;
    font-size: 23px;
    font-family: 'Supernett cn';
}

.bck-enfasis-9 {
    border-color: #00BDFF;
    background: #B6ECFF;
    box-shadow: inset 0px 2px 5px 0px #bfb5a9;
    border-radius: 4px;
    padding: 3px 6px;
    height: 1.8em!important;
    margin-bottom: 7px;
    border: 1px #00BDFF solid;
    color: #555555;
}


.bck-enfasis-10 {
        color: #005BAB;
    font-style: italic;
}

.texto_curso li {
    line-height: 1.8em!important
}

/*LISTAS DESORDENADAS*/
/*lista desordenada*/
.popover-template .popover-content ul li,.texto_curso ul li {
    padding-left: 42px
}

#actividad .popover-background.shown .popover-content>ul>li:before {
    position: absolute
}

#actividad .popover-content ul li,#actividad .texto_curso li,#actividad .workspace ul li li {
    position: relative;
    margin-bottom: 10px
}

#actividad .content .texto_curso ul li:before {
    left: inherit
}

#actividad .workspace.matching .box ul li:before,
#actividad .workspace.multiple-choice .js-item ul li:before,
#actividad .workspace.ordenar .js-rank-item ul li:before,
.cke_contents ul li:before,
.classify-item ul li:before,
.preview ul li:before,
.texto_curso ul li:before,
.workspace ul li ul li:before {
    content: "";
    height: 6px;
    width: 6px;
    background-color: #333;
    color: #333;
    border-radius: 50%
}

#actividad .content .texto_curso ul li:before,
#actividad .content .workspace ul li ul li:before {
    content: "";
    height: 9px;
    width: 9px;
    background-color: #fff;
    color: #fff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%
}

#actividad .content .texto_curso .bck-ul li:before,
#actividad .content .texto_curso ul li:before,
#actividad .content .workspace ul li .bck-ul li:before,
#actividad .content .workspace ul li ul li:before,
#actividad .popover-background.shown .popover-content>ul>li:before {
    content: "";
    height: 6px;
    width: 6px;
    background-color: #333;
    color: #333;
    border-radius: 50%;
    position: absolute;
    margin-top: .6em;
    margin-left: 6px
}

/*lista desordenada por defecto, sin seleccionar estilo para la ul*/

#actividad .content .texto_curso ul li:before,
#actividad .content .workspace ul li ul li:before {
    content: "";
    height: 9px;
    width: 9px;
    background-color: #fff;
    color: #fff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}

#actividad .content .texto_curso ul li::before,
#actividad .content .workspace ul li ul li::before,
#actividad .content .texto_curso .bck-ul li::before,
#actividad .content .workspace ul li .bck-ul li::before,
#actividad .popover-background.shown .popover-content>ul>li::before {
    content: "";
    height: 6px;
    width: 6px;
    background-color: #333;
    color: #333;
    border-radius: 50%;
    position: absolute;
    margin-top: .6em;
    margin-left: 6px;
}

#actividad .content .cke_contents .bck-ul-1 li,
#actividad .content .cke_contents .bck-ul-1 li,
#actividad .content .texto_curso .bck-ul-1 li,
#actividad .popover-content .bck-ul-1 li,
#actividad .content .workspace ul li .bck-ul-1 li {
padding-left: 36px;
    position: relative;
    list-style: none;
    margin-bottom: 5px;
    font-size: 2rem;
    font-weight: 100;
    margin-left: 13px;
    color: inherit;
    font-family: 'Titillium';
}

#actividad .content .cke_contents .bck-ul-1 li:before,
#actividad .content .texto_curso ul.bck-ul-1 li:before,
#actividad .popover-content ul.bck-ul-1 li:before,
#actividad .content .workspace ul li ul.bck-ul-1 li:before {
    height: 12px;
    width: 12px;
    background-color: #fff;
    border-radius: 100%;
    margin-top: 13px;
    margin-left: -19px;
    font-family: FontAwesome;
    content: "\f00c";
    color: #ef3d61;
    position: absolute;
    font-size: 15px;
    margin-top: 2px;
    margin-left: -3px;
}

#actividad .content .texto_curso .bck-ul-2 li,
#actividad .content .workspace ul li .bck-ul-2 li,
#actividad .popover-background.shown .popover-content .bck-ul-2 li {
    line-height: 1.8em!important;
    margin-left: 6px;
}

#actividad .content .texto_curso .bck-ul-2 li:before,
#actividad .content .workspace ul li .bck-ul-2 li:before,
#actividad .popover-background.shown .popover-content .bck-ul-2 li:before {
    content: "";
    height: 7px;
    width: 7px;
    background-color: #414141;
    position: absolute;
    top: 4px;
    border-radius: 10%;
    left: auto;
    margin: 13px 0 0 -20px;
}


#actividad .content .cke_contents .bck-ul-3 li:before,
#actividad .content .texto_curso ul.bck-ul-3 li:before,
#actividad .popover-content ul.bck-ul-3 li:before,
#actividad .content .workspace ul li ul.bck-ul-3 li:before {
        color: #1d1d1b;
    content: "";
    height: 8px;
    width: 8px;
    background-color: #414141;
    border-radius: 100%;
    margin-top: 16px;
    margin-left: 3px;
}



/*listas ordenadas*/

#actividad .content .cke_contents .bck-ol li:before,
#actividad .content .texto_curso .bck-ol li:before,
#actividad .content .workspace ul li .bck-ol li:before,
#actividad .popover-content .bck-ol li:before {
    position: relative;
    text-align: center;
    margin-left: -10px
}

#actividad .content .cke_contents .bck-ol li {
    margin-left: 0
}

#actividad .content .cke_contents .bck-ol-1,
#actividad .content .texto_curso .bck-ol-1,
#actividad .content .workspace ul li .bck-ol-1,
#actividad .popover-content .bck-ol-1 {
    list-style-type: none;
    counter-reset: bck-li-counter
}

#actividad .content .cke_contents .bck-ol-1 li, 
#actividad .content .texto_curso .bck-ol-1 li, 
#actividad .content .workspace ul li .bck-ol-1 li, 
#actividad .popover-content .bck-ol-1 li {
counter-increment: bck-li-counter;
    padding-left: 0;
    position: relative;
    z-index: 0;
    font-weight: 600;
    margin-left: -15px;
    margin-top: 10px;
    font-size: 2rem;
    font-family: 'Titillium';
    line-height: 1.8em!important;
}


#actividad .content .cke_contents .bck-ol-1 li:before, 
#actividad .content .texto_curso .bck-ol-1 li:before, 
#actividad .content .workspace ul li .bck-ol-1 li:before, 
#actividad .popover-content .bck-ol-1 li:before {
content: counter(bck-li-counter);
    height: 25px;
    position: absolute;
    color: #fff;
    background: #EF3D61;
    border: 1px solid #ef3d61;
    border-radius: 100%;
    margin-left: -35px;
    margin-right: 0;
    text-align: right;
    font-family: 'Atma';
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.2;
    top: 4px;
    text-align: center;
    width: 25px;
    left: auto;
}

#actividad .content .cke_contents .bck-ol-2,
#actividad .content .texto_curso .bck-ol-2,
#actividad .content .workspace ul li .bck-ol-2,
#actividad .popover-content .bck-ol-2 {
    list-style-type: none;
    counter-reset: bck-li-counter
}

#actividad .content .cke_contents .bck-ol-2 li,
#actividad .content .texto_curso .bck-ol-2 li,
#actividad .content .workspace ul li .bck-ol-2 li,
#actividad .popover-content .bck-ol-2 li {
counter-increment: bck-li-counter;
    padding-left: 0;
    position: relative;
    z-index: 0;
    font-weight: 600;
    margin-left: -15px;
    margin-top: 10px;
    font-size: 2rem;
    font-family: 'Titillium';
    line-height: 1.8em!important;
}

#actividad .content .cke_contents ol.bck-ol-2 li:before, 
#actividad .content .texto_curso ol.bck-ol-2 li:before, 
#actividad .content .workspace ul li ol.bck-ol-2 li:before, 
#actividad .popover-content ol.bck-ol-2 li:before {
content: counter(bck-li-counter);
    height: 25px;
    position: absolute;
    color: #ef3d61;
    border-radius: 100%;
    margin-left: -35px;
    margin-right: 0;
    text-align: right;
    font-family: 'Atma';
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.2;
    top: 4px;
    text-align: center;
    width: 25px;
    left: auto;
}


#actividad .content .cke_contents .bck-ol-3,
#actividad .content .texto_curso .bck-ol-3,
#actividad .content .workspace ul li .bck-ol-3,
#actividad .popover-content .bck-ol-3 {
    list-style-type: none;
    counter-reset: bck-li-counter
}

#actividad .content .cke_contents .bck-ol-3 li,
#actividad .content .texto_curso .bck-ol-3 li,
#actividad .content .workspace ul li .bck-ol-3 li,
#actividad .popover-content .bck-ol-3 li {
counter-increment: bck-li-counter;
    padding-left: 0;
    position: relative;
    z-index: 0;
    margin-left: -15px;
    margin-top: 10px;
    font-size: 2rem;
    line-height: 1.8em!important;
}

#actividad .content .cke_contents ol.bck-ol-3 li:before, 
#actividad .content .texto_curso ol.bck-ol-3 li:before, 
#actividad .content .workspace ul li ol.bck-ol-3 li:before, 
#actividad .popover-content ol.bck-ol-3 li:before {
    content: counter(bck-li-counter,lower-alpha) "";
    height: 25px;
    position: absolute;
    color: #ef3d61;
    border-radius: 100%;
    margin-left: -35px;
    margin-right: 0;
    text-align: right;
    font-family: 'Atma';
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.2;
    top: 4px;
    text-align: center;
    width: 25px;
    left: auto;
}

#actividad .content .cke_contents .bck-ol-4,
#actividad .content .texto_curso .bck-ol-4,
#actividad .content .workspace ul li .bck-ol-4,
#actividad .popover-content .bck-ol-4 {
    list-style-type: none;
    counter-reset: bck-li-counter
}

#actividad .content .cke_contents .bck-ol-4 li,
#actividad .content .texto_curso .bck-ol-4 li,
#actividad .content .workspace ul li .bck-ol-4 li,
#actividad .popover-content .bck-ol-4 li {
counter-increment: bck-li-counter;
    padding-left: 0;
    position: relative;
    z-index: 0;
    font-weight: 600;
    margin-left: -15px;
    margin-top: 10px;
    font-size: 2rem;
    line-height: 1.8em!important;
}

#actividad .content .cke_contents ol.bck-ol-4 li:before, 
#actividad .content .texto_curso ol.bck-ol-4 li:before, 
#actividad .content .workspace ul li ol.bck-ol-4 li:before, 
#actividad .popover-content ol.bck-ol-4 li:before {
    content: counter(bck-li-counter);
    height: 25px;
    position: absolute;
    color: #ef3d61;
    border-radius: 100%;
    margin-left: -35px;
    margin-right: 0;
    text-align: right;
    font-family: 'Titillium';
    font-weight: 600;
    top: 0px;
    text-align: center;
    width: 30px;
    left: auto;
}

#actividad .content .cke_contents .bck-ol-5,
#actividad .content .texto_curso .bck-ol-5,
#actividad .content .workspace ul li .bck-ol-5,
#actividad .popover-content .bck-ol-5 {
    list-style-type: none;
    counter-reset: bck-li-counter
}

#actividad .content .cke_contents .bck-ol-5 li,
#actividad .content .texto_curso .bck-ol-5 li,
#actividad .content .workspace ul li .bck-ol-5 li,
#actividad .popover-content .bck-ol-5 li {
counter-increment: bck-li-counter;
    padding-left: 0;
    position: relative;
    z-index: 0;
    font-weight: 600;
    margin-left: -15px;
    margin-top: 10px;
    font-size: 2rem;
    line-height: 1.8em!important;
}

#actividad .content .cke_contents ol.bck-ol-5 li:before, 
#actividad .content .texto_curso ol.bck-ol-5 li:before, 
#actividad .content .workspace ul li ol.bck-ol-5 li:before, 
#actividad .popover-content ol.bck-ol-5 li:before {
    content: counter(bck-li-counter,lower-alpha) "";
    height: 25px;
    position: absolute;
    color: #ef3d61;
    border-radius: 100%;
    margin-left: -35px;
    margin-right: 0;
    text-align: right;
    font-family: 'Titillium';
    font-weight: 600;
    top: 0px;
    text-align: center;
    width: 30px;
    left: auto;
}


.bck-box {
    max-width: none;
    margin-bottom: 0;
    background: inherit
}

.bck-box .bck-content {
    padding: 0
}

.bck-box.center {
    text-align: inherit
}


/*caja 01*/
.body_clase:not(.edit) #actividad .bck-box.bck-box-1 {
    position: relative;
    BORDER: 2px solid #00ADEE;
    padding: 10px;
}

.bck-box.bck-box-1:after {
    display: none;
    content: none
}


.bck-box.bck-box-1>.bck-content {
    padding-left: 0
}

.body_clase:not(.edit) #actividad .bck-box.bck-box-1>.bck-title {
font-size: 30px;
    border: none;
    font-family: 'Titillium';
    margin-top: -44px;
    background-color: #fff;
    width: fit-content;
    text-align: center;
    color: #00adee;
    text-transform: uppercase;
    padding-left: 8px;
    padding-right: 8px;
}

.bck-box-1>.bck-content {
    text-align: left;
    padding: 0;
}

.bck-box.bck-box-1>.bck-title p {
    font-weight: 600;
    font-size: 28px;
}

.bck-box.bck-box-1:before {
    display: none;
}


/*caja 02*/
.body_clase:not(.edit) #actividad .bck-box.bck-box-2 {
position: relative;
    BORDER: 2px solid #F68A4D;
    padding: 10px;
    background-color: #fff;
    border-radius: 0;
}

.bck-box.bck-box-2:after {
    display: none;
    content: none
}


.bck-box.bck-box-2>.bck-content {
    padding-left: 0
}

.bck-box.bck-box-2>.bck-content {
    border: 0;
    padding: 10px 25px;
    margin-top: -22px;
}

.body_clase:not(.edit) #actividad .bck-box.bck-box-2>.bck-title {
font-size: 30px;
    border: none;
    font-family: 'Atma';
    margin-top: -44px;
    background-color: #fff;
    width: fit-content;
    text-align: center;
    color: #F68A4D;
    text-transform: uppercase;
    padding-left: 8px;
    padding-right: 8px;
}

.bck-box-2>.bck-content {
    text-align: left;
    padding: 0;
}

.bck-box.bck-box-2>.bck-title p {
    font-size: 23px;
}

.bck-box.bck-box-2:before {
    display: none;
}

.bck-box.bck-box-2:after {
display: none;
}

.bck-box.bck-box-2 .bck-title:before {
display: none;
}


/*caja 03*/
.body_clase:not(.edit) #actividad .bck-box.bck-box-3 {
position: relative;
    BORDER: 2px solid #EC00A8;
    padding: 10px;
    background-color: #fff;
    border-radius: 0;
}

.bck-box.bck-box-3:after {
    display: none;
    content: none
}


.bck-box.bck-box-3>.bck-content {
    padding-left: 0
}

.body_clase:not(.edit) #actividad .bck-box.bck-box-3>.bck-title {
font-size: 30px;
    border: none;
    font-family: 'Atma';
    margin-top: -44px;
    background-color: #fff;
    width: fit-content;
    text-align: center;
    color: #EC00A8;
    text-transform: uppercase;
    padding-left: 8px;
    padding-right: 8px;
}

.bck-box-3>.bck-content {
    text-align: left;
    padding: 0;
}

.bck-box.bck-box-3>.bck-title p {
    font-size: 23px;
}


/*caja 04*/
.bck-box.bck-box-4 {
    padding: 30px 30px 7px 30px;
    background-color: #9CD7CB;
    border-radius: 144px 152px 96px 180px/67px 84px 94px 140px;
}


.bck-box.bck-box-4>.bck-content {
color: #fff;
    border-radius: 10px;
    padding: 27px 49px 29px 43px;
    border-radius: 0;
    background-color: #04B7A0;
    border-radius: 186px 84px 137px 83px/81px 153px 53px 112px;
}


/*caja 05*/
.bck-box.bck-box-5 {
    padding: 28px 30px 7px 30px;
    border: 9px dotted #F68A4D;
    background-color: #fff;
    border-radius: 210px 71px 127px 70px/69px 125px 69px 137px;
    width: 70%;
    margin-left: 80px;
}


.bck-box.bck-box-5 :before {
    background: url(images/icono_caja_05.PNG);
    content: "";
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: -130px;
    z-index: 100;
    top: 4%;
    width: 136px;
    padding: 20px;
}


.bck-box.bck-box-5>.bck-title {
    color:inherit;
        border: none;
}

.bck-box.bck-box-5>.bck-content {
    color: #f68a4d;
    border-radius: 10px;
    padding: 6px 25px 6px 23px;
    border-radius: 0;
    font-family: 'Atma';
    text-align: center;
}

.bck-box.bck-box-6 {
        top: -22px;
    margin-bottom: -40px;
    position: relative;
    left: -97px;
    width: calc(100% + 194px);
    padding: 0;
    border: 0;
    max-width: calc(100% + 194px);
}

.bck-box-6 > .bck-content {
    padding: 0;
}

/*caja 07*/
.bck-box.bck-box-7 {
    padding: 16px 11px 16px 9px;
    border: 1px solid #EF3D61;
    background-color: #fff;
    border-radius: 0 30px 30px 30px;
}


.bck-box.bck-box-7:before {
    background: url(images/icono_caja_07.png);
            content: "";
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: -42px;
    z-index: 100;
    top: -19%;
    width: 85px;
    padding: 45px;
}


.bck-box.bck-box-7>.bck-title {
    color: #EF3D61;
    margin-left: 35px;
}

.bck-box.bck-box-7>.bck-title p {
    font-weight: 700;
}

.bck-box.bck-box-7>.bck-content {
    border-radius: 10px;
    padding: 6px 9px 6px 6px;
    border-radius: 0;
}

.bck-box.bck-box-7>.bck-content:before {
    display: none;
}

/**/

#actividad .content .iniciounidad .header .title h3 {
    margin-top: 150px
}

#actividad .content .iniciounidad .header .title h3:after {
    margin-top: 120px
}

.iniciounidad .bck-i-fullscreen-wrapper {
    padding: 0
}


.info-popover .popover-title:before,.popover-template .popover-title:before {
    color: #728fa6
}

.info-popover .popover-title,.popover-template .popover-title {
    background: #728fa6
}

.info-template .info-title,.info-template .info-title.shown:before {
    color: #728fa6
}

/*iconos*/
.item-container .icon:before {
        height: 28px;
    width: 34px;
    margin-right: 5px;
    margin-top: -5px;
}


.item-container .icon-hablar1:before {
    background-image: url(images/icono_bocadillo_1.png);
    content: "";
    background-repeat: no-repeat;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    background-position: 50%;
    display: inline-block;
    vertical-align: sub;
    height: 22px;
    width: 33px;
    margin-right: 5px
}

.item-container .icon-hablar2:before {
    background-image: url(images/icono_bocadillo_2.png);
        content: "";
    background-repeat: no-repeat;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    background-position: 50%;
    display: inline-block;
    vertical-align: sub;
    margin-right: 10px;
    height: 32px;
    width: 25px;
}

.item-container .icon-hablar3:before {
        background-image: url(images/icono_bocadillo_3.png);
        content: "";
    background-repeat: no-repeat;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    background-position: 50%;
    display: inline-block;
    vertical-align: sub;
    margin-right: 10px;
    height: 35px;
    width: 33px;
}

.item-container .icon-lupa:before {
    background-image: url(images/icono_lupa.png);
            content: "";
    background-repeat: no-repeat;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    background-position: 50%;
    display: inline-block;
    vertical-align: sub;
    margin-right: 10px;
    height: 31px;
    width: 31px;
}

.item-container .icon-lapiz:before {
    background-image: url(images/icono_lapiz.png);
            content: "";
    background-repeat: no-repeat;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    background-position: 50%;
    display: inline-block;
    vertical-align: sub;
    margin-right: 10px;
    height: 31px;
    width: 31px;
}

.item-container .icon-dados:before {
    background-image: url(images/icono_dados.png);
            content: "";
    background-repeat: no-repeat;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    background-position: 50%;
    display: inline-block;
    vertical-align: sub;
    margin-right: 10px;
}

.item-container .icon-leer:before {
    background-image: url(images/icono_leer.png);
            content: "";
    background-repeat: no-repeat;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    background-position: 50%;
    display: inline-block;
    vertical-align: sub;
    margin-right: 10px;
}

.item-container .icon-video:before {
    background-image: url(images/icono_video.png);
            content: "";
    background-repeat: no-repeat;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    background-position: 50%;
    display: inline-block;
    vertical-align: sub;
    margin-right: 10px;
}

.item-container .icon-a_toi:before {
    background-image: url(images/icono_a_toi.png);
            content: "";
    background-repeat: no-repeat;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    background-position: 50%;
    display: inline-block;
    vertical-align: sub;
    margin-right: 10px;
    height: 50px;
    width: 53px;
}

.item-container .icon-a_vous:before {
    background-image: url(images/icono_a_vous.png);
            content: "";
    background-repeat: no-repeat;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    background-position: 50%;
    display: inline-block;
    vertical-align: sub;
    margin-right: 10px;
    height: 50px;
    width: 53px;
}



/*.item-container .icon:before {
    vertical-align: text-bottom
}

.item-container .icon-fast:before, .item-container .icon:before {
    content: "";
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    display: inline-block;
}*/

/*tablas*/
.bck-table td,table td {
    padding: 10px;
    border-color: #ccc
}

table td.bck-td-1 {
    color: inherit;
    background-color: transparent
}

td,th {
    padding-left: 10px
}

.bck-table,table {
    border: 0 solid #ccc
}

/*TABLA 1*/ 
table.bck-table-1 {
    border: 5px solid #fff;
    background-color: #EDDEE2;
}


table.bck-table-1 td {
    border-color: #fff;
    background-color: #EDDEE2;
    border: 5px solid #fff;
}



#actividad .workspace.test .respuestas li {
    width: 32%
}

.shortanswer-container .preview:focus,.shortanswer-container input:focus,.shortanswer-container textarea:focus {
    -webkit-box-shadow: 0 0 2px #009fa5;
    -moz-box-shadow: 0 0 2px #009fa5;
    box-shadow: 0 0 2px #009fa5;
    border-color: #009fa5
}

.textarea-container {
    width: 100%
}

#actividad .workspace.multiple-choice .opcion {
    background-color: #fff;
    border: 3px solid #A39888;
}

#actividad .workspace.multiple-choice .opcion.respuesta_checked {
    border-color: #0cb9ea;
    background-color: hsla(0,0%,91%,0)
}

#actividad .workspace h5 {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 100;
    margin-top: 10px
}

#actividad .workspace h5:before {
    content: "\f0da";
    font-family: FontAwesome;
    position: absolute;
    color: #ef7d00;
    padding: 2px;
    background: none;
    margin-top: 2px;
    margin-left: -15px
}

.slide_main input.solucion.multiple-solution {
    padding-right: 6px!important
}

.cke_reset {
    background: #fff
}

.slide.crosswords-puzzle .enunciados {
    width: 325px
}

/*botones*/
.btn {
    padding: 6px 15px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    font-size: 14px;
    vertical-align: inherit;
}

/*.btn-group>.btn:first-child {
    background-color: #007c39;
}*/

.btn-primary,.btn-primary.disabled {
    background-color: #c40c42;
}

.btn-danger, 
.btn-danger[disabled] {
    color: #fff;
    background-color: #62A036;
    border: 2px solid #62A036;
}

.btn-danger:hover {
    background-color: #90C73E;
}

.btn-primary,.btn-primary.disabled,
.btn-primary.disabled:focus {
    background-color: #c40c42;
}

.btn-primary[disabled],.btn-primary[disabled]:focus {
    background-color: #c40c42;
}

.btn-primary.active,
.btn-primary.disabled:focus,
.btn-primary.disabled:hover,
.btn-primary:active,.btn-primary:focus,
.btn-primary:hover,
.open .dropdown-toggle.btn-primary {
    background-color: #007C39;
}

.btn-primary:not([disabled]):hover, 
.btn-primary:not([disabled]):focus, 
.btn-primary:not([disabled]):active,
.btn-primary.active, .open .dropdown-toggle.btn-primary {
    color: #fff;
    background-color: #EF3D61;
    opacity: .9;
    border-color: transparent;
}

#actividad .content .review .attemps span {
    background-color: #62a036;
    border-radius: 10px;
}

#actividad .portada .class_slide {
    padding: 0 97px;
    margin-top: -2%;
    width: 40px;
    height: 35px;
}

#actividad .carousel-inner .portada .item-container {
    padding-bottom: 0
}

#actividad .content .portada img:not(.bck-cam-button) {
    margin-top: 0;
    margin-bottom: 0
}

/*desplegables*/

/*.bck-dropdown-2 .bck-dropdown-titulo,
.bck-dropdown .bck-dropdown-titulo {
    color: inherit;
    font-size: 2.5rem;
    padding-left: 10px
}*/

.bck-dropdown .bck-dropdown-icon {
    color: #000
}

.bck-dropdown-icon>.fa {
    display: inline-block;
    border: none;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    padding: 7px;
    width: 100%;
    height: 100%;
    text-align: center
}

/*desplegable 1*/
.bck-dropdown.bck-dropdown-1 {
    background-color: #ffffff;
    border: 3px solid #EF3D61;
    margin-top: 10px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;

}

.bck-dropdown-1 .bck-dropdown-titulo {
    font-size: 2.5rem;
    font-weight: 600;
    padding-left: 10px;
    color: #ef3d61;
}

.bck-dropdown-1 .bck-dropdown-icon {
    background-color: #fff;
    width: 25px;
    height: 10px;
    color: #ef3d61;
}

.bck-dropdown-1 .bck-dropdown-content {
    background-color: #fff;
    border: none;
    padding-left: 17px;
    border-radius: 30px 10px 37px 10px;
    max-height: 800%;
}

.bck-dropdown-1 .fa-chevron-up:before, 
.bck-dropdown-1 .fa-chevron-down:before {
    font-size: 1.2rem;
}

/*desplegable 12 */
.bck-dropdown.bck-dropdown-12 {
    background-color: #ffffff;
    border: 3px solid #2793d0;
    margin-top: 10px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 0px;

}

.bck-dropdown-12 .bck-dropdown-titulo {
    font-size: 2.5rem;
    font-weight: 600;
    padding-left: 10px;
    color: #0695C7;0695C7
}

.bck-dropdown-12 .bck-dropdown-icon {
    background-color: #fff;
    width: 25px;
    height: 10px;
    color: #0695C7;
}

.bck-dropdown-12 .bck-dropdown-content {
    background-color: #fff;
    border: none;
    padding-left: 17px;
    border-radius:10px;
    max-height: 800%;
}

.bck-dropdown-12 .fa-chevron-up:before, 
.bck-dropdown-12 .fa-chevron-down:before {
    font-size: 1.2rem;
}



.bck-box .chooseblanks p,.bck-box .fillblanks p,.bck-dropdown-2.activities-dropdown .bck-box p {
    display: block
}

.bck-dropdown-content {
    max-height: none
}

.activities-dropdown .nav-tabs {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100px;
    height: auto;
    overflow: hidden;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 1px solid #dcdada
}

.activities-dropdown .nav-tabs>li {
    width: 100%;
    height: 60px;
    margin: 0;
    border: 0
}

.activities-dropdown .nav-tabs>li:not(.active),.activities-dropdown .nav-tabs>li:not(:last-of-type) {
    border-bottom: 1px solid #dcdada
}

.activities-dropdown .nav-tabs>li>a {
    width: 100%;
    height: 100%;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    border: 0;
    background: transparent;
    color: #414141;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 4rem
}

.activities-dropdown .nav-tabs>li.active>a,.activities-dropdown .nav-tabs>li.active>a:focus,.activities-dropdown .nav-tabs>li.active>a:hover {
    border: 0;
    background: #ea5b0c;
    color: #fff
}

.activities-dropdown .tab-content {
    height: auto;
    overflow: hidden
}

.activities-dropdown .tab-content .tab-pane {
    padding: 20px 0
}

.slide_main input:focus {
    border-color: #007c39;
}

/*****************coursetags************************/
/*****************unittag_azul_transit************************/
/*audios*/
.unittag_azul_transit #actividad .player.audio {
    background-image: url(images/audio_transit_azul.png);
}

.unittag_azul_transit .bck-title-5 {
    color: #0695C7;
}

.unittag_azul_transit .bck-title-6 {
    color: #0695C7;
}

.unittag_azul_transit .bck-enfasis-2 {
    color: #0695C7;
}

.unittag_azul_transit .bck-enfasis-3 {
    color: #0695C7;
}

.unittag_azul_transit .item-container .icon-hablar1:before {
    background-image: url(images/icono_bocadillo_1_azul.png);
}

.unittag_azul_transit .item-container .icon-hablar2:before {
    background-image: url(images/icono_bocadillo_2_azul.png);
}

.unittag_azul_transit .item-container .icon-hablar3:before {
        background-image: url(images/icono_bocadillo_3_azul.png);
}

.unittag_azul_transit .item-container .icon-lupa:before {
    background-image: url(images/icono_lupa_azul.png);
}

.unittag_azul_transit .item-container .icon-lapiz:before {
    background-image: url(images/icono_lapiz_azul.png);
}

.unittag_azul_transit .item-container .icon-dados:before {
    background-image: url(images/icono_dados_azul.png);
}

.unittag_azul_transit .item-container .icon-leer:before {
    background-image: url(images/icono_leer_azul.png);
}

.unittag_azul_transit .item-container .icon-video:before {
    background-image: url(images/icono_video_azul.png);
}


.unittag_azul_transit #actividad .content .cke_contents ol.bck-ol-1 li:before, 
.unittag_azul_transit #actividad .content .texto_curso ol.bck-ol-1 li:before, 
.unittag_azul_transit #actividad .content .workspace ul li ol.bck-ol-1 li:before, 
.unittag_azul_transit #actividad .popover-content ol.bck-ol-1 li:before {
    background: #0695C7;
    border: 1px solid #0695C7;
}

.unittag_azul_transit #actividad .content .cke_contents ol.bck-ol-2 li:before, 
.unittag_azul_transit #actividad .content .texto_curso ol.bck-ol-2 li:before, 
.unittag_azul_transit #actividad .content .workspace ul li ol.bck-ol-2 li:before, 
.unittag_azul_transit #actividad .popover-content ol.bck-ol-2 li:before {
    color: #0695C7;
}

.unittag_azul_transit #actividad .content .cke_contents ol.bck-ol-3 li:before, 
.unittag_azul_transit #actividad .content .texto_curso ol.bck-ol-3 li:before, 
.unittag_azul_transit #actividad .content .workspace ul li ol.bck-ol-3 li:before, 
.unittag_azul_transit #actividad .popover-content ol.bck-ol-3 li:before {
    color: #0695C7;
}

.unittag_azul_transit #actividad .content .cke_contents ol.bck-ol-4 li:before, 
.unittag_azul_transit #actividad .content .texto_curso ol.bck-ol-4 li:before, 
.unittag_azul_transit #actividad .content .workspace ul li ol.bck-ol-4 li:before, 
.unittag_azul_transit #actividad .popover-content ol.bck-ol-4 li:before {
    color: #0695C7;
}

.unittag_azul_transit #actividad .content .cke_contents ol.bck-ol-5 li:before, 
.unittag_azul_transit #actividad .content .texto_curso ol.bck-ol-5 li:before, 
.unittag_azul_transit #actividad .content .workspace ul li ol.bck-ol-5 li:before, 
.unittag_azul_transit #actividad .popover-content ol.bck-ol-5 li:before {
    color: #0695C7;
}

.unittag_azul_transit #actividad .content .cke_contents .bck-ul-1 li:before,
.unittag_azul_transit #actividad .content .texto_curso ul.bck-ul-1 li:before,
.unittag_azul_transit #actividad .popover-content ul.bck-ul-1 li:before,
.unittag_azul_transit #actividad .content .workspace ul li ul.bck-ul-1 li:before {
    color: #0695C7;
}


/*caja 07*/
.unittag_azul_transit .bck-box.bck-box-7 {
    border: 1px solid #0695C7;
}


.unittag_azul_transit .bck-box.bck-box-7:before {
    background: url(images/icono_caja_07_azul.png);
        content: "";
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: -42px;
    z-index: 100;
    top: -19%;
    width: 85px;
    padding: 45px;
}


.unittag_azul_transit .bck-box.bck-box-7>.bck-title {
    color: #0695C7;
}




/*querys*/

@media screen and (max-width: 375px) {
    #actividad .box p {
        font-size:1.5rem
    }

    .btn-danger,.btn-danger[disabled],.btn-primary[disabled],
    .btn-primary[disabled]:focus {
        margin-bottom: 10px
    }
}

@media screen and (max-width: 450px) {
    #actividad .class_slide {
        padding:20px 15px 10px
    }

    .bck-box.bck-box-1 {
        left: -32px;
        width: 111.5%
    }
    .bck-title-1,.bck-title-4 {
        left: 0
    }

    #actividad .content .cke_contents .bck-ol-2 li,
    #actividad .content .texto_curso .bck-ol-2 li,
    #actividad .content .workspace ul li .bck-ol-2 li,
    #actividad .popover-content .bck-ol-2 li {
        margin-left: -20px
    }

    #actividad .carousel-inner .item-container.aux-bckg,
    #actividad .carousel-inner .item-container.aux-fullscreen {
        padding-left: 0
    }



    .bck-box-1 .bck-content p {
        font-size: 2.5rem
    }

    .bck-enfasis-1 {
        top: 6px
    }
}

@media screen and (max-width: 500px) {
    #actividad .class_slide {
        padding:20px 60px 10px
    }

    #actividad .carousel-inner .item-container {
        -webkit-box-shadow: transparent 0 3px 9px;
        -moz-box-shadow: rgba(0,0,0,.298039) 0 3px 9px;
        box-shadow: 0 3px 9px transparent
    }

    #actividad .content .header .title h3:after {
        display: none
    }

    .bck-dropdown-titulo {
        padding-left: 0
    }

    .bck-dropdown-icon {
        width: 35px;
        height: 35px
    }

    .bck-dropdown-icon>.fa {
        padding: 4px
    }

    #actividad .content .cke_contents .bck-ol-2 li,#actividad .content .texto_curso .bck-ol-2 li,#actividad .content .workspace ul li .bck-ol-2 li,#actividad .popover-content .bck-ol-2 li {
        margin-left: -20px
    }

    .bck-box.bck-box-3 {
        padding: 20px 1px 17px 60px
    }

    .bck-box.bck-box-3 .bck-content {
        position: relative;
        left: -26px;
        top: 10px
    }
}

@media screen and (max-width: 768px) {
    #actividad .content .header .title h3:after {
        background-image:url(Images/triangulo-blanco2.png);
        content: "";
        background-size: contain;
        background-repeat: no-repeat;
        padding: 22px;
        position: absolute;
        width: 0;
        height: auto;
        margin-left: 21.5px;
        top: 65.5px
    }

    #actividad .content .iniciounidad .header .title h3 {
        margin-top: 104px
    }

    #actividad .content .iniciounidad .header .title h3:after {
        margin-top: 99px
    }

    /*#actividad .player.audio,
    #actividad .player.video,
    #help-panel-content .player,
    #remote-alert-modal-rich .player {
        display: inline-block;
        background-image: url(images/rich_english_U7_pg64_img_0004.png);
        background-color: rgba(0,128,0,0)!important;
        background-repeat: no-repeat;
        background-size: contain;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        margin: 0 5px;
    }*/

    #actividad .carousel-inner .item-container {
        -webkit-box-shadow: transparent 0 3px 9px;
        -moz-box-shadow: rgba(0,0,0,.298039) 0 3px 9px;
        box-shadow: 0 3px 9px transparent
    }

    .bck-box.bck-box-12 {
        margin-top: 15px;
        background: #eef4dc;
        position: relative;
        width: 133%;
        left: 0
    }

    .bck-title-2 {
        margin-left: 0px;
    }



    .slide.crosswords-puzzle .enunciados {
        width: 325px
    }
}

@media only screen and (max-width: 1024px) and (min-width:769px) {
    #actividad .player.audio,
    #actividad .player.video,
    #help-panel-content .player,
    #remote-alert-modal-rich .player {
        display:inline-block;
        background-image: url(images/rich_english_U7_pg64_img_0004.png);
        background-color: rgba(0,128,0,0)!important;
        background-repeat: no-repeat;
        background-size: contain;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        margin: 0 5px;
        vertical-align: sub
    }

    #actividad .carousel-inner .item-container {
        -webkit-box-shadow: transparent 0 3px 9px;
        -moz-box-shadow: rgba(0,0,0,.298039) 0 3px 9px;
        box-shadow: 0 3px 9px transparent
    }

    /*.bck-box.bck-box-7 {
    left: -97px;
    width: calc(100% + 194px);
    max-width: calc(100% + 194px);
}*/

}

.tmpux.content_type_clase_transitdemo .transitdemo-navbar.modo_revision {
    top: 0;
    display: block!important
}

.tmpux.body_clase .content-wrapper {
    margin-top: 86px
}
