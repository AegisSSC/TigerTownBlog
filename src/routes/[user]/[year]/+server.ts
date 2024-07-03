import type {RouteParams} from './$types.js'
import {parseHTML} from 'linkedom'
import {json} from '@sveltejs/kit'


export async function GET({ params, setHeaders }) {
    setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, s-maxage=${60 * 60 * 24 *365}'
    })
    const html = await getContributions(params)
    // console.log(html)
    // console.log(parseContributions(html))

    // return json(parseContributions(html))
    return json(parseContributions(html))
}

async function getContributions({user, year}: RouteParams)
{
    const api = `https://github.com/users/${user}/contributions?from=${year}-01-01&to=${year}-12-31`
    // console.log(api)
    const response = await fetch(api)

    if(!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`)
    }

    return await response.text()
}

function parseContributions(html: string){
    const {document} = parseHTML(html )

    const rows = document.querySelectorAll<HTMLTableRowElement> ('tbody > tr')


    const contributions = []
    for (const row of rows){
        // console.log(row)
        const days = row.querySelectorAll <HTMLTableCellElement>('td:not(.ContributionCalendar-label)')
        // console.log(days)
        // return days

        const currentRow = []
        for(const day of days) {
            // console.log(`month: ${day.getAttribute('data-date')?.split('-')[1]}`)
            // console.log(`day: ${day.getAttribute('data-date')?.split('-')[2]}`)
            // console.log(`year: ${day.getAttribute('data-date')?.split('-')[0]}`)
            // console.log(`level: ${day.getAttribute('data-level')}`)

            if(!(day.getAttribute('data-date') === null) || !(day.getAttribute('data-level')=== null)){
                const contribution = {
                    month: day.getAttribute('data-date')?.split('-')[1],
                    day: day.getAttribute('data-date')?.split('-')[2],
                    year: day.getAttribute('data-date')?.split('-')[0],
                    level: day.getAttribute('data-level') === null ? 0 : day.getAttribute('data-level')
                }
                currentRow.push(contribution)
            } else {
				currentRow.push(null)
			}
        }
        contributions.push(currentRow)
    }
    return contributions
}