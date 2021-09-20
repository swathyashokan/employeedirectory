export default ApiFetch = async (data) => {
	try {
		var response = await fetch(data.url, data.params);
		return response.json();
	} catch (error) {
		return false;
	}
}
