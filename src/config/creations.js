import nestranny from '../assets/nestranny.jpg';
import risk from '../assets/risk.png';
import movieMarket from '../assets/moviemarket.png';
import react from '../assets/react.png';
import firebase from '../assets/firebase.png';
import moviedb from '../assets/moviedb.jpg';

export const creations = [
    {   
        id: 1,
        title: "Nestranny Conseil",
        description: "Société de conseil et de formation en finances. Le site a été lancé en juillet 2019 et est en constante évolution.",
        photo: nestranny,
        url: "http://www.nestranny-conseil.fr/",
        code: 'https://github.com/Hugox7/NestrannyReact',
        tools: [
            {
                label: 'react',
                pic: react,
            },
        ],
    },
    {   
        id: 2,
        title: "Risk GOT Companion",
        description: "Risk GOT Companion vous accompagne durant vos parties de Risk, vous permet de gérer vos armées et vos territoires. Il dispose d'une gestion utilisateur avec demandes d'amis et notifications.",
        photo: risk,
        url: "",
        code: "https://github.com/Hugox7/risk-counter-firebase/tree/dev",
        tools: [
            {
                label: 'React',
                pic: react,
            },
            {
                label: 'Firebase',
                pic: firebase,
            },
        ],
    },
    {   
        id: 3,
        title: "The Movies Market",
        description: "TMM vous donne accès à toutes les ressources offertes par l'API theMovieDB. Vous pourrez dans un second temps, noter des films ainsi qu'en ajouter à vos favoris.",
        photo: movieMarket,
        url: "",
        code: "https://github.com/Hugox7/TheMoviesMarket/tree/dev",
        tools: [
            {
                label: 'React',
                pic: react,
            },
            {
                label: 'TheMovieDB',
                pic: moviedb,
            },
        ],
    },
];