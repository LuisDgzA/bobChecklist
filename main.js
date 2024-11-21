const collectables = [
    {
        id: 1,
        src: 'bob_arcoiris_negro.png',
        srcColor: 'bob_arcoiris_color.png',
    },
    {
        id: 2,
        src: 'calamardo_negro.png',
        srcColor: 'calamardo_color.png',
    },
    {
        id: 3,
        src: 'don_cangrejo_negro.png',
        srcColor: 'don_cangrejo_color.png',
    },
    {
        id: 4,
        src: 'gary_negro.png',
        srcColor: 'gary_color.png',
    },
    {
        id: 5,
        src: 'plankton_negro.png',
        srcColor: 'plankton_color.png',
    },
    {
        id: 6,
        src: 'patricio_barril_negro.png',
        srcColor: 'patricio_barril_color.png',
    },
    {
        id: 7,
        src: 'don_cangrejo_violin_negro.png',
        srcColor: 'don_cangrejo_violin_color.png',
    },
    {
        id: 8,
        src: 'policia_negro.png',
        srcColor: 'policia_color.png',
    },
    {
        id: 9,
        src: 'arenita_super_negro.png',
        srcColor: 'arenita_super_color.png',
    },
    {
        id: 10,
        src: 'patricio_super_negro.png',
        srcColor: 'patricio_super_color.png',
    },
    {
        id: 11,
        src: 'sirenoman_negro.png',
        srcColor: 'sirenoman_color.png',
    },
    {
        id: 12,
        src: 'chico_perseve_negro.png',
        srcColor: 'chico_perseve_color.png',
    },
    {
        id: 13,
        src: 'carrerin_negro.png',
        srcColor: 'carrerin_color.png',
    },
    {
        id: 14,
        src: 'cracatoa_negro.png',
        srcColor: 'cracatoa_color.png',
    },
    {
        id: 15,
        src: 'patricio_rapero_negro.png',
        srcColor: 'patricio_rapero_color.png',
    },
    {
        id: 16,
        src: 'bob_rapero_negro.png',
        srcColor: 'bob_rapero_color.png',
    },
    {
        id: 17,
        src: 'arenita_negro.png',
        srcColor: 'arenita_color.png',
    },
    {
        id: 18,
        src: 'bob_festejo_negro.png',
        srcColor: 'bob_festejo_color.png',
    },
    {
        id: 19,
        src: 'perlita_negro.png',
        srcColor: 'perlita_color.png',
    },
    {
        id: 20,
        src: 'arenita_hibernacion_negro.png',
        srcColor: 'arenita_hibernacion_color.png',
    },
]

let idsOwned = localStorage.getItem('owned') ? JSON.parse(localStorage.getItem('owned')) : [];

console.log(idsOwned)

const ItemsWrapper = document.querySelector('.item-collecion-wrapper.1')

collectables.forEach((collectable,index) => {
    let isOwned = idsOwned.includes(collectable.id);
    ItemsWrapper.insertAdjacentHTML('beforeend',
        `<div class="item ${isOwned ? 'owned' : '' }" data-id="${collectable.id}">
            <img class="img-color" src="./assets/img/${collectable.srcColor}" alt="itemColor${collectable.id}">
            <img class="img-negro" src="./assets/img/${collectable.src}" alt="item${collectable.id}">
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
