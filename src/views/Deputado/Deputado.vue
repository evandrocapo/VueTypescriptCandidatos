<template>
  <div class="container">
    <h1>Deputado: {{ deputado.nome }}</h1>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
// import { fetch } from "@/utils/axios";

import IListaDeputados from "@/types/ListaDeputados";

export default defineComponent({
  name: "Deputados",
  setup() {
    const deputado = reactive<IListaDeputados>({} as IListaDeputados);

    return { deputado };
  },
  mounted() {
    // const data = await fetch(`/deputados/${this.$route.params.id}`);
    // const deputado: IListaDeputados = data.data.dados;

    const data: IListaDeputados = {
      id: 204521,
      uri: "https://dadosabertos.camara.leg.br/api/v2/deputados/204521",
      nome: "Abou Anni",
      siglaPartido: "UNIÃO",
      uriPartido: "https://dadosabertos.camara.leg.br/api/v2/partidos/38009",
      siglaUf: "SP",
      idLegislatura: 56,
      urlFoto: "https://www.camara.leg.br/internet/deputado/bandep/204521.jpg",
      email: null,
    };

    Object.assign(this.deputado, data);
  },
});
</script>

<style lang="scss">
.content {
  display: flex;
}
</style>
