import React, { Component } from 'react';

import { Modal, Tabs, Tab, Button, Fade, Alert } from 'react-bootstrap';

// gifs guia de cr
import cr1 from './assets/guide-imgs/cr1.gif';
import cr1_1 from './assets/guide-imgs/cr1-1.gif';
import cr2 from './assets/guide-imgs/cr2.gif';
import cr3 from './assets/guide-imgs/cr3.gif';
import cr4 from './assets/guide-imgs/cr4.gif';

// gifs guia de cra
import cra1 from './assets/guide-imgs/cra1.gif';
import cra1_1 from './assets/guide-imgs/cra1-1.gif';
import cra2 from './assets/guide-imgs/cra2.gif';
import cra3 from './assets/guide-imgs/cra3.gif';
import cra4 from './assets/guide-imgs/cra4.gif';

class GuiaUso extends Component {
    constructor(props){
        super(props);

        let cr = 
            <div className="guia-div">
                <ol className="guia-lista-texto">
                    <li className="guia-item-texto">
                        Adicione o número de disciplinas cursadas durante o semestre/período do qual você deseja
                        calcular o Coeficiente de Rendimento (CR) clicando em <b style={{color: '#6c757d'}}>Adicionar Disciplina</b>

                        <div style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                            <img className="guia-img" src={cr1} alt='cr1' />
                        </div>

                        <div style={{paddingTop: '1rem'}}>
                            <Alert variant="info"> Se você tiver adicionado disciplinas demais, clique no botão <b style={{color: '#6c757d'}}>Remover disciplina</b> para remover
                                a última disciplina
                            </Alert>

                            <div style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                                <img className="guia-img" src={cr1_1}  alt='cr1-1'/>
                            </div>

                        </div>
                    </li>
                    
                    <li className="guia-item-texto">
                        Insira a nota e o número de créditos de cada uma das disciplinas

                        <div style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                            <img className="guia-img" src={cr2}  alt='cr2' />
                        </div>

                        <p className="text-muted" style={{paddingTop: '1rem'}}>
                            Você pode utilizar a Carga Horária (CH) ao invés do número de créditos para realizar o cálculo, mas <u><b>lembre-se de sempre seguir 
                            um padrão!</b></u> Isso significa que todas as disciplinas devem estar utilizando a mesma unidade: <b>Créditos ou Carga Horária</b>
                        </p>
                    </li>
                    <li className="guia-item-texto">
                        Obtenha seus resultados!
                        O CR é atualizado conforme os valores são passados, isso significa que uma vez que todas os campos tenham sido preenchidos da forma correta, o resultado é mostrado.

                        <div style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                            <img className="guia-img" src={cr3}  alt='cr3' />
                        </div>

                        <div style={{paddingTop: '1rem'}}>
                            <Alert variant="danger"> Certifique-se de ter inserido os valores corretos e de ter seguido as instruções do item 2 obter o resultado correto!</Alert>
                        </div>
                    </li>
                </ol>

                <div style={{paddingLeft: '2rem', paddingRight: '1rem', paddingTop: '1rem'}}>
                    <Alert variant="info">Para começar novamente, clique em <b style={{color: '#6c757d'}}>Reset</b> para resetar os valores</Alert>

                    <div style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                        <img className="guia-img" src={cr4}  alt='cr4' />
                    </div>
                </div>
            </div>
        ;

        let cra = 
            <div className="guia-div">
                <ol className="guia-lista-texto">
                    <li className="guia-item-texto">
                        Adicione o número de semestres/períodos cursados para calcular o Coeficiente de Rendimento (CRA) clicando em <b style={{color: '#6c757d'}}>Adicionar período</b>

                        <div style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                            <img className="guia-img" src={cra1} alt='cra1' />
                        </div>

                        <div style={{paddingTop: '1rem'}}>
                            <Alert variant="info"> Se você tiver adicionado semestres/períodos demais, clique no botão <b style={{color: '#6c757d'}}>Remover período</b> para remover
                                o último semestre/período
                            </Alert>

                            <div style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                                <img className="guia-img" src={cra1_1} alt='cra1-1' />
                            </div>
                        </div>
                    </li>
                    <li className="guia-item-texto">
                        Insira a nota e o número de créditos de cada um dos semestres/períodos

                        <div style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                            <img className="guia-img" src={cra2} alt='cra2' />
                        </div>

                        <p className="text-muted" style={{paddingTop: '1rem'}}>
                            Você pode utilizar a Carga Horária (CH) ao invés do número de créditos para realizar o cálculo, mas <u><b>lembre-se de sempre seguir 
                            um padrão!</b></u> Isso significa que todos os semestres/períodos devem estar utilizando a mesma unidade: <b>Créditos ou Carga Horária</b>
                        </p>
                    </li>   
                    <li className="guia-item-texto">
                        Obtenha seus resultados!
                        O CRA é atualizado conforme os valores são passados, isso significa que uma vez que todas os campos tenham sido preenchidos da forma correta, o resultado é mostrado.

                        <div style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                            <img className="guia-img" src={cra3} alt='cra3' />
                        </div>

                        <div style={{paddingTop: '1rem'}}>
                            <Alert variant="danger"> Certifique-se de ter inserido os valores corretos e de ter seguido as instruções do item 2 obter o resultado correto!</Alert>
                        </div>
                    </li>
                </ol>

                <div style={{paddingRight: '1rem', paddingLeft: '2rem', paddingTop: '1rem'}}>
                    <Alert variant="info">Para começar novamente, clique em <b style={{color: '#6c757d'}}>Reset</b> para resetar os valores</Alert>

                    <div style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                        <img className="guia-img" src={cra4} alt='cra4' />
                    </div>
                </div>
            </div>
        ;

        this.state = {
            show: false,
            cr: cr,
            cra: cra
        }
    }

    showGuide = () => {
        this.setState({show: true});
    };

    hideGuide = () => {
        this.setState({show: false});
    };

    render() { 
        return ( 
            <>
                <Button variant="info" onClick={this.showGuide}>Como utilizar?</Button>
                

                <Modal
                show={this.state.show}
                onHide={this.hideGuide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="guide-titulo">
                            Como utilizar?
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="guide-corpo">
                        <Tabs defaultActiveKey="cr" transition={Fade}>
                            <Tab eventKey="cr" title="Coeficiente de Rendimento (CR)">
                                {this.state.cr}
                            </Tab>
                            <Tab eventKey="cra" title="Coeficiente de Rendimento Acumulado (CRA)">
                                {this.state.cra}
                            </Tab>
                        </Tabs>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="info" onClick={this.hideGuide}>Entendi!</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
 
export default GuiaUso;