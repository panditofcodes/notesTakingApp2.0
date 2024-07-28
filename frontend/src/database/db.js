const DB_NAME = 'MyDatabase';
const DB_VERSION = 1;
const NOTES_STORE_NAME = 'notes';
const TAGS_STORE_NAME = 'tags';

export function connectDb (){
    return new Promise( (resolve,reject)=>{
        const request = indexedDB.open(DB_NAME, DB_VERSION)
        request.onupgradeneeded = function (event){
            const db = event.target.result
            if (!NOTES_STORE_NAME) {
                db.createObjectStore(NOTES_STORE_NAME,{keyPath: 'id', autoIncreament: true });
            }
            if (!TAGS_STORE_NAME) {
                db.createObjectStore(TAGS_STORE_NAME,{keyPath: 'id', autoIncreament: true });
            } 
        }
        request.onsuccess = function(event){
            resolve(event.target.result)
        }
        reject.onerror = function(event){
            reject(event.target.errorCode)
        }
    })
}