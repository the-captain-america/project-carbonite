import axios from "axios";
import { APP_CONTANTS } from "constants";

const headers = {
	"App-Id": APP_CONTANTS.app_id,
	"App-API-Key": APP_CONTANTS.admin_key
};

class Api {
	static getAppData(size) {
		const requestUrl = `${APP_CONTANTS.analytics_url}/${APP_CONTANTS.index_name}/name`;
		return axios({
			method: "get",
			url: requestUrl,
			headers: headers
		})
			.then(response => {
				console.log(response);
				return response.data;
			})
			.catch(error => {
				throw error;
			});
	}
}

export default Api;
