<template>
    <div class="plan-item" :class="{ 'verde': plan.asistencia, 'rojo': !plan.asistencia }">
        <h3>{{ plan.title }}</h3>
    <ul>
        <li v-for="friend in plan.amigos" :key="friend.name">
            <div :class="{ 'verde': friend.asistencia, 'rojo': !friend.asistencia }">
                {{ friend.name }}
                <button @click="cambiarAsistencia(friend.name, plan.id)">Cambiar Asistencia</button>
            </div>
        </li>
    </ul>


      <button @click="alternarAsistencia(plan.id)">Alternar Asistencia</button>
      <button @click="deletePlan(plan.id)">Eliminar</button>
      <button @click="addFriend(plan.id)">Añadir Amigo</button>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { usePlanStore } from '../stores/planStore';
  
  const props = defineProps({
    plan: Object
  });
  
  const planStore = usePlanStore();
  
  function deletePlan(id) {
    planStore.deletePlan(id);
  }
  
  function alternarAsistencia(id) {
    planStore.alternarAsistencia(id);
  }
  
  function addFriend(id) {
    let foo = prompt('Type here');
    planStore.addFriend(id, foo);
  }

  function cambiarAsistencia(name, id) {
    debugger;
    planStore.cambiarAsistencia(name, id);
  }


  </script>

<style>
.verde {
  background-color: green;
}
.rojo {
  background-color: red;
}
</style>
  