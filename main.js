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
    {
        id: 21,
        src: 'calamardo_guapo_negro',
        srcColor: 'calamardo_guapo_color',
    },
]

const collectablesTras = [
    {
        id: 101,
        src: 'bob_tras_negro',
        srcColor: 'bob_tras_color',
    },
    {
        id: 102,
        src: 'plankton_tras_negro',
        srcColor: 'plankton_tras_color',
    },
    {
        id: 103,
        src: 'don_cangrejo_tras_negro',
        srcColor: 'don_cangrejo_tras_color',
    },
    {
        id: 104,
        src: 'anchoa_tras_negro',
        srcColor: 'anchoa_tras_color',
    },
    {
        id: 105,
        src: 'perlita_tras_negro',
        srcColor: 'perlita_tras_color',
    },
    {
        id: 106,
        src: 'cala_tras_negro',
        srcColor: 'cala_tras_color',
    },
    {
        id: 107,
        src: 'holandes_tras_negro',
        srcColor: 'holandes_tras_color',
    },
    {
        id: 108,
        src: 'gary_tras_negro',
        srcColor: 'gary_tras_color',
    },
    {
        id: 109,
        src: 'abuela_tras_negro',
        srcColor: 'abuela_tras_color',
    },
    {
        id: 110,
        src: 'patricio_tras_negro',
        srcColor: 'patricio_tras_color',
    },
    
]

const collectablesLLa = [
    {
        id: 201,
        src: 'bob_tras_negro',
        srcColor: 'c_bob',
    },
    {
        id: 202,
        src: 'plankton_tras_negro',
        srcColor: 'c_arenita',
    },
    {
        id: 203,
        src: 'don_cangrejo_tras_negro',
        srcColor: 'c_bob_pat_gary',
    },
    {
        id: 204,
        src: 'anchoa_tras_negro',
        srcColor: 'c_calamardo',
    },
    {
        id: 205,
        src: 'perlita_tras_negro',
        srcColor: 'c_don_cangrejo',
    },
    {
        id: 206,
        src: 'cala_tras_negro',
        srcColor: 'c_imaginacion',
    },
    {
        id: 207,
        src: 'holandes_tras_negro',
        srcColor: 'c_patricio',
    },
    {
        id: 208,
        src: 'gary_tras_negro',
        srcColor: 'c_perlita',
    },
    {
        id: 209,
        src: 'abuela_tras_negro',
        srcColor: 'c_plankton',
    },
    {
        id: 210,
        src: 'patricio_tras_negro',
        srcColor: 'c_todos',
    },
    
]

const collectablesCaps = [
    {
        id: 301,
        src: 'bob_tras_negro',
        srcColor: 'cap_calamardo_color',
    },
    {
        id: 302,
        src: 'plankton_tras_negro',
        srcColor: 'cap_friends',
    },
    {
        id: 303,
        src: 'don_cangrejo_tras_negro',
        srcColor: 'cap_carteles',
    },
    {
        id: 304,
        src: 'anchoa_tras_negro',
        srcColor: 'cap_plankton',
    },
    {
        id: 305,
        src: 'perlita_tras_negro',
        srcColor: 'cap_flotando',
    },
    {
        id: 306,
        src: 'cala_tras_negro',
        srcColor: 'cap_girando',
    },
    {
        id: 307,
        src: 'holandes_tras_negro',
        srcColor: 'cap_rainbow',
    },
    {
        id: 308,
        src: 'gary_tras_negro',
        srcColor: 'cap_friends2',
    },
    {
        id: 309,
        src: 'abuela_tras_negro',
        srcColor: 'cap_abajo',
    },
    
]

let idsOwned = localStorage.getItem('owned') ? JSON.parse(localStorage.getItem('owned')) : [];

console.log(idsOwned)

const ItemsWrapper = document.querySelector('.collection-1')

collectables.forEach((collectable,index) => {
    let isOwned = idsOwned.includes(collectable.id);
    ItemsWrapper.insertAdjacentHTML('beforeend',
        `<div class="item ${isOwned ? 'owned' : '' }" data-id="${collectable.id}">
            
            <div class="imagen-fondo" style="--bgimg: url('./assets/img/${collectable.srcColor}.webp')"></div>
        </div>`)
})

const ItemsWrapper2 = document.querySelector('.collection-2')

collectablesTras.forEach((collectable,index) => {
    let isOwned = idsOwned.includes(collectable.id);
    ItemsWrapper2.insertAdjacentHTML('beforeend',
        `<div class="item ${isOwned ? 'owned' : '' }" data-id="${collectable.id}">
            <div class="imagen-fondo" style="--bgimg: url('./assets/img/${collectable.srcColor}.webp')"></div>
            
        </div>`)
})

const ItemsWrapper3 = document.querySelector('.collection-3')

collectablesLLa.forEach((collectable,index) => {
    let isOwned = idsOwned.includes(collectable.id);
    ItemsWrapper3.insertAdjacentHTML('beforeend',
        `<div class="item ${isOwned ? 'owned' : '' }" data-id="${collectable.id}">
            <div class="imagen-fondo" style="--bgimg: url('./assets/img/${collectable.srcColor}.webp')"></div>
            
        </div>`)
})

const ItemsWrapper4 = document.querySelector('.collection-4')

collectablesCaps.forEach((collectable,index) => {
    let isOwned = idsOwned.includes(collectable.id);
    ItemsWrapper4.insertAdjacentHTML('beforeend',
        `<div class="item ${isOwned ? 'owned' : '' }" data-id="${collectable.id}">
            <div class="imagen-fondo" style="--bgimg: url('./assets/img/${collectable.srcColor}.webp')"></div>
            
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
