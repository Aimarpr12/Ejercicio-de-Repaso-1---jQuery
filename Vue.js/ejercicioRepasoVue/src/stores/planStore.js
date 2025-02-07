import { defineStore } from 'pinia';

export const usePlanStore = defineStore('planStore', {
  state: () => ({
    plans: []
  }),
  getters: {
    planesTotalesApuntados(state) {
      let total = 0;
      state.plans.forEach(plan => {
        if(plan.asistencia){
          total += 1;
        }
      });
      return total;
    }
  },
  actions: {
    fetchPlans() {
      // Simular la carga de datos
      this.plans = [{ id: 1, title: 'Cine con amigos' }, { id: 2, title: 'Partido de fútbol' }];
      debugger;
    },
    addPlan(title) {
        debugger;
      const newPlan = {
        id: Math.random(), // Simulación de ID único
        title: title,
        asistencia: true,
        amigos: []
      };
      this.plans.push(newPlan);
    },
    deletePlan(id) {
      this.plans = this.plans.filter(plan => plan.id !== id);
    },
    getPlans(){
        return this.plans;
    },
    alternarAsistencia(id) {
        const plan = this.plans.find(plan => plan.id === id);
        if (plan) {
            plan.asistencia = !plan.asistencia;
        }
    },
    addFriend(id, foo) {
        const plan = this.plans.find(plan => plan.id === id);
        if (plan) {
            plan.amigos.push({ asistencia: true, name: foo });
        }
    },
    cambiarAsistencia(name, id){
        debugger;
        const plan = this.plans.find(plan => plan.id === id);
        if (plan) {
            const amigo =plan.amigos.find(amigo => amigo.name === name)
            if (amigo) {
                amigo.asistencia = !amigo.asistencia;
            }
        }
    }
  }
});
