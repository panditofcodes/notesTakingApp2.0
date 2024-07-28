import { connectDb } from "./db";

const NOTES_STORE_NAME = "notes";

export function getAllNotes() {
  return new Promise((resolve, reject) => {
    connectDb().then((db) => {
      const transaction = db.transaction([NOTES_STORE_NAME], "readonly");
      const objectStore = transaction.objectStore(NOTES_STORE_NAME);
      const request = objectStore.getAll();

      request.onsuccess = function () {
        resolve(request.result);
      };

      request.onerror = function (event) {
        reject(event.target.errorCode);
      };
    });
  });
}

export function addNote() {
  return new Promise((resolve, reject) => {
    connectDb().then((db) => {
      const transaction = db.transaction([NOTES_STORE_NAME], "readwrite");
      const objectStore = transaction.objectStore(NOTES_STORE_NAME);
      const request = objectStore.add(note);

      request.onsuccess = function () {
        resolve(request.result);
      };

      request.onerror = function (event) {
        reject(event.target.errorCode);
      };
    });
  });
}

export function updateNote(id) {
  return new Promise((resolve, reject) => {
    connectDb().then((db) => {
      const transaction = db.transaction([NOTES_STORE_NAME], "readwrite");
      const objectStore = transaction.objectStore(NOTES_STORE_NAME);
      const request = objectStore.put(id);

      request.onsuccess = function () {
        resolve(request.result);
      };

      request.onerror = function (event) {
        reject(event.target.errorCode);
      };
    });
  });
}

export function deleteNote(id) {
  return new Promise((resolve, reject) => {
    openDatabase().then((db) => {
      const transaction = db.transaction([NOTES_STORE_NAME], "readwrite");
      const objectStore = transaction.objectStore(NOTES_STORE_NAME);
      const request = objectStore.delete(id);

      request.onsuccess = function () {
        resolve();
      };

      request.onerror = function (event) {
        reject(event.target.errorCode);
      };
    });
  });
}
