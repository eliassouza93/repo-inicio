import Carousel from 'react-bootstrap/Carousel';
import style from './Inicio.module.scss'
import binary from './Assets-slide/binary.jpg'
import binary1 from './Assets-slide/binary1.jpg'
import code from './Assets-slide/code.jpg'
import code1 from './Assets-slide/code1.jpg'
 

function UncontrolledExample() {
    return (
        <div className={style.todos}>
            <Carousel className={style.teste} >
                <Carousel.Item className={style.item}>
                    <img
                        className="d-block w-100"
                        src={binary}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3> </h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={binary1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3> </h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={code}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3> </h3>
                        <p>

                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={code1}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3> </h3>
                        <p>

                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default UncontrolledExample;