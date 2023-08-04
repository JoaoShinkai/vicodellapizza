import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Produto from "../../components/Produto/Produto";
import Marguerita from '../../assets/Marguerita.jpeg';
import Calabresa from '../../assets/Calabresa.jpeg';
import Romana from '../../assets/Romana.jpeg';
import DoChef from '../../assets/DoChef.jpeg';
import TreFormaggi from '../../assets/TreFormaggi.jpeg';
import './index.css';

export default function Cardapio() {
    return (
        <div>
            <NavBarComponent />

            <div className="cardapio-container">

                <div className="cardapio-container-pizzas">
                    <div className="cardapio-container-pizzas-title"> <i className="fa-solid fa-book-open"></i> Cardápio</div>
                    <Produto name="Napolitana clássica" description="Mussarela fresca, molho de tomate" price="75,00" image={Marguerita} />
                    <Produto name="Mussarela" description="Mussarela, molho de tomate" price="60,00" image={Marguerita} />
                    <Produto name="Due formaggi (dois queijos)" description="Mussarela, gorgonzolla, molho de tomate e azeitonas" price="75,00" image={Marguerita} />
                    <Produto name="Tre formaggi (três queijos)" description="Mussarela, gorgonzola, parmesão ralado, molho de tomate e azeitonas pretas" price="85,00" image={TreFormaggi} />
                    <Produto name="Margherita" description="Mussarela, molho de tomate e basílico" price="70,00" image={Marguerita} />
                    <Produto name="Romana" description="Mussarela, pedaços de anchova, rodelas de tomate" price="79,00" image={Romana} />
                    <Produto name="Pepperoni" description="Mussarela, molho de tomate, fatias de salame peperoni" price="87,00" image={Marguerita} />
                    <Produto name="Portuguesa" description="Mussarela, presunto, molho de tomate, fatias de ovos cozidos, cebola e azeitonas" price="83,00" image={Marguerita} />
                    <Produto name="Calabresa" description="Mussarela, linguiça calabresa, molho de tomate e rodelas de cebola, azeitonas pretas." price="65,00" image={Calabresa} />
                    <Produto name="Do Chef" description="Mussarela, molho, anchova, alcaparras, rodelas de cebola, azeitonas pretas e lascas de pimentão" price="90,00" image={DoChef} />
                </div>
            </div>
        </div>
    )
}