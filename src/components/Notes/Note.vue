<template>
  <div class="card mb-4">
    <div class="card-content">
      {{ note.content }}
      <div class="has-text-right has-text-grey-light">
        <small>{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="{ name: 'edit-note', params: { id: note.id } }"
        class="card-footer-item"
        >Edit</RouterLink
      >
      <a @click.prevent="handleDeleteClicked" href="#" class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
/*
  Importation
  */
import { computed } from "vue";

/*
  Props
  */
const props = defineProps({
  note: {
    type: Object,
    require: true,
  },
});

const emit = defineEmits(["deleteClicked"]);

/*
  Computed
  */
const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = props.note.content.length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

const handleDeleteClicked = () => {
  emit("deleteClicked", props.note.id);
};
</script>

<style lang="scss"></style>
