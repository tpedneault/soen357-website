<template>
    <div class="flex flex-col border border-2 border-black rounded-md gap-2 p-8 max-w-md mx-auto"
         :style="{ boxShadow: '2px 2px 0px rgba(0, 0, 0, 1)' }">
      <h2 class="text-xl font-semibold mb-2 mx-auto">{{ persona.Name }}</h2>
      <p><strong>Age:</strong> {{ persona.Age }}</p>
      <p><strong>Background:</strong> {{ persona.Background }}</p>
      <p><strong>Tech-Savviness:</strong> {{ persona.TechSavviness }}</p>
      <p><strong>Goals:</strong></p>
      <ul class="list-disc list-inside mb-2">
        <li class="ml-6" v-for="(goal, index) in persona.Goals" :key="index">{{ goal }}</li>
      </ul>
      <p><strong>Challenges:</strong></p>
      <ul class="list-disc list-inside">
        <li class="ml-6" v-for="(challenge, index) in persona.Challenges" :key="index">{{ challenge }}</li>
      </ul>
    </div>
  </template>

<script setup>
const { persona } = defineProps(['persona']);
console.log(persona);
</script>