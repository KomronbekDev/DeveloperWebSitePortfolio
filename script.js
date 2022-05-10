let data = [
    {
        id: 1,
        name: "Figma",
        buy: 'Free',
        paragraf: 'Lorem ipsum dolat sit im conactatur adpecing alt mada qala like to me',
        img: 'https://i.hizliresim.com/9imyktv.png',
        likeImg: 'https://i.hizliresim.com/18hbbci.png',
        fileImg: 'https://i.hizliresim.com/h7vsa2m.png',
        visit: 'visit'
    },
    {
        id: 2,
        name: "Sketch",
        buy: 'Trial & Paid',
        paragraf: 'Lorem ipsum dolat sit im conactatur adpecing alt mada qala like to me',
        img: 'https://i.hizliresim.com/mqhyjek.png',
        likeImg: 'https://i.hizliresim.com/18hbbci.png',
        fileImg: 'https://i.hizliresim.com/h7vsa2m.png',
        visit: 'visit'
    },
    {
        id: 3,
        name: "Visual Code",
        buy: 'Free',
        paragraf: 'Lorem ipsum dolat sit im conactatur adpecing alt mada qala like to me',
        img: 'https://i.hizliresim.com/6x6qp4y.png',
        likeImg: 'https://i.hizliresim.com/18hbbci.png',
        fileImg: 'https://i.hizliresim.com/h7vsa2m.png',
        visit: 'visit'
    },
    {
        id: 4,
        name: "Notion",
        buy: 'Free & Paid',
        paragraf: 'Lorem ipsum dolat sit im conactatur adpecing alt mada qala like to me',
        img: 'https://i.hizliresim.com/eb4dqwv.png',
        likeImg: 'https://i.hizliresim.com/18hbbci.png',
        fileImg: 'https://i.hizliresim.com/h7vsa2m.png',
        visit: 'visit'
    },
    {
        id: 5,
        name: "Slack",
        buy: 'Free & Paid',
        paragraf: 'Lorem ipsum dolat sit im conactatur adpecing alt mada qala like to me',
        img: 'https://i.hizliresim.com/r10wam9.png',
        likeImg: 'https://i.hizliresim.com/18hbbci.png',
        fileImg: 'https://i.hizliresim.com/h7vsa2m.png',
        visit: 'visit'
    },
    {
        id: 6,
        name: "Invision",
        buy: 'Free & Paid',
        paragraf: 'Lorem ipsum dolat sit im conactatur adpecing alt mada qala like to me',
        img: 'https://i.hizliresim.com/qrzmf3g.png',
        likeImg: 'https://i.hizliresim.com/18hbbci.png',
        fileImg: 'https://i.hizliresim.com/h7vsa2m.png',
        visit: 'visit'
    },
]

let arrTwo = [
    {
        id: 1,
        name: "Invision",
        buy: 'Free & Paid',
        paragraf: 'Lorem ipsum dolat sit im conactatur adpecing alt mada qala like to me',
        img: 'https://i.hizliresim.com/jxleo7h.png',
        likeImg: 'https://i.hizliresim.com/18hbbci.png',
        fileImg: 'https://i.hizliresim.com/h7vsa2m.png',
        visit: 'visit'
    },
    {
        id: 2,
        name: "Invision",
        buy: 'Free & Paid',
        paragraf: 'Lorem ipsum dolat sit im conactatur adpecing alt mada qala like to me',
        img: 'https://i.hizliresim.com/gxmklwy.png',
        likeImg: 'https://i.hizliresim.com/18hbbci.png',
        fileImg: 'https://i.hizliresim.com/h7vsa2m.png',
        visit: 'visit'
    },
    {
        id: 3,
        name: "Invision",
        buy: 'Free & Paid',
        paragraf: 'Lorem ipsum dolat sit im conactatur adpecing alt mada qala like to me',
        img: 'https://i.hizliresim.com/al7iq03.png',
        likeImg: 'https://i.hizliresim.com/18hbbci.png',
        fileImg: 'https://i.hizliresim.com/h7vsa2m.png',
        visit: 'visit'
    },
    {
        id: 4,
        name: "Invision",
        buy: 'Free & Paid',
        paragraf: 'Lorem ipsum dolat sit im conactatur adpecing alt mada qala like to me',
        img: 'https://i.hizliresim.com/j2ygmj6.png',
        likeImg: 'https://i.hizliresim.com/18hbbci.png',
        fileImg: 'https://i.hizliresim.com/h7vsa2m.png',
        visit: 'visit'
    },
]
const boxTwoUl = document.querySelector('.boxTwoUl')
const h1 = document.querySelector('.autoTextH1')
const span = h1.querySelector('span')
const ulList = document.querySelector(".contentTwoUl")
autoText()

function autoText() {
    const texts = span.dataset.texts.split(',')
    let currentIndex = 0
    const write = () => {
        texts[currentIndex].split('').forEach((letter, index) => {
            const timeOut = setTimeout(() => {
                span.textContent += letter
                if (texts[currentIndex].length - 1 == index) {
                    clearTimeout(timeOut)
                    const interval = setInterval(() => {
                        span.textContent = span.textContent.slice(0, -1)
                        if (span.textContent.length == 0) {
                            currentIndex++
                            if (currentIndex == texts.length) {
                                currentIndex = 0
                            }
                            clearInterval(interval)
                            write()
                        }
                    }, 250);
                }
            }, 250 * index)
        })
    }
    return write()

}
function MyRender(arr, list){
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li')
        let img = document.createElement("img")
        let name = document.createElement('h2')
        let buy = document.createElement('h4')
        let p = document.createElement('p')
        let likeImg = document.createElement('img')
        let likeBtn = document.createElement('a')
        let fileImg = document.createElement('img')
        let fileBtn = document.createElement('a')
        let visitBtn = document.createElement('button');
        li.appendChild(img)
        li.appendChild(name)
        li.appendChild(buy)
        li.appendChild(p)
        li.appendChild(likeBtn)
        likeBtn.appendChild(likeImg)
        li.appendChild(fileBtn)
        fileBtn.appendChild(fileImg)
        li.appendChild(visitBtn)
        list.appendChild(li)
        fileBtn.href = ''
        likeBtn.href = ''
        img.src = arr[i].img
        img.alt = "img"
        img.classList = 'logoImg'
        name.textContent = arr[i].name
        buy.textContent = arr[i].buy
        p.textContent = arr[i].paragraf
        likeImg.src = arr[i].likeImg
        likeImg.alt = 'Like'
        fileImg.alt = 'File'
        fileImg.src = arr[i].fileImg
        visitBtn.textContent = arr[i].visit
    }
}
MyRender(data,ulList)
function MyRender(arr, list){
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li')
        let img = document.createElement("img")
        let name = document.createElement('h2')
        let buy = document.createElement('h4')
        let p = document.createElement('p')
        let likeImg = document.createElement('img')
        let likeBtn = document.createElement('a')
        let fileImg = document.createElement('img')
        let fileBtn = document.createElement('a')
        let visitBtn = document.createElement('button');
        li.appendChild(img)
        li.appendChild(name)
        li.appendChild(buy)
        li.appendChild(p)
        li.appendChild(likeBtn)
        likeBtn.appendChild(likeImg)
        li.appendChild(fileBtn)
        fileBtn.appendChild(fileImg)
        li.appendChild(visitBtn)
        list.appendChild(li)
        fileBtn.href = ''
        likeBtn.href = ''
        img.src = arr[i].img
        img.alt = "img"
        img.classList = 'logoImg'
        name.textContent = arr[i].name
        buy.textContent = arr[i].buy
        p.textContent = arr[i].paragraf
        likeImg.src = arr[i].likeImg
        likeImg.alt = 'Like'
        fileImg.alt = 'File'
        fileImg.classList = 'bottom'
        likeImg.classList = 'bottom'
        visitBtn.classList = 'bottom'
        fileImg.src = arr[i].fileImg
        visitBtn.textContent = arr[i].visit
    }
}
MyRender(arrTwo,boxTwoUl)



// Menu Funcsion
let menuBtn = document.querySelector('.menuBtnDiv')
let menuContent = document.querySelector('.menuContent')
let navListMedia = document.querySelector('.navListMedia')
let buttonsMedia = document.querySelector('.buttonsMedia')
let menuOpen = false;

menuBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        menuContent.classList.add('menuOpen')
        navListMedia.classList.add('block')
        buttonsMedia.classList.add('block')
        sr.reveal('.navListMedia li', {
            delay: 400,
            distance: '100px',
        })
        sr.reveal('.buttonsMedia button', {
            delay: 600,
            distance: '100px',
        })
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        menuContent.classList.remove('menuOpen');
        navListMedia.classList.remove('block');
        buttonsMedia.classList.remove('block');
    }
})

// Window Skroll

window.sr = new ScrollReveal()
sr.reveal('.contentTwo h1', {
    delay: 100,
    distance: '100px',
})
sr.reveal('.contentTwo p', {
    delay: 200,
    distance: '100px',
})
sr.reveal('.contentTwoUl li', {
    delay: 300,
    distance: '100px',
})
sr.reveal('.LoadMore', {
    delay: 400,
    distance: '100px',
})
sr.reveal('.contentThree h1', {
    delay: 400,
    distance: '100px',
})
sr.reveal('.contentThree img', {
    delay: 400,
    distance: '100px',
})
sr.reveal('.boxOne h1', {
    delay: 400,
    distance: '100px',
})
sr.reveal('.boxOne p', {
    delay: 400,
    distance: '100px',
})
sr.reveal('.boxOne button', {
    delay: 400,
    distance: '100px',
})
sr.reveal('.boxTwoUl li', {
    delay: 400,
    distance: '100px',
})
sr.reveal('.contentSix h1', {
    delay: 400,
    distance: '100px',
})
sr.reveal('.contentSix p', {
    delay: 400,
    distance: '100px',
})
sr.reveal('.contentSix form', {
    delay: 400,
    distance: '100px',
})