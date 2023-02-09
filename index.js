let count = 0

const browseBtn = document.querySelector('.main .footer')

function onClick() {
    if (count < 2) {
        count ++
        const node = document.querySelector('.cardC')
        const clone = node.cloneNode(true)
        browseBtn.insertAdjacentElement('beforebegin', clone)
    }
    if(count == 2) {
        browseBtn.children[0].textContent = "That's it!"
    }
}

