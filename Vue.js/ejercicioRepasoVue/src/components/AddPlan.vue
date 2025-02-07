<template>
    <div class="add-plan">
      <input v-model="newPlanTitle" placeholder="Añadir nuevo plan" />
      <button @click="addPlan">Añadir Plan</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { usePlanStore } from '../stores/planStore';
  
  const newPlanTitle = ref('');
  const planStore = usePlanStore();
  
  function addPlan() {
    debugger;
    if (newPlanTitle.value.trim()) {
      planStore.addPlan(newPlanTitle.value);
      newPlanTitle.value = '';
    }
  }
  </script>
  