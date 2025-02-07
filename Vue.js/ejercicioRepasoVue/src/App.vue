<template>
  <div id="app">
    <header>
      <h1>Organizador de Planes</h1>
      <AddPlan />
    </header>
    <main>
      <PlanItem v-for="plan in plans" :key="plan.id" :plan="plan" />
      <h1>Tu total de planes: <span>
            {{ planesTotalesApuntados }}
          </span></h1>
    </main>
  </div>
</template>

<script setup>
import AddPlan from './components/AddPlan.vue';
import PlanItem from './components/PlanItem.vue';
import { usePlanStore } from './stores/planStore';
import { ref, computed, onMounted } from 'vue';

const planStore = usePlanStore();
onMounted(() => {
  planStore.fetchPlans(); 
});

const plans = computed(() =>
  planStore.getPlans()
);

const planesTotalesApuntados = computed(() => planStore.planesTotalesApuntados);

</script>
