import stringify from "json-stringify-safe";

const set_storage = "set_storage";

class StorageUtils {

	static storeKey(item) {
		let store_item = localStorage.getItem(set_storage);
		if (store_item == null) {
			store_item = false;
		} else {
			store_item = item;
			store_item = JSON.parse(store_item);
		}
		localStorage.setItem(
			set_storage,
			JSON.stringify(store_item)
		);
	}

	static getStoredKey() {
		const store_item = localStorage.getItem(set_storage);
		return store_item ? JSON.parse(store_item) : false;
	}

	static clearStorages(){
		sessionStorage.clear();
		localStorage.clear();
	}
}

export default StorageUtils;
