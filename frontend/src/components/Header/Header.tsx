import backgroundImage from '../../assets/img/background-header.png';
import Button from '../Button/Button';
import Container from '../Container/Container';
import HeaderTitle from './HeaderTitle';

const Header = () => {
    return (
        <header
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className='w-auto bg-cover bg-center bg-no-repeat'>

            <Container>

                <HeaderTitle />

                <div className='mt-28'>

                    <p className='md:text-7xl text-3xl font-bold text-evergreen'>Encontre livros <br /> que sejam a sua cara!</p>
                    <p className='text-gray-500 my-5 text-xl '>Lorem ipsum</p>

                    <Button title={'Pesquisar livros'} />

                </div>
            </Container>

        </header>
    );
}

export default Header;