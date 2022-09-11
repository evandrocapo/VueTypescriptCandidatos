<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hr />
    <h3>Olá, {{ user?.name }}</h3>
    <h4>Sua idade é de {{ user?.age }} anos</h4>
    <h4>
      Você tambem trabalha como {{ user?.job?.name }} a qual
      {{ user?.job?.description }} e tem um salário de {{ user?.job?.salary }}
    </h4>
    <hr />

    <span>{{ renderAmountClick }}</span>
    <br />
    <button @click="onClick">Clique em mim :)</button>
  </div>
</template>

<script lang="ts">
import IUser from "@/types/User";

import { computed } from "@vue/reactivity";
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    const user = reactive<IUser>({} as IUser);

    const createUser = (): void => {
      let newUser: IUser = {
        name: "Evandro",
        age: 18,
        job: {
          name: "desenvolvedor",
          description:
            "desenvolve softwares para comprar roupinhas de jogos digitais",
          salary: 6000.0,
        },
      };

      Object.assign(user, newUser);
    };

    const quantity = ref<number>(0);

    const renderAmountClick = computed((): number => {
      return quantity.value;
    });

    const onClick = (): void => {
      quantity.value = quantity.value + 1;
    };

    return {
      quantity,
      renderAmountClick,
      onClick,
      user,
      createUser,
    };
  },
  async mounted() {
    this.createUser();
  },
});
</script>

<style lang="scss"></style>
