export function getDate() {
    const dateRegex = /\s+de\s+/g
    const dotRegex = /\./g
    /* Using '.' & ' de ' in the same RegEx would break the
    replace() because "set. de 2024" would receive double space
    and add ' ' to the array from split() */

    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "2-digit",
    }

    const date = new Date()
        .toLocaleDateString('pt-BR', options)
        .replace(dateRegex, ' ')
        .replace(dotRegex, '')
        .split(' ')

    const [week, day, month, year] = date

    return `${week} ${day}/${month}/${year}`
}