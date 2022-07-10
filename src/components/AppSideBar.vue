<template lang="">
    <div id="side-menu">
        <div id="menu-items">
            <router-link to="/" class="item">
                <b-button variant="light" class="animate__animated animate__bounceInLeft">
                    <b-icon icon="briefcase" scale="1"></b-icon><br />
                    <span>Empleos</span>
                </b-button>
            </router-link>
            <router-link to="/postulaciones" class="item">
                <b-button variant="light" class="animate__animated animate__bounceInRight">
                    <b-icon icon="file-earmark-check" scale="1"></b-icon><br />
                    <span>Postulaciones</span>
                </b-button>
            </router-link>
            <router-link to="/profesores" class="item">
                <b-button variant="light" class="animate__animated animate__bounceInLeft">
                    <b-icon icon="book" scale="1"></b-icon><br />
                    <span>Profesores</span>
                </b-button>
            </router-link>
            <router-link to="/cursos-y-retos" class="item">
                <b-button variant="light" class="animate__animated animate__bounceInRight">
                    <b-icon icon="controller" scale="1"></b-icon><br />
                    <span>Cursos y retos</span>
                </b-button>
            </router-link>
            <router-link to="/preguntas" class="item">
                <b-button variant="light" class="animate__animated animate__bounceInLeft">
                    <b-icon icon="chat-text" scale="1"></b-icon><br />
                    <span>Preguntas</span>
                </b-button>
            </router-link>
            <router-link to="/premios" class="item">
                <b-button variant="light" class="animate__animated animate__bounceInRight">
                    <b-icon icon="gem" scale="1"></b-icon><br />
                    <span>Premios</span>
                </b-button>
            </router-link>
            <router-link to="/curriculum" class="item">
                <b-button variant="light" class="animate__animated animate__bounceInLeft">
                    <b-icon icon="file-earmark-person" scale="1"></b-icon><br />
                    <span>CV</span>
                </b-button>
            </router-link>
            <center>
                <span>PeakU App</span>
            </center>
            <b-button variant="light" class="p-0" href="https://play.google.com/store/apps/details?id=co.peaku.peaku_app&hl=es_CR" target="__blank">
                <img src="@/assets/google-play.png" width="80"/>
            </b-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app-side-bar',
}
</script>
<style scoped>
    button {
        display: block;
        margin: auto;
        margin-bottom: 0.5rem;
        width: 80px;
        padding: 5px 0px;
        background: none;
        border: inherit;
    }

    button:hover {
        background: #6fcaff88;
        transition: none;
    }

    .item {
        text-decoration: none;
    }
    
    #side-menu {
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
        position: fixed;
        height: 100%;
        top: 75px;
        background: white;
        z-index: 999;
        padding: 1rem 0.5rem;
    }
    
    span {
        font-size: 10.5px;
    }

    a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        font-size: 10.5px;
    }
</style>