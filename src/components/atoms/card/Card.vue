<template>
  <div class="card">
    <img :src="deputado.urlFoto" :alt="`Foto do ${deputado.nome}`" />
    <div class="container">
      <h4>{{ deputado.nome }}</h4>
      <p><b>Partido:</b> {{ deputado.siglaPartido }}</p>
      <p><b>UF:</b> {{ deputado.siglaUf }}</p>
    </div>

    <button>Ver Mais</button>
  </div>
</template>

<script lang="ts">
import TListaDeputados from "./TListaDeputados";
import { defineComponent } from "vue";

export default defineComponent({
  name: "card",
  props: {
    deputado: {
      type: Object as () => TListaDeputados,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}

button {
  margin: 5px 0px 10px 0px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: left;

  width: 200px;

  margin: 0px 2px;
  border: 1px solid black;
  border-radius: 6px;
  background-color: ghostwhite;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  overflow: hidden;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .container {
    padding: 2px 16px;
  }
}
</style>
