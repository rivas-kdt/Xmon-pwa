import { db } from "@/lib/firebaseConfig";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export async function addWarehouse() {
    const data = {
        location: "Philippines",
        warehouse: "Phi-Jap Warehouse 1",
        createdAt: serverTimestamp(),
    }
    const id = '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    await setDoc(doc(db, "warehouse", id), data)
}