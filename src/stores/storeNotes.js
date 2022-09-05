import { defineStore } from "pinia";

export const useNotesStore = defineStore("notesStore", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quo numquam. Rem quidem nam consectetur non omnis, ullam nemo, tenetur,nesciunt aut dolorem molestias ipsum blanditiis assumenda inventore vero error?",
        },
        {
          id: "id2",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime();
      let id = currentDate.toString();

      let note = { id, content: newNoteContent };

      this.notes.unshift(note);
    },

    deleteNote(id) {
      this.notes = this.notes.filter((note) => {
        return note.id !== id;
      });
    },

    updateNote(id, content) {
      let index = this.notes.findIndex((note) => {
        return note.id === id;
      });

      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => {
          return note.id === id;
        })[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharatersCount: (state) => {
      return state.notes.reduce((acc, note) => {
        return acc + note.content.length;
      }, 0);
    },
  },
});
