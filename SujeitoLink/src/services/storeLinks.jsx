// Carregar links salvos 

export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || []

    return linksSaves
}

// Salvar links no storage

export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key)

    const hasLink = linksStored.some(link => link.id === newLink.id)

    if (hasLink) {
        console.log('essse link já está na lista')
        return
    }

    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('link salvo com sucesso')
}

// Apagar links do storage

export function deleteLink(links, id) {
    let myLinks = links.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('BadalaLink', JSON.stringify(myLinks))

    return myLinks
}