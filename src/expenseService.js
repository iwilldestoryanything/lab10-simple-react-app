
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

const expensesCollection = collection(db, 'expenses');

const addExpense = async (expense) => {
  await addDoc(expensesCollection, expense);
};

const getExpenses = async () => {
    try {
      const querySnapshot = await db.collection('expenses').get();
      const expenseList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return expenseList;
    } catch (error) {
      console.error('Error getting expenses: ', error);
      throw error; // Можно пробросить ошибку выше для обработки в компоненте
    }
  };

const updateExpense = async (id, updatedExpense) => {
  const expenseDoc = doc(db, 'expenses', id);
  await updateDoc(expenseDoc, updatedExpense);
};

const deleteExpense = async (id) => {
  const expenseDoc = doc(db, 'expenses', id);
  await deleteDoc(expenseDoc);
};

export { addExpense, getExpenses, updateExpense, deleteExpense };
