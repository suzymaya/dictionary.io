import { db } from "../../firebase/firebase";
import {
	collection,
	doc,
	getDoc,
	getDocs,
	addDoc,
	deleteDoc,
	query,
	where
} from "firebase/firestore";

// Initial State
const initialState = {
	list: [],
};

// Actions
const LOAD = "dict/LOAD";
const SEARCH = "dict/SEARCH";
const CREATE = "dict/CREATE";
const REMOVE = "dict/REMOVE";

// Action Creators
export function loadDictionary(dictionary) {
	return { type: LOAD, dictionary };
}

export function searchDictionary(title) {
	return { type: SEARCH, title };
}

export function createDictionary(id, title, desc, example) {
	return { type: CREATE, id, title, desc, example };
}

export function removeDictionary(index) {
	return {type: REMOVE, index};
}

// Middlewares
export const loadDictionaryFB = () => {
	return async function (dispatch) {
		const data = await getDocs(collection(db, "dictionary"));
		let dictionary = [];
		data.forEach((d) => {
			// dictionary = [...dictionary, {...doc.data()}]
			dictionary.push({ id: d.id, ...d.data() });
		});
		dispatch(loadDictionary(dictionary));
	};
};

export const searchDictionaryFB = (searchTitle) => {
	return async function (dispatch) {
		const q = query(collection(db, "dictionary"), where("title","==",searchTitle));
		const data = await getDocs(q);
		let dictionary = [];
		data.forEach((d) => {
			dictionary.push({ id: d.id, ...d.data() });
		});

		dispatch(loadDictionary(dictionary));
	};
}

export const createDictionaryFB = (item) => {
	return async function (dispatch) {
		const docRef = await addDoc(collection(db, "dictionary"), item);
		// console.log((await getDoc(docRef)).data());
		const _item = await getDoc(docRef);
        dispatch(createDictionary(_item.id, _item.data().title, _item.data().desc, _item.data().example));
	};
};

export const removeDictionaryFB = (id) => {
	return async function(dispatch, getState) {
		if (!id) {
			window.alert("항목이 존재하지 않습니다");
			return;
		}

		const docRef = doc(db, "dictionary", id);
		await deleteDoc(docRef);

		const _dictionary = getState().dict.list;
		const index = _dictionary.findIndex((d) => {
			return d.id === id;
		});

		dispatch(removeDictionary(index));
	}
};

// Reducer
export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case "dict/LOAD":
			return { list: action.dictionary };
		case "dict/CREATE":
			const newDict = {
				id: action.id,
				title: action.title,
				desc: action.desc,
				example: action.example,
			};
			return { list: [...state.list, newDict] };
		case "dict/REMOVE":
			const new_dict = state.list.filter((l, idx) => {
				return parseInt(action.index) !== idx;
			});
			return {list: new_dict};
		default:
			return state;
	}
}
