import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        backgroundColor: 'black',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    }
})

export default function Main () {
    const classes = useStyles();
 
    const [cancelamento, setCancelamento] = useState('')
    const [nome, setNome] = useState("");

    function randomItemFromArray(array) {
        const maximum = array.length - 1
        const minimum = 0
        return array[Math.floor(Math.random() * (maximum - minimum + 1)) + minimum];
    }

    function generateCancelamento() {
        const frases = {
            "A": [
                "Promoveu a deslegitimação",
                "Ofendeu as vulnerabilidades",
                "Se aproveitou do discurso",
                "Se apropriou",
                "Tirou o contexto",
                "Se aproveitou",
                "Corrompeu as descontruções",
                "Ressignificou inverdades",
                "Criticou maliciosamente os princípios",
                "Reduziu o discurso",
                "Potencializou o silenciamento",
                "Desrespeitou a jornada",
                "Usurpou o lugar de fala",
                "Desmobilizou os discursos",
                "Prestou desacolhimento",
                "Alvejou a militância",
                "Desestabilizou as oportunidades",
                "Estereotipizou a biologia",
                "Diminutizou as lamúrias",
                "Enfraqueceu as conquistas",
                "Transversalizou as palavras",
                "Julgou o caráter",
                "Quizsfazer palco em cima",
                "Deslegitimou a relativização",
                "Assumiu o lugar de fala da ancestralidade",
                "Incentivou a erradicação",
                "Desalinhou as pautas",
                "Descentralizou as uniformidades do discurso",
                "Abusou psicologicamente",
                "Recusou internalizar as diversidades",
                "Descontextualizou a argumentatividade"
            ],
            "B": [
                "da comunidade LBTQIA+ no contexto civilizacional contemporâneo",
                "da reparação história há tanto tempo necessária",
                "dos pretos, pardos, miscigenados, indígenas e autoproclamados",
                "da mulher fenotipicamente negra",
                "das mulheres trans",
                "da homoafetividade",
                "de seus iguais, silenciados pela heteronormatividade patriarcal",
                "da luta anti-colonialista",
                "da mulher branca socialmente privilegiada, em detrimento da pauta antirracial",
                "do homem negro convocado ao desejo de se autosabotar",
                "das pautas minoritárias",
                "dos indivíduos silenciads por seus lugares de dores"
            ],
            "C": [
                "para proveito próprio",
                "de maneira a dizimar o discurso acolhedor",
                "se aproveitando de uma pauta coletiva para resolver um B.O que é seu",
                "com o intuitos egoísticos que transcendem a normalidade dos fatos",
                "sem entender as vicissitudes sociais que abrangem as minorias pobres e desprivilegiadas, que vivem à margem de uma sociedade cruel e opressora",
                "sendo contraproducente com quem é diferente de você",
                "infligindo sentimentos de dor na alma dos menos privilegiados",
                "perpetuando o fascismo",
                "dos gays e não-binários",
                "para propagar inverdades",
                "ressignificando a conversa com inverdades",
                "cujos fenótipos nunca serão sobrepujados em detrimento dos negros",
                "se aproveitando da apropriação cultural",
                "fingindo não entender o contexto sócio-cultural"
            ]
        }

        const cancelamentoGenerated = `${randomItemFromArray(frases.A).toLowerCase()} ${randomItemFromArray(frases.B)} ${randomItemFromArray(frases.C)}.`
        setCancelamento(cancelamentoGenerated)
    }

    return (
        <div className={classes.container}>
            <div>
                <span>Insira seu nome abaixo para ver por quê você foi cancelado pela Lumena:</span><br/>
                <input onChange={(e) => setNome(e.target.value)} /><br/>
                <button onClick={generateCancelamento}>Gerar Cancelamento</button><br/><br/>

                {cancelamento ? (
                    <div>
                        <span>{nome ? `${nome}, a` : "A"} Lumena te cancelou pois você {cancelamento}</span>
                    </div>
                ) : ''}
            </div>
        </div>
    )
}