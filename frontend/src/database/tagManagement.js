import { connectDb } from "./db";

const TAGS_STORE_NAME = "tags";

export function getAllTags() {
  return new Promise((resolve, reject) => {
    connectDb().then((db) => {
      const transaction = db.transaction([TAGS_STORE_NAME], "readonly");
      const objectStore = transaction.objectStore(TAGS_STORE_NAME);
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

export function addTag() {
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

export function updateTag(id) {
  return new Promise((resolve, reject) => {
    openDatabase().then((db) => {
      const transaction = db.transaction([TAGS_STORE_NAME], "readwrite");
      const objectStore = transaction.objectStore(TAGS_STORE_NAME);
      const request = objectStore.put(id);

      request.onsuccess = function () {
        resolve();
      };

      request.onerror = function (event) {
        reject(event.target.errorCode);
      };
    });
  });
}

export function delTag(id) {
  return new Promise((resolve, reject) => {
    openDatabase().then((db) => {
      const transaction = db.transaction([TAGS_STORE_NAME], "readwrite");
      const objectStore = transaction.objectStore(TAGS_STORE_NAME);
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
