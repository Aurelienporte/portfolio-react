 import booki_cover from "../assets/images/projects/booki_cover.svg"
 import ohmyfood_cover from "../assets/images/projects/ohmyfood_cover.svg"
 import sophiebluel_cover from "../assets/images/projects/sophie_bluel_cover.svg"
 import kasa_cover from "../assets/images/projects/kasa_cover.svg"
 import ninacarducci_cover from "../assets/images/projects/nina_cover.svg"
 import argentbank_cover from "../assets/images/projects/argentbank_cover.svg"
 import portfolio_cover from "../assets/images/projects/portfolio_cover.svg"
 import booki_back from "../assets/images/projects/booki_back.webp"
 import ohmyfood_back from "../assets/images/projects/ohmyfood_back.webp"
 import sophiebluel_back from "../assets/images/projects/sophie_bluel_back.webp"
 import kasa_back from "../assets/images/projects/kasa_back.webp"
 import ninacarducci_back from "../assets/images/projects/nina_back.webp"
 import argentbank_back from "../assets/images/projects/argentbank_back.webp"
 import portfolio_back from "../assets/images/projects/portfolio_back.webp"

 export const projects = [
    {
        "title": "Booki",
        "subtitle":"Agence de voyages",
        "cover": booki_cover,
        "backImage": booki_back,
        "description":[
            "Intégration d'après maquettes d'un site pour une agence de voyage fictive (projet d'étude).",
            " La validation du projet dépendait de la fidélité du rendu et de la responsivité de l'interface."
        ],
        "links":[{
            "name":"visiter le site",
            "url" :"https://aurelienporte.github.io/booki/"
        },
        {
            "name":"voir le code",
            "url" :"https://github.com/Aurelienporte/booki"
        }],
        "languages": ["html", "css"]
    },
    {
        "title": "Ohmyfood",
        "subtitle":"Réservation de restaurant",
        "cover": ohmyfood_cover,
        "backImage": ohmyfood_back,
        "description":[
            "Intégration d'un site multi-pages de réservation en ligne de restaurants (projet d'étude).",
            "Le site est conçu en mobile first et utilise les transitions et animations CSS"
        ],
        "links":[{
            "name":"visiter le site",
            "url" :"https://aurelienporte.github.io/ohmyfood/index.html"
        },
        {
            "name":"voir le code",
            "url" :"https://github.com/Aurelienporte/ohmyfood"
        }],
        "languages": ["html", "sass"]
    },
    {
        "title": "Sophie Bluel",
        "subtitle":"Architecte d'intérieur",
        "cover": sophiebluel_cover,
        "backImage": sophiebluel_back,
        "description":[
            "Intégration du front-end (page d'accueil, page de connexion) d'un site d'architecte (projet d'étude).",
            "Critères de validation : appels API, manipulation dynamique du DOM, réaction aux événements utilisateur."
        ],
        "links":[{
            "name":"visiter le site",
            "url" :""
        },
        {
            "name":"voir le code",
            "url" :"https://github.com/Aurelienporte/projet_6"
        }],
        "languages": ["html", "css", "javascript"]
    },
    {
        "title": "Kasa",
        "subtitle":"Location immobilière",
        "cover": kasa_cover,
        "backImage": kasa_back,
        "description": [
            "Intégration du front-end d'une application web fictive (projet d'étude).",
            "Le résultat devait être structuré en composants réutilisables et proposer une navigation avec React Router."
        ],
        "links":[{
            "name":"visiter le site",
            "url" :""
        },
        {
            "name":"voir le code",
            "url" :"https://github.com/Aurelienporte/kasa"
        }],
        "languages": ["react", "sass"]
    },
    {
        "title": "Nina Carducci",
        "subtitle":"Photographe",
        "cover": ninacarducci_cover,
        "backImage": ninacarducci_back,
        "description":[
            "Optimisation du SEO et de l'accessibilité d'un site de photographe (projet d'étude).",
            " Le résultat visé était un score Lighthouse de 90 et une validation Wave"
        ],
        "links":[{
            "name":"visiter le site",
            "url" :"https://aurelienporte.github.io/oc_p9_nina_carducci/"
        },
        {
            "name":"voir le code",
            "url" :"https://github.com/Aurelienporte/oc_p9_nina_carducci"
        }],
        "languages": ["html", "css", "javascript"]
    },
    {
        "title": "ArgentBank",
        "subtitle":"Application bancaire",
        "cover": argentbank_cover,
        "backImage": argentbank_back,
        "description":[
            "Intégration du front-end d'une application bancaire (projet d'étude).",
            "Objectifs : gestion d'état global avec Redux, échanges avec l'API, écriture de nouvelles routes (yaml), navigation avec React Router."
        ],
        "links":[{
            "name":"visiter le site",
            "url" :""
        },
        {
            "name":"voir le code",
            "url" :"https://github.com/Aurelienporte/ArgentBank-website/tree/main/argentbank"
        }],
        "languages": ["react", "css", "javascript"]
    },
    {
        "title": "Portfolio",
        "subtitle":"Vous êtes dessus :)",
        "cover":portfolio_cover,
        "backImage": portfolio_back,
        "description":[
            "Conception et déploiement d'un site statique responsive présentant mon parcours, mes projets et compétences de façon professionnelle."
        ],
        "links":[{
            "name":"visiter le site",
            "url" :""
        },
        {
            "name":"voir le code",
            "url" :"https://github.com/Aurelienporte/portfolio-react"
        }],
        "languages": ["react", "css"]
    }
]
export default projects