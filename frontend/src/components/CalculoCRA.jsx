import React, { Component } from 'react';
import { Form, FormGroup, Col, Badge, Button } from 'react-bootstrap';

class CalculoCRA extends Component {
    state = { 
        dados:[
            {
                indice: 0,
                nota: 0,
                creditos: 0
            }
        ],
        qtd_dados: 1,
        saida: 0
    }

    // recalcula o CRA e atualiza o valor
    updateCRA = () => {
        let saida, creditos;
        saida = 0; creditos = 0;

        this.state.dados.map(item => {

            if(!Number.isNaN(item.nota) && !Number.isNaN(item.creditos)){
                saida += (item.nota * item.creditos);
                creditos += item.creditos;

                console.log('saida: ' + saida);
                console.log('creditos: ' + creditos);
            }
            
        });

        saida = saida / creditos;

        if(Number.isNaN(saida)){
            saida = 0;
        }

        this.setState({saida});
    };

    handleAlteracaoNota = (event) => {
        let dados = [...this.state.dados];
        dados[parseInt(event.target.id)].nota = parseFloat(event.target.value);

        this.setState({dados});

        this.updateCRA();
    };

    handleAlteracaoCreditos = (event) => {
        let dados = [...this.state.dados];
        dados[parseInt(event.target.id)].creditos = parseInt(event.target.value);

        this.setState({dados});

        this.updateCRA();
    };

    handleAddPeriodo = () => {
        let dados = [...this.state.dados];

        dados.push({
            indice: this.state.qtd_dados,
            nota: 0,
            creditos: 0
        });

        this.setState({dados, qtd_dados: (this.state.qtd_dados + 1)});
    };

    handleExcluiPeriodo = () => {
        let dados = [...this.state.dados];

        dados.pop();

        this.setState({dados, qtd_dados: (this.state.qtd_dados - 1)});
    };

    handleReset = () => {
        let state = { 
            dados:[
                {
                    indice: 0,
                    nota: 0.0,
                    creditos: 0
                }
            ],
            qtd_dados: 1,
            saida: 0
        }

        this.setState({dados: [...state.dados], qtd_dados: state.qtd_dados, saida: state.saida});

        this.updateCRA();
    };

    renderCRA = () => {
        if(this.state.saida < 40){
            return <Badge pill variant='danger'>{this.state.saida}</Badge>;
        }

        else if(this.state.saida < 60){
            return <Badge pill variant='warning'>{this.state.saida}</Badge>;
        }

        return <Badge pill variant='success'>{this.state.saida}</Badge>;
    };

    renderBotoes = () => {
        if(this.state.qtd_dados > 1){
            return(
                <div>
                    <Button variant='secondary' onClick={this.handleAddPeriodo} style={{marginRight: '1rem'}}>Adicionar período</Button>
                    <Button variant='danger' onClick={this.handleExcluiPeriodo} style={{marginRight: '1rem'}}>Remover período</Button>
                    <Button variant='warning' onClick={this.handleReset}>Reset</Button>
                </div>
            );
        }

        return(
            <div>
                <Button variant='secondary' onClick={this.handleAddPeriodo} style={{marginRight: '1rem'}}>Adicionar período</Button>
                <Button variant='danger' onClick={this.handleExcluiPeriodo} style={{marginRight: '1rem'}} disabled>Remover período</Button>
                <Button variant='warning' onClick={this.handleReset}>Reset</Button>
            </div>
        );
    };

    render() { 
        return ( 
            <>
                <div id="container-entradas">
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            {
                                this.state.dados.map((item, index) => {
                                    return (
                                        <div id={"input-" + item.indice} style={{paddingTop: '1rem'}}>
                                            <Form.Row>
                                                <FormGroup as={Col} md={6}>
                                                    <Form.Label>{'Coeficiente do período ' + (index + 1)}</Form.Label>
                                                    <Form.Control id={'' + index} type="number" step="0.01" placeholder="Ex.: 67.5" min="0" max="100" style={{paddingRight: '1 rem'}} value={item.nota} onChange={this.handleAlteracaoNota}/>
                                                </FormGroup>

                                                <FormGroup as={Col} md={6}>
                                                    <Form.Label>{'Número de créditos cursados no período ' + (index + 1)}</Form.Label>
                                                    <Form.Control id={'' + index} type="number" placeholder="Ex.: 4" min="1" max="50" style={{paddingRight: '1 rem'}} value={item.creditos} onChange={this.handleAlteracaoCreditos}/>
                                                </FormGroup>

                                            </Form.Row>
                                            <hr />                                                            
                                        </div>

                                    );
                                })
                            }

                        </Form.Group>

                    </Form> 
                </div>

                <div id="container-opcoes">
                    {
                        this.renderBotoes()
                    }

                    <hr />
                </div>

                <div id="saida-cr" style={{textAlign: 'center'}}>
                    <h3>
                        <Badge pill variant='info' style={{marginRight: '1rem'}}> Coeficiente Acumulado: </Badge>
                        {
                            this.renderCRA()
                        }
                    </h3>
                </div>
            </>
        );
    }
}
 
export default CalculoCRA;