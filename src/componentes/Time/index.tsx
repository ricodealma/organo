import { IColaborador } from '../../compartilhado/interfaces/IColaborador'
import Colaborador from '../Colaborador'
import './Time.css'

interface TimeProps {
    nome: string
    corPrimaria: string
    corSecundaria: string
    colaboradores: IColaborador[]
}

const Time = (props: TimeProps) => {
    const secundaria = { backgroundColor: props.corSecundaria }
    const primaria = { borderColor: props.corPrimaria }
    return (
        props.colaboradores.length > 0 ? <section className='time' style={secundaria}>
            <h3 style={primaria}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />
                )}
            </div>
        </section> : <></>
    )
}

export default Time;
