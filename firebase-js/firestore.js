import { firebaseApp } from "./config.js";
import { getFirestore, collection, addDoc, query, where, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const db = getFirestore(firebaseApp);

export async function insert(item) {
  try {
    const response = await addDoc(collection(db, 'todos'), item)
    return response
  } catch(e) {
    throw new Error(e);
  }
}

export async function getItems(uid) {
  try {
    let items = [];
    const q = await query(collection(db, 'todos'), where('userid', '==', uid));
    const response = await getDocs(q);
    response.forEach(item => {
      items.push(item.data());
    });

    return items;
  } catch(error) {
    throw new Error(error);
  }
}

export async function updateTodo(id, item) {
  let docId = '';
  try {
    const gd = await query(collection(db, 'todos'), where('id', '==', id))
    const res = await getDocs(gd);
    res.forEach(i => {
      docId = i.id;
    })

    const d = doc(db, 'todos', docId)
    await updateDoc(d, {completed: item.completed})
  } catch (error) {
    throw new Error(error);
  }
}
