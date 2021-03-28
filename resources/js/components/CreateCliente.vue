<template>
    <div>
        <h3 class="text-center">Adicionar Cliente</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addCliente">
                    <div class="form-group">
                        <label>Nome</label>
                        <input type="text" class="form-control" v-model="cliente.nome">
                    </div>
                    <div class="form-group">
                        <label>Codigo Cidade</label>
                        <input type="text" class="form-control" v-model="cliente.codigocidade">
                    </div>
                    <button type="submit" class="btn btn-primary">Criar</button>
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
        methods: {
            addCliente() {
                this.axios
                    .post('http://localhost:8000/api/clientes', this.cliente)
                    .then(response => (
                        this.$router.push({ name: 'create' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>