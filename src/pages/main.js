import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';

import { FaTwitter, FaGithub } from 'react-icons/fa'

import LumenaBG from './../assets/img/lumena.png';

const useStyles = makeStyles({
    container: {
        backgroundColor: 'black',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: "Roboto",
        backgroundImage: `url(${LumenaBG})`,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    subTitle: {
        fontSize: 18,
        fontWeight: '100',
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 20
    },
    input: {
        backgroundColor: 'white',
        height: 50,
        width: 350,
        borderRadius: 30,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        outline: 'none'
    },
    button: {
        backgroundColor: 'white',
        height: 50,
        width: 200, 
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        borderRadius: 30,
        transition: 'all 0.5s',
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: 'transparent',
            border: '1px solid white',
            color: 'white',
            transition: 'all 0.5s'
        }
    },
    cancelamento: {
        width: "60%",
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tweet: {
        fontSize: 50,
        cursor: 'pointer',
        transition: 'all 1s',
        "&:hover": {
            margin: 10,
            color: '#00aced'
        }
    },
    github: {
        fontSize: 50,
        cursor: 'pointer',
        transition: 'all 1s',
        "&:hover": {
            marginBottom: -10
        }
    },
    twitter: {
        fontWeight: 'bold', 
        color: '#00aced',
        cursor: 'pointer'
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
                "Promover a deslegitimação",
                "Ofender as vulnerabilidades",
                "Se aproveitar do discurso",
                "Se aproprior",
                "Tirar o contexto",
                "Se aproveitar",
                "Corromper as descontruções",
                "Ressignificar inverdades",
                "Criticar maliciosamente os princípios",
                "Reduzir o discurso",
                "Potencializar o silenciamento",
                "Desrespeitar a jornada",
                "Usurpar o lugar de fala",
                "Desmobilizar os discursos",
                "Prestar desacolhimento",
                "Alvejar a militância",
                "Desestabilizar as oportunidades",
                "Estereotipizar a biologia",
                "Diminutizar as lamúrias",
                "Enfraquecer as conquistas",
                "Transversalizar as palavras",
                "Julgar o caráter",
                "Fazer palco em cima",
                "Deslegitimar a relativização",
                "Assumir o lugar de fala da ancestralidade",
                "Incentivar a erradicação",
                "Desalinhar as pautas",
                "Descentralizar as uniformidades do discurso",
                "Abusar psicologicamente",
                "Recusar internalizar as diversidades",
                "Descontextualizar a argumentatividade"
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
            <div className={classes.content}>
                {cancelamento ? '' : (
                    <>
                        <span className={classes.title}>OH CÉUS!! <br/> <span style={{ fontWeight: '100' }}>A LUMENA TE CANCELOU!!</span></span>
                        <span className={classes.subTitle}>Insira seu nome abaixo para ver por quê você foi cancelado pela Lumena:</span><br/>
                        <input placeholder="Seu Nome" className={classes.input} onChange={(e) => setNome(e.target.value)} /><br/>
                        <button className={classes.button} onClick={generateCancelamento}>Gerar Cancelamento</button><br/>
                        <FaGithub className={classes.github} onClick={() => window.open(`https://github.com/saulojoab/lumena-BBB-generator`)} /><br/>
                        <br/><br/><br/>
                        <span className={classes.subTitle}>Me segue no Twitter! <span className={classes.twitter}>@laudtriste</span> :)</span>
                    </>
                )}
                

                {cancelamento ? (
                    <div className={classes.cancelamento}>
                        <span className={classes.title} style={{ fontSize: 40 }}><span style={{ fontWeight: '100' }}>{nome ? `${nome}, a` : "A"} Lumena te cancelou por</span> {cancelamento}</span>

                        <FaTwitter className={classes.tweet} onClick={() => window.open(`https://twitter.com/intent/tweet?url=https%3A%2F%2Fbit.ly%2F2Op35g3&text=A%20Lumena%20me%20cancelou%20por%20${cancelamento.replace(" ", "%20")}%20Confere%20o%20seu!&hashtags=BBB%2CBBB21`)} /><br/>
                        <span className={classes.subTitle}>Me segue no Twitter! <span className={classes.twitter}>@laudtriste</span> :)</span>
                    </div>
                ) : ''}
            </div>
        </div>
    )
}