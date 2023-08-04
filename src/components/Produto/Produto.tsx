import { Paper } from "@mui/material";
import './index.css';

interface IProdutoProps {
    name: string;
    description: string;
    price: string;
    image: string;
}

export default function Produto({ name, description, price, image }: IProdutoProps) {
    return (
        <Paper className="produto">
            <div className="produto-img">
                <img src={image} alt="" />
            </div>
            <div className="produto-container">
                <div className="produto-title">{name}</div>
                <div className="produto-description">{description}</div>
            </div>
            <div className="produto-container-price">
                <div className="produto-price">R$ {price}</div>
            </div>
        </Paper>
    )
}