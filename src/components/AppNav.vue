<template lang="">
    <div>
        <b-container fluid class="container-nav">
            <b-row>
                <b-col cols="1">
                    <img src="@/assets/logo-peaku.png">
                </b-col>
                <b-col class="align-self-center">
                    <b-nav align="end">
                        <b-nav-item href="#">Inicio</b-nav-item>
                        <b-nav-item href="#">Empleos</b-nav-item>
                        <b-nav-item href="#">Cursos y retos</b-nav-item>
                        <b-nav-item href="#">Preguntas</b-nav-item>
                        <b-nav-item href="#">Profesores</b-nav-item>
                        <b-nav-item href="#">Para empresas</b-nav-item>
                        <b-button variant="light">
                        <b-icon icon="globe" scale="1"></b-icon>
                        ES/EN
                        </b-button>
                        <b-button variant="light" class="border">
                            <b-icon icon="bell" scale="1"></b-icon>
                        </b-button>
                        <b-button variant="light" class="border">
                            <b-icon icon="person-circle" scale="1"></b-icon>
                            Anonymouse
                        </b-button>
                    </b-nav>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    name: 'app-nav'
}
</script>
<style lang="">
    .container-nav {
        padding: 0.5rem 1rem;
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
        position: static;
        position: fixed;
        background: white;
        z-index: 999;
    }

    button {
        margin-right: 0.5rem;
    }
</style>