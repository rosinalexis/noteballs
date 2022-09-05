<template>
  <div class="notes">
    <h1 class="title">Stats</h1>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Stat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ notesStore.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Character (of all notes)</td>
          <td>{{ notesStore.totalCharatersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      type="text"
      class="input"
      placeholder="Do you love noteballs"
      v-autofocus
    />
  </div>
</template>
<script setup>
import { useNotesStore } from "../stores/storeNotes";
import { vAutofocus } from "@/directives/vAutofocus";
const notesStore = useNotesStore();
</script>
<style lang="scss"></style>
