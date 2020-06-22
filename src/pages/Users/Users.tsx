import React, { useEffect, useState, ChangeEvent, useCallback } from 'react';
import { api } from '../../services/api';
import { Container, PageControls, Modal, Overlay } from './styles';
import SearchInput from '../../components/Input/SearchInput/SearchInput';
import Card from '../../components/Card/Card';
import { CardData } from '../../components/Card/Card';
import Nav from '../../components/Nav/Nav';
import { deleteUser } from '../../services/users';
import BounceLoader from 'react-spinners/BounceLoader';
import Button from '../../components/Button/Button';
import addIcon from '../../assets/add-icon.svg';
import { Link } from 'react-router-dom';
import xIcon from '../../assets/x-icon.svg';

const Users: React.FC = () => {
  const [users, setUsers] = useState<CardData[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [page, setPage] = useState(1);
  const [idToBeDeleted, setIdToBeDeleted] = useState(0);

  const handleApiRequest = useCallback(async () => {
    const { data } = await api.get(
      `/usuarios/?q=${searchValue}&_limit=9&_page=${page}`
    );
    setUsers(data);
    setIsLoading(false);
  }, [searchValue, page]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleDelete = useCallback(async () => {
    await deleteUser(idToBeDeleted);
    handleApiRequest();
    setIsShowing(false);
  }, [idToBeDeleted]);

  const handlePage = useCallback((num: number) => {
    setPage((prevPage) => prevPage + num);
    window.scrollTo(0, 0);
  }, []);

  const handleModal = useCallback((boolean: boolean, id = idToBeDeleted) => {
    setIdToBeDeleted(id)
    setIsShowing(boolean)
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      handleApiRequest();
    }, 1000);
    return () => clearTimeout(timer);
  }, [handleApiRequest, page]);

  return (
    <Container>
      <Overlay isShowing={isShowing} onClick={() => handleModal(false)}/>
      <Modal isShowing={isShowing}>
        <figure onClick={() => handleModal(false)}>
          <img src={xIcon} alt="x icon" />
        </figure>
        <p>A remoção de cadastro não pode ser desfeita</p>
        <div>
          <span onClick={() => handleModal(false)}>cancelar</span>
          <Button onClick={handleDelete}>remover</Button>
        </div>
      </Modal>
      <Nav />
      <main>
        <h1>listagem</h1>
        <p>Confira aqui a sua lista de usuários cadastrados</p>
        <SearchInput
          type="text"
          placeholder="Digite um nome"
          name="search"
          onChange={handleSearch}
        />
      </main>

      {isLoading ? (
        <span>
          <BounceLoader size={60} color="#A6BBA8" />
        </span>
      ) : (
        <section>
          {users.map((card) => (
            <Card key={card.id} {...card} handleModal={handleModal}/>
          ))}
        </section>
      )}

      <PageControls>
        {page > 1 && <Button onClick={() => handlePage(-1)}>anterior</Button>}
        {users.length === 9 && (
          <Button onClick={() => handlePage(1)}>próximo</Button>
        )}
      </PageControls>

      <footer>
        <figure>
          <Link to="/users/create">
            <img src={addIcon} alt="add icon" />
          </Link>
        </figure>
      </footer>
    </Container>
  );
};

export default Users;
