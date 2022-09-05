<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      bgColor="link"
      placeholder="Edit note"
      label="Edit note"
    >
      <template #buttons>
        <button @click="$router.back()" class="button is-link is-light mr-3">
          Cancel
        </button>
        <button
          @click="handleSaveClicked"
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "../components/Notes/AddEditNote.vue";
import { useNotesStore } from "../stores/storeNotes";

const route = useRoute();
const router = useRouter();
const notesStore = useNotesStore();
const noteContent = ref("");

noteContent.value = notesStore.getNoteContent(route.params.id);

const handleSaveClicked = () => {
  notesStore.updateNote(route.params.id, noteContent.value);
  router.push({ name: "notes" });
};
</script>

<style lang="scss"></style>
