import NavBarComponent from "../../components/NavBar/NavBarComponent";
import './index.css';
import Pizza from '../../assets/pizza.png';
import Logo from '../../assets/logo.png';
import Chef from '../../assets/Chef.jpeg';
import Carrousel1 from '../../assets/carrousel_1.png';
import Carrousel2 from '../../assets/carrousel_2.png';
import Federacao from '../../assets/logo-federacao-italiana.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";
import { Card, CardContent, Typography } from "@mui/material";

export default function Inicio() {
    return (
        <div>
            <NavBarComponent />
            <div className="main">
                <div className="main-container">
                    <Carousel showArrows={true} autoPlay={true} axis="horizontal" infiniteLoop width="100%" stopOnHover={false} showThumbs={false}>
                        <div className="container-caroussel-image">
                            <img src={Carrousel1} alt="" />
                            {/* <p className="legend">Legend 1</p> */}
                        </div>
                        <div className="container-caroussel-image">
                            <img src={Carrousel2} alt="" />
                            {/* <p className="legend">Legend 1</p> */}
                        </div>
                    </Carousel>
                    <div className="main-container-info">
                        <p>VICO DELLA PIZZA - FORNERIA</p>
                    </div>
                </div>
            </div>
            <div className="bio">
                <div className="bio-images">
                    <div className="bio-images-item">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="bio-images-item">
                        <img src={Chef} alt="" />
                    </div>
                </div>
                <div className="bio-description">
                    <div className="bio-description-title">Apaixonados por pizza</div>
                    <div className="bio-description-subititle">Por Sidney Lent Junior (Gastrônomo)</div>
                    <div className="bio-description-text">
                        A VICO DELLA PIZZA nasce de duas paixões.
                        <br /> <br />
                        A primeira delas é o amor pela língua, cultura, história,  gastronomia italiana e pelo país como um todo.
                        <br /> <br />
                        Esse sentimento nasce no exato momento em que se põe os pés no bel paese. Ao se provar o primeiro cornetto com café, ou ao avistar o mar mediterrâneo, ou o Adriático.
                        <br /> <br />
                        Tudo ali é história, cultura e tradição. É impossível não amá-la, porque na Itália há uma verdadeira exuberância e paixão por tudo o que se faz.
                        <br /> <br />
                        A outra, é pela pela pizza, por seu aroma, sabor e efeito vigoroso que ela traz, como se nela houvesse a personificação da alegria.
                        <br /> <br />
                        E é por isso que produzimos pizzas. Pelo sentimento de bem estar e alegria que ela proporciona a todos que estão à sua volta. E é por isso também que conservamos a tradição italiana de fazer massas de longa fermentação, de utilizarmos ingredientes frescos, de boa procedência e de qualidade.
                        <br /> <br />
                        Tudo isso para proporcionar para você uma experiência gastronômica inesquecível.
                    </div>
                    <div className="bio-description-logo">
                        <img src={Federacao} alt="" />
                    </div>
                </div>

            </div>
            <div className="opening-hours">
                <div className="opening-hours-container">
                    <div className="opening-hours-content">
                        <div className="opening-hours-title"> <i className="fa-regular fa-clock"></i> Horário de funcionamento</div>
                        <div className="opening-hours-hours">
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Vico Della Pizza
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        Sexta-Feira
                                    </Typography>
                                    {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography> */}
                                    <Typography variant="body2">
                                        das 19h às 22h
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Vico Della Pizza
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        Sábado
                                    </Typography>
                                    {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography> */}
                                    <Typography variant="body2">
                                        das 19h às 22h
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="opening-hours-content">
                        <div className="opening-hours-title"> <i className="fa-solid fa-phone"></i> Contato</div>
                        <div className="opening-hours-content-contact">
                            <div className="opening-hours-content-contact-item">
                                <i className="fa-brands fa-whatsapp"></i>
                                <span>(11) 97679-2628</span>
                                <a href="https://whatsa.me/5511993662262" target="_blank">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                            <div className="opening-hours-content-contact-item">
                                <i className="fa-brands fa-whatsapp"></i>
                                <span>(11) 99366-2262</span>
                                <a href="https://whatsa.me/5511993662262" target="_blank">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                            <div className="opening-hours-content-contact-item">
                                <i className="fa-brands fa-instagram"></i>
                                <span>vicodellapizza</span>
                                <a href="https://instagram.com/vicodellapizzaforneria?igshid=MzRlODBiNWFlZA==" target="_blank">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                            <div className="opening-hours-content-contact-item">
                                <i className="fa-brands fa-facebook"></i>
                                <span>Vico Della Pizza - Forneria</span>
                                <a href="https://www.facebook.com/profile.php?id=100094216071680&mibextid=2JQ9oc" target="_blank">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="opening-hours-pizza">
                    <img src={Pizza} alt="" />
                </div>
            </div>
        </div>
    )
}