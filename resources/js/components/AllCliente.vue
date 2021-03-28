<template>
    <div>
        <h2 class="text-center">Clientes Lista</h2>
 
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Codigo Cidade</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="cliente in clientes" :key="cliente.id">
                <td>{{ cliente.id }}</td>
                <td>{{ cliente.nome }}</td>
                <td>{{ cliente.codigocidade }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'edit', params: { id: cliente.id }}" class="btn btn-success">Editar</router-link>
                        <button class="btn btn-danger" @click="deleteCliente(cliente.id)">Deletar</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                clientes: []
            }
        },
        created() {
            this.axios
                .get('http://localhost:8000/api/clientes/')
                .then(response => {
                    this.clientes = response.data;
                });
        },
        methods: {
            deleteCliente(id) { 
                this.axios
                    .delete(`http://localhost:8000/api/clientes/${id}`)
                    .then(response => {
                        let i = this.clientes.map(data => data.id).indexOf(id);
                        this.clientes.splice(i, 1)
                    });
            }
        }
    }
</script>