export const toCapitalize = (text) => {
	let newText = text.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
	return newText
}

export const formatDisplayDate = (date) => {
	let nowDate = new Date(date)
	let newDate = ''
	const months = [ 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember' ]
	if (date !== undefined) {
		newDate = nowDate.getDate() + ' ' + months[nowDate.getMonth()] + ' ' + nowDate.getFullYear()
	}

	return newDate
}
