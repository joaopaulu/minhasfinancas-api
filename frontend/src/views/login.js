import React from 'react';
import Card from '../components/card/card';
import FormGroup from '../components/form-group/form-group';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Login extends React.Component{

  state = {
    email: '',
    senha: '',
    mensagemError: null
  }

  entrar = () =>{
    axios.post('http://localhost:8080/api/usuarios/autenticar',{
      email: this.state.email,
      senha: this.state.senha
    }).then(response => {
      this.props.history.push('/home')
    }).catch(erro => {
      this.setState({mensagemError: erro.response.data})
    });
  }

  prepareCadastrar = () => {
    this.props.history.push('/cadastro-usuario')
  }

  render() {
    return(
        <div className="row">
          <div className="col-md-6" style={{position:'relative', left:'300px'}}>
            <div className="bs-docs-section">
              <Card title="Login">
                <div className="row">
                  <span>{this.state.mensagemError}</span>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bs-component">
                      <fieldset>
                        <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                          <input
                            value={this.state.email}
                            onChange={e => this.setState({email: e.target.value})}
                            type="email"
                            className="form-control"
                            name="exampleInputEmail1"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Digite o Email"
                          />
                        </FormGroup>
                        <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                          <input
                            value={this.state.senha}
                            onChange={e => this.setState({senha: e.target.value})}
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                          />
                        </FormGroup>
                        <button onClick={this.entrar} type="button" className="btn btn-success">Entrar</button>
                        <button onClick={this.prepareCadastrar} type="button" className="btn btn-danger">Cadastrar</button>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter( Login );
