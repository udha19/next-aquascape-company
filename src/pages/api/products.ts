import useSWR from 'swr'

const fetcher = (url: string | URL | Request) => fetch(url).then(r => r.json())

export function useProduct(){
	const {data, mutate} = useSWR('https://www.giovankov.com/api/product.json', fetcher)
	return data?.data

}

export function useImage(){
	const {data, mutate} = useSWR('https://www.giovankov.com/api/image.json', fetcher)
	
	return data?.data

}