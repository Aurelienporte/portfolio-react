import ciel_cover from "../assets/images/codepen/ciel_cover.webp"
import winter_cover from "../assets/images/codepen/winter_cover.webp"
import kadomatsu_cover from "../assets/images/codepen/kadomatsu_cover.webp"
import power_cover from "../assets/images/codepen/power_cover.webp"

import ciel_back from "../assets/images/codepen/ciel_back.webp"
import winter_back from "../assets/images/codepen/winter_back.webp"
import kadomatsu_back from "../assets/images/codepen/kadomatsu_back.webp"
import power_back from "../assets/images/codepen/power_back.webp"

 export const codePen = [
    {
        "title": "Winter is coming",
        "subtitle" :"Texte animé",
        "cover":winter_cover,
        "backImage": winter_back,
        "description":["Texte animé en explorant les possibilités des propriétés background-clip et background-position."],
        "links":[{
            "name":"voir le codePen",
            "url" :"https://codepen.io/qsgfhydfuk-ieeokdtkd/pen/BaMeWNL"
        }],
        "languages": ["html", "css"]
    },
    {
        "title": "Animated Kadomatsu",
        "subtitle" :"svg & gsap",
        "cover":kadomatsu_cover,
        "backImage": kadomatsu_back,
        "description":["Un kadomatsu (composition florale du nouvel an) réalisé en svg et animé avec la librairie GSAP.", "Le but était de tester le locigiel Inkskape et les possibilités d'animation offertes par GSAP."],
        "links":[{
            "name":"voir le codePen",
            "url" :"https://codepen.io/qsgfhydfuk-ieeokdtkd/pen/JjzYeyw"
        }],
        "languages": ["html", "css", "javascript"]
    },
    {
        "title": "Power button",
        "subtitle" :"Checkbox hack",
        "cover":power_cover,
        "backImage": power_back,
        "description":["Challenge Codepen invitant à tester les possibilités CSS avec l'élément input de type checkbox.","Ici le bouton cliqué déclenche le remplissage une jauge."],
        "links":[{
            "name":"voir le codePen",
            "url" :"https://codepen.io/qsgfhydfuk-ieeokdtkd/pen/QWoyROR"
        }],
        "languages": ["html", "css"]
    },
    {
        "title": "Interactive night sky",
        "subtitle" :"un clic = une étoile",
        "cover": ciel_cover,
        "backImage": ciel_back,
        "description":["Paysage nocturne en CSS que l'utilisateur peut remplir d'étoiles.","Je cherchais une façon originale d'exploiter les coordonnées x & y d'un clic de souris."],
        "links":[{
            "name":"voir le codePen",
            "url" :"https://codepen.io/qsgfhydfuk-ieeokdtkd/pen/poYbZGE"
        }],
        "languages": ["html", "css", "javascript"]
    }
]
export default codePen