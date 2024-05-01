
async function Coffee(){
    const url = 'https://university-college-list-and-rankings.p.rapidapi.com/api/top-universities/world';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': ''
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
    return(
        <>
            <div className="coffee">
                <h1>Buy me a coffee!</h1>
            </div>
        </>
    )
}
export default Coffee;