<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Type something"
    >
      <template v-slot:buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add new note
        </button>
      </template>
    </AddEditNote>

    <Note
      v-for="note in notesStore.notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    ></Note>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import { useNotesStore } from "@/stores/storeNotes";
import AddEditNote from "../components/Notes/AddEditNote.vue";

const notesStore = useNotesStore();
const newNote = ref("");
const addEditNoteRef = ref(null);

const addNote = () => {
  notesStore.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};

const deleteNote = (idToDelete) => {
  notesStore.deleteNote(idToDelete);
};
</script>

<style lang="scss"></style>
