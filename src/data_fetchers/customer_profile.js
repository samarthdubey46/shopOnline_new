const url = 'http://192.168.43.118:9081/customer/customer/5/'
const image_url = 'http://192.168.43.118:9081/customer/customer_image/'
export let fetches = async () => {
	try{
		let response = await fetch(url)
		let json = await response.json()
		// console.log("json" + JSON.stringify(json))
		return(json)
	}catch(error) {
		console.warn("error is: " +  error)
	}
	
}
export let images_fetch = async (id) => {
	try {
		let response = await fetch(image_url + String(id) + '/')
		let json = await response.json()
		// console.log(JSON.stringify(json))
		return(json)

	} catch(e) {
		console.log(e);
	}
}