import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
 
} from 'mdb-react-ui-kit';
import style from './Rodape.module.scss'

export default function Rodape() {
  return (

    <div className={style.all}>
        <MDBFooter  bgColor='black' className='text-center text-lg-start text-muted'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
              <span>Desenvolvido por: Elias de Souza:</span>
            </div>
            <div>
             
            </div>
          </section>
          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3" />
                    Informações:
                  </h6>
                 
                </MDBCol>
                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                   
                   
                </MDBCol>
                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                 
                  
                </MDBCol>
                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <p>Nome: <span>Elias de Souza</span></p>
                  <p>Cidade: <span>Florianopolis /SC</span></p>
                  <p  className={style.cont} >Contato: <a  className={style.contato} href="https://api.whatsapp.com/send?phone=48998064305" >48 998064305</a></p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2022 Copyright:
            <a className='text-reset fw-bold ' href='# '>
            
            </a>
          </div>
        </MDBFooter>
    </div>
  );
}