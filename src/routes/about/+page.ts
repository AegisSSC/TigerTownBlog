export async function load({ fetch }) {
	const contributions = await (await fetch('/AegisSSC/2024')).json()
	return { contributions }
}