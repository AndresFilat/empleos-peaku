<template lang="">
    <div>
        <b-container fluid id="header">
            <div id="header-child">
                <div id="header-grandchild">
                    <b-row>
                        <b-col>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <b-icon icon="search" scale="1.3"></b-icon>
                                </span>
                                <input type="text" class="form-control" placeholder="Busca por cargo, salario, ubicación o empresa" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-button pill variant="outline-secondary">Área de trabajo <span>▼</span></b-button>
                            <b-button pill variant="outline-secondary">Cargo <span>▼</span></b-button>
                            <b-button pill variant="outline-secondary">Salario <span>▼</span></b-button>
                            <b-button pill variant="outline-secondary">Ubicación <span>▼</span></b-button>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </b-container>
    </div>
</template>
<script>
export default {
    name: 'app-header',
}
</script>
<style scoped>
    #header {
        background: linear-gradient(90deg,#59a8ea,#1262a7);
        box-shadow: 0 .1rem 1rem rgba(0,0,0,.15)!important;
        margin-top: 51px;
        position: fixed;
        width: 100%;
        padding: 2rem 0rem;
    }

    #header-child {
        margin-left: 129px;
    }

    #header-grandchild {
        width: 60%;
        margin: auto;
    }

    .input-group-text {
        background: white;
        border: none;
    }
    
    .input-group {
        background: white;
        border: 1px solid gray;
    }

    .form-control {
        border: none;
    }

    button {
        background: transparent;
        color: white;
        border-color: white;
        margin: 0;
        padding: 0.2rem 1rem;
        margin-top: -10px;
    }

    button:hover {
        background: white;
        color: black;
    }

    span {
        font-size: 12px;
    }
</style>