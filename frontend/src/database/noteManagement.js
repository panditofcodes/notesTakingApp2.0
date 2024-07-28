// src/db/noteManagement.js

import { connectDb } from './db';

const NOTES_STORE_NAME = 'notes';

export function getAllNotes() {
  return new Promise((resolve, reject) => {
    connectDb().then((db) => {
      const transaction = db.transaction([NOTES_STORE_NAME], 'readonly');
      const objectStore = transaction.objectStore(NOTES_STORE_NAME);
      const request = objectStore.getAll();

      request.onsuccess = function() {
        resolve(request.result);
      };

      request.onerror = function(event) {
        reject(event.target.errorCode);
      };
    }).catch(error => reject(error));
  });
}

export function addNoteToDB(note) {
  return new Promise((resolve, reject) => {
    connectDb().then((db) => {
      const transaction = db.transaction([NOTES_STORE_NAME], 'readwrite');
      const objectStore = transaction.objectStore(NOTES_STORE_NAME);
      const request = objectStore.add(note);

      request.onsuccess = function() {
        resolve(request.result);
      };

      request.onerror = function(event) {
        reject(event.target.errorCode);
      };
    }).catch(error => reject(error));
  });
}

export function updateNoteInDB(note) {
  return new Promise((resolve, reject) => {
    connectDb().then((db) => {
      const transaction = db.transaction([NOTES_STORE_NAME], 'readwrite');
      const objectStore = transaction.objectStore(NOTES_STORE_NAME);
      const request = objectStore.put(note);

      request.onsuccess = function() {
        resolve(request.result);
      };

      request.onerror = function(event) {
        reject(event.target.errorCode);
      };
    }).catch(error => reject(error));
  });
}

export function deleteNoteFromDB(id) {
  return new Promise((resolve, reject) => {
    connectDb().then((db) => {
      const transaction = db.transaction([NOTES_STORE_NAME], 'readwrite');
      const objectStore = transaction.objectStore(NOTES_STORE_NAME);
      const request = objectStore.delete(id);

      request.onsuccess = function() {
        resolve();
      };

      request.onerror = function(event) {
        reject(event.target.errorCode);
      };
    }).catch(error => reject(error));
  });
}
