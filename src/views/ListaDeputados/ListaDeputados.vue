<template>
  <div class="container">
    <h1>Deputados</h1>
    <hr />

    <div class="content">
      <Card
        v-for="deputado in deputados"
        :key="deputado.id"
        :deputado="deputado"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { fetch } from "@/utils/axios";

import IListaDeputados from "@/types/ListaDeputados";

import Card from "@/components/atoms/card/Card.vue";

export default defineComponent({
  name: "ListaDeputados",
  components: {
    Card,
  },
  setup() {
    const deputados = reactive<IListaDeputados[]>([]);

    return { deputados };
  },
  mounted() {
    // const data = await fetch("/deputados?itens=2&ordem=ASC&ordenarPor=nome");
    // const deputados: Array<IListaDeputados> = data.data.dados;

    const data: Array<IListaDeputados> = [
      {
        id: 204521,
        uri: "https://dadosabertos.camara.leg.br/api/v2/deputados/204521",
        nome: "Abou Anni",
        siglaPartido: "UNIÃO",
        uriPartido: "https://dadosabertos.camara.leg.br/api/v2/partidos/38009",
        siglaUf: "SP",
        idLegislatura: 56,
        urlFoto:
          "https://www.camara.leg.br/internet/deputado/bandep/204521.jpg",
        email: null,
      },
      {
        id: 204379,
        uri: "https://dadosabertos.camara.leg.br/api/v2/deputados/204379",
        nome: "Acácio Favacho",
        siglaPartido: "MDB",
        uriPartido: "https://dadosabertos.camara.leg.br/api/v2/partidos/36899",
        siglaUf: "AP",
        idLegislatura: 56,
        urlFoto:
          "https://www.camara.leg.br/internet/deputado/bandep/204379.jpg",
        email: null,
      },
    ];

    Object.assign(this.deputados, data);
  },
});
</script>

<style lang="scss">
.content {
  display: flex;
}
</style>
