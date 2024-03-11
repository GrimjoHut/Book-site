/*1-bes
2-pantheon
3-book
4-map
5-lore*/
export interface StartNavMock {
    url: string;
    text: string;
    id: number
    Path: string
}
  
export const StartNavArr: StartNavMock[] = [
    {
        url: "https://i.pinimg.com/564x/5f/54/f2/5f54f2e1d3671a4e37f3bc094bd9e7fa.jpg",
        text: "Bes",
        id: 1,
        Path: "/Bestiary"
    },
    {
        url: "https://i.pinimg.com/564x/f0/b8/30/f0b830b65a2e9fbd4d365da8490a6f08.jpg",
        text: "God",
        id: 2,
        Path:"/God"
    },
    {
        url: "https://i.pinimg.com/564x/f0/b8/30/f0b830b65a2e9fbd4d365da8490a6f08.jpg",
        text: "Book",
        id: 3,
        Path: "/Book"
    },
    {
        url: "https://i.pinimg.com/564x/f0/b8/30/f0b830b65a2e9fbd4d365da8490a6f08.jpg",
        text: "Map",
        id: 4,
        Path: "/Map"
    },
    {
        url: "https://i.pinimg.com/564x/f0/b8/30/f0b830b65a2e9fbd4d365da8490a6f08.jpg",
        text: "Lore",
        id: 5,
        Path: "/lor"
    },
]

