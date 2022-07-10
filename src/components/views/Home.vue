<template lang="">
    <div id="home-container">
        <template v-if="flag">
            <b-container fluid id="modal-container">
                <form id="form-add-offer">
                    <b-row>
                        <b-col align="end">
                            <b-icon icon="x-circle-fill" scale="1.3" id="close-btn" @click="closeModal()"></b-icon>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group
                                label="Oferta:"
                                description="Por ejemplo 'Desarrollador Junior'"
                            >
                                <b-form-input
                                    type="text"
                                    placeholder="Titulo de la oferta"
                                    v-model="cardName"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group
                                label="Empresa/Compañia:"
                                description="Por ejemplo 'PeakU Inc.'"
                            >
                                <b-form-input
                                    type="text"
                                    placeholder="Razon social de la empresa o compañia"
                                    v-model="company"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row style="background: #00000005;">
                        <b-col>
                            <b-form-group
                                label="Ubicacion:"
                                description="Por ejemplo 'Remoto o Medellin'"
                            >
                                <b-form-input
                                    type="text"
                                    placeholder="Lugar de trabajo"
                                    v-model="location"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group
                                label="Salario:"
                                description="Por ejemplo '5M - 7M'"
                            >
                                <b-form-input
                                    type="text"
                                    placeholder="Sueldo o salario"
                                    v-model="salary"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group
                                label="Vacantes:"
                                description="Por ejemplo '10'"
                            >
                                <b-form-input
                                    type="number"
                                    placeholder="Numero de vacantes"
                                    v-model="vacants"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group
                                label="Habilidades:"
                                description="Por ejemplo 'js, vue, python'"
                            >
                                <b-form-input
                                    type="text"
                                    placeholder="Separadas por comas"
                                    v-model="skills"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row style="background: #00000005;">
                        <b-col>
                            <b-form-group
                                label="Beneficios:"
                                description="Por ejemplo 'Trabajo Remoto, Cursos De Ingles'"
                            >
                                <b-form-input
                                    type="text"
                                    placeholder="Separados por comas"
                                    v-model="benefits"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col align="center">
                            <input type="submit" class="btn btn-success btn-modal" value="Publicar oferta" @click="addOffer" />
                        </b-col>
                        <b-col align="center">
                            <input type="reset" class="btn btn-primary btn-modal" value="Limpiar campos" />
                        </b-col>
                    </b-row>
                </form>
            </b-container>
        </template>
        <center>
            <b-button variant="outline-success" @click="openModal" id="add-offer-btn" class="animate__animated animate__pulse animate__repeat-2">+ Nueva oferta</b-button>
        </center>
        <!--app-board-->
        <template v-if="cards.length">
            <app-work-card
                v-for="el in cards"
                :key="el.id"
                :el="el">
            </app-work-card>
        </template>
        <center v-else>
            <h2>No hay ofertas disponibles</h2>
        </center>
    </div>
</template>
<script>

import AppWorkCard from '@/components/AppWorkCard'

export default {
    name: 'home-view',
    components: { AppWorkCard },
    data () {
        //fecha de publicacion de la oferta
        const update = new Date(Date.now()).toDateString();

        return {
            id: "",
            cardName: "",
            company: "",
            location: "",
            salary: "",
            vacants: "",
            update,
            skills: "",
            benefits: "",
            //la flag indica el estado del modal (abierto/cerrado)
            flag: null,

            cards:
            [
                {
                    id: 1657398537542,
                    name: "Desarrollador Junior FullStack",
                    company: "Peaku Inc.",
                    location: "Remoto",
                    salary: "2M - 2.5M",
                    vacants: "2",
                    update: "Sat Jul 09 2022",
                    skills: ["JavaScript","Vue","Python"],
                    benefits: ["Trabajo Remoto","Curso de ingles","Pago en dolares"]
                },
            ]
        }
    },
    methods: {
        addOffer (e) {
            e.preventDefault()

            if (
                this.cardName === "" ||
                this.company === "" ||
                this.location === "" ||
                this.salary === "" ||
                this.vacants === "" ||
                this.skills === "" ||
                this.benefits === ""
            )
            {
                alert("Asegurese de llenar todos los campos correctamente")
            }
            else
            {
                this.cards.push(
                    {
                        id: Date.now(), //setea al id un valor aleatorio unico
                        name: this.cardName,
                        company: this.company,
                        location: this.location,
                        salary: this.salary,
                        vacants: this.vacants,
                        update: this.update,
                        skills: this.skills.replace(/ /g, "").split(','),
                        benefits: this.benefits.split(','),
                    }
                )

                //limpia las propiedades
                this.id = "",
                this.cardName = "",
                this.company = "",
                this.location = "",
                this.salary = "",
                this.vacants = "",
                this.skills = "",
                this.benefits = "",

                this.flag = false;
            }
        },

        openModal () {
            this.flag = true;
        },

        closeModal (e) {
            this.flag = false;
        }
    }
}
</script>
<style scoped>
    #home-container {
        margin-top: 210px;
        margin-left: 98px;
    }

    .form-group {
        margin-bottom: 1rem;
        font-weight: bold;
    }

    #modal-container {
        position: absolute;
        z-index: 9999;
        background: #80808073;
        backdrop-filter: blur(2px);
        top: 0;
        left: 0;
        height: 100vh;
    }

    #form-add-offer {
        background: white;
        width: 40%;
        margin: auto;
        padding: 2rem;
        margin-top: 10vh;
        border-radius: 1rem;
        border: 1rem solid gray;
    }

    .btn-modal {
        margin-top: 2rem;
        width: 100%;
    }

    #add-offer-btn {
        margin-bottom: 2rem;
        margin-top: 1rem;
    }

    #close-btn:hover {
        cursor: pointer;
    }
</style>