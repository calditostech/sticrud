<template>
    <div>
        <h3 class="text-center">Editar Cliente</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateCliente">
                    <div class="form-group">
                        <label>Nome</label>
                        <input type="text" class="form-control" v-model="cliente.nome">
                    </div>
                    <div class="form-group">
                        <label>Codigo Cidade</label>
                        <input type="text" class="form-control" v-model="cliente.codigocidade">
                    </div>
                    <button type="submit" class="btn btn-primary">Atualizar</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                cliente: {}
            }
        },
        created() {
            this.axios
                .get(`http://localhost:8000/api/clientes/${this.$route.params.id}`)
                .then((res) => {
                    this.cliente = res.data;
                });
        },
        methods: {
            updateCliente() {
                this.axios
                    .patch(`http://localhost:8000/api/clientes/${this.$route.params.id}`, this.cliente)
                    .then((res) => {
                        this.$router.push({ name: 'edit' });
                    });
            }
        }
    }
</script>