const collectables = [
    {
        id: 1,
        src: 'bob_arcoiris_negro',
        srcColor: 'bob_arcoiris_color',
    },
    {
        id: 2,
        src: 'calamardo_negro',
        srcColor: 'calamardo_color',
    },
    {
        id: 3,
        src: 'don_cangrejo_negro',
        srcColor: 'don_cangrejo_color',
    },
    {
        id: 4,
        src: 'gary_negro',
        srcColor: 'gary_color',
    },
    {
        id: 5,
        src: 'plankton_negro',
        srcColor: 'plankton_color',
    },
    {
        id: 6,
        src: 'patricio_barril_negro',
        srcColor: 'patricio_barril_color',
    },
    {
        id: 7,
        src: 'don_cangrejo_violin_negro',
        srcColor: 'don_cangrejo_violin_color',
    },
    {
        id: 8,
        src: 'policia_negro',
        srcColor: 'policia_color',
    },
    {
        id: 9,
        src: 'arenita_super_negro',
        srcColor: 'arenita_super_color',
    },
    {
        id: 10,
        src: 'patricio_super_negro',
        srcColor: 'patricio_super_color',
    },
    {
        id: 11,
        src: 'sirenoman_negro',
        srcColor: 'sirenoman_color',
    },
    {
        id: 12,
        src: 'chico_perseve_negro',
        srcColor: 'chico_perseve_color',
    },
    {
        id: 13,
        src: 'carrerin_negro',
        srcColor: 'carrerin_color',
    },
    {
        id: 14,
        src: 'cracatoa_negro',
        srcColor: 'cracatoa_color',
    },
    {
        id: 15,
        src: 'patricio_rapero_negro',
        srcColor: 'patricio_rapero_color',
    },
    {
        id: 16,
        src: 'bob_rapero_negro',
        srcColor: 'bob_rapero_color',
    },
    {
        id: 17,
        src: 'arenita_negro',
        srcColor: 'arenita_color',
    },
    {
        id: 18,
        src: 'bob_festejo_negro',
        srcColor: 'bob_festejo_color',
    },
    {
        id: 19,
        src: 'perlita_negro',
        srcColor: 'perlita_color',
    },
    {
        id: 20,
        src: 'arenita_hibernacion_negro',
        srcColor: 'arenita_hibernacion_color',
    },
]

let idsOwned = localStorage.getItem('owned') ? JSON.parse(localStorage.getItem('owned')) : [];

console.log(idsOwned)

const ItemsWrapper = document.querySelector('.collection-1')

collectables.forEach((collectable,index) => {
    let isOwned = idsOwned.includes(collectable.id);
    ItemsWrapper.insertAdjacentHTML('beforeend',
        `<div class="item ${isOwned ? 'owned' : '' }" data-id="${collectable.id}">
            <img class="img-color" src="./assets/img/${collectable.srcColor}.webp" alt="itemColor${collectable.id}">
            <img class="img-negro" src="./assets/img/${collectable.src}.webp" alt="item${collectable.id}">
        </div>`)
})


const Items = document.querySelectorAll('.item');

Items.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('owned')
        // let itemsLocalStorage 

        let id = parseInt(item.getAttribute('data-id'))
        if(idsOwned.includes(id)){
            console.log('si lo incluye')
            idsOwned = idsOwned.filter(theId => theId != id)
        }else{
            idsOwned.push(id)
        }
        console.log('id',id)
        console.log(idsOwned)

        localStorage.setItem("owned", JSON.stringify(idsOwned));
    })
})
