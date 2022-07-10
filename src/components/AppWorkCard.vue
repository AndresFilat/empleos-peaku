<template>
    <div id="work-card">
        <b-container class="bv-example-row">
            <b-row class="cards">
                <b-col cols="2" class="align-self-center">
                    <center>
                        <img src="@/assets/empresa-icon.png" width="100"/>
                    </center>
                </b-col>
                <b-col>
                    <b-row>
                        <b-col>
                            <h3>
                                {{ el.name }}
                            </h3>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-icon icon="building" scale="1"></b-icon>
                            <span>{{ el.company }}</span>
                        </b-col>
                        <b-col>
                            <b-icon icon="geo-alt" scale="1"></b-icon>
                            <span>{{ el.location }}</span>
                        </b-col>
                        <b-col>
                            <b-icon icon="cash-stack" scale="1"></b-icon>
                            <span>{{ el.salary }}</span>
                        </b-col>
                        <b-col>
                            <b-icon icon="people" scale="1"></b-icon>
                            <span>{{ el.vacants }}</span>
                        </b-col>
                        <b-col>
                            <b-icon icon="calendar4-event" scale="1"></b-icon>
                            <span>{{ el.update }}</span>
                        </b-col>
                    </b-row>
                    <hr />
                    <b-row>
                        <b-col>
                            <small><b>Habilidades requeridas</b></small><br />
                            <b-button pill variant="outline-secondary" v-for="(skill, index) in el.skills" :key="index">
                                <div v-if="skill.toLowerCase() === 'js' || skill.toLowerCase() === 'javascript'" class="d-inline">
                                    <img src="@/assets/icons8-javascript.gif" width="20">
                                </div>
                                <div v-if="skill.toLowerCase() === 'react' || skill.toLowerCase() === 'reactjs'" class="d-inline">
                                    <img src="@/assets/icons8-react.gif" width="20">
                                </div>
                                <div v-if="skill.toLowerCase() === 'wordpress'" class="d-inline">
                                    <img src="@/assets/icons8-wordpress.gif" width="20">
                                </div>
                                <div v-if="skill.toLowerCase() === 'vue' || skill.toLowerCase() === 'vuejs'" class="d-inline">
                                    <img src="@/assets/icons8-vue.png" width="20">
                                </div>
                                <div v-if="skill.toLowerCase() === 'python' || skill.toLowerCase() === 'py'" class="d-inline">
                                    <img src="@/assets/icons8-python.gif" width="20">
                                </div>
                                <div v-if="skill.toLowerCase() === 'angular'" class="d-inline">
                                    <img src="@/assets/icons8-angular.png" width="20">
                                </div>
                                <div v-if="skill.toLowerCase() === 'php'" class="d-inline">
                                    <img src="@/assets/icons8-php.png" width="20">
                                </div>
                                <div v-if="skill.toLowerCase() === 'sql'" class="d-inline">
                                    <img src="@/assets/icons8-sql.png" width="20">
                                </div>
                                <div v-if="skill.toLowerCase() === 'java'" class="d-inline">
                                    <img src="@/assets/icons8-java.gif" width="30">
                                </div>
                                <div v-if="skill.toLowerCase() === 'c#' || skill.toLowerCase() === 'csharp'" class="d-inline">
                                    <img src="@/assets/icons8-c-sharp.png" width="20">
                                </div>
                                <div v-if="skill.toLowerCase() === 'css' || skill.toLowerCase() === 'css3'" class="d-inline">
                                    <img src="@/assets/icons8-css3.png" width="20">
                                </div>
                                <div v-if="skill.toLowerCase() === 'html' || skill.toLowerCase() === 'html5'" class="d-inline">
                                    <img src="@/assets/icons8-html5.png" width="20">
                                </div>
                                <div v-if="skill.toLowerCase() === 'bootstrap'" class="d-inline">
                                    <img src="@/assets/icons8-bootstrap.png" width="20">
                                </div>
                                <div v-if="skill.toLowerCase() === 'node' || skill.toLowerCase() === 'nodejs'" class="d-inline">
                                    <img src="@/assets/icons8-node.png" width="20">
                                </div>
                                <div v-if="skill.toLowerCase() === 'django'" class="d-inline">
                                    <img src="@/assets/icons8-django.png" width="20">
                                </div>

                                {{ skill }}
                            </b-button>
                        </b-col>
                        <b-col>
                            <small><b>Beneficios</b></small><br />
                            <b-button pill variant="outline-secondary" v-for="(benefit, index) in el.benefits" :key="index">
                                {{ benefit }}
                            </b-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    name: 'app-work-card',
    props: {
        el: {}
    }
}
</script>
<style scoped>
    #work-card {
        margin-bottom: 1rem;
    }

    #work-card:hover {
        cursor: pointer;
    }

    .cards {
        border: 1px solid #dee2e6;
        padding: 1rem 0rem;
        background: white;
    }

    .cards:hover {
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.2)!important;
    }

    button {
        background: transparent;
        margin-right: 5px;
        padding: 0.2rem 1rem;
    }

    button:hover {
        background: white;
        color: black;
    }
</style>
